# CloudSight AI: Sentinel-2 Cloud Detection & Satellite Surface Usability Analysis

CloudSight AI is a deep learning web application powered by **PyTorch**, **FastAPI**, and a responsive frontend dashboard. It performs cloud segmentation on multi-spectral Sentinel-2 satellite imagery, computes usable ground surface area, benchmarks AI predictions against an empirically calibrated brightness baseline, and generates structured reports (interactive UI, RFC 4180 CSV, and formatted Excel `.xlsx`).

---

## 1. Project Overview & Architecture

### System Architecture
The application is structured into decoupled backend inference services and a client-side dashboard:

```
CloudSight-AI/
├── backend/
│   ├── __init__.py                  # Python package marker
│   ├── model.py                     # 4-channel U-Net architecture definition & checkpoint loader
│   ├── inference.py                 # CPU inference engine, baseline runner & input validation
│   ├── main.py                      # FastAPI REST API endpoints (/health, /upload, /process)
│   ├── baseline_calibration.json    # Calibrated baseline metadata & empirical validation split metrics
│   └── test_suite.py                # Pre-submission end-to-end backend & validation test suite
├── data/
│   ├── evaluation/                  # 1,262-scene benchmark CSV records (U-Net vs. baseline comparison)
│   └── validation/                  # 8 official Radiant Earth validation scenes (B02, B03, B04, B08, label)
├── frontend/
│   ├── index.html                   # Semantic HTML5 dashboard interface
│   ├── script.js                    # Reactive client controller, band detector & export generator
│   ├── style.css                    # Professional responsive stylesheet (1366x768 to 1920px & mobile)
│   ├── evaluation_data.js           # Embedded 1,262-scene benchmark data for evaluation viewer
│   └── xlsx.full.min.js             # Client-side Excel generation library (SheetJS)
├── models/
│   └── unet_clean_best.pth          # PyTorch trained model checkpoint (117,185 parameters, FP32)
├── tests/
│   └── test_calibration_suite.py   # Unit test suite verifying baseline calibration & reproducibility
├── requirements.txt                 # Core Python dependencies
└── README.md                        # Complete project documentation and submission guide
```

---

## 2. Models & Methodologies

CloudSight AI compares two cloud detection methodologies:

### A. Deep Learning: U-Net Sentinel-2 Cloud Detector
- **Architecture**: 4-channel input U-Net with double-convolution blocks, max pooling encoder stages, transposed convolutions in decoder stages, and a 1x1 convolution classification head.
- **Input Channels**: Exactly 4 bands ordered as:
  1. `B02`: Blue ($490\text{ nm}$)
  2. `B03`: Green ($560\text{ nm}$)
  3. `B04`: Red ($665\text{ nm}$)
  4. `B08`: Near Infrared (NIR, $842\text{ nm}$)
- **Preprocessing**: Top-of-Atmosphere (TOA) reflectance digital numbers (DN) scaled by dividing by `10000.0`.
- **Inference Threshold**: Sigmoid probability $\ge 0.5$ classifies a pixel as cloud.
- **Weights**: Loaded from `models/unet_clean_best.pth`. Model architecture, checkpoint weights, and decision threshold are frozen.

### B. Heuristic: Calibrated Brightness Baseline
- **Methodology**: Evaluates visible-band mean surface reflectance:
  $$\bar{B}(x, y) = \frac{1}{3 \times 10000.0} \left( B02(x, y) + B03(x, y) + B04(x, y) \right)$$
- **Calibrated Threshold**: $\tau^* = \mathbf{0.0905}$ (empirically optimized; replaces initial placeholder $\tau=0.20$ and training-patch heuristic $\tau=0.130$).
- **Status**: **Calibrated** (configured and loaded dynamically from `backend/baseline_calibration.json`).
- **Inference Behavior**: Pixels with $\bar{B}(x, y) > 0.0905$ are classified as cloud.

---

## 3. Dataset Provenance, Calibration & Scientific Limitations

### Dataset Provenance
- **Source**: Official Radiant Earth Foundation *Cloud Cover Detection Challenge* hosted on S3 / Source Cooperative (`https://data.source.coop/radiantearth/cloud-cover-detection-challenge/final/public`).
- **Validation Split**: 8 held-out Sentinel-2 scenes (`agpw`, `aetz`, `afqf`, `afvk`, `agpn`, `afpr`, `aeqw`, `aevs`) selected via reproducible stratified sampling across cloud coverage categories (`seed=42`).
- **Band Specifications**: 10-meter spatial resolution GeoTIFFs, $512 \times 512$ pixels per band.
- **Ground-Truth Masks**: Encoded as `0 = Clear`, `1 = Cloud`, `255 = NoData`.

### Calibration Methodology & Results
The threshold sweep was conducted across all **2,097,152** valid pixels in the 8 validation scenes (zero NoData pixels present; 50.77% cloud, 49.23% clear):
- **Selected Threshold**: $\tau^* = \mathbf{0.0905}$ (maximizes aggregate validation IoU).
- **Confusion Matrix Counts**:
  - $\text{True Positives (TP)} = 984,836$
  - $\text{False Positives (FP)} = 255,498$
  - $\text{False Negatives (FN)} = 79,934$
  - $\text{True Negatives (TN)} = 776,884$
