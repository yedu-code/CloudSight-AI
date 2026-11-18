/**
 * CloudSight AI - Frontend Controller
 * Supports Format A (multiband GeoTIFFs) & Format B (separate Sentinel-2 bands).
 * Includes interactive visualization and structured CSV & Excel (.xlsx) report export.
 */

const API_BASE_URL = "http://127.0.0.1:8000";
const REQUIRED_BANDS = ["B02", "B03", "B04", "B08"];

// State
let selectedFiles = []; // Array of File objects
let currentResults = [];
let activeSceneIndex = 0;
let currentImageViewMode = "rgb"; // "rgb", "cloud", or "usable"
let uploadMode = "multiband"; // "multiband" or "separate_bands"
let bandAssignments = { B02: null, B03: null, B04: null, B08: null }; // maps band -> filename
let reportTimestamp = "";

// DOM Elements
const dropZone = document.getElementById("drop-zone");
const fileInput = document.getElementById("file-input");
const browseBtn = document.getElementById("browse-btn");
const fileListContainer = document.getElementById("file-list-container");
const fileList = document.getElementById("file-list");
const fileCountBadge = document.getElementById("file-count-badge");
const detectedModeBadge = document.getElementById("detected-mode-badge");
const validationError = document.getElementById("validation-error");
const analyzeBtn = document.getElementById("analyze-btn");

const bandAssignmentCard = document.getElementById("band-assignment-card");
const assignmentStatusBadge = document.getElementById("assignment-status-badge");
const selectB02 = document.getElementById("select-B02");
const selectB03 = document.getElementById("select-B03");
const selectB04 = document.getElementById("select-B04");
const selectB08 = document.getElementById("select-B08");

const loadingCard = document.getElementById("loading-card");
const resultsContainer = document.getElementById("results-container");
const summarySuccessPill = document.getElementById("summary-success-pill");
const summaryFailedPill = document.getElementById("summary-failed-pill");
const sceneTabs = document.getElementById("scene-tabs");
const sceneViewContainer = document.getElementById("scene-view-container");
const backendStatusText = document.getElementById("backend-status-text");

// Initialize application
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  checkBackendHealth();
});

function setupEventListeners() {
  browseBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    fileInput.click();
  });

  dropZone.addEventListener("click", () => fileInput.click());

  fileInput.addEventListener("change", (e) => {
    handleFilesSelected(Array.from(e.target.files));
    fileInput.value = "";
  });

  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("dragover");
  });

  dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("dragover");
  });

  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("dragover");
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFilesSelected(Array.from(e.dataTransfer.files));
    }
  });

  analyzeBtn.addEventListener("click", analyzeImages);

  [selectB02, selectB03, selectB04, selectB08].forEach((sel) => {
    sel.addEventListener("change", handleManualBandChange);
  });
}

async function checkBackendHealth() {
  const statusDot = document.querySelector(".status-dot");
  try {
    const res = await fetch(`${API_BASE_URL}/health`);
    if (res.ok) {
      const data = await res.json();
      statusDot.className = "status-dot online";
      backendStatusText.textContent = `Backend Ready (v${data.version || "1.0.0"})`;
    } else {
      throw new Error(`Status ${res.status}`);
    }
  } catch (err) {
    statusDot.className = "status-dot offline";
    backendStatusText.textContent = "Backend Offline (Port 8000)";
  }
}

// Band Detection Patterns
const BAND_PATTERNS = {
  B02: /(?:[_\-\.\s]|^)(?:B02|B2|BLUE)(?:[_\-\.\s]|$)/i,
  B03: /(?:[_\-\.\s]|^)(?:B03|B3|GREEN)(?:[_\-\.\s]|$)/i,
  B04: /(?:[_\-\.\s]|^)(?:B04|B4|RED)(?:[_\-\.\s]|$)/i,
  B08: /(?:[_\-\.\s]|^)(?:B08|B8|NIR|NEAR[_\-\s]?INFRARED)(?:[_\-\.\s]|$)/i,
};

function detectBandFromFilename(filename) {
  const matches = [];
  for (const [band, pattern] of Object.entries(BAND_PATTERNS)) {
    if (pattern.test(filename)) {
      matches.push(band);
    }
  }
  return matches.length === 1 ? matches[0] : null;
}

function handleFilesSelected(newFiles) {
  clearValidationError();
  const validExtensions = [".tif", ".tiff"];
  const invalidFiles = [];
  const validFiles = [];

  newFiles.forEach((file) => {
    const lowerName = file.name.toLowerCase();
    const isTiff = validExtensions.some((ext) => lowerName.endsWith(ext));
    if (!isTiff) {
      invalidFiles.push(file.name);
    } else {
      const exists = selectedFiles.some((f) => f.name === file.name && f.size === file.size);
      if (!exists) validFiles.push(file);
    }
  });

  if (invalidFiles.length > 0) {
    showValidationError(`Unsupported file type(s): ${invalidFiles.join(", ")}. Please upload .tif or .tiff GeoTIFFs only.`);
  }

  selectedFiles = selectedFiles.concat(validFiles);
  recomputeModeAndAssignments();
  updateUI();
}

function removeFile(index) {
  selectedFiles.splice(index, 1);
  clearValidationError();
  recomputeModeAndAssignments();
  updateUI();
}

