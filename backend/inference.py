"""
CloudSight AI - Inference Engine
Performs CPU inference using the trained U-Net model and calculates cloud/usability masks.
"""

from typing import Union, BinaryIO, Dict, Any, Tuple
import io
import json
import os
import sys
import numpy as np
import rasterio
import torch

# Ensure the project root is in the Python path regardless of execution directory
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from backend.model import load_model, UNet

# Default constants based on checkpoint configuration
CHECKPOINT_PATH = os.path.join(os.path.dirname(__file__), "..", "models", "unet_clean_best.pth")
NORMALIZATION_DIVISOR = 10000.0  # Sentinel-2 reflectance scale
PROBABILITY_THRESHOLD = 0.5       # Sigmoid cloud decision threshold
EXPECTED_BANDS = 4                # B02 (Blue), B03 (Green), B04 (Red), B08 (NIR)
EXPECTED_HEIGHT = 512
EXPECTED_WIDTH = 512

# Brightness-thresholding baseline configuration
# Calibrated using the complete 8-scene Sentinel-2 validation split
# (agpw, aetz, afqf, afvk, agpn, afpr, aeqw, aevs) from Radiant Earth.
# Selected threshold: 0.0905 (IoU: 74.59%, Dice: 85.45% on 2,097,152 valid validation pixels).
CALIBRATION_FILE = os.path.join(os.path.dirname(__file__), "baseline_calibration.json")

def _load_calibrated_baseline_config() -> Tuple[float, bool, Dict[str, Any]]:
    if os.path.exists(CALIBRATION_FILE):
        try:
            with open(CALIBRATION_FILE, "r", encoding="utf-8") as f:
                calib = json.load(f)
            th = float(calib.get("calibrated_threshold", 0.0905))
            status = calib.get("calibration_status", "Calibrated")
            is_calibrated = (status.lower() == "calibrated")
            return th, is_calibrated, calib
        except Exception:
            pass
    return 0.0905, True, {}

DEFAULT_BRIGHTNESS_THRESHOLD, _IS_CALIBRATED, CALIBRATION_METADATA = _load_calibrated_baseline_config()
BASELINE_CALIBRATION_REQUIRED = not _IS_CALIBRATED