- **Aggregate Validation Metrics**:
  - **Intersection-over-Union (IoU)**: **74.59%**
  - **Dice Coefficient (F1)**: **85.45%**
  - **Precision**: **79.40%**
  - **Recall (Sensitivity)**: **92.49%**
  - **Specificity**: **75.25%**
  - **False Ground Rate (FGR)**: **7.51%**

### Edge Case Handling (Scene `afqf`)
Scene `afqf` contains $0\%$ ground-truth clouds and $0\%$ predicted clouds ($\text{TP}=0, \text{FP}=0, \text{FN}=0, \text{TN}=262,144$). CloudSight AI handles this zero-cloud edge case by explicitly reporting IoU, Dice, and Precision as **Undefined (0/0)** rather than misleadingly reporting $0\%$, while correctly reporting $100\%$ Specificity.

### Scientific Limitations & Caveats
1. **Model Predictions vs. Ground Truth**: When processing user-uploaded scenes via the web interface, the cloud coverage percentage and usable area percentage are **model predictions**, not verified ground-truth accuracy. True accuracy can only be determined when matching ground-truth masks are available.
2. **Benchmark Records Provenance**: Metrics shown in the 1,262-scene test evaluation dashboard are reproduced from supplied evaluation CSV records. Because raw masks and evaluation scripts for all 1,262 test scenes are not bundled in this local repository, independent reproduction of those specific test records is pending external audit.
3. **Terrain Sensitivity**: Bright non-cloud surfaces (e.g., desert sands, snow, concrete surfaces) can cause false positives in brightness thresholding, whereas the U-Net leverages spatial context to reduce false ground alarms.

---

## 4. Supported Upload Formats

CloudSight AI accepts Sentinel-2 GeoTIFF files (`.tif` / `.tiff`) up to 4 scenes per batch:

### Format A: 4-Band Multiband GeoTIFF
- A single `.tif` or `.tiff` file per scene.
- Must contain exactly 4 bands in order:
  - Band 1: `B02` (Blue)
  - Band 2: `B03` (Green)
  - Band 3: `B04` (Red)
  - Band 4: `B08` (Near Infrared)
- Required dimensions: $512 \times 512$ pixels.

### Format B: 4 Separate Single-Band GeoTIFFs
- Four single-band files corresponding to `B02`, `B03`, `B04`, and `B08`.
- **Automatic Band Detection**: Filenames containing `B02`, `B2`, `blue`, `B03`, `green`, `B04`, `red`, `B08`, `nir` are automatically identified and ordered.
- **Manual Assignment**: If filenames are ambiguous, the UI presents an assignment dropdown modal to prevent duplicate assignments and ensure all four required bands are provided.

---

## 5. Installation & Setup

### Prerequisites
- Python 3.10+ (tested on Python 3.13)
- Windows PowerShell, Command Prompt, or Linux/macOS bash shell

### 1. Create Virtual Environment
```bash
# Windows
python -m venv .venv
.\.venv\Scripts\activate

# Linux / macOS
python3 -m venv .venv
source .venv/bin/activate
```

### 2. Install Dependencies
```bash
pip install -r requirements.txt
```

---

## 6. Execution Commands

### 1. Start the FastAPI Backend
Run the backend server on `127.0.0.1:8000`:
```bash
python -m uvicorn backend.main:app --host 127.0.0.1 --port 8000 --reload
```
- API Health Check: `http://127.0.0.1:8000/health`
- Interactive Swagger Docs: `http://127.0.0.1:8000/docs`

### 2. Launch the Frontend
Open `frontend/index.html` directly in any modern web browser, or serve it via a local static web server:
```bash
# Optional: serve via Python HTTP server on port 3000
python -m http.server 3000 --directory frontend
```
Navigate to: `http://127.0.0.1:3000`

### 3. Run Automated Tests
Execute the complete project test suites:

```bash
# Run the calibration & reproducibility test suite
python tests/test_calibration_suite.py

# Run the comprehensive backend validation & error isolation suite
python backend/test_suite.py

# Run all test discovery via unittest
python -m unittest discover -s tests -p "test_*.py"
```

---

## 7. Reporting & Data Exports

For each analyzed scene, CloudSight AI generates:
1. **Interactive Visualization**: Side-by-side toggling of True Color RGB (percentile stretched), Binary Cloud Mask (black = clear, white = cloud), and Usability Mask (emerald = usable surface area, dark gray = obstructed).
2. **Scene Usability Metrics**: Dimensions, band counts, U-Net cloud coverage, usable area, raw pixel counts, model threshold, and baseline comparison.
3. **RFC 4180 Compliant CSV Export**: Clean 3-column table (`Section`, `Parameter`, `Value`) with proper escaping and numeric formatting.
4. **Professional Excel Export (`.xlsx`)**: Structured 4-section spreadsheet containing metadata, prediction results, model comparison, and automated assessment.