function recomputeModeAndAssignments() {
  const detectedMap = {};
  selectedFiles.forEach((file) => {
    const band = detectBandFromFilename(file.name);
    if (band) detectedMap[file.name] = band;
  });

  const uniqueBands = new Set(Object.values(detectedMap));
  const hasBandSignals = Object.keys(detectedMap).length > 0;

  if (selectedFiles.length === 4 || (selectedFiles.length > 1 && hasBandSignals)) {
    uploadMode = "separate_bands";
  } else {
    uploadMode = "multiband";
  }

  bandAssignments = { B02: null, B03: null, B04: null, B08: null };
  const assignedFiles = new Set();

  for (const band of REQUIRED_BANDS) {
    const matchingFile = selectedFiles.find((f) => detectedMap[f.name] === band && !assignedFiles.has(f.name));
    if (matchingFile) {
      bandAssignments[band] = matchingFile.name;
      assignedFiles.add(matchingFile.name);
    }
  }

  checkAssignmentCompleteness();
}

function checkAssignmentCompleteness() {
  const assigned = Object.values(bandAssignments).filter(Boolean);
  const isComplete = assigned.length === 4 && new Set(assigned).size === 4;

  if (uploadMode === "separate_bands") {
    if (isComplete) {
      assignmentStatusBadge.className = "assignment-status-badge ready";
      assignmentStatusBadge.textContent = "All 4 Bands Assigned";
      analyzeBtn.disabled = false;
    } else {
      assignmentStatusBadge.className = "assignment-status-badge";
      assignmentStatusBadge.textContent = "Assignment Required";
      analyzeBtn.disabled = true;
    }
  } else {
    if (selectedFiles.length >= 1 && selectedFiles.length <= 4) {
      analyzeBtn.disabled = false;
    } else {
      analyzeBtn.disabled = true;
      if (selectedFiles.length > 4) {
        showValidationError(`Maximum of 4 multiband scenes allowed per request. Found ${selectedFiles.length}.`);
      }
    }
  }
}

function handleManualBandChange() {
  clearValidationError();
  bandAssignments.B02 = selectB02.value || null;
  bandAssignments.B03 = selectB03.value || null;
  bandAssignments.B04 = selectB04.value || null;
  bandAssignments.B08 = selectB08.value || null;

  const selectedValues = Object.values(bandAssignments).filter(Boolean);
  const duplicates = selectedValues.filter((item, index) => selectedValues.indexOf(item) !== index);

  if (duplicates.length > 0) {
    showValidationError(`Duplicate assignment detected: "${duplicates[0]}". Each band must be mapped to a distinct file.`);
  }

  checkAssignmentCompleteness();
}

function updateUI() {
  fileCountBadge.textContent = `${selectedFiles.length} File${selectedFiles.length === 1 ? "" : "s"} Selected`;

  if (selectedFiles.length === 0) {
    fileListContainer.style.display = "none";
    bandAssignmentCard.style.display = "none";
    analyzeBtn.disabled = true;
    return;
  }

  fileListContainer.style.display = "block";
  fileList.innerHTML = "";

  if (uploadMode === "separate_bands") {
    detectedModeBadge.textContent = "Format B (4 Separate Bands = 1 Scene)";
    detectedModeBadge.style.background = "#fef3c7";
    detectedModeBadge.style.color = "#92400e";
    bandAssignmentCard.style.display = "block";
    populateSelectDropdowns();
  } else {
    detectedModeBadge.textContent = `Format A (${selectedFiles.length} Multiband Scene${selectedFiles.length === 1 ? "" : "s"})`;
    detectedModeBadge.style.background = "#e0f2fe";
    detectedModeBadge.style.color = "#0369a1";
    bandAssignmentCard.style.display = "none";
  }

  selectedFiles.forEach((file, index) => {
    const li = document.createElement("li");
    li.className = "file-item";
    const detected = detectBandFromFilename(file.name);
    const badgeHtml = detected ? `<span class="file-detected-badge">${detected}</span>` : "";

    li.innerHTML = `
      <div class="file-item-info">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
        <span class="file-item-name" title="${escapeHtml(file.name)}">${escapeHtml(file.name)}</span>
        ${badgeHtml}
        <span class="file-item-size">(${formatFileSize(file.size)})</span>
      </div>
      <button type="button" class="btn-remove-file" title="Remove file" onclick="removeFile(${index})">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    `;
    fileList.appendChild(li);
  });

  checkAssignmentCompleteness();
}

function populateSelectDropdowns() {
  const selects = [
    { el: selectB02, band: "B02" },
    { el: selectB03, band: "B03" },
    { el: selectB04, band: "B04" },
    { el: selectB08, band: "B08" },
  ];

  selects.forEach(({ el, band }) => {
    el.innerHTML = '<option value="">-- Choose file --</option>';
    selectedFiles.forEach((f) => {
      const opt = document.createElement("option");
      opt.value = f.name;
      opt.textContent = f.name;
      if (bandAssignments[band] === f.name) {
        opt.selected = true;
      }
      el.appendChild(opt);
    });
  });
}

function showValidationError(message) {
  validationError.textContent = message;
  validationError.style.display = "block";
}

function clearValidationError() {
  validationError.textContent = "";
  validationError.style.display = "none";
}

