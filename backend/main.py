import base64
import io
import json
import logging
import os
import re
import sys
from typing import List, Dict, Any, Optional, Tuple

from fastapi import FastAPI, HTTPException, UploadFile, status, File, Form
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import numpy as np
import rasterio

# Ensure project root is available in Python path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from backend.inference import get_inference_engine

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("cloudsight-api")

# Initialize FastAPI application
app = FastAPI(
    title="CloudSight AI API",
    version="1.0.0",
    description="Backend API for CloudSight AI"
)

# Configure CORS for local frontend development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

REQUIRED_BANDS = ["B02", "B03", "B04", "B08"]

# Regex patterns for detecting band identifiers in filenames
BAND_PATTERNS = {
    "B02": re.compile(r"(?:[_\-\.\s]|^)(?:B02|B2|BLUE)(?:[_\-\.\s]|$)", re.IGNORECASE),
    "B03": re.compile(r"(?:[_\-\.\s]|^)(?:B03|B3|GREEN)(?:[_\-\.\s]|$)", re.IGNORECASE),
    "B04": re.compile(r"(?:[_\-\.\s]|^)(?:B04|B4|RED)(?:[_\-\.\s]|$)", re.IGNORECASE),
    "B08": re.compile(r"(?:[_\-\.\s]|^)(?:B08|B8|NIR|NEAR[_\-\s]?INFRARED)(?:[_\-\.\s]|$)", re.IGNORECASE),
}


def detect_band_from_filename(filename: str) -> Optional[str]:
    """Detects Sentinel-2 band identifier from filename."""
    matches = []
    for band, pattern in BAND_PATTERNS.items():
        if pattern.search(filename):
            matches.append(band)
    if len(matches) == 1:
        return matches[0]
    return None


def mask_to_base64_png(mask_array: np.ndarray) -> str:
    """Converts a 2D binary numpy mask (0 and 1) to a grayscale PNG Base64 data URL."""
    img_data = (mask_array * 255).astype(np.uint8)
    image = Image.fromarray(img_data, mode="L")
    buffer = io.BytesIO()
    image.save(buffer, format="PNG")
    png_bytes = buffer.getvalue()
    encoded = base64.b64encode(png_bytes).decode("utf-8")
    return f"data:image/png;base64,{encoded}"


def rgb_to_base64_png(file_bytes: bytes) -> str:
    """Extracts True Color RGB channels (B04, B03, B02) and applies 2nd-98th percentile stretch."""
    try:
        with rasterio.io.MemoryFile(file_bytes) as memfile:
            with memfile.open() as ds:
                # 1-based indexing: Red=3 (B04), Green=2 (B03), Blue=1 (B02)
                r = ds.read(3).astype(np.float32)
                g = ds.read(2).astype(np.float32)
                b = ds.read(1).astype(np.float32)

        rgb = np.stack([r, g, b], axis=-1)
        rgb_stretched = np.zeros_like(rgb, dtype=np.uint8)
        for i in range(3):
            band = rgb[:, :, i]
            p2, p98 = np.percentile(band, (2, 98))
            if p98 > p2:
                stretched = np.clip((band - p2) / (p98 - p2) * 255.0, 0, 255)
            else:
                stretched = np.clip(band, 0, 255)
            rgb_stretched[:, :, i] = stretched.astype(np.uint8)

        img = Image.fromarray(rgb_stretched, mode="RGB")
        buffer = io.BytesIO()
        img.save(buffer, format="PNG")
        encoded = base64.b64encode(buffer.getvalue()).decode("utf-8")
        return f"data:image/png;base64,{encoded}"
    except Exception as e:
        logger.warning(f"Could not generate RGB preview: {e}")
        return ""


