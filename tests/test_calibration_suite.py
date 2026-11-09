import io
import json
import os
import sys
import unittest
import numpy as np
import rasterio
import asyncio
from fastapi import UploadFile

PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
if PROJECT_ROOT not in sys.path:
    sys.path.insert(0, PROJECT_ROOT)

from backend.inference import (
    get_inference_engine,
    DEFAULT_BRIGHTNESS_THRESHOLD,
    BASELINE_CALIBRATION_REQUIRED,
)
from backend.main import process_scenes, health_check


class TestCalibrationAndInference(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.engine = get_inference_engine()
        cls.val_dir = os.path.join(PROJECT_ROOT, "data", "validation")
        cls.calib_json_path = os.path.join(PROJECT_ROOT, "backend", "baseline_calibration.json")
        with open(cls.calib_json_path, "r", encoding="utf-8") as f:
            cls.calib_data = json.load(f)

    def test_calibrated_constants(self):
        """Verify engine loads 0.0905 threshold and is marked Calibrated."""
        self.assertAlmostEqual(DEFAULT_BRIGHTNESS_THRESHOLD, 0.0905, places=4)
        self.assertFalse(BASELINE_CALIBRATION_REQUIRED)
        self.assertEqual(self.calib_data["calibration_status"], "Calibrated")
        self.assertEqual(self.calib_data["calibrated_threshold"], 0.0905)

    def test_production_inference_baseline(self):
        """Verify predict() uses calibrated baseline threshold and outputs validation metrics."""
        scene_dir = os.path.join(self.val_dir, "agpw")
        b02 = rasterio.open(os.path.join(scene_dir, "B02.tif")).read(1)
        b03 = rasterio.open(os.path.join(scene_dir, "B03.tif")).read(1)
        b04 = rasterio.open(os.path.join(scene_dir, "B04.tif")).read(1)
        b08 = rasterio.open(os.path.join(scene_dir, "B08.tif")).read(1)
        stacked = np.stack([b02, b03, b04, b08], axis=0)

        memfile = io.BytesIO()
        with rasterio.open(
            memfile, "w", driver="GTiff", height=512, width=512, count=4, dtype=stacked.dtype
        ) as dst:
            dst.write(stacked)
        memfile.seek(0)

        res = self.engine.predict(memfile)
        baseline = res["baseline"]
        self.assertEqual(baseline["calibration_status"], "Calibrated")
        self.assertEqual(baseline["threshold_used"], 0.0905)
        self.assertIsNotNone(baseline["validation_metrics"])
        self.assertEqual(baseline["validation_metrics"]["iou"], 74.59)
        self.assertEqual(baseline["validation_metrics"]["dice"], 85.45)

    def test_validation_split_metrics_reproducibility(self):
        """Verify empirical metrics across all 8 validation scenes match persisted calibration."""
        scenes = ["agpw", "aetz", "afqf", "afvk", "agpn", "afpr", "aeqw", "aevs"]
        bands = ["B02", "B03", "B04"]
        th = 0.0905

        total_tp = total_fp = total_fn = total_tn = 0
        for s in scenes:
            s_dir = os.path.join(self.val_dir, s)
            b_arrs = [rasterio.open(os.path.join(s_dir, f"{b}.tif")).read(1) for b in bands]
            rgb = np.stack(b_arrs, axis=0).astype(np.float32) / 10000.0
            brightness = np.mean(rgb, axis=0)
            label = rasterio.open(os.path.join(s_dir, "label.tif")).read(1)

            valid = (label == 0) | (label == 1)
            truth = (label == 1)
            pred = brightness > th

            total_tp += int(np.sum(pred & truth & valid))
            total_fp += int(np.sum(pred & ~truth & valid))
            total_fn += int(np.sum(~pred & truth & valid))
            total_tn += int(np.sum(~pred & ~truth & valid))

        agg_iou = round((total_tp / (total_tp + total_fp + total_fn)) * 100, 2)
        agg_dice = round(((2 * total_tp) / (2 * total_tp + total_fp + total_fn)) * 100, 2)
        agg_precision = round((total_tp / (total_tp + total_fp)) * 100, 2)
        agg_recall = round((total_tp / (total_tp + total_fn)) * 100, 2)
        agg_specificity = round((total_tn / (total_tn + total_fp)) * 100, 2)
        agg_fgr = round((total_fn / (total_tp + total_fn)) * 100, 2)

        meta = self.calib_data["aggregate_validation_metrics"]
        self.assertEqual(agg_iou, meta["iou"])
        self.assertEqual(agg_dice, meta["dice"])
        self.assertEqual(agg_precision, meta["precision"])
        self.assertEqual(agg_recall, meta["recall"])
        self.assertEqual(agg_specificity, meta["specificity"])
        self.assertEqual(agg_fgr, meta["false_ground_rate"])
        self.assertEqual(total_tp, meta["tp"])
        self.assertEqual(total_fp, meta["fp"])
        self.assertEqual(total_fn, meta["fn"])
        self.assertEqual(total_tn, meta["tn"])

    def test_afqf_zero_cloud_handling(self):
        """Verify afqf (zero clouds) evaluates to undefined IoU and precision rather than 0%."""
        afqf_entry = next(item for item in self.calib_data["per_scene_validation_metrics"] if item["scene_id"] == "afqf")
        self.assertEqual(afqf_entry["actual_cloud_pct"], 0.0)
        self.assertEqual(afqf_entry["pred_cloud_pct"], 0.0)
        self.assertIsNone(afqf_entry["iou"])
        self.assertIn("Undefined", afqf_entry["iou_display"])
        self.assertIsNone(afqf_entry["precision"])
        self.assertIn("Undefined", afqf_entry["precision_display"])
        self.assertEqual(afqf_entry["specificity"], 100.0)
        self.assertIsNotNone(afqf_entry.get("note"))

    def test_api_process_and_health(self):
        """Verify /health and /process endpoints return calibrated metadata."""
        h = health_check()
        self.assertEqual(h["status"], "healthy")

        scene_dir = os.path.join(self.val_dir, "agpw")
        b02 = rasterio.open(os.path.join(scene_dir, "B02.tif")).read(1)
        b03 = rasterio.open(os.path.join(scene_dir, "B03.tif")).read(1)
        b04 = rasterio.open(os.path.join(scene_dir, "B04.tif")).read(1)
        b08 = rasterio.open(os.path.join(scene_dir, "B08.tif")).read(1)
        stacked = np.stack([b02, b03, b04, b08], axis=0)

        memfile = io.BytesIO()
        with rasterio.open(
            memfile, "w", driver="GTiff", height=512, width=512, count=4, dtype=stacked.dtype
        ) as dst:
            dst.write(stacked)
        memfile.seek(0)

        upload = UploadFile(filename="agpw_test.tif", file=memfile)
        res = asyncio.run(process_scenes(files=[upload], scene_config=None))
        self.assertEqual(res["summary"]["successful"], 1)

        b_out = res["results"][0]["brightness_baseline"]
        self.assertEqual(b_out["calibration_status"], "Calibrated")
        self.assertEqual(b_out["threshold_used"], 0.0905)
        self.assertIsNotNone(b_out["validation_metrics"])


if __name__ == "__main__":
    unittest.main()