// API Analysis Request
async function analyzeImages() {
  if (selectedFiles.length === 0) return;

  clearValidationError();
  analyzeBtn.disabled = true;
  loadingCard.style.display = "block";
  resultsContainer.style.display = "none";

  const formData = new FormData();
  selectedFiles.forEach((file) => {
    formData.append("files", file);
  });

  if (uploadMode === "separate_bands") {
    const configPayload = {
      scenes: [
        {
          scene_name: "Combined Sentinel-2 Scene",
          mode: "separate_bands",
          bands: {
            B02: bandAssignments.B02,
            B03: bandAssignments.B03,
            B04: bandAssignments.B04,
            B08: bandAssignments.B08,
          },
        },
      ],
    };
    formData.append("scene_config", JSON.stringify(configPayload));
  }

  try {
    const response = await fetch(`${API_BASE_URL}/process`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      let errorMsg = `Server error (HTTP ${response.status})`;
      try {
        const errorJson = await response.json();
        if (errorJson.detail) errorMsg = errorJson.detail;
      } catch (e) {}
      throw new Error(errorMsg);
    }

    const data = await response.json();
    currentResults = data.results || [];
    reportTimestamp = new Date().toLocaleString();
    renderResults(data);
  } catch (error) {
    showValidationError(`Analysis failed: ${error.message}.`);
  } finally {
    loadingCard.style.display = "none";
    analyzeBtn.disabled = false;
  }
}

// Rigorous Natural Language Interpretation Generator
function generateSceneInterpretation(cloudPct, usablePct, baselineDiff) {
  let surfaceDesc = "";
  if (usablePct >= 80.0) {
    surfaceDesc = "provides broad surface visibility with low cloud obstruction";
  } else if (usablePct >= 40.0) {
    surfaceDesc = "presents moderate surface visibility with substantial portions of clear terrain";
  } else if (usablePct > 15.0) {
    surfaceDesc = "exhibits extensive cloud cover with restricted surface visibility";
  } else {
    surfaceDesc = "is predominantly obscured by cloud cover across most of the field of view";
  }

  let baselineComparison = "";
  const absDiff = Math.abs(baselineDiff).toFixed(2);
  if (Math.abs(baselineDiff) < 1.0) {
    baselineComparison = `The model prediction closely aligns with the heuristic RGB brightness threshold (difference of ${absDiff}% points).`;
  } else if (baselineDiff > 0) {
    baselineComparison = `The U-Net model flags ${absDiff}% points higher cloud coverage than the heuristic brightness threshold. Note that the simple brightness heuristic is uncalibrated and does not constitute a ground-truth reference.`;
  } else {
    baselineComparison = `The U-Net model predicts ${absDiff}% points lower cloud coverage than the heuristic brightness baseline. Note that the brightness heuristic is uncalibrated and can be affected by high-albedo terrain.`;
  }

  return `The U-Net model predicts that <strong>${cloudPct.toFixed(2)}%</strong> of this scene is cloud-covered and <strong>${usablePct.toFixed(2)}%</strong> is clear. Based on the model prediction, this scene ${surfaceDesc}. ${baselineComparison} (Note: Pixel classifications represent model predictions and have not been benchmarked against field ground-truth labels for this specific acquisition).`;
}

// Render Results Dashboard
function renderResults(data) {
  resultsContainer.style.display = "block";
  resultsContainer.scrollIntoView({ behavior: "smooth" });

  const summary = data.summary || {
    total_scenes: currentResults.length,
    successful: currentResults.filter((r) => r.status === "success").length,
    failed: currentResults.filter((r) => r.status === "failed").length,
  };

  summarySuccessPill.textContent = `${summary.successful} Succeeded`;

  if (summary.failed > 0) {
    summaryFailedPill.style.display = "inline-block";
    summaryFailedPill.textContent = `${summary.failed} Failed`;
  } else {
    summaryFailedPill.style.display = "none";
  }

  // Render Scene Tabs
  sceneTabs.innerHTML = "";
  currentResults.forEach((scene, index) => {
    const tabBtn = document.createElement("button");
    tabBtn.className = `scene-tab ${index === 0 ? "active" : ""}`;
    const isSuccess = scene.status === "success";
    tabBtn.innerHTML = `
      <span class="tab-status-icon">${isSuccess ? "✅" : "⚠️"}</span>
      <span>${escapeHtml(scene.filename)}</span>
    `;
    tabBtn.addEventListener("click", () => switchScene(index));
    sceneTabs.appendChild(tabBtn);
  });

  activeSceneIndex = 0;
  currentImageViewMode = "rgb";
  renderActiveScene();
}

function switchScene(index) {
  activeSceneIndex = index;
  currentImageViewMode = "rgb";

  const tabs = sceneTabs.querySelectorAll(".scene-tab");
  tabs.forEach((tab, i) => {
    tab.classList.toggle("active", i === index);
  });

  renderActiveScene();
}