def validate_and_stack_separate_bands(
    band_files: Dict[str, bytes]
) -> Tuple[bytes, Dict[str, Any]]:
    """
    Validates spatial compatibility across B02, B03, B04, and B08,
    and stacks them into an in-memory 4-band GeoTIFF.
    """
    # 1. Verify all 4 required bands are present
    missing = [b for b in REQUIRED_BANDS if b not in band_files]
    if missing:
        raise ValueError(f"Missing required band(s): {', '.join(missing)}.")

    opened_datasets = []
    memfiles = []
    try:
        for band_id in REQUIRED_BANDS:
            b_bytes = band_files[band_id]
            mf = rasterio.io.MemoryFile(b_bytes)
            memfiles.append(mf)
            ds = mf.open()
            opened_datasets.append((band_id, ds))

        # Reference dataset (B02)
        ref_band_id, ref_ds = opened_datasets[0]
        ref_width = ref_ds.width
        ref_height = ref_ds.height
        ref_crs = ref_ds.crs
        ref_transform = ref_ds.transform
        ref_dtype = ref_ds.dtypes[0]

        if ref_width != 512 or ref_height != 512:
            raise ValueError(
                f"Invalid dimensions in reference band {ref_band_id}: expected 512x512, found {ref_width}x{ref_height}."
            )

        arrays = []
        for band_id, ds in opened_datasets:
            if ds.count != 1:
                raise ValueError(
                    f"Band file for {band_id} contains {ds.count} bands. Expected exactly 1 band per file in separate-band mode."
                )
            if ds.width != ref_width or ds.height != ref_height:
                raise ValueError(
                    f"Dimension mismatch in {band_id}: {ds.width}x{ds.height} vs reference {ref_width}x{ref_height}."
                )
            # Spatial CRS check
            if ds.crs != ref_crs:
                raise ValueError(
                    f"CRS mismatch in {band_id}: '{ds.crs}' vs reference '{ref_crs}'. Cannot stack misaligned spatial layers."
                )
            # Spatial geotransform / pixel alignment check (if georeferenced)
            if ref_transform and ds.transform:
                diffs = [abs(a - b) for a, b in zip(ref_transform, ds.transform)]
                if any(d > 1e-4 for d in diffs):
                    raise ValueError(
                        f"Geotransform mismatch in {band_id}. Pixel origins or grid resolutions do not align."
                    )
            # Read single band: shape (512, 512)
            arr = ds.read(1)
            arrays.append(arr)

        stacked_array = np.stack(arrays, axis=0)  # Shape: (4, 512, 512)

        # Write to in-memory 4-band GeoTIFF
        out_memfile = rasterio.io.MemoryFile()
        meta = {
            "driver": "GTiff",
            "height": ref_height,
            "width": ref_width,
            "count": 4,
            "dtype": ref_dtype if ref_dtype in ["uint16", "float32", "int16"] else "uint16",
            "crs": ref_crs,
            "transform": ref_transform,
        }
        with out_memfile.open(**meta) as dst:
            dst.write(stacked_array.astype(meta["dtype"]))

        stacked_bytes = bytes(out_memfile.getbuffer())
        out_memfile.close()

        spatial_info = {
            "width": ref_width,
            "height": ref_height,
            "crs": str(ref_crs) if ref_crs else "None (Pixel grid)",
            "dtype": str(meta["dtype"]),
        }
        return stacked_bytes, spatial_info

    finally:
        for _, ds in opened_datasets:
            ds.close()
        for mf in memfiles:
            mf.close()


@app.get("/")
def read_root():
    """Welcome endpoint for CloudSight AI API."""
    return {"message": "Welcome to CloudSight AI API"}


@app.get("/health")
def health_check():
    """Health check endpoint to verify API service status."""
    return {
        "status": "healthy",
        "project": "CloudSight AI",
        "version": "1.0.0"
    }


@app.post("/upload")
async def upload_tiffs(files: List[UploadFile] = File(...)):
    """Upload and inspect up to 4 TIFF files."""
    if len(files) == 0:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="No files were uploaded. Please provide at least one TIFF file."
        )

    if len(files) > 4:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Too many files uploaded ({len(files)}). Maximum allowed is 4 TIFF files per request."
        )

    inspected_files = []

    for file in files:
        filename = file.filename or "unknown"
        lower_name = filename.lower()

        if not (lower_name.endswith(".tif") or lower_name.endswith(".tiff")):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Unsupported file format for '{filename}'. Only .tif and .tiff files are supported."
            )

        file_bytes = await file.read()

        try:
            with rasterio.io.MemoryFile(file_bytes) as memfile:
                with memfile.open() as dataset:
                    band_count = dataset.count
                    width = dataset.width
                    height = dataset.height
                    data_types = list(dataset.dtypes)
                    nodata = dataset.nodata

                    if band_count != 4:
                        raise HTTPException(
                            status_code=status.HTTP_400_BAD_REQUEST,
                            detail=(
                                f"Invalid band count for '{filename}': expected 4 bands, "
                                f"but found {band_count} band(s)."
                            )
                        )

                    if width != 512 or height != 512:
                        raise HTTPException(
                            status_code=status.HTTP_400_BAD_REQUEST,
                            detail=(
                                f"Invalid image dimensions for '{filename}': expected 512x512 pixels, "
                                f"but found {width}x{height} pixels."
                            )
                        )

                    inspected_files.append({
                        "filename": filename,
                        "band_count": band_count,
                        "width": width,
                        "height": height,
                        "data_types": data_types,
                        "nodata": nodata
                    })
        except HTTPException:
            raise
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Failed to read TIFF file '{filename}'. It may be corrupted or invalid. Error: {str(e)}"
            )

    return {
        "message": f"Successfully validated {len(inspected_files)} file(s).",
        "files": inspected_files
    }