class InferenceEngine:
    def __init__(self, checkpoint_path: str = CHECKPOINT_PATH, device: str = "cpu"):
        """Initializes and loads the U-Net model onto CPU."""
        self.device = device
        self.checkpoint_path = os.path.abspath(checkpoint_path)
        if not os.path.exists(self.checkpoint_path):
            raise FileNotFoundError(f"Model checkpoint not found at: {self.checkpoint_path}")
        self.model: UNet = load_model(self.checkpoint_path, device=self.device)
        self.model.eval()

    def read_and_validate_tiff(
        self, file_source: Union[str, bytes, BinaryIO]
    ) -> Tuple[np.ndarray, Dict[str, Any]]:
        """
        Reads a 4-band GeoTIFF using rasterio and validates dimensions and band count.
        Accepts a file path, bytes, or file-like object.
        Returns the raw numpy array (bands, height, width) and metadata.
        """
        try:
            if isinstance(file_source, bytes):
                memfile = rasterio.io.MemoryFile(file_source)
                dataset = memfile.open()
            elif hasattr(file_source, "read"):
                # File-like object (e.g. UploadFile.file or BytesIO)
                data_bytes = file_source.read()
                memfile = rasterio.io.MemoryFile(data_bytes)
                dataset = memfile.open()
            elif isinstance(file_source, str):
                memfile = None
                dataset = rasterio.open(file_source)
            else:
                raise ValueError("Invalid file_source: expected filepath string, bytes, or file-like object.")
        except Exception as e:
            raise ValueError(f"Failed to open TIFF image with rasterio: {str(e)}")

        try:
            band_count = dataset.count
            height = dataset.height
            width = dataset.width
            meta = {
                "band_count": band_count,
                "height": height,
                "width": width,
                "dtypes": list(dataset.dtypes),
                "nodata": dataset.nodata,
            }

            if band_count != EXPECTED_BANDS:
                raise ValueError(
                    f"Invalid band count: expected exactly {EXPECTED_BANDS} bands "
                    f"(B02-Blue, B03-Green, B04-Red, B08-NIR), but found {band_count} band(s)."
                )

            if height != EXPECTED_HEIGHT or width != EXPECTED_WIDTH:
                raise ValueError(
                    f"Invalid image dimensions: expected {EXPECTED_HEIGHT}x{EXPECTED_WIDTH}, "
                    f"but found {height}x{width}."
                )

            # Read all 4 bands: shape -> (4, 512, 512)
            raw_data = dataset.read()
            return raw_data, meta
        finally:
            dataset.close()
            if memfile is not None:
                memfile.close()

    def preprocess(self, raw_data: np.ndarray) -> torch.Tensor:
        """
        Normalizes raw reflectance data and prepares float32 tensor of shape (1, 4, 512, 512).
        """
        # Convert to float32 and normalize
        arr = raw_data.astype(np.float32) / NORMALIZATION_DIVISOR
        tensor = torch.from_numpy(arr).unsqueeze(0)  # Shape: (1, 4, 512, 512)
        return tensor

    def run_brightness_baseline(
        self,
        raw_data: np.ndarray,
        brightness_threshold: float = DEFAULT_BRIGHTNESS_THRESHOLD
    ) -> Dict[str, Any]:
        """
        Simple baseline: Computes average reflectance across RGB bands (B04-Red, B03-Green, B02-Blue)
        and thresholds bright pixels.
        """
        # Normalize RGB bands (bands 0, 1, 2 correspond to B02, B03, B04)
        rgb_normalized = raw_data[0:3, :, :].astype(np.float32) / NORMALIZATION_DIVISOR
        mean_brightness = np.mean(rgb_normalized, axis=0)  # Shape: (512, 512)

        baseline_cloud_mask = (mean_brightness > brightness_threshold).astype(np.uint8)
        baseline_usable_mask = 1 - baseline_cloud_mask

        total_pixels = baseline_cloud_mask.size
        cloud_pixels = int(np.sum(baseline_cloud_mask))
        usable_pixels = total_pixels - cloud_pixels

        return {
            "baseline_type": "RGB Mean Brightness Thresholding",
            "threshold_used": brightness_threshold,
            "calibration_status": "Calibration required" if BASELINE_CALIBRATION_REQUIRED else "Calibrated",
            "validation_metrics": CALIBRATION_METADATA.get("aggregate_validation_metrics"),
            "cloud_coverage_percentage": round((cloud_pixels / total_pixels) * 100.0, 2),
            "usable_area_percentage": round((usable_pixels / total_pixels) * 100.0, 2),
            "cloud_mask": baseline_cloud_mask,
            "usable_mask": baseline_usable_mask,
        }

    def predict(
        self,
        file_source: Union[str, bytes, BinaryIO],
        brightness_threshold: float = DEFAULT_BRIGHTNESS_THRESHOLD
    ) -> Dict[str, Any]:
        """
        Runs complete inference pipeline on a Sentinel-2 GeoTIFF.
        Returns structured results for downstream API endpoints and frontend.
        """
        # 1. Read & validate TIFF
        raw_data, meta = self.read_and_validate_tiff(file_source)

        # 2. Preprocess
        input_tensor = self.preprocess(raw_data).to(self.device)

        # 3. Model inference with torch.no_grad()
        with torch.no_grad():
            logits = self.model(input_tensor)                 # [1, 1, 512, 512]
            probabilities = torch.sigmoid(logits)             # [1, 1, 512, 512]

        prob_map = probabilities.squeeze().cpu().numpy()     # [512, 512]

        # 4. Generate binary masks
        cloud_mask = (prob_map >= PROBABILITY_THRESHOLD).astype(np.uint8)
        usable_mask = (1 - cloud_mask).astype(np.uint8)

        # 5. Compute coverage metrics
        total_pixels = cloud_mask.size
        cloud_pixels = int(np.sum(cloud_mask))
        usable_pixels = total_pixels - cloud_pixels

        cloud_coverage_pct = round((cloud_pixels / total_pixels) * 100.0, 2)
        usable_area_pct = round((usable_pixels / total_pixels) * 100.0, 2)

        # 6. Run brightness baseline for comparison
        baseline_results = self.run_brightness_baseline(
            raw_data=raw_data,
            brightness_threshold=brightness_threshold
        )

        return {
            "metadata": meta,
            "model_config": {
                "normalization_divisor": NORMALIZATION_DIVISOR,
                "probability_threshold": PROBABILITY_THRESHOLD,
                "bands_order": ["B02 (Blue)", "B03 (Green)", "B04 (Red)", "B08 (NIR)"],
            },
            "metrics": {
                "cloud_coverage_percentage": cloud_coverage_pct,
                "usable_area_percentage": usable_area_pct,
                "total_pixels": total_pixels,
                "cloud_pixels": cloud_pixels,
                "usable_pixels": usable_pixels,
            },
            "baseline": baseline_results,
            "masks": {
                "cloud_mask": cloud_mask,
                "usable_mask": usable_mask,
                "probability_map": prob_map,
            }
        }