function renderActiveScene() {
  const scene = currentResults[activeSceneIndex];
  if (!scene) {
    sceneViewContainer.innerHTML = "";
    return;
  }

  if (scene.status === "failed") {
    sceneViewContainer.innerHTML = `
      <div class="scene-failure-card">
        <h3>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          Processing Failed for "${escapeHtml(scene.filename)}"
        </h3>
        <p><strong>Reason:</strong> ${escapeHtml(scene.error || "Unknown validation or processing error")}</p>
      </div>
    `;
    return;
  }

  const dimStr = scene.dimensions ? `${scene.dimensions.width} &times; ${scene.dimensions.height}` : "512 &times; 512";
  const cloudPct = scene.cloud_coverage_percentage !== undefined ? Number(scene.cloud_coverage_percentage) : 0;
  const usablePct = scene.usable_area_percentage !== undefined ? Number(scene.usable_area_percentage) : 100;
  const baselinePct = scene.brightness_baseline ? Number(scene.brightness_baseline.cloud_coverage_percentage) : 0;
  const baselineCalib = scene.brightness_baseline ? scene.brightness_baseline.calibration_status : "Calibrated";
  const baselineTh = scene.brightness_baseline && scene.brightness_baseline.threshold_used !== undefined ? scene.brightness_baseline.threshold_used : 0.0905;
  const valMetrics = scene.brightness_baseline && scene.brightness_baseline.validation_metrics ? scene.brightness_baseline.validation_metrics : null;
  const isCalib = baselineCalib.toLowerCase().includes("calibrated");
  const calibBadgeClass = isCalib ? "calibration-success" : "calibration-alert";
  
  const baselineDiff = parseFloat((cloudPct - baselinePct).toFixed(2));
  const diffSign = baselineDiff > 0 ? `+${baselineDiff.toFixed(2)}` : `${baselineDiff.toFixed(2)}`;
  const diffClass = baselineDiff > 0 ? "diff-positive" : (baselineDiff < 0 ? "diff-negative" : "diff-neutral");

  const totalPixels = scene.total_pixels !== undefined ? scene.total_pixels : 262144;
  const cloudPixels = scene.cloud_pixels !== undefined ? scene.cloud_pixels : Math.round((cloudPct / 100) * totalPixels);
  const usablePixels = scene.usable_pixels !== undefined ? scene.usable_pixels : (totalPixels - cloudPixels);

  const interpretationHtml = generateSceneInterpretation(cloudPct, usablePct, baselineDiff);
  const bandsList = scene.bands_order ? scene.bands_order.join(", ") : "B02 (Blue), B03 (Green), B04 (Red), B08 (NIR)";

  sceneViewContainer.innerHTML = `
    <div class="scene-card">
      <!-- High-level Metric Cards -->
      <div class="metrics-grid">
        <div class="metric-card accent-blue">
          <div class="metric-label">U-Net Cloud Coverage</div>
          <div class="metric-value">${cloudPct.toFixed(2)}%</div>
          <div class="metric-footnote">AI Mask (Threshold &ge; ${scene.model_threshold || 0.5})</div>
        </div>

        <div class="metric-card accent-emerald">
          <div class="metric-label">Usable Surface Area</div>
          <div class="metric-value">${usablePct.toFixed(2)}%</div>
          <div class="metric-footnote">Clear Ground Pixels</div>
        </div>

        <div class="metric-card accent-amber">
          <div class="metric-label">Brightness Baseline</div>
          <div class="metric-value">${baselinePct.toFixed(2)}%</div>
          <div class="metric-footnote">
            <span class="${calibBadgeClass}">&bull; ${baselineCalib} (&tau;=${baselineTh})</span>
          </div>
        </div>
      </div>

      <!-- Scene & Model Details -->
      <div class="metadata-grid">
        <div class="detail-table-card">
          <h4>Scene Specification</h4>
          <table class="kv-table">
            <tr><td>Scene Name</td><td>${escapeHtml(scene.filename)}</td></tr>
            <tr><td>Upload Format</td><td>${scene.format_mode === 'separate_bands' ? 'Format B (4 Separate Bands)' : 'Format A (Multiband TIFF)'}</td></tr>
            <tr><td>Dimensions</td><td>${dimStr} px</td></tr>
            <tr><td>Bands</td><td>${scene.band_count || 4} (${escapeHtml(bandsList)})</td></tr>
          </table>
        </div>

        <div class="detail-table-card">
          <h4>Model & Baseline Parameters</h4>
          <table class="kv-table">
            <tr><td>Model</td><td>${escapeHtml(scene.model_name || "U-Net")}</td></tr>
            <tr><td>Decision Threshold</td><td>${scene.model_threshold || 0.5}</td></tr>
            <tr><td>Baseline Status</td><td><span class="${calibBadgeClass}">&bull; ${escapeHtml(baselineCalib)} (&tau;=${baselineTh})</span></td></tr>
            ${valMetrics ? `<tr><td>Baseline Validation Metrics</td><td>IoU: ${valMetrics.iou}%, Dice: ${valMetrics.dice}%</td></tr>` : ''}
          </table>
        </div>
      </div>

      <!-- Image Viewer Section -->
      <div class="image-viewer-section">
        <div class="viewer-header">
          <h3>Scene Visualization</h3>
          <div class="view-controls">
            <button class="view-btn ${currentImageViewMode === 'rgb' ? 'active' : ''}" onclick="setImageViewMode('rgb')">True Color RGB</button>
            <button class="view-btn ${currentImageViewMode === 'cloud' ? 'active' : ''}" onclick="setImageViewMode('cloud')">Cloud Mask</button>
            <button class="view-btn ${currentImageViewMode === 'usable' ? 'active' : ''}" onclick="setImageViewMode('usable')">Usability Mask</button>
          </div>
        </div>

        <div class="image-canvas-wrapper">
          <img id="active-scene-image" class="viewer-image" src="" alt="Scene View">
        </div>

        <div class="viewer-legend" id="viewer-legend"></div>
      </div>

      <!-- Professional Scene Usability Report -->
      <div class="report-section">
        <div class="report-header">
          <div class="report-header-left">
            <div class="report-icon-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <div class="report-title-group">
              <h3>Scene Usability Report</h3>
              <p class="report-timestamp">Generated on: ${reportTimestamp || new Date().toLocaleString()}</p>
            </div>
          </div>
          <div class="report-actions">
            <button type="button" class="btn-download-csv" onclick="downloadSceneReportCSV(${activeSceneIndex})" title="Download structured CSV">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download CSV
            </button>
            <button type="button" class="btn-download-xlsx" onclick="downloadSceneReportXLSX(${activeSceneIndex})" title="Download formatted Excel (.xlsx)">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="8" y1="13" x2="16" y2="17"></line>
                <line x1="16" y1="13" x2="8" y2="17"></line>
              </svg>
              Download Excel (.xlsx)
            </button>
          </div>
        </div>

        <!-- Dynamic Automated Interpretation -->
        <div class="interpretation-banner">
          <div class="interpretation-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </div>
          <p class="interpretation-text">${interpretationHtml}</p>
        </div>

        <!-- Comprehensive Metric Table -->
        <div class="report-table-wrapper">
          <table class="report-table">
            <thead>
              <tr>
                <th>Category / Parameter</th>
                <th>Inference Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="report-metric-name">Scene Identifier / Filename</td>
                <td class="report-metric-value">${escapeHtml(scene.filename)}</td>
              </tr>
              <tr>
                <td class="report-metric-name">Image Dimensions (Width &times; Height)</td>
                <td class="report-metric-value">${dimStr} pixels</td>
              </tr>
              <tr>
                <td class="report-metric-name">Band Count & Specification</td>
                <td class="report-metric-value">${scene.band_count || 4} bands (${escapeHtml(bandsList)})</td>
              </tr>
              <tr>
                <td class="report-metric-name">U-Net Predicted Cloud Coverage</td>
                <td class="report-metric-value">${cloudPct.toFixed(2)}%</td>
              </tr>
              <tr>
                <td class="report-metric-name">Usable Surface Area</td>
                <td class="report-metric-value">${usablePct.toFixed(2)}%</td>
              </tr>
              <tr>
                <td class="report-metric-name">Cloud-Covered Pixels</td>
                <td class="report-metric-value">${cloudPixels.toLocaleString()} pixels</td>
              </tr>
              <tr>
                <td class="report-metric-name">Clear / Usable Pixels</td>
                <td class="report-metric-value">${usablePixels.toLocaleString()} pixels</td>
              </tr>
              <tr>
                <td class="report-metric-name">Total Pixel Count</td>
                <td class="report-metric-value">${totalPixels.toLocaleString()} pixels</td>
              </tr>
              <tr>
                <td class="report-metric-name">Model Architecture & Decision Threshold</td>
                <td class="report-metric-value">${escapeHtml(scene.model_name || "U-Net")} (Sigmoid &ge; ${scene.model_threshold || 0.5})</td>
              </tr>
              <tr>
                <td class="report-metric-name">Brightness Baseline Cloud Coverage</td>
                <td class="report-metric-value">${baselinePct.toFixed(2)}%</td>
              </tr>
              <tr>
                <td class="report-metric-name">Difference (U-Net vs. Brightness Baseline)</td>
                <td class="report-metric-value ${diffClass}">${diffSign}% points</td>
              </tr>
              <tr>
                <td class="report-metric-name">Brightness Baseline Calibration Status</td>
                <td class="report-metric-value"><span class="${calibBadgeClass}">&bull; ${escapeHtml(baselineCalib)} (&tau;=${baselineTh}${valMetrics ? `, Val IoU: ${valMetrics.iou}%` : ''})</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  updateImageView();
}

// Helper to escape CSV values according to RFC 4180
function escapeCsv(val) {
  if (val === null || val === undefined) return '""';
  const str = String(val);
  return `"${str.replace(/"/g, '""')}"`;
}