@app.post("/process")
async def process_scenes(
    files: List[UploadFile] = File(...),
    scene_config: Optional[str] = Form(None)
):
    """
    Process up to 4 scenes for cloud detection.
    Supports:
      Format A: Multi-band GeoTIFF (one file per scene, 4 bands).
      Format B: 4 separate single-band GeoTIFFs (B02, B03, B04, B08) stacked into 1 scene.
    `scene_config` (optional JSON string) maps filenames to specific scene IDs and bands.
    """
    if len(files) == 0:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="No files were uploaded. Please provide files to analyze."
        )

    # Parse scene_config if provided
    config_dict: Optional[Dict[str, Any]] = None
    if scene_config and isinstance(scene_config, str):
        try:
            config_dict = json.loads(scene_config)
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Invalid scene_config JSON format: {str(e)}"
            )

    try:
        engine = get_inference_engine()
    except Exception as e:
        logger.error(f"Failed to initialize inference engine: {e}", exc_info=True)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Inference engine could not be initialized."
        )

    # Read all uploaded files into memory buffers
    file_map: Dict[str, bytes] = {}
    for f in files:
        fname = f.filename or "unknown"
        fbytes = await f.read()
        file_map[fname] = fbytes

    # Organize files into scenes
    scenes_to_process: List[Dict[str, Any]] = []

    if config_dict and "scenes" in config_dict:
        # User or frontend provided explicit scene groupings
        for s_idx, s_conf in enumerate(config_dict["scenes"]):
            s_name = s_conf.get("scene_name", f"Scene {s_idx + 1}")
            s_mode = s_conf.get("mode", "multiband")

            if s_mode == "multiband":
                fname = s_conf.get("filename")
                if fname not in file_map:
                    scenes_to_process.append({
                        "name": s_name,
                        "error": f"File '{fname}' listed in configuration was not uploaded."
                    })
                else:
                    scenes_to_process.append({
                        "name": fname,
                        "mode": "multiband",
                        "bytes": file_map[fname]
                    })
            elif s_mode == "separate_bands":
                band_assignments = s_conf.get("bands", {})  # e.g. {"B02": "f1.tif", "B03": "f2.tif", ...}
                band_bytes_map = {}
                missing_in_upload = []

                # Check for duplicate file assignments across different bands
                assigned_filenames = [fn for fn in band_assignments.values() if fn]
                if len(assigned_filenames) != len(set(assigned_filenames)):
                    scenes_to_process.append({
                        "name": s_name,
                        "error": "Duplicate file assignment detected. Each band (B02, B03, B04, B08) must be mapped to a distinct file."
                    })
                    continue

                for b_id, f_assigned in band_assignments.items():
                    if f_assigned in file_map:
                        band_bytes_map[b_id] = file_map[f_assigned]
                    else:
                        missing_in_upload.append(f"{b_id}: {f_assigned}")

                if missing_in_upload:
                    scenes_to_process.append({
                        "name": s_name,
                        "error": f"Missing uploaded files for assignments: {', '.join(missing_in_upload)}"
                    })
                else:
                    scenes_to_process.append({
                        "name": s_name,
                        "mode": "separate_bands",
                        "band_bytes_map": band_bytes_map
                    })
    else:
        # Automatic determination based on file count, extensions, and headers
        # Check if files represent 4 separate bands for a single scene
        detected_bands: Dict[str, str] = {}
        for fname in file_map.keys():
            b = detect_band_from_filename(fname)
            if b:
                detected_bands[fname] = b

        is_four_single_bands = (
            len(files) == 4 and
            len(set(detected_bands.values())) == 4 and
            all(b in detected_bands.values() for b in REQUIRED_BANDS)
        )

        if is_four_single_bands:
            # 4 separate bands automatically detected for ONE scene
            band_bytes_map = {detected_bands[fname]: file_map[fname] for fname in detected_bands}
            scenes_to_process.append({
                "name": "Combined Scene (B02, B03, B04, B08)",
                "mode": "separate_bands",
                "band_bytes_map": band_bytes_map
            })
        else:
            # Treat each file as an individual scene (Format A)
            for fname, fbytes in file_map.items():
                scenes_to_process.append({
                    "name": fname,
                    "mode": "multiband",
                    "bytes": fbytes
                })

    # Validate scene count (Max 4 scenes)
    if len(scenes_to_process) > 4:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Too many scenes requested ({len(scenes_to_process)}). Maximum allowed is 4 scenes per request."
        )

    # Process each scene with error isolation
    results: List[Dict[str, Any]] = []

    for scene in scenes_to_process:
        s_name = scene.get("name", "Unknown Scene")

        # If previous configuration step flagged an error
        if "error" in scene:
            results.append({
                "filename": s_name,
                "status": "failed",
                "error": scene["error"]
            })
            continue

        try:
            mode = scene.get("mode", "multiband")
            if mode == "separate_bands":
                # Stack separate bands into an in-memory 4-band GeoTIFF
                stacked_bytes, _ = validate_and_stack_separate_bands(scene["band_bytes_map"])
                tiff_bytes_to_process = stacked_bytes
            else:
                # Format A: Multiband file
                tiff_bytes_to_process = scene["bytes"]

            # Run inference pipeline
            output = engine.predict(tiff_bytes_to_process)

            # Convert numpy masks to base64 PNG data URLs
            cloud_mask_b64 = mask_to_base64_png(output["masks"]["cloud_mask"])
            usable_mask_b64 = mask_to_base64_png(output["masks"]["usable_mask"])
            rgb_preview_b64 = rgb_to_base64_png(tiff_bytes_to_process)

            results.append({
                "filename": s_name,
                "status": "success",
                "format_mode": mode,
                "dimensions": {
                    "width": output["metadata"]["width"],
                    "height": output["metadata"]["height"]
                },
                "band_count": output["metadata"]["band_count"],
                "bands_order": output["model_config"].get("bands_order", ["B02 (Blue)", "B03 (Green)", "B04 (Red)", "B08 (NIR)"]),
                "cloud_coverage_percentage": output["metrics"]["cloud_coverage_percentage"],
                "usable_area_percentage": output["metrics"]["usable_area_percentage"],
                "total_pixels": output["metrics"]["total_pixels"],
                "cloud_pixels": output["metrics"]["cloud_pixels"],
                "usable_pixels": output["metrics"]["usable_pixels"],
                "model_name": "U-Net Sentinel-2 Cloud Detector",
                "model_threshold": output["model_config"]["probability_threshold"],
                "brightness_baseline": {
                    "cloud_coverage_percentage": output["baseline"]["cloud_coverage_percentage"],
                    "calibration_status": output["baseline"]["calibration_status"],
                    "threshold_used": output["baseline"]["threshold_used"],
                    "baseline_type": output["baseline"]["baseline_type"],
                    "validation_metrics": output["baseline"].get("validation_metrics")
                },
                "rgb_preview": rgb_preview_b64,
                "cloud_mask": cloud_mask_b64,
                "usability_mask": usable_mask_b64
            })
            logger.info(f"Successfully processed scene: {s_name}")

        except ValueError as ve:
            logger.warning(f"Validation error for '{s_name}': {str(ve)}")
            results.append({
                "filename": s_name,
                "status": "failed",
                "error": str(ve)
            })
        except Exception as e:
            logger.error(f"Inference failure for scene '{s_name}': {str(e)}", exc_info=True)
            results.append({
                "filename": s_name,
                "status": "failed",
                "error": f"Failed to process scene '{s_name}': {str(e)}"
            })

    total_scenes = len(results)
    successful_scenes = sum(1 for r in results if r["status"] == "success")
    failed_scenes = total_scenes - successful_scenes

    return {
        "summary": {
            "total_scenes": total_scenes,
            "successful": successful_scenes,
            "failed": failed_scenes
        },
        "results": results
    }