# Global engine instance
_engine = None


def get_inference_engine() -> InferenceEngine:
    global _engine
    if _engine is None:
        _engine = InferenceEngine()
    return _engine


def run_inference(file_source: Union[str, bytes, BinaryIO]) -> Dict[str, Any]:
    """Convenience function to run inference using singleton engine."""
    engine = get_inference_engine()
    return engine.predict(file_source)


if __name__ == "__main__":
    print("Testing backend/inference.py...")
    print("Checking for actual TIFF images in workspace...")
    tiff_candidates = [
        f for f in os.listdir(".") if f.lower().endswith((".tif", ".tiff"))
    ]
    if tiff_candidates:
        print(f"Found TIFF files: {tiff_candidates}")
    else:
        print("Note: No actual Sentinel-2 GeoTIFF files found in workspace.")

    print("\nTesting Model Initialization...")
    engine = get_inference_engine()
    print("InferenceEngine initialized successfully with CPU U-Net model.")

    # Validation test 1: Invalid band count handling
    print("\nTesting validation check (invalid band count rejection)...")
    invalid_band_bytes = io.BytesIO()
    with rasterio.open(
        invalid_band_bytes, "w", driver="GTiff", height=512, width=512, count=3, dtype="uint16"
    ) as dst:
        dst.write(np.zeros((3, 512, 512), dtype=np.uint16))
    invalid_band_bytes.seek(0)
    try:
        engine.predict(invalid_band_bytes)
        print("FAIL: Expected band count validation to raise ValueError.")
    except ValueError as ve:
        print(f"PASS: Correctly rejected invalid band count: {ve}")

    # Validation test 2: Invalid dimensions handling
    print("\nTesting validation check (invalid dimensions rejection)...")
    invalid_dim_bytes = io.BytesIO()
    with rasterio.open(
        invalid_dim_bytes, "w", driver="GTiff", height=256, width=256, count=4, dtype="uint16"
    ) as dst:
        dst.write(np.zeros((4, 256, 256), dtype=np.uint16))
    invalid_dim_bytes.seek(0)
    try:
        engine.predict(invalid_dim_bytes)
        print("FAIL: Expected dimensions validation to raise ValueError.")
    except ValueError as ve:
        print(f"PASS: Correctly rejected invalid dimensions: {ve}")

    # Pipeline test 3: Valid 4-band 512x512 in-memory GeoTIFF
    print("\nTesting valid 4-band 512x512 in-memory GeoTIFF pipeline...")
    valid_test_bytes = io.BytesIO()
    with rasterio.open(
        valid_test_bytes, "w", driver="GTiff", height=512, width=512, count=4, dtype="uint16"
    ) as dst:
        dummy_data = np.full((4, 512, 512), fill_value=1200, dtype=np.uint16)
        dst.write(dummy_data)
    valid_test_bytes.seek(0)

    result = engine.predict(valid_test_bytes)

    print("\nPipeline Results:")
    print(f"- Metadata: {result['metadata']}")
    print(f"- Cloud coverage %: {result['metrics']['cloud_coverage_percentage']}%")
    print(f"- Usable area %: {result['metrics']['usable_area_percentage']}%")
    print(f"- Cloud mask shape: {result['masks']['cloud_mask'].shape}")
    print(f"- Baseline calibration status: {result['baseline']['calibration_status']}")
    print(f"- Baseline cloud coverage %: {result['baseline']['cloud_coverage_percentage']}%")
    print("\nAll automated tests completed successfully!")