// Download Scene Usability Report as Clean, Consistent CSV
function downloadSceneReportCSV(sceneIndex) {
  const scene = currentResults[sceneIndex];
  if (!scene || scene.status !== "success") return;

  const totalPixels = scene.total_pixels !== undefined ? scene.total_pixels : 262144;
  const cloudPct = scene.cloud_coverage_percentage !== undefined ? Number(scene.cloud_coverage_percentage) : 0;
  const usablePct = scene.usable_area_percentage !== undefined ? Number(scene.usable_area_percentage) : 100;
  const cloudPixels = scene.cloud_pixels !== undefined ? scene.cloud_pixels : Math.round((cloudPct / 100) * totalPixels);
  const usablePixels = scene.usable_pixels !== undefined ? scene.usable_pixels : (totalPixels - cloudPixels);
  const baselinePct = scene.brightness_baseline ? Number(scene.brightness_baseline.cloud_coverage_percentage) : 0;
  const baselineCalib = scene.brightness_baseline ? scene.brightness_baseline.calibration_status : "Calibrated";
  const baselineTh = scene.brightness_baseline && scene.brightness_baseline.threshold_used !== undefined ? scene.brightness_baseline.threshold_used : 0.0905;
  const valMetrics = scene.brightness_baseline && scene.brightness_baseline.validation_metrics ? scene.brightness_baseline.validation_metrics : null;
  const isCalib = baselineCalib.toLowerCase().includes("calibrated");
  const calibBadgeClass = isCalib ? "calibration-success" : "calibration-alert";
  const baselineDiff = (cloudPct - baselinePct).toFixed(2);
  const bandsList = scene.bands_order ? scene.bands_order.join("; ") : "B02 (Blue); B03 (Green); B04 (Red); B08 (NIR)";
  const dimStr = scene.dimensions ? `${scene.dimensions.width}x${scene.dimensions.height}` : "512x512";
  const genTime = reportTimestamp || new Date().toISOString();

  const plainInterpretation = generateSceneInterpretation(cloudPct, usablePct, parseFloat(baselineDiff))
    .replace(/<[^>]*>/g, "");

  // 3 consistent columns throughout: Section, Parameter, Value
  const csvData = [
    ["Section", "Parameter", "Value"],
    ["Report Metadata", "Application", "CloudSight AI"],
    ["Report Metadata", "Report Generation Timestamp", genTime],
    ["Scene Information", "Scene Filename", scene.filename],
    ["Scene Information", "Image Dimensions", `${dimStr} px`],
    ["Scene Information", "Band Count", String(scene.band_count || 4)],
    ["Scene Information", "Bands Specification", bandsList],
    ["Scene Information", "Total Pixels", String(totalPixels)],
    ["Prediction Results", "U-Net Cloud Coverage (%)", cloudPct.toFixed(2)],
    ["Prediction Results", "Usable Surface Area (%)", usablePct.toFixed(2)],
    ["Prediction Results", "Cloud-Covered Pixels", String(cloudPixels)],
    ["Prediction Results", "Clear / Usable Pixels", String(usablePixels)],
    ["Prediction Results", "Model Name", scene.model_name || "U-Net Sentinel-2 Cloud Detector"],
    ["Prediction Results", "Model Decision Threshold", String(scene.model_threshold || 0.5)],
    ["Model Comparison", "Brightness Baseline Cloud Coverage (%)", baselinePct.toFixed(2)],
    ["Model Comparison", "Difference (U-Net - Baseline % pts)", baselineDiff],
    ["Model Comparison", "Brightness Baseline Threshold", String(baselineTh)],
    ["Model Comparison", "Brightness Baseline Calibration Status", baselineCalib],
    ["Model Comparison", "Brightness Baseline Validation IoU (%)", valMetrics ? String(valMetrics.iou) : "N/A"],
    ["Model Comparison", "Brightness Baseline Validation Dice (%)", valMetrics ? String(valMetrics.dice) : "N/A"],
    ["Interpretation", "Automated Prediction Summary", plainInterpretation]
  ];

  const csvContent = "\uFEFF" + csvData.map(row => row.map(escapeCsv).join(",")).join("\r\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const safeFilename = scene.filename.replace(/[^a-zA-Z0-9_\-\.]/g, "_");
  link.setAttribute("href", url);
  link.setAttribute("download", `CloudSight_Report_${safeFilename}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Download Scene Usability Report as Formatted Excel (.xlsx)
function downloadSceneReportXLSX(sceneIndex) {
  const scene = currentResults[sceneIndex];
  if (!scene || scene.status !== "success") return;

  if (typeof XLSX === "undefined") {
    alert("Excel export library is loading. Please try again in a moment.");
    return;
  }

  const totalPixels = scene.total_pixels !== undefined ? scene.total_pixels : 262144;
  const cloudPct = scene.cloud_coverage_percentage !== undefined ? Number(scene.cloud_coverage_percentage) : 0;
  const usablePct = scene.usable_area_percentage !== undefined ? Number(scene.usable_area_percentage) : 100;
  const cloudPixels = scene.cloud_pixels !== undefined ? scene.cloud_pixels : Math.round((cloudPct / 100) * totalPixels);
  const usablePixels = scene.usable_pixels !== undefined ? scene.usable_pixels : (totalPixels - cloudPixels);
  const baselinePct = scene.brightness_baseline ? Number(scene.brightness_baseline.cloud_coverage_percentage) : 0;
  const baselineCalib = scene.brightness_baseline ? scene.brightness_baseline.calibration_status : "Calibrated";
  const baselineTh = scene.brightness_baseline && scene.brightness_baseline.threshold_used !== undefined ? scene.brightness_baseline.threshold_used : 0.0905;
  const valMetrics = scene.brightness_baseline && scene.brightness_baseline.validation_metrics ? scene.brightness_baseline.validation_metrics : null;
  const isCalib = baselineCalib.toLowerCase().includes("calibrated");
  const calibBadgeClass = isCalib ? "calibration-success" : "calibration-alert";
  const baselineDiff = (cloudPct - baselinePct).toFixed(2);
  const bandsList = scene.bands_order ? scene.bands_order.join(", ") : "B02 (Blue), B03 (Green), B04 (Red), B08 (NIR)";
  const dimStr = scene.dimensions ? `${scene.dimensions.width}x${scene.dimensions.height}` : "512x512";
  const genTime = reportTimestamp || new Date().toLocaleString();

  const plainInterpretation = generateSceneInterpretation(cloudPct, usablePct, parseFloat(baselineDiff))
    .replace(/<[^>]*>/g, "");

  const wsData = [
    ["CloudSight AI - Satellite Scene Usability Report", ""],
    ["AI-powered cloud detection and satellite image usability analysis", ""],
    ["Report Timestamp:", genTime],
    ["", ""],
    ["1. SCENE INFORMATION", ""],
    ["Scene Identifier / Filename", scene.filename],
    ["Image Dimensions", `${dimStr} px`],
    ["Band Count", scene.band_count || 4],
    ["Bands Specification", bandsList],
    ["Total Pixel Count", totalPixels],
    ["", ""],
    ["2. PREDICTION RESULTS", ""],
    ["U-Net Predicted Cloud Coverage", `${cloudPct.toFixed(2)}%`],
    ["Usable Surface Area", `${usablePct.toFixed(2)}%`],
    ["Cloud-Covered Pixels", cloudPixels],
    ["Clear / Usable Pixels", usablePixels],
    ["Model Architecture", scene.model_name || "U-Net Sentinel-2 Cloud Detector"],
    ["Model Decision Threshold", scene.model_threshold || 0.5],
    ["", ""],
    ["3. MODEL COMPARISON & BASELINE", ""],
    ["Brightness Baseline Cloud Coverage", `${baselinePct.toFixed(2)}%`],
    ["Difference (U-Net vs. Baseline)", `${baselineDiff > 0 ? '+' : ''}${baselineDiff}% pts`],
    ["Brightness Baseline Threshold", baselineTh],
    ["Brightness Baseline Calibration Status", baselineCalib],
    ["Brightness Baseline Validation IoU", valMetrics ? `${valMetrics.iou}%` : "N/A"],
    ["Brightness Baseline Validation Dice", valMetrics ? `${valMetrics.dice}%` : "N/A"],
    ["", ""],
    ["4. AUTOMATED INTERPRETATION & ASSESSMENT", ""],
    ["Summary Assessment", plainInterpretation]
  ];

  const ws = XLSX.utils.aoa_to_sheet(wsData);

  // Set column widths for readability
  ws["!cols"] = [
    { wch: 38 }, // Column A
    { wch: 55 }  // Column B
  ];

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Usability Report");

  const safeFilename = scene.filename.replace(/[^a-zA-Z0-9_\-\.]/g, "_");
  XLSX.writeFile(wb, `CloudSight_Report_${safeFilename}.xlsx`);
}

function setImageViewMode(mode) {
  currentImageViewMode = mode;
  const viewBtns = sceneViewContainer.querySelectorAll(".view-btn");
  viewBtns.forEach((btn) => {
    const isMatching =
      (mode === "rgb" && btn.textContent.includes("RGB")) ||
      (mode === "cloud" && btn.textContent.includes("Cloud Mask")) ||
      (mode === "usable" && btn.textContent.includes("Usability Mask"));
    btn.classList.toggle("active", isMatching);
  });
  updateImageView();
}

function updateImageView() {
  const scene = currentResults[activeSceneIndex];
  if (!scene || scene.status !== "success") return;

  const imgEl = document.getElementById("active-scene-image");
  const legendEl = document.getElementById("viewer-legend");
  if (!imgEl || !legendEl) return;

  if (currentImageViewMode === "rgb") {
    imgEl.src = scene.rgb_preview || scene.cloud_mask;
    legendEl.innerHTML = `
      <div class="legend-item">
        <span>Sentinel-2 True Color Preview (B04-Red, B03-Green, B02-Blue with 2% stretch)</span>
      </div>
    `;
  } else if (currentImageViewMode === "cloud") {
    imgEl.src = scene.cloud_mask;
    legendEl.innerHTML = `
      <div class="legend-item"><span class="legend-box legend-white"></span> White: Cloud (1)</div>
      <div class="legend-item"><span class="legend-box legend-black"></span> Black: Clear (0)</div>
    `;
  } else if (currentImageViewMode === "usable") {
    imgEl.src = scene.usability_mask;
    legendEl.innerHTML = `
      <div class="legend-item"><span class="legend-box legend-white"></span> White: Usable Land / Water (1)</div>
      <div class="legend-item"><span class="legend-box legend-black"></span> Black: Obscured by Cloud (0)</div>
    `;
  }
}

function formatFileSize(bytes) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
}

function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


/* ==========================================================================
   Model Evaluation Benchmark Section Controller
   ========================================================================== */

let evalSortField = "cloud_coverage_percent";
let evalSortAsc = true;
let evalSearchTerm = "";
let evalCoverageFilter = "all";

function initEvaluationDashboard() {
  if (typeof EVALUATION_DATA === "undefined") {
    console.warn("EVALUATION_DATA not found. Evaluation dashboard will not render.");
    return;
  }

  renderComparisonTable();
  renderDistributionChart();
  setupEvaluationTableEvents();
  renderScenesTable();
}

function renderComparisonTable() {
  const tbody = document.getElementById("comparison-table-body");
  if (!tbody || !EVALUATION_DATA.comparison) return;

  const metricLabels = {
    IoU: "Mean Intersection-over-Union (IoU)",
    Dice: "Dice Coefficient (F1-Score)",
    Precision: "Precision (Positive Predictive Value)",
    Recall: "Recall (Sensitivity / True Positive Rate)",
    False_Ground_Rate: "False Ground Rate (FGR / Miss Rate)",
    Specificity: "Specificity (True Negative Rate)"
  };

  tbody.innerHTML = "";
  EVALUATION_DATA.comparison.forEach((row) => {
    const tr = document.createElement("tr");
    const isReduction = row.is_reduction_metric;
    const diffSign = row.improvement_pts > 0 ? `+${row.improvement_pts.toFixed(2)}` : `${row.improvement_pts.toFixed(2)}`;
    const diffText = isReduction
      ? `<span class="highlight-down">-${row.improvement_pts.toFixed(2)}% pts (Reduction)</span>`
      : `<span class="highlight-up">${diffSign}% pts</span>`;

    const label = metricLabels[row.metric] || row.metric;

    tr.innerHTML = `
      <td class="report-metric-name">${escapeHtml(label)}</td>
      <td class="metric-highlight">${row.baseline_percent.toFixed(2)}%</td>
      <td class="metric-highlight">${row.unet_percent.toFixed(2)}%</td>
      <td>${diffText}</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderDistributionChart() {
  const container = document.getElementById("distribution-chart");
  if (!container || !EVALUATION_DATA.distribution) return;

  const { labels, counts } = EVALUATION_DATA.distribution;
  const maxCount = Math.max(...counts);

  container.innerHTML = "";
  labels.forEach((label, idx) => {
    const count = counts[idx];
    const pctWidth = ((count / maxCount) * 100).toFixed(1);
    const scenePct = ((count / EVALUATION_DATA.summary.total_scenes) * 100).toFixed(1);

    const row = document.createElement("div");
    row.className = "chart-row";
    row.innerHTML = `
      <div class="chart-label">${label}</div>
      <div class="chart-bar-bg" title="${count} scenes (${scenePct}%)">
        <div class="chart-bar-fill" style="width: ${pctWidth}%;"></div>
      </div>
      <div class="chart-count">${count}</div>
    `;
    container.appendChild(row);
  });
}

function setupEvaluationTableEvents() {
  const searchInput = document.getElementById("scene-search-input");
  const filterSelect = document.getElementById("filter-coverage");
  const headers = document.querySelectorAll("#scenes-table th.sortable");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      evalSearchTerm = e.target.value.toLowerCase().trim();
      renderScenesTable();
    });
  }

  if (filterSelect) {
    filterSelect.addEventListener("change", (e) => {
      evalCoverageFilter = e.target.value;
      renderScenesTable();
    });
  }

  headers.forEach((th) => {
    th.addEventListener("click", () => {
      const field = th.getAttribute("data-sort");
      if (evalSortField === field) {
        evalSortAsc = !evalSortAsc;
      } else {
        evalSortField = field;
        evalSortAsc = true;
      }
      renderScenesTable();
    });
  });
}

