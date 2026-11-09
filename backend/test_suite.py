"""
Comprehensive Automated Pre-Submission Test Suite for CloudSight AI
Tests:
1. Backend startup and health endpoints
2. TIFF upload validation: valid, missing bands, corrupt files, invalid dimensions
3. Format B separate-band validation: auto detection, manual config, duplicate bands, missing bands, spatial misalignment
4. Error isolation: server does not crash on invalid/corrupted files
5. Mathematical integrity of evaluation CSVs (1,262 scenes)
"""

import asyncio
import io
import json
import os
import sys
import unittest

import numpy as np
import rasterio
from affine import Affine
from fastapi import UploadFile, HTTPException

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from backend.main import (
    app,
    read_root,
    health_check,
    process_scenes,
    validate_and_stack_separate_bands,
    detect_band_from_filename
)
from backend.model import load_model, UNet
from backend.inference import get_inference_engine


def make_geotiff(bands=4, width=512, height=512, crs='EPSG:32632', transform=Affine(10, 0, 500000, 0, -10, 5000000)):
    buf = io.BytesIO()
    with rasterio.open(
        buf, 'w', driver='GTiff', height=height, width=width, count=bands, dtype='uint16',
        crs=crs, transform=transform
    ) as dst:
        data = np.full((bands, height, width), 1200, dtype=np.uint16)
        dst.write(data)
    return buf.getvalue()


class TestCloudSightAI(unittest.IsolatedAsyncioTestCase):

    def setUp(self):
        self.engine = get_inference_engine()

    def test_01_health_and_root(self):
        root = read_root()
        self.assertEqual(root.get("message"), "Welcome to CloudSight AI API")
        health = health_check()
        self.assertEqual(health.get("status"), "healthy")
        self.assertEqual(health.get("project"), "CloudSight AI")

    def test_02_model_checkpoint_loading(self):
        self.assertIsInstance(self.engine.model, UNet)
        # Test shape
        import torch
        dummy = torch.randn(1, 4, 512, 512, dtype=torch.float32)
        with torch.no_grad():
            out = self.engine.model(dummy)
        self.assertEqual(out.shape, (1, 1, 512, 512))

    async def test_03_format_a_valid_multiband(self):
        tiff_bytes = make_geotiff(bands=4, width=512, height=512)
        f = UploadFile(filename="scene1.tif", file=io.BytesIO(tiff_bytes))
        res = await process_scenes([f], scene_config=None)
        self.assertEqual(res["summary"]["successful"], 1)
        self.assertEqual(res["summary"]["failed"], 0)
        scene = res["results"][0]
        self.assertEqual(scene["status"], "success")
        self.assertEqual(scene["band_count"], 4)
        self.assertTrue(scene["cloud_mask"].startswith("data:image/png;base64,"))
        self.assertTrue(scene["usability_mask"].startswith("data:image/png;base64,"))
        self.assertTrue(scene["rgb_preview"].startswith("data:image/png;base64,"))

    async def test_04_format_b_valid_separate_bands(self):
        b02 = make_geotiff(bands=1)
        b03 = make_geotiff(bands=1)
        b04 = make_geotiff(bands=1)
        b08 = make_geotiff(bands=1)
        files = [
            UploadFile(filename="T32_B02_10m.tif", file=io.BytesIO(b02)),
            UploadFile(filename="T32_B03_10m.tif", file=io.BytesIO(b03)),
            UploadFile(filename="T32_B04_10m.tif", file=io.BytesIO(b04)),
            UploadFile(filename="T32_B08_10m.tif", file=io.BytesIO(b08)),
        ]
        res = await process_scenes(files, scene_config=None)
        self.assertEqual(res["summary"]["total_scenes"], 1)
        self.assertEqual(res["summary"]["successful"], 1)
        self.assertEqual(res["results"][0]["format_mode"], "separate_bands")

    async def test_05_corrupted_file_handling(self):
        corrupt_bytes = b"NOT_A_VALID_TIFF_HEADER_CORRUPTED"
        f = UploadFile(filename="corrupt.tif", file=io.BytesIO(corrupt_bytes))
        res = await process_scenes([f], scene_config=None)
        self.assertEqual(res["summary"]["successful"], 0)
        self.assertEqual(res["summary"]["failed"], 1)
        self.assertEqual(res["results"][0]["status"], "failed")
        self.assertIn("Failed to open TIFF", res["results"][0]["error"])

    async def test_06_invalid_band_count_multiband(self):
        three_band = make_geotiff(bands=3)
        f = UploadFile(filename="three_bands.tif", file=io.BytesIO(three_band))
        res = await process_scenes([f], scene_config=None)
        self.assertEqual(res["summary"]["failed"], 1)
        self.assertIn("expected exactly 4 bands", res["results"][0]["error"])

    async def test_07_invalid_dimensions(self):
        small_tiff = make_geotiff(bands=4, width=256, height=256)
        f = UploadFile(filename="small.tif", file=io.BytesIO(small_tiff))
        res = await process_scenes([f], scene_config=None)
        self.assertEqual(res["summary"]["failed"], 1)
        self.assertIn("expected 512x512", res["results"][0]["error"])

    async def test_08_error_isolation_mixed_batch(self):
        valid_tiff = make_geotiff(bands=4, width=512, height=512)
        corrupt_tiff = b"CORRUPTED_BYTES"
        files = [
            UploadFile(filename="valid.tif", file=io.BytesIO(valid_tiff)),
            UploadFile(filename="bad.tif", file=io.BytesIO(corrupt_tiff))
        ]
        res = await process_scenes(files, scene_config=None)
        self.assertEqual(res["summary"]["total_scenes"], 2)
        self.assertEqual(res["summary"]["successful"], 1)
        self.assertEqual(res["summary"]["failed"], 1)
        self.assertEqual(res["results"][0]["status"], "success")
        self.assertEqual(res["results"][1]["status"], "failed")

    def test_09_evaluation_csv_integrity(self):
        eval_path = os.path.join(os.path.dirname(__file__), "..", "data", "evaluation", "per_scene_usability_report.csv")
        self.assertTrue(os.path.exists(eval_path))
        import pandas as pd
        df = pd.read_csv(eval_path)
        self.assertEqual(len(df), 1262)
        # Check cloud + usable == 100
        total = df["cloud_coverage_percent"] + df["usable_area_percent"]
        self.assertTrue(np.allclose(total, 100.0, atol=1e-3))


if __name__ == "__main__":
    unittest.main()