function renderScenesTable() {
  const tbody = document.getElementById("scenes-table-body");
  const statsText = document.getElementById("records-stats-text");
  if (!tbody || !EVALUATION_DATA.scenes) return;

  let filtered = EVALUATION_DATA.scenes.filter((s) => {
    // Search filter
    const matchesSearch =
      !evalSearchTerm ||
      s.scene_id.toLowerCase().includes(evalSearchTerm) ||
      s.relative_path.toLowerCase().includes(evalSearchTerm);

    if (!matchesSearch) return false;

    // Coverage category filter
    if (evalCoverageFilter === "clear") return s.cloud_coverage_percent < 20;
    if (evalCoverageFilter === "moderate") return s.cloud_coverage_percent >= 20 && s.cloud_coverage_percent < 80;
    if (evalCoverageFilter === "cloudy") return s.cloud_coverage_percent >= 80;
    return true;
  });

  // Sort
  filtered.sort((a, b) => {
    let valA = a[evalSortField];
    let valB = b[evalSortField];
    if (typeof valA === "string") valA = valA.toLowerCase();
    if (typeof valB === "string") valB = valB.toLowerCase();

    if (valA < valB) return evalSortAsc ? -1 : 1;
    if (valA > valB) return evalSortAsc ? 1 : -1;
    return 0;
  });

  if (statsText) {
    statsText.textContent = `Showing ${filtered.length.toLocaleString()} of ${EVALUATION_DATA.summary.total_scenes.toLocaleString()} scenes`;
  }

  tbody.innerHTML = "";
  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">No matching benchmark scenes found.</td></tr>`;
    return;
  }

  const fragment = document.createDocumentFragment();
  filtered.forEach((s) => {
    const tr = document.createElement("tr");

    let statusBadge = "";
    if (s.cloud_coverage_percent < 20) {
      statusBadge = '<span class="badge-status badge-clear">Clear Surface</span>';
    } else if (s.cloud_coverage_percent < 80) {
      statusBadge = '<span class="badge-status badge-moderate">Partially Cloudy</span>';
    } else {
      statusBadge = '<span class="badge-status badge-cloudy">Cloud-Dominated</span>';
    }

    tr.innerHTML = `
      <td style="font-family: var(--font-mono); font-weight: 600;">${escapeHtml(s.scene_id)}</td>
      <td style="font-family: var(--font-mono); color: var(--text-muted);">${escapeHtml(s.relative_path)}</td>
      <td style="font-family: var(--font-mono); font-weight: 600;">${s.cloud_coverage_percent.toFixed(2)}%</td>
      <td style="font-family: var(--font-mono); font-weight: 600;">${s.usable_area_percent.toFixed(2)}%</td>
      <td>${statusBadge}</td>
    `;
    fragment.appendChild(tr);
  });
  tbody.appendChild(fragment);
}

// Call on startup
document.addEventListener("DOMContentLoaded", () => {
  initEvaluationDashboard();
});
