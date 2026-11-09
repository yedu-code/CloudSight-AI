// CloudSight AI Test-Set Benchmark Evaluation Dataset (1,262 Scenes)
const EVALUATION_DATA = {
  "summary": {
    "total_scenes": 1262,
    "mean_cloud_coverage": 54.72,
    "mean_usable_area": 45.28,
    "median_cloud_coverage": 55.62,
    "median_usable_area": 44.38,
    "std_cloud_coverage": 37.24,
    "clear_scenes": 322,
    "partially_cloudy_scenes": 477,
    "cloud_dominated_scenes": 463
  },
  "distribution": {
    "labels": [
      "0-10%",
      "10-20%",
      "20-30%",
      "30-40%",
      "40-50%",
      "50-60%",
      "60-70%",
      "70-80%",
      "80-90%",
      "90-100%"
    ],
    "counts": [
      234,
      88,
      103,
      100,
      80,
      48,
      63,
      83,
      97,
      366
    ]
  },
  "comparison": [
    {
      "metric": "IoU",
      "baseline_ratio": 0.650370070920818,
      "baseline_percent": 65.04,
      "unet_ratio": 0.8831236674507776,
      "unet_percent": 88.31,
      "improvement_pts": 23.28,
      "is_reduction_metric": false
    },
    {
      "metric": "Dice",
      "baseline_ratio": 0.7881505880168396,
      "baseline_percent": 78.82,
      "unet_ratio": 0.937934860801022,
      "unet_percent": 93.79,
      "improvement_pts": 14.98,
      "is_reduction_metric": false
    },
    {
      "metric": "Precision",
      "baseline_ratio": 0.9256958386783204,
      "baseline_percent": 92.57,
      "unet_ratio": 0.962533432035828,
      "unet_percent": 96.25,
      "improvement_pts": 3.68,
      "is_reduction_metric": false
    },
    {
      "metric": "Recall",
      "baseline_ratio": 0.6861921787015239,
      "baseline_percent": 68.62,
      "unet_ratio": 0.9145622445647148,
      "unet_percent": 91.46,
      "improvement_pts": 22.84,
      "is_reduction_metric": false
    },
    {
      "metric": "False_Ground_Rate",
      "baseline_ratio": 0.3138078212984761,
      "baseline_percent": 31.38,
      "unet_ratio": 0.0854377554352851,
      "unet_percent": 8.54,
      "improvement_pts": 22.84,
      "is_reduction_metric": true
    },
    {
      "metric": "Specificity",
      "baseline_ratio": 0.9252104962763528,
      "baseline_percent": 92.52,
      "unet_ratio": 0.951661694659938,
      "unet_percent": 95.17,
      "improvement_pts": 2.65,
      "is_reduction_metric": false
    }
  ],
  "scenes": [
    {
      "scene_id": "huri",
      "relative_path": "3576",
      "cloud_coverage_percent": 3.64,
      "usable_area_percent": 96.36,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "husq",
      "relative_path": "3577",
      "cloud_coverage_percent": 6.1,
      "usable_area_percent": 93.9,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "husw",
      "relative_path": "3578",
      "cloud_coverage_percent": 71.22,
      "usable_area_percent": 28.78,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hutt",
      "relative_path": "3579",
      "cloud_coverage_percent": 6.16,
      "usable_area_percent": 93.84,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "huua",
      "relative_path": "3580",
      "cloud_coverage_percent": 19.4,
      "usable_area_percent": 80.6,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "huuf",
      "relative_path": "3581",
      "cloud_coverage_percent": 52.8,
      "usable_area_percent": 47.2,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "huug",
      "relative_path": "3582",
      "cloud_coverage_percent": 73.18,
      "usable_area_percent": 26.82,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "huuy",
      "relative_path": "3583",
      "cloud_coverage_percent": 0.15,
      "usable_area_percent": 99.85,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "huvc",
      "relative_path": "3584",
      "cloud_coverage_percent": 83.67,
      "usable_area_percent": 16.33,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "huwn",
      "relative_path": "3585",
      "cloud_coverage_percent": 17.87,
      "usable_area_percent": 82.13,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "huwp",
      "relative_path": "3586",
      "cloud_coverage_percent": 50.93,
      "usable_area_percent": 49.07,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "huxm",
      "relative_path": "3587",
      "cloud_coverage_percent": 1.42,
      "usable_area_percent": 98.58,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "huxq",
      "relative_path": "3588",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "huyn",
      "relative_path": "3589",
      "cloud_coverage_percent": 0.23,
      "usable_area_percent": 99.77,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "huzp",
      "relative_path": "3590",
      "cloud_coverage_percent": 23.8,
      "usable_area_percent": 76.2,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "huzs",
      "relative_path": "3591",
      "cloud_coverage_percent": 5.87,
      "usable_area_percent": 94.13,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hvai",
      "relative_path": "3592",
      "cloud_coverage_percent": 65.08,
      "usable_area_percent": 34.92,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hval",
      "relative_path": "3593",
      "cloud_coverage_percent": 99.61,
      "usable_area_percent": 0.39,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hvbe",
      "relative_path": "3594",
      "cloud_coverage_percent": 24.96,
      "usable_area_percent": 75.04,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hvbq",
      "relative_path": "3595",
      "cloud_coverage_percent": 5.43,
      "usable_area_percent": 94.57,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hvch",
      "relative_path": "3596",
      "cloud_coverage_percent": 99.33,
      "usable_area_percent": 0.67,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hvdd",
      "relative_path": "3597",
      "cloud_coverage_percent": 62.18,
      "usable_area_percent": 37.82,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hveo",
      "relative_path": "3598",
      "cloud_coverage_percent": 78.73,
      "usable_area_percent": 21.27,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hveq",
      "relative_path": "3599",
      "cloud_coverage_percent": 83.06,
      "usable_area_percent": 16.94,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hver",
      "relative_path": "3600",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hvfe",
      "relative_path": "3601",
      "cloud_coverage_percent": 27.12,
      "usable_area_percent": 72.88,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hvfx",
      "relative_path": "3602",
      "cloud_coverage_percent": 2.33,
      "usable_area_percent": 97.67,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hvgj",
      "relative_path": "3603",
      "cloud_coverage_percent": 2.4,
      "usable_area_percent": 97.6,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hvgx",
      "relative_path": "3604",
      "cloud_coverage_percent": 7.05,
      "usable_area_percent": 92.95,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hvhe",
      "relative_path": "3605",
      "cloud_coverage_percent": 66.98,
      "usable_area_percent": 33.02,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hvif",
      "relative_path": "3606",
      "cloud_coverage_percent": 21.28,
      "usable_area_percent": 78.72,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hvik",
      "relative_path": "3607",
      "cloud_coverage_percent": 28.06,
      "usable_area_percent": 71.94,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hviz",
      "relative_path": "3608",
      "cloud_coverage_percent": 77.56,
      "usable_area_percent": 22.44,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hvjh",
      "relative_path": "3609",
      "cloud_coverage_percent": 48.26,
      "usable_area_percent": 51.74,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hvjt",
      "relative_path": "3610",
      "cloud_coverage_percent": 2.69,
      "usable_area_percent": 97.31,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hvla",
      "relative_path": "3611",
      "cloud_coverage_percent": 18.02,
      "usable_area_percent": 81.98,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hvrp",
      "relative_path": "3612",
      "cloud_coverage_percent": 40.35,
      "usable_area_percent": 59.65,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hvrq",
      "relative_path": "3613",
      "cloud_coverage_percent": 10.76,
      "usable_area_percent": 89.24,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hvru",
      "relative_path": "3614",
      "cloud_coverage_percent": 12.5,
      "usable_area_percent": 87.5,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hvsb",
      "relative_path": "3615",
      "cloud_coverage_percent": 97.21,
      "usable_area_percent": 2.79,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hvsx",
      "relative_path": "3616",
      "cloud_coverage_percent": 93.85,
      "usable_area_percent": 6.15,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hvtd",
      "relative_path": "3617",
      "cloud_coverage_percent": 14.99,
      "usable_area_percent": 85.01,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hvtq",
      "relative_path": "3618",
      "cloud_coverage_percent": 48.9,
      "usable_area_percent": 51.1,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hvty",
      "relative_path": "3619",
      "cloud_coverage_percent": 17.92,
      "usable_area_percent": 82.08,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hvuj",
      "relative_path": "3620",
      "cloud_coverage_percent": 85.23,
      "usable_area_percent": 14.77,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hvuo",
      "relative_path": "3621",
      "cloud_coverage_percent": 52.23,
      "usable_area_percent": 47.77,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hvvm",
      "relative_path": "3622",
      "cloud_coverage_percent": 21.55,
      "usable_area_percent": 78.45,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hvvp",
      "relative_path": "3623",
      "cloud_coverage_percent": 1.98,
      "usable_area_percent": 98.02,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hvwj",
      "relative_path": "3624",
      "cloud_coverage_percent": 72.04,
      "usable_area_percent": 27.96,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hvwn",
      "relative_path": "3625",
      "cloud_coverage_percent": 68.87,
      "usable_area_percent": 31.13,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hvxr",
      "relative_path": "3626",
      "cloud_coverage_percent": 37.86,
      "usable_area_percent": 62.14,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hvye",
      "relative_path": "3627",
      "cloud_coverage_percent": 33.16,
      "usable_area_percent": 66.84,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwai",
      "relative_path": "3628",
      "cloud_coverage_percent": 20.28,
      "usable_area_percent": 79.72,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwbg",
      "relative_path": "3629",
      "cloud_coverage_percent": 20.38,
      "usable_area_percent": 79.62,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwbw",
      "relative_path": "3630",
      "cloud_coverage_percent": 15.7,
      "usable_area_percent": 84.3,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwdr",
      "relative_path": "3631",
      "cloud_coverage_percent": 87.39,
      "usable_area_percent": 12.61,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwem",
      "relative_path": "3632",
      "cloud_coverage_percent": 1.15,
      "usable_area_percent": 98.85,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwez",
      "relative_path": "3633",
      "cloud_coverage_percent": 1.34,
      "usable_area_percent": 98.66,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwhj",
      "relative_path": "3634",
      "cloud_coverage_percent": 3.91,
      "usable_area_percent": 96.09,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwhw",
      "relative_path": "3635",
      "cloud_coverage_percent": 35.72,
      "usable_area_percent": 64.28,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwhx",
      "relative_path": "3636",
      "cloud_coverage_percent": 7.61,
      "usable_area_percent": 92.39,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwix",
      "relative_path": "3637",
      "cloud_coverage_percent": 50.36,
      "usable_area_percent": 49.64,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwlb",
      "relative_path": "3638",
      "cloud_coverage_percent": 20.52,
      "usable_area_percent": 79.48,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwlf",
      "relative_path": "3639",
      "cloud_coverage_percent": 80.29,
      "usable_area_percent": 19.71,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwlk",
      "relative_path": "3640",
      "cloud_coverage_percent": 85.19,
      "usable_area_percent": 14.81,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwmr",
      "relative_path": "3641",
      "cloud_coverage_percent": 76.48,
      "usable_area_percent": 23.52,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwmt",
      "relative_path": "3642",
      "cloud_coverage_percent": 89.99,
      "usable_area_percent": 10.01,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwni",
      "relative_path": "3643",
      "cloud_coverage_percent": 71.87,
      "usable_area_percent": 28.13,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwnk",
      "relative_path": "3644",
      "cloud_coverage_percent": 0.82,
      "usable_area_percent": 99.18,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwnq",
      "relative_path": "3645",
      "cloud_coverage_percent": 54.75,
      "usable_area_percent": 45.25,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwnw",
      "relative_path": "3646",
      "cloud_coverage_percent": 70.17,
      "usable_area_percent": 29.83,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwpf",
      "relative_path": "3647",
      "cloud_coverage_percent": 4.4,
      "usable_area_percent": 95.6,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwrf",
      "relative_path": "3648",
      "cloud_coverage_percent": 36.28,
      "usable_area_percent": 63.72,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwrw",
      "relative_path": "3649",
      "cloud_coverage_percent": 47.97,
      "usable_area_percent": 52.03,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwst",
      "relative_path": "3650",
      "cloud_coverage_percent": 0.01,
      "usable_area_percent": 99.99,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwta",
      "relative_path": "3651",
      "cloud_coverage_percent": 16.09,
      "usable_area_percent": 83.91,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwtf",
      "relative_path": "3652",
      "cloud_coverage_percent": 1.04,
      "usable_area_percent": 98.96,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwun",
      "relative_path": "3653",
      "cloud_coverage_percent": 79.46,
      "usable_area_percent": 20.54,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwur",
      "relative_path": "3654",
      "cloud_coverage_percent": 38.17,
      "usable_area_percent": 61.83,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwwn",
      "relative_path": "3655",
      "cloud_coverage_percent": 2.02,
      "usable_area_percent": 97.98,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwwu",
      "relative_path": "3656",
      "cloud_coverage_percent": 8.3,
      "usable_area_percent": 91.7,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwxd",
      "relative_path": "3657",
      "cloud_coverage_percent": 60.36,
      "usable_area_percent": 39.64,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwxk",
      "relative_path": "3658",
      "cloud_coverage_percent": 65.38,
      "usable_area_percent": 34.62,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwxu",
      "relative_path": "3659",
      "cloud_coverage_percent": 96.73,
      "usable_area_percent": 3.27,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwxv",
      "relative_path": "3660",
      "cloud_coverage_percent": 47.35,
      "usable_area_percent": 52.65,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hwzq",
      "relative_path": "3661",
      "cloud_coverage_percent": 0.26,
      "usable_area_percent": 99.74,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hxai",
      "relative_path": "3662",
      "cloud_coverage_percent": 29.65,
      "usable_area_percent": 70.35,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hxal",
      "relative_path": "3663",
      "cloud_coverage_percent": 18.68,
      "usable_area_percent": 81.32,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hxcf",
      "relative_path": "3664",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "hxcj",
      "relative_path": "3665",
      "cloud_coverage_percent": 96.15,
      "usable_area_percent": 3.85,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pbnb",
      "relative_path": "6557",
      "cloud_coverage_percent": 45.05,
      "usable_area_percent": 54.95,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pbnh",
      "relative_path": "6558",
      "cloud_coverage_percent": 88.01,
      "usable_area_percent": 11.99,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pboo",
      "relative_path": "6559",
      "cloud_coverage_percent": 9.34,
      "usable_area_percent": 90.66,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pbop",
      "relative_path": "6560",
      "cloud_coverage_percent": 60.52,
      "usable_area_percent": 39.48,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pbpf",
      "relative_path": "6561",
      "cloud_coverage_percent": 98.18,
      "usable_area_percent": 1.82,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pbpg",
      "relative_path": "6562",
      "cloud_coverage_percent": 14.61,
      "usable_area_percent": 85.39,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pbpw",
      "relative_path": "6563",
      "cloud_coverage_percent": 74.21,
      "usable_area_percent": 25.79,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pbql",
      "relative_path": "6564",
      "cloud_coverage_percent": 42.63,
      "usable_area_percent": 57.37,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pbsf",
      "relative_path": "6565",
      "cloud_coverage_percent": 62.56,
      "usable_area_percent": 37.44,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pbtg",
      "relative_path": "6566",
      "cloud_coverage_percent": 99.93,
      "usable_area_percent": 0.07,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pbua",
      "relative_path": "6567",
      "cloud_coverage_percent": 17.91,
      "usable_area_percent": 82.09,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pbuj",
      "relative_path": "6568",
      "cloud_coverage_percent": 98.9,
      "usable_area_percent": 1.1,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pbuk",
      "relative_path": "6569",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pbxz",
      "relative_path": "6570",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pbyl",
      "relative_path": "6571",
      "cloud_coverage_percent": 50.33,
      "usable_area_percent": 49.67,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pbzz",
      "relative_path": "6572",
      "cloud_coverage_percent": 64.2,
      "usable_area_percent": 35.8,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pcac",
      "relative_path": "6573",
      "cloud_coverage_percent": 11.78,
      "usable_area_percent": 88.22,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pcbi",
      "relative_path": "6574",
      "cloud_coverage_percent": 57.33,
      "usable_area_percent": 42.67,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pcbs",
      "relative_path": "6575",
      "cloud_coverage_percent": 54.41,
      "usable_area_percent": 45.59,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pcbt",
      "relative_path": "6576",
      "cloud_coverage_percent": 29.4,
      "usable_area_percent": 70.6,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pcdi",
      "relative_path": "6577",
      "cloud_coverage_percent": 99.57,
      "usable_area_percent": 0.43,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pcdv",
      "relative_path": "6578",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pcea",
      "relative_path": "6579",
      "cloud_coverage_percent": 97.75,
      "usable_area_percent": 2.25,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pceh",
      "relative_path": "6580",
      "cloud_coverage_percent": 45.14,
      "usable_area_percent": 54.86,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pcel",
      "relative_path": "6581",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pcex",
      "relative_path": "6582",
      "cloud_coverage_percent": 99.99,
      "usable_area_percent": 0.01,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pcfh",
      "relative_path": "6583",
      "cloud_coverage_percent": 89.77,
      "usable_area_percent": 10.23,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pcgi",
      "relative_path": "6584",
      "cloud_coverage_percent": 71.08,
      "usable_area_percent": 28.92,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pcgt",
      "relative_path": "6585",
      "cloud_coverage_percent": 73.6,
      "usable_area_percent": 26.4,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pchb",
      "relative_path": "6586",
      "cloud_coverage_percent": 17.69,
      "usable_area_percent": 82.31,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pciu",
      "relative_path": "6587",
      "cloud_coverage_percent": 42.97,
      "usable_area_percent": 57.03,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pciw",
      "relative_path": "6588",
      "cloud_coverage_percent": 98.76,
      "usable_area_percent": 1.24,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pckh",
      "relative_path": "6589",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pclv",
      "relative_path": "6590",
      "cloud_coverage_percent": 13.8,
      "usable_area_percent": 86.2,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pcmb",
      "relative_path": "6591",
      "cloud_coverage_percent": 61.06,
      "usable_area_percent": 38.94,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pcmh",
      "relative_path": "6592",
      "cloud_coverage_percent": 35.17,
      "usable_area_percent": 64.83,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pcna",
      "relative_path": "6593",
      "cloud_coverage_percent": 75.29,
      "usable_area_percent": 24.71,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pcpk",
      "relative_path": "6594",
      "cloud_coverage_percent": 99.86,
      "usable_area_percent": 0.14,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pcqr",
      "relative_path": "6595",
      "cloud_coverage_percent": 90.63,
      "usable_area_percent": 9.37,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pcsg",
      "relative_path": "6596",
      "cloud_coverage_percent": 67.83,
      "usable_area_percent": 32.17,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pcsp",
      "relative_path": "6597",
      "cloud_coverage_percent": 51.94,
      "usable_area_percent": 48.06,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pctj",
      "relative_path": "6598",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pctk",
      "relative_path": "6599",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pctp",
      "relative_path": "6600",
      "cloud_coverage_percent": 86.66,
      "usable_area_percent": 13.34,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pcuf",
      "relative_path": "6601",
      "cloud_coverage_percent": 33.48,
      "usable_area_percent": 66.52,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pcwc",
      "relative_path": "6602",
      "cloud_coverage_percent": 92.31,
      "usable_area_percent": 7.69,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pcwm",
      "relative_path": "6603",
      "cloud_coverage_percent": 60.95,
      "usable_area_percent": 39.05,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pcww",
      "relative_path": "6604",
      "cloud_coverage_percent": 60.33,
      "usable_area_percent": 39.67,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pcyn",
      "relative_path": "6605",
      "cloud_coverage_percent": 99.9,
      "usable_area_percent": 0.1,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pcyu",
      "relative_path": "6606",
      "cloud_coverage_percent": 37.7,
      "usable_area_percent": 62.3,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pdae",
      "relative_path": "6607",
      "cloud_coverage_percent": 99.67,
      "usable_area_percent": 0.33,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pdbs",
      "relative_path": "6608",
      "cloud_coverage_percent": 99.57,
      "usable_area_percent": 0.43,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pdck",
      "relative_path": "6609",
      "cloud_coverage_percent": 72.61,
      "usable_area_percent": 27.39,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pdcp",
      "relative_path": "6610",
      "cloud_coverage_percent": 49.63,
      "usable_area_percent": 50.37,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pddj",
      "relative_path": "6611",
      "cloud_coverage_percent": 69.72,
      "usable_area_percent": 30.28,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pdds",
      "relative_path": "6612",
      "cloud_coverage_percent": 91.08,
      "usable_area_percent": 8.92,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pdeh",
      "relative_path": "6613",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pdfm",
      "relative_path": "6614",
      "cloud_coverage_percent": 5.08,
      "usable_area_percent": 94.92,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pdfx",
      "relative_path": "6615",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pdgi",
      "relative_path": "6616",
      "cloud_coverage_percent": 28.06,
      "usable_area_percent": 71.94,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pdgk",
      "relative_path": "6617",
      "cloud_coverage_percent": 60.29,
      "usable_area_percent": 39.71,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pdii",
      "relative_path": "6618",
      "cloud_coverage_percent": 77.45,
      "usable_area_percent": 22.55,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pdjl",
      "relative_path": "6619",
      "cloud_coverage_percent": 76.98,
      "usable_area_percent": 23.02,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pdkk",
      "relative_path": "6620",
      "cloud_coverage_percent": 5.6,
      "usable_area_percent": 94.4,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pdlh",
      "relative_path": "6621",
      "cloud_coverage_percent": 99.91,
      "usable_area_percent": 0.09,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pdmm",
      "relative_path": "6622",
      "cloud_coverage_percent": 88.55,
      "usable_area_percent": 11.45,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pdmn",
      "relative_path": "6623",
      "cloud_coverage_percent": 98.82,
      "usable_area_percent": 1.18,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pdmq",
      "relative_path": "6624",
      "cloud_coverage_percent": 92.43,
      "usable_area_percent": 7.57,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pdmu",
      "relative_path": "6625",
      "cloud_coverage_percent": 99.87,
      "usable_area_percent": 0.13,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pdoo",
      "relative_path": "6626",
      "cloud_coverage_percent": 27.04,
      "usable_area_percent": 72.96,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pdov",
      "relative_path": "6627",
      "cloud_coverage_percent": 86.83,
      "usable_area_percent": 13.17,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pdox",
      "relative_path": "6628",
      "cloud_coverage_percent": 99.8,
      "usable_area_percent": 0.2,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pdql",
      "relative_path": "6629",
      "cloud_coverage_percent": 93.64,
      "usable_area_percent": 6.36,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pdqm",
      "relative_path": "6630",
      "cloud_coverage_percent": 5.25,
      "usable_area_percent": 94.75,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pdrv",
      "relative_path": "6631",
      "cloud_coverage_percent": 99.24,
      "usable_area_percent": 0.76,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pdsx",
      "relative_path": "6632",
      "cloud_coverage_percent": 97.93,
      "usable_area_percent": 2.07,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pdtu",
      "relative_path": "6633",
      "cloud_coverage_percent": 51.59,
      "usable_area_percent": 48.41,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pdut",
      "relative_path": "6634",
      "cloud_coverage_percent": 36.35,
      "usable_area_percent": 63.65,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pdvq",
      "relative_path": "6635",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pdvz",
      "relative_path": "6636",
      "cloud_coverage_percent": 89.03,
      "usable_area_percent": 10.97,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pdwf",
      "relative_path": "6637",
      "cloud_coverage_percent": 96.33,
      "usable_area_percent": 3.67,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pdxl",
      "relative_path": "6638",
      "cloud_coverage_percent": 88.78,
      "usable_area_percent": 11.22,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pdzk",
      "relative_path": "6639",
      "cloud_coverage_percent": 98.86,
      "usable_area_percent": 1.14,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "peal",
      "relative_path": "6640",
      "cloud_coverage_percent": 43.99,
      "usable_area_percent": 56.01,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "peap",
      "relative_path": "6641",
      "cloud_coverage_percent": 74.97,
      "usable_area_percent": 25.03,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pecl",
      "relative_path": "6642",
      "cloud_coverage_percent": 70.78,
      "usable_area_percent": 29.22,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pecw",
      "relative_path": "6643",
      "cloud_coverage_percent": 28.59,
      "usable_area_percent": 71.41,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pedq",
      "relative_path": "6644",
      "cloud_coverage_percent": 32.82,
      "usable_area_percent": 67.18,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pedr",
      "relative_path": "6645",
      "cloud_coverage_percent": 27.37,
      "usable_area_percent": 72.63,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "peek",
      "relative_path": "6646",
      "cloud_coverage_percent": 87.02,
      "usable_area_percent": 12.98,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pefd",
      "relative_path": "6647",
      "cloud_coverage_percent": 45.72,
      "usable_area_percent": 54.28,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pefi",
      "relative_path": "6648",
      "cloud_coverage_percent": 21.87,
      "usable_area_percent": 78.13,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pefz",
      "relative_path": "6649",
      "cloud_coverage_percent": 93.33,
      "usable_area_percent": 6.67,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pehh",
      "relative_path": "6650",
      "cloud_coverage_percent": 81.62,
      "usable_area_percent": 18.38,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "peif",
      "relative_path": "6651",
      "cloud_coverage_percent": 61.21,
      "usable_area_percent": 38.79,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "peio",
      "relative_path": "6652",
      "cloud_coverage_percent": 18.07,
      "usable_area_percent": 81.93,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pejf",
      "relative_path": "6653",
      "cloud_coverage_percent": 56.44,
      "usable_area_percent": 43.56,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pejq",
      "relative_path": "6654",
      "cloud_coverage_percent": 96.64,
      "usable_area_percent": 3.36,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "peki",
      "relative_path": "6655",
      "cloud_coverage_percent": 99.05,
      "usable_area_percent": 0.95,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pekl",
      "relative_path": "6656",
      "cloud_coverage_percent": 34.57,
      "usable_area_percent": 65.43,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pekt",
      "relative_path": "6657",
      "cloud_coverage_percent": 75.73,
      "usable_area_percent": 24.27,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pelr",
      "relative_path": "6658",
      "cloud_coverage_percent": 55.62,
      "usable_area_percent": 44.38,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pemh",
      "relative_path": "6659",
      "cloud_coverage_percent": 8.7,
      "usable_area_percent": 91.3,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "peno",
      "relative_path": "6660",
      "cloud_coverage_percent": 38.29,
      "usable_area_percent": 61.71,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "penu",
      "relative_path": "6661",
      "cloud_coverage_percent": 75.58,
      "usable_area_percent": 24.42,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pepb",
      "relative_path": "6662",
      "cloud_coverage_percent": 90.45,
      "usable_area_percent": 9.55,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "peqm",
      "relative_path": "6663",
      "cloud_coverage_percent": 96.97,
      "usable_area_percent": 3.03,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "peqy",
      "relative_path": "6664",
      "cloud_coverage_percent": 25.27,
      "usable_area_percent": 74.73,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "perr",
      "relative_path": "6665",
      "cloud_coverage_percent": 45.96,
      "usable_area_percent": 54.04,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pesc",
      "relative_path": "6666",
      "cloud_coverage_percent": 57.35,
      "usable_area_percent": 42.65,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pesh",
      "relative_path": "6667",
      "cloud_coverage_percent": 88.6,
      "usable_area_percent": 11.4,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pesv",
      "relative_path": "6668",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "petk",
      "relative_path": "6669",
      "cloud_coverage_percent": 99.87,
      "usable_area_percent": 0.13,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "peub",
      "relative_path": "6670",
      "cloud_coverage_percent": 96.8,
      "usable_area_percent": 3.2,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "peud",
      "relative_path": "6671",
      "cloud_coverage_percent": 32.46,
      "usable_area_percent": 67.54,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pevb",
      "relative_path": "6672",
      "cloud_coverage_percent": 90.08,
      "usable_area_percent": 9.92,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pevy",
      "relative_path": "6673",
      "cloud_coverage_percent": 91.51,
      "usable_area_percent": 8.49,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pewh",
      "relative_path": "6674",
      "cloud_coverage_percent": 99.4,
      "usable_area_percent": 0.6,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pewm",
      "relative_path": "6675",
      "cloud_coverage_percent": 85.05,
      "usable_area_percent": 14.95,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pewq",
      "relative_path": "6676",
      "cloud_coverage_percent": 38.03,
      "usable_area_percent": 61.97,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pexn",
      "relative_path": "6677",
      "cloud_coverage_percent": 65.13,
      "usable_area_percent": 34.87,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "peyv",
      "relative_path": "6678",
      "cloud_coverage_percent": 94.76,
      "usable_area_percent": 5.24,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pezm",
      "relative_path": "6679",
      "cloud_coverage_percent": 43.59,
      "usable_area_percent": 56.41,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pezw",
      "relative_path": "6680",
      "cloud_coverage_percent": 73.91,
      "usable_area_percent": 26.09,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pfah",
      "relative_path": "6681",
      "cloud_coverage_percent": 99.8,
      "usable_area_percent": 0.2,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pfbh",
      "relative_path": "6682",
      "cloud_coverage_percent": 81.73,
      "usable_area_percent": 18.27,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pfbp",
      "relative_path": "6683",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pfcf",
      "relative_path": "6684",
      "cloud_coverage_percent": 73.58,
      "usable_area_percent": 26.42,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pfdh",
      "relative_path": "6685",
      "cloud_coverage_percent": 81.33,
      "usable_area_percent": 18.67,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pfes",
      "relative_path": "6686",
      "cloud_coverage_percent": 19.75,
      "usable_area_percent": 80.25,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pfha",
      "relative_path": "6687",
      "cloud_coverage_percent": 48.25,
      "usable_area_percent": 51.75,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pfhg",
      "relative_path": "6688",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pfhv",
      "relative_path": "6689",
      "cloud_coverage_percent": 48.48,
      "usable_area_percent": 51.52,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pfju",
      "relative_path": "6690",
      "cloud_coverage_percent": 99.65,
      "usable_area_percent": 0.35,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pfmm",
      "relative_path": "6691",
      "cloud_coverage_percent": 97.82,
      "usable_area_percent": 2.18,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pfmn",
      "relative_path": "6692",
      "cloud_coverage_percent": 61.99,
      "usable_area_percent": 38.01,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pfni",
      "relative_path": "6693",
      "cloud_coverage_percent": 42.08,
      "usable_area_percent": 57.92,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pfoa",
      "relative_path": "6694",
      "cloud_coverage_percent": 9.16,
      "usable_area_percent": 90.84,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pfoo",
      "relative_path": "6695",
      "cloud_coverage_percent": 12.34,
      "usable_area_percent": 87.66,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pfpn",
      "relative_path": "6696",
      "cloud_coverage_percent": 91.11,
      "usable_area_percent": 8.89,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pfqb",
      "relative_path": "6697",
      "cloud_coverage_percent": 49.1,
      "usable_area_percent": 50.9,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pfse",
      "relative_path": "6698",
      "cloud_coverage_percent": 83.64,
      "usable_area_percent": 16.36,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pfsn",
      "relative_path": "6699",
      "cloud_coverage_percent": 99.62,
      "usable_area_percent": 0.38,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pfss",
      "relative_path": "6700",
      "cloud_coverage_percent": 92.41,
      "usable_area_percent": 7.59,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pftz",
      "relative_path": "6701",
      "cloud_coverage_percent": 78.85,
      "usable_area_percent": 21.15,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pfuk",
      "relative_path": "6702",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pfvp",
      "relative_path": "6703",
      "cloud_coverage_percent": 99.39,
      "usable_area_percent": 0.61,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pfwb",
      "relative_path": "6704",
      "cloud_coverage_percent": 96.22,
      "usable_area_percent": 3.78,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pfwj",
      "relative_path": "6705",
      "cloud_coverage_percent": 78.35,
      "usable_area_percent": 21.65,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pfxc",
      "relative_path": "6706",
      "cloud_coverage_percent": 99.46,
      "usable_area_percent": 0.54,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pfxd",
      "relative_path": "6707",
      "cloud_coverage_percent": 58.92,
      "usable_area_percent": 41.08,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pfxm",
      "relative_path": "6708",
      "cloud_coverage_percent": 99.77,
      "usable_area_percent": 0.23,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pfyl",
      "relative_path": "6709",
      "cloud_coverage_percent": 74.61,
      "usable_area_percent": 25.39,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pfyp",
      "relative_path": "6710",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pfyt",
      "relative_path": "6711",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pgau",
      "relative_path": "6712",
      "cloud_coverage_percent": 10.26,
      "usable_area_percent": 89.74,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pgav",
      "relative_path": "6713",
      "cloud_coverage_percent": 16.83,
      "usable_area_percent": 83.17,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pgbk",
      "relative_path": "6714",
      "cloud_coverage_percent": 98.38,
      "usable_area_percent": 1.62,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pgbw",
      "relative_path": "6715",
      "cloud_coverage_percent": 49.92,
      "usable_area_percent": 50.08,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pgby",
      "relative_path": "6716",
      "cloud_coverage_percent": 53.77,
      "usable_area_percent": 46.23,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pgcn",
      "relative_path": "6717",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pgda",
      "relative_path": "6718",
      "cloud_coverage_percent": 79.78,
      "usable_area_percent": 20.22,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pgdh",
      "relative_path": "6719",
      "cloud_coverage_percent": 44.21,
      "usable_area_percent": 55.79,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pgdi",
      "relative_path": "6720",
      "cloud_coverage_percent": 89.52,
      "usable_area_percent": 10.48,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pgei",
      "relative_path": "6721",
      "cloud_coverage_percent": 41.93,
      "usable_area_percent": 58.07,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pgfk",
      "relative_path": "6722",
      "cloud_coverage_percent": 86.44,
      "usable_area_percent": 13.56,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pggw",
      "relative_path": "6723",
      "cloud_coverage_percent": 60.43,
      "usable_area_percent": 39.57,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pgha",
      "relative_path": "6724",
      "cloud_coverage_percent": 87.87,
      "usable_area_percent": 12.13,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pghw",
      "relative_path": "6725",
      "cloud_coverage_percent": 94.37,
      "usable_area_percent": 5.63,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pgig",
      "relative_path": "6726",
      "cloud_coverage_percent": 98.11,
      "usable_area_percent": 1.89,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pgiq",
      "relative_path": "6727",
      "cloud_coverage_percent": 85.13,
      "usable_area_percent": 14.87,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pgiv",
      "relative_path": "6728",
      "cloud_coverage_percent": 5.88,
      "usable_area_percent": 94.12,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pgjw",
      "relative_path": "6729",
      "cloud_coverage_percent": 62.8,
      "usable_area_percent": 37.2,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pgjx",
      "relative_path": "6730",
      "cloud_coverage_percent": 94.08,
      "usable_area_percent": 5.92,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pgmq",
      "relative_path": "6731",
      "cloud_coverage_percent": 24.96,
      "usable_area_percent": 75.04,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pgmt",
      "relative_path": "6732",
      "cloud_coverage_percent": 65.97,
      "usable_area_percent": 34.03,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pgne",
      "relative_path": "6733",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pgoj",
      "relative_path": "6734",
      "cloud_coverage_percent": 95.8,
      "usable_area_percent": 4.2,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pgsc",
      "relative_path": "6735",
      "cloud_coverage_percent": 2.21,
      "usable_area_percent": 97.79,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pgsl",
      "relative_path": "6736",
      "cloud_coverage_percent": 21.06,
      "usable_area_percent": 78.94,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pguv",
      "relative_path": "6737",
      "cloud_coverage_percent": 82.18,
      "usable_area_percent": 17.82,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "pguz",
      "relative_path": "6738",
      "cloud_coverage_percent": 74.57,
      "usable_area_percent": 25.43,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rwxt",
      "relative_path": "7608",
      "cloud_coverage_percent": 9.66,
      "usable_area_percent": 90.34,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rwzo",
      "relative_path": "7609",
      "cloud_coverage_percent": 30.92,
      "usable_area_percent": 69.08,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rwzp",
      "relative_path": "7610",
      "cloud_coverage_percent": 0.64,
      "usable_area_percent": 99.36,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxba",
      "relative_path": "7611",
      "cloud_coverage_percent": 43.04,
      "usable_area_percent": 56.96,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxbn",
      "relative_path": "7612",
      "cloud_coverage_percent": 10.15,
      "usable_area_percent": 89.85,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxbo",
      "relative_path": "7613",
      "cloud_coverage_percent": 29.64,
      "usable_area_percent": 70.36,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxca",
      "relative_path": "7614",
      "cloud_coverage_percent": 31.65,
      "usable_area_percent": 68.35,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxcn",
      "relative_path": "7615",
      "cloud_coverage_percent": 25.62,
      "usable_area_percent": 74.38,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxft",
      "relative_path": "7616",
      "cloud_coverage_percent": 17.0,
      "usable_area_percent": 83.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxgu",
      "relative_path": "7617",
      "cloud_coverage_percent": 25.22,
      "usable_area_percent": 74.78,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxgv",
      "relative_path": "7618",
      "cloud_coverage_percent": 49.61,
      "usable_area_percent": 50.39,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxhc",
      "relative_path": "7619",
      "cloud_coverage_percent": 31.9,
      "usable_area_percent": 68.1,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxhi",
      "relative_path": "7620",
      "cloud_coverage_percent": 8.34,
      "usable_area_percent": 91.66,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxim",
      "relative_path": "7621",
      "cloud_coverage_percent": 29.74,
      "usable_area_percent": 70.26,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxiv",
      "relative_path": "7622",
      "cloud_coverage_percent": 36.17,
      "usable_area_percent": 63.83,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxjb",
      "relative_path": "7623",
      "cloud_coverage_percent": 24.57,
      "usable_area_percent": 75.43,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxjr",
      "relative_path": "7624",
      "cloud_coverage_percent": 30.22,
      "usable_area_percent": 69.78,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxjx",
      "relative_path": "7625",
      "cloud_coverage_percent": 25.85,
      "usable_area_percent": 74.15,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxks",
      "relative_path": "7626",
      "cloud_coverage_percent": 21.33,
      "usable_area_percent": 78.67,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxlo",
      "relative_path": "7627",
      "cloud_coverage_percent": 30.78,
      "usable_area_percent": 69.22,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxmr",
      "relative_path": "7628",
      "cloud_coverage_percent": 26.38,
      "usable_area_percent": 73.62,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxnc",
      "relative_path": "7629",
      "cloud_coverage_percent": 34.42,
      "usable_area_percent": 65.58,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxnl",
      "relative_path": "7630",
      "cloud_coverage_percent": 28.54,
      "usable_area_percent": 71.46,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxoj",
      "relative_path": "7631",
      "cloud_coverage_percent": 37.92,
      "usable_area_percent": 62.08,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxqt",
      "relative_path": "7632",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxqz",
      "relative_path": "7633",
      "cloud_coverage_percent": 46.26,
      "usable_area_percent": 53.74,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxrd",
      "relative_path": "7634",
      "cloud_coverage_percent": 35.65,
      "usable_area_percent": 64.35,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxrq",
      "relative_path": "7635",
      "cloud_coverage_percent": 38.36,
      "usable_area_percent": 61.64,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxsj",
      "relative_path": "7636",
      "cloud_coverage_percent": 27.0,
      "usable_area_percent": 73.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxtl",
      "relative_path": "7637",
      "cloud_coverage_percent": 48.35,
      "usable_area_percent": 51.65,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxts",
      "relative_path": "7638",
      "cloud_coverage_percent": 41.86,
      "usable_area_percent": 58.14,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxuh",
      "relative_path": "7639",
      "cloud_coverage_percent": 36.14,
      "usable_area_percent": 63.86,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxul",
      "relative_path": "7640",
      "cloud_coverage_percent": 27.07,
      "usable_area_percent": 72.93,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxuq",
      "relative_path": "7641",
      "cloud_coverage_percent": 39.24,
      "usable_area_percent": 60.76,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxvx",
      "relative_path": "7642",
      "cloud_coverage_percent": 22.84,
      "usable_area_percent": 77.16,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxxn",
      "relative_path": "7643",
      "cloud_coverage_percent": 1.22,
      "usable_area_percent": 98.78,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxys",
      "relative_path": "7644",
      "cloud_coverage_percent": 1.85,
      "usable_area_percent": 98.15,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rxzu",
      "relative_path": "7645",
      "cloud_coverage_percent": 7.69,
      "usable_area_percent": 92.31,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ryam",
      "relative_path": "7646",
      "cloud_coverage_percent": 6.7,
      "usable_area_percent": 93.3,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ryba",
      "relative_path": "7647",
      "cloud_coverage_percent": 28.97,
      "usable_area_percent": 71.03,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rybx",
      "relative_path": "7648",
      "cloud_coverage_percent": 35.02,
      "usable_area_percent": 64.98,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rycr",
      "relative_path": "7649",
      "cloud_coverage_percent": 18.97,
      "usable_area_percent": 81.03,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rydx",
      "relative_path": "7650",
      "cloud_coverage_percent": 29.46,
      "usable_area_percent": 70.54,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ryfy",
      "relative_path": "7651",
      "cloud_coverage_percent": 22.14,
      "usable_area_percent": 77.86,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ryhd",
      "relative_path": "7652",
      "cloud_coverage_percent": 25.98,
      "usable_area_percent": 74.02,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ryic",
      "relative_path": "7653",
      "cloud_coverage_percent": 42.2,
      "usable_area_percent": 57.8,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ryif",
      "relative_path": "7654",
      "cloud_coverage_percent": 29.14,
      "usable_area_percent": 70.86,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ryin",
      "relative_path": "7655",
      "cloud_coverage_percent": 39.5,
      "usable_area_percent": 60.5,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ryiu",
      "relative_path": "7656",
      "cloud_coverage_percent": 31.98,
      "usable_area_percent": 68.02,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ryiv",
      "relative_path": "7657",
      "cloud_coverage_percent": 38.81,
      "usable_area_percent": 61.19,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ryjb",
      "relative_path": "7658",
      "cloud_coverage_percent": 32.95,
      "usable_area_percent": 67.05,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ryjc",
      "relative_path": "7659",
      "cloud_coverage_percent": 35.42,
      "usable_area_percent": 64.58,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rykc",
      "relative_path": "7660",
      "cloud_coverage_percent": 21.3,
      "usable_area_percent": 78.7,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rymd",
      "relative_path": "7661",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rynd",
      "relative_path": "7662",
      "cloud_coverage_percent": 31.89,
      "usable_area_percent": 68.11,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ryne",
      "relative_path": "7663",
      "cloud_coverage_percent": 18.55,
      "usable_area_percent": 81.45,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rynv",
      "relative_path": "7664",
      "cloud_coverage_percent": 38.47,
      "usable_area_percent": 61.53,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ryov",
      "relative_path": "7665",
      "cloud_coverage_percent": 42.35,
      "usable_area_percent": 57.65,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ryoy",
      "relative_path": "7666",
      "cloud_coverage_percent": 15.38,
      "usable_area_percent": 84.62,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rypx",
      "relative_path": "7667",
      "cloud_coverage_percent": 3.43,
      "usable_area_percent": 96.57,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ryqe",
      "relative_path": "7668",
      "cloud_coverage_percent": 48.02,
      "usable_area_percent": 51.98,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ryru",
      "relative_path": "7669",
      "cloud_coverage_percent": 30.52,
      "usable_area_percent": 69.48,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ryrv",
      "relative_path": "7670",
      "cloud_coverage_percent": 33.23,
      "usable_area_percent": 66.77,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rysa",
      "relative_path": "7671",
      "cloud_coverage_percent": 25.37,
      "usable_area_percent": 74.63,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rysy",
      "relative_path": "7672",
      "cloud_coverage_percent": 22.41,
      "usable_area_percent": 77.59,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rysz",
      "relative_path": "7673",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ryue",
      "relative_path": "7674",
      "cloud_coverage_percent": 26.1,
      "usable_area_percent": 73.9,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ryvm",
      "relative_path": "7675",
      "cloud_coverage_percent": 49.13,
      "usable_area_percent": 50.87,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ryvy",
      "relative_path": "7676",
      "cloud_coverage_percent": 18.55,
      "usable_area_percent": 81.45,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rywg",
      "relative_path": "7677",
      "cloud_coverage_percent": 22.96,
      "usable_area_percent": 77.04,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rywv",
      "relative_path": "7678",
      "cloud_coverage_percent": 31.7,
      "usable_area_percent": 68.3,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ryxd",
      "relative_path": "7679",
      "cloud_coverage_percent": 1.39,
      "usable_area_percent": 98.61,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ryxi",
      "relative_path": "7680",
      "cloud_coverage_percent": 28.24,
      "usable_area_percent": 71.76,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ryyv",
      "relative_path": "7681",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ryzr",
      "relative_path": "7682",
      "cloud_coverage_percent": 16.81,
      "usable_area_percent": 83.19,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ryzz",
      "relative_path": "7683",
      "cloud_coverage_percent": 28.97,
      "usable_area_percent": 71.03,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rzad",
      "relative_path": "7684",
      "cloud_coverage_percent": 18.75,
      "usable_area_percent": 81.25,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rzaq",
      "relative_path": "7685",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rzbj",
      "relative_path": "7686",
      "cloud_coverage_percent": 36.86,
      "usable_area_percent": 63.14,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rzby",
      "relative_path": "7687",
      "cloud_coverage_percent": 9.3,
      "usable_area_percent": 90.7,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rzdw",
      "relative_path": "7688",
      "cloud_coverage_percent": 7.62,
      "usable_area_percent": 92.38,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rzeg",
      "relative_path": "7689",
      "cloud_coverage_percent": 47.23,
      "usable_area_percent": 52.77,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rzek",
      "relative_path": "7690",
      "cloud_coverage_percent": 46.59,
      "usable_area_percent": 53.41,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rzfe",
      "relative_path": "7691",
      "cloud_coverage_percent": 64.99,
      "usable_area_percent": 35.01,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rzfg",
      "relative_path": "7692",
      "cloud_coverage_percent": 25.33,
      "usable_area_percent": 74.67,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rzhz",
      "relative_path": "7693",
      "cloud_coverage_percent": 15.23,
      "usable_area_percent": 84.77,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rzij",
      "relative_path": "7694",
      "cloud_coverage_percent": 19.26,
      "usable_area_percent": 80.74,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rzld",
      "relative_path": "7695",
      "cloud_coverage_percent": 28.23,
      "usable_area_percent": 71.77,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rzlg",
      "relative_path": "7696",
      "cloud_coverage_percent": 43.14,
      "usable_area_percent": 56.86,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rzmj",
      "relative_path": "7697",
      "cloud_coverage_percent": 22.7,
      "usable_area_percent": 77.3,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rznw",
      "relative_path": "7698",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rzob",
      "relative_path": "7699",
      "cloud_coverage_percent": 11.64,
      "usable_area_percent": 88.36,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rzod",
      "relative_path": "7700",
      "cloud_coverage_percent": 2.44,
      "usable_area_percent": 97.56,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rzou",
      "relative_path": "7701",
      "cloud_coverage_percent": 39.17,
      "usable_area_percent": 60.83,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rzov",
      "relative_path": "7702",
      "cloud_coverage_percent": 45.9,
      "usable_area_percent": 54.1,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rzqj",
      "relative_path": "7703",
      "cloud_coverage_percent": 24.28,
      "usable_area_percent": 75.72,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rzqs",
      "relative_path": "7704",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rzqu",
      "relative_path": "7705",
      "cloud_coverage_percent": 30.75,
      "usable_area_percent": 69.25,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rzrk",
      "relative_path": "7706",
      "cloud_coverage_percent": 26.51,
      "usable_area_percent": 73.49,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rzrw",
      "relative_path": "7707",
      "cloud_coverage_percent": 15.16,
      "usable_area_percent": 84.84,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rzsh",
      "relative_path": "7708",
      "cloud_coverage_percent": 4.55,
      "usable_area_percent": 95.45,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rztg",
      "relative_path": "7709",
      "cloud_coverage_percent": 34.15,
      "usable_area_percent": 65.85,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rzub",
      "relative_path": "7710",
      "cloud_coverage_percent": 10.69,
      "usable_area_percent": 89.31,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rzui",
      "relative_path": "7711",
      "cloud_coverage_percent": 43.05,
      "usable_area_percent": 56.95,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rzxj",
      "relative_path": "7712",
      "cloud_coverage_percent": 21.86,
      "usable_area_percent": 78.14,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "rzzv",
      "relative_path": "7713",
      "cloud_coverage_percent": 26.2,
      "usable_area_percent": 73.8,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "saas",
      "relative_path": "7714",
      "cloud_coverage_percent": 16.28,
      "usable_area_percent": 83.72,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "saaz",
      "relative_path": "7715",
      "cloud_coverage_percent": 35.31,
      "usable_area_percent": 64.69,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sabf",
      "relative_path": "7716",
      "cloud_coverage_percent": 44.61,
      "usable_area_percent": 55.39,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sabn",
      "relative_path": "7717",
      "cloud_coverage_percent": 22.06,
      "usable_area_percent": 77.94,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sacs",
      "relative_path": "7718",
      "cloud_coverage_percent": 17.68,
      "usable_area_percent": 82.32,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sade",
      "relative_path": "7719",
      "cloud_coverage_percent": 38.11,
      "usable_area_percent": 61.89,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sadi",
      "relative_path": "7720",
      "cloud_coverage_percent": 36.96,
      "usable_area_percent": 63.04,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sadp",
      "relative_path": "7721",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sadq",
      "relative_path": "7722",
      "cloud_coverage_percent": 43.05,
      "usable_area_percent": 56.95,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sads",
      "relative_path": "7723",
      "cloud_coverage_percent": 18.57,
      "usable_area_percent": 81.43,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "saea",
      "relative_path": "7724",
      "cloud_coverage_percent": 44.89,
      "usable_area_percent": 55.11,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "saev",
      "relative_path": "7725",
      "cloud_coverage_percent": 35.9,
      "usable_area_percent": 64.1,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "saex",
      "relative_path": "7726",
      "cloud_coverage_percent": 48.44,
      "usable_area_percent": 51.56,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "safh",
      "relative_path": "7727",
      "cloud_coverage_percent": 33.2,
      "usable_area_percent": 66.8,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "safi",
      "relative_path": "7728",
      "cloud_coverage_percent": 27.36,
      "usable_area_percent": 72.64,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "safk",
      "relative_path": "7729",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sagl",
      "relative_path": "7730",
      "cloud_coverage_percent": 36.51,
      "usable_area_percent": 63.49,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sagw",
      "relative_path": "7731",
      "cloud_coverage_percent": 29.18,
      "usable_area_percent": 70.82,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sahe",
      "relative_path": "7732",
      "cloud_coverage_percent": 34.06,
      "usable_area_percent": 65.94,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sahn",
      "relative_path": "7733",
      "cloud_coverage_percent": 19.6,
      "usable_area_percent": 80.4,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sahu",
      "relative_path": "7734",
      "cloud_coverage_percent": 36.1,
      "usable_area_percent": 63.9,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sais",
      "relative_path": "7735",
      "cloud_coverage_percent": 38.72,
      "usable_area_percent": 61.28,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "saiu",
      "relative_path": "7736",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "salm",
      "relative_path": "7737",
      "cloud_coverage_percent": 23.06,
      "usable_area_percent": 76.94,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sami",
      "relative_path": "7738",
      "cloud_coverage_percent": 0.89,
      "usable_area_percent": 99.11,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "saoq",
      "relative_path": "7739",
      "cloud_coverage_percent": 24.97,
      "usable_area_percent": 75.03,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sara",
      "relative_path": "7740",
      "cloud_coverage_percent": 1.31,
      "usable_area_percent": 98.69,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sata",
      "relative_path": "7741",
      "cloud_coverage_percent": 33.8,
      "usable_area_percent": 66.2,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "saue",
      "relative_path": "7742",
      "cloud_coverage_percent": 35.64,
      "usable_area_percent": 64.36,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "savf",
      "relative_path": "7743",
      "cloud_coverage_percent": 25.85,
      "usable_area_percent": 74.15,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "savn",
      "relative_path": "7744",
      "cloud_coverage_percent": 23.85,
      "usable_area_percent": 76.15,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "savr",
      "relative_path": "7745",
      "cloud_coverage_percent": 22.45,
      "usable_area_percent": 77.55,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "savt",
      "relative_path": "7746",
      "cloud_coverage_percent": 26.23,
      "usable_area_percent": 73.77,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "savv",
      "relative_path": "7747",
      "cloud_coverage_percent": 26.05,
      "usable_area_percent": 73.95,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "savw",
      "relative_path": "7748",
      "cloud_coverage_percent": 47.82,
      "usable_area_percent": 52.18,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sawp",
      "relative_path": "7749",
      "cloud_coverage_percent": 40.47,
      "usable_area_percent": 59.53,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sawy",
      "relative_path": "7750",
      "cloud_coverage_percent": 14.58,
      "usable_area_percent": 85.42,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sayw",
      "relative_path": "7751",
      "cloud_coverage_percent": 5.72,
      "usable_area_percent": 94.28,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sazd",
      "relative_path": "7752",
      "cloud_coverage_percent": 27.64,
      "usable_area_percent": 72.36,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sazg",
      "relative_path": "7753",
      "cloud_coverage_percent": 45.1,
      "usable_area_percent": 54.9,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sbdd",
      "relative_path": "7754",
      "cloud_coverage_percent": 44.64,
      "usable_area_percent": 55.36,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sbdv",
      "relative_path": "7755",
      "cloud_coverage_percent": 10.6,
      "usable_area_percent": 89.4,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sbeu",
      "relative_path": "7756",
      "cloud_coverage_percent": 41.46,
      "usable_area_percent": 58.54,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sbfw",
      "relative_path": "7757",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sbfy",
      "relative_path": "7758",
      "cloud_coverage_percent": 0.94,
      "usable_area_percent": 99.06,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sbgd",
      "relative_path": "7759",
      "cloud_coverage_percent": 26.02,
      "usable_area_percent": 73.98,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sbho",
      "relative_path": "7760",
      "cloud_coverage_percent": 34.49,
      "usable_area_percent": 65.51,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sbht",
      "relative_path": "7761",
      "cloud_coverage_percent": 29.15,
      "usable_area_percent": 70.85,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sbic",
      "relative_path": "7762",
      "cloud_coverage_percent": 18.1,
      "usable_area_percent": 81.9,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sbjf",
      "relative_path": "7763",
      "cloud_coverage_percent": 25.93,
      "usable_area_percent": 74.07,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sbkj",
      "relative_path": "7764",
      "cloud_coverage_percent": 27.73,
      "usable_area_percent": 72.27,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sbkm",
      "relative_path": "7765",
      "cloud_coverage_percent": 33.15,
      "usable_area_percent": 66.85,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sblu",
      "relative_path": "7766",
      "cloud_coverage_percent": 34.37,
      "usable_area_percent": 65.63,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sbmc",
      "relative_path": "7767",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sbob",
      "relative_path": "7768",
      "cloud_coverage_percent": 25.05,
      "usable_area_percent": 74.95,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "sbol",
      "relative_path": "7769",
      "cloud_coverage_percent": 31.78,
      "usable_area_percent": 68.22,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vfya",
      "relative_path": "8960",
      "cloud_coverage_percent": 99.79,
      "usable_area_percent": 0.21,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vfzi",
      "relative_path": "8961",
      "cloud_coverage_percent": 51.78,
      "usable_area_percent": 48.22,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vgaj",
      "relative_path": "8962",
      "cloud_coverage_percent": 92.0,
      "usable_area_percent": 8.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vgbc",
      "relative_path": "8963",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vgbd",
      "relative_path": "8964",
      "cloud_coverage_percent": 88.8,
      "usable_area_percent": 11.2,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vgbe",
      "relative_path": "8965",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vgbv",
      "relative_path": "8966",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vgch",
      "relative_path": "8967",
      "cloud_coverage_percent": 86.87,
      "usable_area_percent": 13.13,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vgdb",
      "relative_path": "8968",
      "cloud_coverage_percent": 89.72,
      "usable_area_percent": 10.28,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vgdj",
      "relative_path": "8969",
      "cloud_coverage_percent": 65.39,
      "usable_area_percent": 34.61,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vgdr",
      "relative_path": "8970",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vgfj",
      "relative_path": "8971",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vggi",
      "relative_path": "8972",
      "cloud_coverage_percent": 89.78,
      "usable_area_percent": 10.22,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vghz",
      "relative_path": "8973",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vgia",
      "relative_path": "8974",
      "cloud_coverage_percent": 95.61,
      "usable_area_percent": 4.39,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vglr",
      "relative_path": "8975",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vgmq",
      "relative_path": "8976",
      "cloud_coverage_percent": 67.29,
      "usable_area_percent": 32.71,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vgnz",
      "relative_path": "8977",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vgow",
      "relative_path": "8978",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vgpb",
      "relative_path": "8979",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vgpe",
      "relative_path": "8980",
      "cloud_coverage_percent": 90.39,
      "usable_area_percent": 9.61,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vgps",
      "relative_path": "8981",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vgpx",
      "relative_path": "8982",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vgre",
      "relative_path": "8983",
      "cloud_coverage_percent": 75.52,
      "usable_area_percent": 24.48,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vgro",
      "relative_path": "8984",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vgrx",
      "relative_path": "8985",
      "cloud_coverage_percent": 99.94,
      "usable_area_percent": 0.06,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vgsa",
      "relative_path": "8986",
      "cloud_coverage_percent": 0.2,
      "usable_area_percent": 99.8,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vgsn",
      "relative_path": "8987",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vgtj",
      "relative_path": "8988",
      "cloud_coverage_percent": 5.59,
      "usable_area_percent": 94.41,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vgtl",
      "relative_path": "8989",
      "cloud_coverage_percent": 99.53,
      "usable_area_percent": 0.47,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vgud",
      "relative_path": "8990",
      "cloud_coverage_percent": 75.79,
      "usable_area_percent": 24.21,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vgwj",
      "relative_path": "8991",
      "cloud_coverage_percent": 94.5,
      "usable_area_percent": 5.5,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vgys",
      "relative_path": "8992",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vgyw",
      "relative_path": "8993",
      "cloud_coverage_percent": 3.88,
      "usable_area_percent": 96.12,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vgzx",
      "relative_path": "8994",
      "cloud_coverage_percent": 81.61,
      "usable_area_percent": 18.39,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vham",
      "relative_path": "8995",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vhcs",
      "relative_path": "8996",
      "cloud_coverage_percent": 99.87,
      "usable_area_percent": 0.13,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vhdk",
      "relative_path": "8997",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vhdl",
      "relative_path": "8998",
      "cloud_coverage_percent": 5.37,
      "usable_area_percent": 94.63,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vhdu",
      "relative_path": "8999",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vhdw",
      "relative_path": "9000",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vhel",
      "relative_path": "9001",
      "cloud_coverage_percent": 99.96,
      "usable_area_percent": 0.04,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vhex",
      "relative_path": "9002",
      "cloud_coverage_percent": 97.74,
      "usable_area_percent": 2.26,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vhey",
      "relative_path": "9003",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vhfd",
      "relative_path": "9004",
      "cloud_coverage_percent": 90.05,
      "usable_area_percent": 9.95,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vhfh",
      "relative_path": "9005",
      "cloud_coverage_percent": 99.85,
      "usable_area_percent": 0.15,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vhgq",
      "relative_path": "9006",
      "cloud_coverage_percent": 55.62,
      "usable_area_percent": 44.38,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vhhd",
      "relative_path": "9007",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vhho",
      "relative_path": "9008",
      "cloud_coverage_percent": 34.51,
      "usable_area_percent": 65.49,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vhkj",
      "relative_path": "9009",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vhlj",
      "relative_path": "9010",
      "cloud_coverage_percent": 95.83,
      "usable_area_percent": 4.17,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vhll",
      "relative_path": "9011",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vhqq",
      "relative_path": "9012",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vhrg",
      "relative_path": "9013",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vhsd",
      "relative_path": "9014",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vhuz",
      "relative_path": "9015",
      "cloud_coverage_percent": 99.98,
      "usable_area_percent": 0.02,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vhvw",
      "relative_path": "9016",
      "cloud_coverage_percent": 99.97,
      "usable_area_percent": 0.03,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vhwd",
      "relative_path": "9017",
      "cloud_coverage_percent": 99.99,
      "usable_area_percent": 0.01,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vhxw",
      "relative_path": "9018",
      "cloud_coverage_percent": 98.78,
      "usable_area_percent": 1.22,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vhyf",
      "relative_path": "9019",
      "cloud_coverage_percent": 99.83,
      "usable_area_percent": 0.17,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vhyk",
      "relative_path": "9020",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vhym",
      "relative_path": "9021",
      "cloud_coverage_percent": 94.77,
      "usable_area_percent": 5.23,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vhzs",
      "relative_path": "9022",
      "cloud_coverage_percent": 99.88,
      "usable_area_percent": 0.12,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vibz",
      "relative_path": "9023",
      "cloud_coverage_percent": 99.57,
      "usable_area_percent": 0.43,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vidr",
      "relative_path": "9024",
      "cloud_coverage_percent": 65.1,
      "usable_area_percent": 34.9,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "viea",
      "relative_path": "9025",
      "cloud_coverage_percent": 54.06,
      "usable_area_percent": 45.94,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vigf",
      "relative_path": "9026",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vigq",
      "relative_path": "9027",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vigz",
      "relative_path": "9028",
      "cloud_coverage_percent": 80.56,
      "usable_area_percent": 19.44,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vihb",
      "relative_path": "9029",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vihf",
      "relative_path": "9030",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vijb",
      "relative_path": "9031",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "viji",
      "relative_path": "9032",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vijt",
      "relative_path": "9033",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vikc",
      "relative_path": "9034",
      "cloud_coverage_percent": 97.97,
      "usable_area_percent": 2.03,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vilt",
      "relative_path": "9035",
      "cloud_coverage_percent": 63.78,
      "usable_area_percent": 36.22,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vilv",
      "relative_path": "9036",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vimb",
      "relative_path": "9037",
      "cloud_coverage_percent": 99.98,
      "usable_area_percent": 0.02,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vimr",
      "relative_path": "9038",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vinp",
      "relative_path": "9039",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vioj",
      "relative_path": "9040",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vioo",
      "relative_path": "9041",
      "cloud_coverage_percent": 94.06,
      "usable_area_percent": 5.94,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vise",
      "relative_path": "9042",
      "cloud_coverage_percent": 53.92,
      "usable_area_percent": 46.08,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "visy",
      "relative_path": "9043",
      "cloud_coverage_percent": 41.73,
      "usable_area_percent": 58.27,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vitf",
      "relative_path": "9044",
      "cloud_coverage_percent": 98.82,
      "usable_area_percent": 1.18,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vitn",
      "relative_path": "9045",
      "cloud_coverage_percent": 98.19,
      "usable_area_percent": 1.81,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vitp",
      "relative_path": "9046",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vitz",
      "relative_path": "9047",
      "cloud_coverage_percent": 0.03,
      "usable_area_percent": 99.97,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "viwf",
      "relative_path": "9048",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vixt",
      "relative_path": "9049",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "viyx",
      "relative_path": "9050",
      "cloud_coverage_percent": 99.07,
      "usable_area_percent": 0.93,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vjby",
      "relative_path": "9051",
      "cloud_coverage_percent": 86.79,
      "usable_area_percent": 13.21,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vjcl",
      "relative_path": "9052",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vjcm",
      "relative_path": "9053",
      "cloud_coverage_percent": 99.84,
      "usable_area_percent": 0.16,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vjcr",
      "relative_path": "9054",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vjdb",
      "relative_path": "9055",
      "cloud_coverage_percent": 99.04,
      "usable_area_percent": 0.96,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vjdu",
      "relative_path": "9056",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vjdy",
      "relative_path": "9057",
      "cloud_coverage_percent": 99.75,
      "usable_area_percent": 0.25,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vjfh",
      "relative_path": "9058",
      "cloud_coverage_percent": 8.83,
      "usable_area_percent": 91.17,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vjge",
      "relative_path": "9059",
      "cloud_coverage_percent": 97.12,
      "usable_area_percent": 2.88,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vjhx",
      "relative_path": "9060",
      "cloud_coverage_percent": 29.56,
      "usable_area_percent": 70.44,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vjjs",
      "relative_path": "9061",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vjkr",
      "relative_path": "9062",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vjks",
      "relative_path": "9063",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vjlr",
      "relative_path": "9064",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vjlx",
      "relative_path": "9065",
      "cloud_coverage_percent": 74.93,
      "usable_area_percent": 25.07,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vjmf",
      "relative_path": "9066",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vjpn",
      "relative_path": "9067",
      "cloud_coverage_percent": 0.03,
      "usable_area_percent": 99.97,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vjqb",
      "relative_path": "9068",
      "cloud_coverage_percent": 99.99,
      "usable_area_percent": 0.01,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vjro",
      "relative_path": "9069",
      "cloud_coverage_percent": 97.53,
      "usable_area_percent": 2.47,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vjrs",
      "relative_path": "9070",
      "cloud_coverage_percent": 95.22,
      "usable_area_percent": 4.78,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vjsb",
      "relative_path": "9071",
      "cloud_coverage_percent": 97.84,
      "usable_area_percent": 2.16,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vjsn",
      "relative_path": "9072",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vzlu",
      "relative_path": "9373",
      "cloud_coverage_percent": 15.16,
      "usable_area_percent": 84.84,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vzmi",
      "relative_path": "9374",
      "cloud_coverage_percent": 31.22,
      "usable_area_percent": 68.78,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vzmv",
      "relative_path": "9375",
      "cloud_coverage_percent": 4.98,
      "usable_area_percent": 95.02,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vznj",
      "relative_path": "9376",
      "cloud_coverage_percent": 80.55,
      "usable_area_percent": 19.45,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vznk",
      "relative_path": "9377",
      "cloud_coverage_percent": 85.66,
      "usable_area_percent": 14.34,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vzot",
      "relative_path": "9378",
      "cloud_coverage_percent": 63.7,
      "usable_area_percent": 36.3,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vzox",
      "relative_path": "9379",
      "cloud_coverage_percent": 86.21,
      "usable_area_percent": 13.79,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vzpd",
      "relative_path": "9380",
      "cloud_coverage_percent": 99.92,
      "usable_area_percent": 0.08,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vzpp",
      "relative_path": "9381",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vzqd",
      "relative_path": "9382",
      "cloud_coverage_percent": 78.4,
      "usable_area_percent": 21.6,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vzrb",
      "relative_path": "9383",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vzts",
      "relative_path": "9384",
      "cloud_coverage_percent": 98.84,
      "usable_area_percent": 1.16,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vzua",
      "relative_path": "9385",
      "cloud_coverage_percent": 29.8,
      "usable_area_percent": 70.2,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vzul",
      "relative_path": "9386",
      "cloud_coverage_percent": 97.46,
      "usable_area_percent": 2.54,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vzuy",
      "relative_path": "9387",
      "cloud_coverage_percent": 52.08,
      "usable_area_percent": 47.92,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vzvp",
      "relative_path": "9388",
      "cloud_coverage_percent": 76.7,
      "usable_area_percent": 23.3,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vzvt",
      "relative_path": "9389",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vzwf",
      "relative_path": "9390",
      "cloud_coverage_percent": 16.98,
      "usable_area_percent": 83.02,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vzwx",
      "relative_path": "9391",
      "cloud_coverage_percent": 7.3,
      "usable_area_percent": 92.7,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vzya",
      "relative_path": "9392",
      "cloud_coverage_percent": 5.06,
      "usable_area_percent": 94.94,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vzzo",
      "relative_path": "9393",
      "cloud_coverage_percent": 79.93,
      "usable_area_percent": 20.07,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "vzzu",
      "relative_path": "9394",
      "cloud_coverage_percent": 23.42,
      "usable_area_percent": 76.58,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wabg",
      "relative_path": "9395",
      "cloud_coverage_percent": 7.03,
      "usable_area_percent": 92.97,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wafb",
      "relative_path": "9396",
      "cloud_coverage_percent": 27.78,
      "usable_area_percent": 72.22,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wafp",
      "relative_path": "9397",
      "cloud_coverage_percent": 85.69,
      "usable_area_percent": 14.31,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wagi",
      "relative_path": "9398",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wagm",
      "relative_path": "9399",
      "cloud_coverage_percent": 85.45,
      "usable_area_percent": 14.55,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wagu",
      "relative_path": "9400",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wagy",
      "relative_path": "9401",
      "cloud_coverage_percent": 60.06,
      "usable_area_percent": 39.94,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wahc",
      "relative_path": "9402",
      "cloud_coverage_percent": 55.86,
      "usable_area_percent": 44.14,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wahd",
      "relative_path": "9403",
      "cloud_coverage_percent": 66.39,
      "usable_area_percent": 33.61,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wahm",
      "relative_path": "9404",
      "cloud_coverage_percent": 94.93,
      "usable_area_percent": 5.07,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "waia",
      "relative_path": "9405",
      "cloud_coverage_percent": 30.96,
      "usable_area_percent": 69.04,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "waif",
      "relative_path": "9406",
      "cloud_coverage_percent": 70.89,
      "usable_area_percent": 29.11,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "waik",
      "relative_path": "9407",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "walj",
      "relative_path": "9408",
      "cloud_coverage_percent": 3.73,
      "usable_area_percent": 96.27,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wama",
      "relative_path": "9409",
      "cloud_coverage_percent": 13.57,
      "usable_area_percent": 86.43,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wamb",
      "relative_path": "9410",
      "cloud_coverage_percent": 5.09,
      "usable_area_percent": 94.91,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wank",
      "relative_path": "9411",
      "cloud_coverage_percent": 22.89,
      "usable_area_percent": 77.11,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wanu",
      "relative_path": "9412",
      "cloud_coverage_percent": 99.18,
      "usable_area_percent": 0.82,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "waoq",
      "relative_path": "9413",
      "cloud_coverage_percent": 0.28,
      "usable_area_percent": 99.72,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "waov",
      "relative_path": "9414",
      "cloud_coverage_percent": 8.1,
      "usable_area_percent": 91.9,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wapu",
      "relative_path": "9415",
      "cloud_coverage_percent": 98.06,
      "usable_area_percent": 1.94,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wari",
      "relative_path": "9416",
      "cloud_coverage_percent": 6.94,
      "usable_area_percent": 93.06,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wase",
      "relative_path": "9417",
      "cloud_coverage_percent": 19.58,
      "usable_area_percent": 80.42,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "waso",
      "relative_path": "9418",
      "cloud_coverage_percent": 7.6,
      "usable_area_percent": 92.4,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wass",
      "relative_path": "9419",
      "cloud_coverage_percent": 61.92,
      "usable_area_percent": 38.08,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wath",
      "relative_path": "9420",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "waue",
      "relative_path": "9421",
      "cloud_coverage_percent": 95.25,
      "usable_area_percent": 4.75,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "waug",
      "relative_path": "9422",
      "cloud_coverage_percent": 99.84,
      "usable_area_percent": 0.16,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wavk",
      "relative_path": "9423",
      "cloud_coverage_percent": 1.33,
      "usable_area_percent": 98.67,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wavq",
      "relative_path": "9424",
      "cloud_coverage_percent": 79.2,
      "usable_area_percent": 20.8,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wawh",
      "relative_path": "9425",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wawm",
      "relative_path": "9426",
      "cloud_coverage_percent": 96.07,
      "usable_area_percent": 3.93,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "waxd",
      "relative_path": "9427",
      "cloud_coverage_percent": 93.16,
      "usable_area_percent": 6.84,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "waxe",
      "relative_path": "9428",
      "cloud_coverage_percent": 48.51,
      "usable_area_percent": 51.49,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wazn",
      "relative_path": "9429",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wazt",
      "relative_path": "9430",
      "cloud_coverage_percent": 85.79,
      "usable_area_percent": 14.21,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbam",
      "relative_path": "9431",
      "cloud_coverage_percent": 89.27,
      "usable_area_percent": 10.73,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wban",
      "relative_path": "9432",
      "cloud_coverage_percent": 24.05,
      "usable_area_percent": 75.95,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbbo",
      "relative_path": "9433",
      "cloud_coverage_percent": 31.13,
      "usable_area_percent": 68.87,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbee",
      "relative_path": "9434",
      "cloud_coverage_percent": 76.29,
      "usable_area_percent": 23.71,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbeg",
      "relative_path": "9435",
      "cloud_coverage_percent": 58.95,
      "usable_area_percent": 41.05,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbgp",
      "relative_path": "9436",
      "cloud_coverage_percent": 99.36,
      "usable_area_percent": 0.64,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbgr",
      "relative_path": "9437",
      "cloud_coverage_percent": 5.86,
      "usable_area_percent": 94.14,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbhj",
      "relative_path": "9438",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbhn",
      "relative_path": "9439",
      "cloud_coverage_percent": 25.72,
      "usable_area_percent": 74.28,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbjd",
      "relative_path": "9440",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbjm",
      "relative_path": "9441",
      "cloud_coverage_percent": 67.81,
      "usable_area_percent": 32.19,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbke",
      "relative_path": "9442",
      "cloud_coverage_percent": 39.85,
      "usable_area_percent": 60.15,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbkr",
      "relative_path": "9443",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbkz",
      "relative_path": "9444",
      "cloud_coverage_percent": 82.04,
      "usable_area_percent": 17.96,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbme",
      "relative_path": "9445",
      "cloud_coverage_percent": 60.04,
      "usable_area_percent": 39.96,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbmh",
      "relative_path": "9446",
      "cloud_coverage_percent": 5.86,
      "usable_area_percent": 94.14,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbmz",
      "relative_path": "9447",
      "cloud_coverage_percent": 44.04,
      "usable_area_percent": 55.96,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbob",
      "relative_path": "9448",
      "cloud_coverage_percent": 69.02,
      "usable_area_percent": 30.98,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wboo",
      "relative_path": "9449",
      "cloud_coverage_percent": 39.41,
      "usable_area_percent": 60.59,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbpj",
      "relative_path": "9450",
      "cloud_coverage_percent": 91.31,
      "usable_area_percent": 8.69,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbpo",
      "relative_path": "9451",
      "cloud_coverage_percent": 6.75,
      "usable_area_percent": 93.25,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbpq",
      "relative_path": "9452",
      "cloud_coverage_percent": 8.0,
      "usable_area_percent": 92.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbqc",
      "relative_path": "9453",
      "cloud_coverage_percent": 80.93,
      "usable_area_percent": 19.07,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbqu",
      "relative_path": "9454",
      "cloud_coverage_percent": 32.45,
      "usable_area_percent": 67.55,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbrw",
      "relative_path": "9455",
      "cloud_coverage_percent": 98.36,
      "usable_area_percent": 1.64,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbst",
      "relative_path": "9456",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbtp",
      "relative_path": "9457",
      "cloud_coverage_percent": 99.87,
      "usable_area_percent": 0.13,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbtz",
      "relative_path": "9458",
      "cloud_coverage_percent": 27.87,
      "usable_area_percent": 72.13,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbue",
      "relative_path": "9459",
      "cloud_coverage_percent": 87.34,
      "usable_area_percent": 12.66,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbuf",
      "relative_path": "9460",
      "cloud_coverage_percent": 96.31,
      "usable_area_percent": 3.69,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbup",
      "relative_path": "9461",
      "cloud_coverage_percent": 7.16,
      "usable_area_percent": 92.84,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbuu",
      "relative_path": "9462",
      "cloud_coverage_percent": 43.01,
      "usable_area_percent": 56.99,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbwq",
      "relative_path": "9463",
      "cloud_coverage_percent": 26.37,
      "usable_area_percent": 73.63,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbyd",
      "relative_path": "9464",
      "cloud_coverage_percent": 98.96,
      "usable_area_percent": 1.04,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbzh",
      "relative_path": "9465",
      "cloud_coverage_percent": 14.28,
      "usable_area_percent": 85.72,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wbzz",
      "relative_path": "9466",
      "cloud_coverage_percent": 0.3,
      "usable_area_percent": 99.7,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wcas",
      "relative_path": "9467",
      "cloud_coverage_percent": 16.56,
      "usable_area_percent": 83.44,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wcck",
      "relative_path": "9468",
      "cloud_coverage_percent": 87.83,
      "usable_area_percent": 12.17,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wccl",
      "relative_path": "9469",
      "cloud_coverage_percent": 82.76,
      "usable_area_percent": 17.24,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wccu",
      "relative_path": "9470",
      "cloud_coverage_percent": 34.36,
      "usable_area_percent": 65.64,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wcdj",
      "relative_path": "9471",
      "cloud_coverage_percent": 6.04,
      "usable_area_percent": 93.96,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wcej",
      "relative_path": "9472",
      "cloud_coverage_percent": 40.51,
      "usable_area_percent": 59.49,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wcek",
      "relative_path": "9473",
      "cloud_coverage_percent": 92.92,
      "usable_area_percent": 7.08,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wcew",
      "relative_path": "9474",
      "cloud_coverage_percent": 99.61,
      "usable_area_percent": 0.39,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wcjp",
      "relative_path": "9475",
      "cloud_coverage_percent": 78.67,
      "usable_area_percent": 21.33,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wcof",
      "relative_path": "9476",
      "cloud_coverage_percent": 78.32,
      "usable_area_percent": 21.68,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wcqc",
      "relative_path": "9477",
      "cloud_coverage_percent": 31.92,
      "usable_area_percent": 68.08,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wcsc",
      "relative_path": "9478",
      "cloud_coverage_percent": 30.73,
      "usable_area_percent": 69.27,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wcsx",
      "relative_path": "9479",
      "cloud_coverage_percent": 19.18,
      "usable_area_percent": 80.82,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wctq",
      "relative_path": "9480",
      "cloud_coverage_percent": 7.72,
      "usable_area_percent": 92.28,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wcuh",
      "relative_path": "9481",
      "cloud_coverage_percent": 80.8,
      "usable_area_percent": 19.2,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wcuq",
      "relative_path": "9482",
      "cloud_coverage_percent": 97.29,
      "usable_area_percent": 2.71,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wcvf",
      "relative_path": "9483",
      "cloud_coverage_percent": 80.83,
      "usable_area_percent": 19.17,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wcwa",
      "relative_path": "9484",
      "cloud_coverage_percent": 77.6,
      "usable_area_percent": 22.4,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wcwd",
      "relative_path": "9485",
      "cloud_coverage_percent": 99.77,
      "usable_area_percent": 0.23,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wcwh",
      "relative_path": "9486",
      "cloud_coverage_percent": 73.4,
      "usable_area_percent": 26.6,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wcyd",
      "relative_path": "9487",
      "cloud_coverage_percent": 79.85,
      "usable_area_percent": 20.15,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wcyr",
      "relative_path": "9488",
      "cloud_coverage_percent": 57.14,
      "usable_area_percent": 42.86,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wczz",
      "relative_path": "9489",
      "cloud_coverage_percent": 37.13,
      "usable_area_percent": 62.87,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wdat",
      "relative_path": "9490",
      "cloud_coverage_percent": 98.61,
      "usable_area_percent": 1.39,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wdci",
      "relative_path": "9491",
      "cloud_coverage_percent": 9.94,
      "usable_area_percent": 90.06,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wdde",
      "relative_path": "9492",
      "cloud_coverage_percent": 40.17,
      "usable_area_percent": 59.83,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wddj",
      "relative_path": "9493",
      "cloud_coverage_percent": 77.58,
      "usable_area_percent": 22.42,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wddm",
      "relative_path": "9494",
      "cloud_coverage_percent": 34.23,
      "usable_area_percent": 65.77,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wddu",
      "relative_path": "9495",
      "cloud_coverage_percent": 53.39,
      "usable_area_percent": 46.61,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wdgf",
      "relative_path": "9496",
      "cloud_coverage_percent": 0.49,
      "usable_area_percent": 99.51,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wdgl",
      "relative_path": "9497",
      "cloud_coverage_percent": 23.32,
      "usable_area_percent": 76.68,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wdgn",
      "relative_path": "9498",
      "cloud_coverage_percent": 90.86,
      "usable_area_percent": 9.14,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wdgu",
      "relative_path": "9499",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wdhj",
      "relative_path": "9500",
      "cloud_coverage_percent": 99.94,
      "usable_area_percent": 0.06,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wdhn",
      "relative_path": "9501",
      "cloud_coverage_percent": 10.53,
      "usable_area_percent": 89.47,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wdif",
      "relative_path": "9502",
      "cloud_coverage_percent": 99.74,
      "usable_area_percent": 0.26,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wdik",
      "relative_path": "9503",
      "cloud_coverage_percent": 85.43,
      "usable_area_percent": 14.57,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wdkx",
      "relative_path": "9504",
      "cloud_coverage_percent": 95.7,
      "usable_area_percent": 4.3,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wdlb",
      "relative_path": "9505",
      "cloud_coverage_percent": 74.86,
      "usable_area_percent": 25.14,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wdmg",
      "relative_path": "9506",
      "cloud_coverage_percent": 2.41,
      "usable_area_percent": 97.59,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wdmn",
      "relative_path": "9507",
      "cloud_coverage_percent": 96.0,
      "usable_area_percent": 4.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wdno",
      "relative_path": "9508",
      "cloud_coverage_percent": 3.4,
      "usable_area_percent": 96.6,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wdoy",
      "relative_path": "9509",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wduy",
      "relative_path": "9510",
      "cloud_coverage_percent": 31.75,
      "usable_area_percent": 68.25,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wdvb",
      "relative_path": "9511",
      "cloud_coverage_percent": 2.58,
      "usable_area_percent": 97.42,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wdvw",
      "relative_path": "9512",
      "cloud_coverage_percent": 26.92,
      "usable_area_percent": 73.08,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wdvy",
      "relative_path": "9513",
      "cloud_coverage_percent": 0.41,
      "usable_area_percent": 99.59,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wdwu",
      "relative_path": "9514",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wdwx",
      "relative_path": "9515",
      "cloud_coverage_percent": 38.87,
      "usable_area_percent": 61.13,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wdyv",
      "relative_path": "9516",
      "cloud_coverage_percent": 2.95,
      "usable_area_percent": 97.05,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wdyw",
      "relative_path": "9517",
      "cloud_coverage_percent": 86.58,
      "usable_area_percent": 13.42,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wdzg",
      "relative_path": "9518",
      "cloud_coverage_percent": 11.78,
      "usable_area_percent": 88.22,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "weam",
      "relative_path": "9519",
      "cloud_coverage_percent": 84.66,
      "usable_area_percent": 15.34,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "weaw",
      "relative_path": "9520",
      "cloud_coverage_percent": 66.74,
      "usable_area_percent": 33.26,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "webb",
      "relative_path": "9521",
      "cloud_coverage_percent": 98.73,
      "usable_area_percent": 1.27,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "webe",
      "relative_path": "9522",
      "cloud_coverage_percent": 18.45,
      "usable_area_percent": 81.55,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "webo",
      "relative_path": "9523",
      "cloud_coverage_percent": 40.66,
      "usable_area_percent": 59.34,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wecf",
      "relative_path": "9524",
      "cloud_coverage_percent": 81.46,
      "usable_area_percent": 18.54,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wech",
      "relative_path": "9525",
      "cloud_coverage_percent": 99.75,
      "usable_area_percent": 0.25,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wecs",
      "relative_path": "9526",
      "cloud_coverage_percent": 91.15,
      "usable_area_percent": 8.85,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wecz",
      "relative_path": "9527",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wedw",
      "relative_path": "9528",
      "cloud_coverage_percent": 27.74,
      "usable_area_percent": 72.26,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "weeb",
      "relative_path": "9529",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wefm",
      "relative_path": "9530",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wefz",
      "relative_path": "9531",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wegu",
      "relative_path": "9532",
      "cloud_coverage_percent": 75.49,
      "usable_area_percent": 24.51,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wehd",
      "relative_path": "9533",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "weho",
      "relative_path": "9534",
      "cloud_coverage_percent": 4.59,
      "usable_area_percent": 95.41,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "weie",
      "relative_path": "9535",
      "cloud_coverage_percent": 84.81,
      "usable_area_percent": 15.19,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wekh",
      "relative_path": "9536",
      "cloud_coverage_percent": 81.79,
      "usable_area_percent": 18.21,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "weky",
      "relative_path": "9537",
      "cloud_coverage_percent": 17.07,
      "usable_area_percent": 82.93,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "weot",
      "relative_path": "9538",
      "cloud_coverage_percent": 77.23,
      "usable_area_percent": 22.77,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "weou",
      "relative_path": "9539",
      "cloud_coverage_percent": 8.66,
      "usable_area_percent": 91.34,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wepf",
      "relative_path": "9540",
      "cloud_coverage_percent": 99.31,
      "usable_area_percent": 0.69,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "weqa",
      "relative_path": "9541",
      "cloud_coverage_percent": 90.38,
      "usable_area_percent": 9.62,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "weqf",
      "relative_path": "9542",
      "cloud_coverage_percent": 60.88,
      "usable_area_percent": 39.12,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "weqn",
      "relative_path": "9543",
      "cloud_coverage_percent": 91.22,
      "usable_area_percent": 8.78,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wesh",
      "relative_path": "9544",
      "cloud_coverage_percent": 36.21,
      "usable_area_percent": 63.79,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "weut",
      "relative_path": "9545",
      "cloud_coverage_percent": 99.89,
      "usable_area_percent": 0.11,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "weww",
      "relative_path": "9546",
      "cloud_coverage_percent": 57.72,
      "usable_area_percent": 42.28,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wewz",
      "relative_path": "9547",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "weyd",
      "relative_path": "9548",
      "cloud_coverage_percent": 0.06,
      "usable_area_percent": 99.94,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfcf",
      "relative_path": "9549",
      "cloud_coverage_percent": 30.14,
      "usable_area_percent": 69.86,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfcq",
      "relative_path": "9550",
      "cloud_coverage_percent": 7.59,
      "usable_area_percent": 92.41,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfeo",
      "relative_path": "9551",
      "cloud_coverage_percent": 99.61,
      "usable_area_percent": 0.39,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wffk",
      "relative_path": "9552",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfha",
      "relative_path": "9553",
      "cloud_coverage_percent": 93.94,
      "usable_area_percent": 6.06,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfhb",
      "relative_path": "9554",
      "cloud_coverage_percent": 12.46,
      "usable_area_percent": 87.54,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfhz",
      "relative_path": "9555",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfiz",
      "relative_path": "9556",
      "cloud_coverage_percent": 73.81,
      "usable_area_percent": 26.19,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfjf",
      "relative_path": "9557",
      "cloud_coverage_percent": 87.43,
      "usable_area_percent": 12.57,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfjj",
      "relative_path": "9558",
      "cloud_coverage_percent": 16.43,
      "usable_area_percent": 83.57,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfkk",
      "relative_path": "9559",
      "cloud_coverage_percent": 38.42,
      "usable_area_percent": 61.58,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfko",
      "relative_path": "9560",
      "cloud_coverage_percent": 99.98,
      "usable_area_percent": 0.02,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wflb",
      "relative_path": "9561",
      "cloud_coverage_percent": 42.1,
      "usable_area_percent": 57.9,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfml",
      "relative_path": "9562",
      "cloud_coverage_percent": 35.19,
      "usable_area_percent": 64.81,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfoj",
      "relative_path": "9563",
      "cloud_coverage_percent": 5.26,
      "usable_area_percent": 94.74,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfqm",
      "relative_path": "9564",
      "cloud_coverage_percent": 58.43,
      "usable_area_percent": 41.57,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfrb",
      "relative_path": "9565",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfrm",
      "relative_path": "9566",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfru",
      "relative_path": "9567",
      "cloud_coverage_percent": 89.55,
      "usable_area_percent": 10.45,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfsu",
      "relative_path": "9568",
      "cloud_coverage_percent": 45.46,
      "usable_area_percent": 54.54,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfsy",
      "relative_path": "9569",
      "cloud_coverage_percent": 5.29,
      "usable_area_percent": 94.71,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wftv",
      "relative_path": "9570",
      "cloud_coverage_percent": 1.66,
      "usable_area_percent": 98.34,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfuo",
      "relative_path": "9571",
      "cloud_coverage_percent": 97.9,
      "usable_area_percent": 2.1,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfva",
      "relative_path": "9572",
      "cloud_coverage_percent": 29.44,
      "usable_area_percent": 70.56,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfvo",
      "relative_path": "9573",
      "cloud_coverage_percent": 94.79,
      "usable_area_percent": 5.21,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfws",
      "relative_path": "9574",
      "cloud_coverage_percent": 2.95,
      "usable_area_percent": 97.05,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfwy",
      "relative_path": "9575",
      "cloud_coverage_percent": 26.81,
      "usable_area_percent": 73.19,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfxb",
      "relative_path": "9576",
      "cloud_coverage_percent": 49.58,
      "usable_area_percent": 50.42,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfxq",
      "relative_path": "9577",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfyp",
      "relative_path": "9578",
      "cloud_coverage_percent": 97.72,
      "usable_area_percent": 2.28,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfyr",
      "relative_path": "9579",
      "cloud_coverage_percent": 46.38,
      "usable_area_percent": 53.62,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfyv",
      "relative_path": "9580",
      "cloud_coverage_percent": 7.45,
      "usable_area_percent": 92.55,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfzb",
      "relative_path": "9581",
      "cloud_coverage_percent": 37.25,
      "usable_area_percent": 62.75,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfzi",
      "relative_path": "9582",
      "cloud_coverage_percent": 34.61,
      "usable_area_percent": 65.39,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfzk",
      "relative_path": "9583",
      "cloud_coverage_percent": 95.9,
      "usable_area_percent": 4.1,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wfzq",
      "relative_path": "9584",
      "cloud_coverage_percent": 97.84,
      "usable_area_percent": 2.16,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wgcj",
      "relative_path": "9585",
      "cloud_coverage_percent": 3.89,
      "usable_area_percent": 96.11,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wgdc",
      "relative_path": "9586",
      "cloud_coverage_percent": 87.09,
      "usable_area_percent": 12.91,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wgdq",
      "relative_path": "9587",
      "cloud_coverage_percent": 1.6,
      "usable_area_percent": 98.4,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wgei",
      "relative_path": "9588",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wgen",
      "relative_path": "9589",
      "cloud_coverage_percent": 99.78,
      "usable_area_percent": 0.22,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wges",
      "relative_path": "9590",
      "cloud_coverage_percent": 12.39,
      "usable_area_percent": 87.61,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wghb",
      "relative_path": "9591",
      "cloud_coverage_percent": 87.32,
      "usable_area_percent": 12.68,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wghf",
      "relative_path": "9592",
      "cloud_coverage_percent": 73.73,
      "usable_area_percent": 26.27,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wssd",
      "relative_path": "9820",
      "cloud_coverage_percent": 10.96,
      "usable_area_percent": 89.04,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wssh",
      "relative_path": "9821",
      "cloud_coverage_percent": 0.04,
      "usable_area_percent": 99.96,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wssr",
      "relative_path": "9822",
      "cloud_coverage_percent": 13.16,
      "usable_area_percent": 86.84,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wsua",
      "relative_path": "9823",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wsul",
      "relative_path": "9824",
      "cloud_coverage_percent": 42.12,
      "usable_area_percent": 57.88,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wsvh",
      "relative_path": "9825",
      "cloud_coverage_percent": 10.25,
      "usable_area_percent": 89.75,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wswi",
      "relative_path": "9826",
      "cloud_coverage_percent": 81.04,
      "usable_area_percent": 18.96,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wsyn",
      "relative_path": "9827",
      "cloud_coverage_percent": 34.46,
      "usable_area_percent": 65.54,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wszc",
      "relative_path": "9828",
      "cloud_coverage_percent": 76.16,
      "usable_area_percent": 23.84,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtau",
      "relative_path": "9829",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtbe",
      "relative_path": "9830",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtdv",
      "relative_path": "9831",
      "cloud_coverage_percent": 38.55,
      "usable_area_percent": 61.45,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtep",
      "relative_path": "9832",
      "cloud_coverage_percent": 49.65,
      "usable_area_percent": 50.35,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtey",
      "relative_path": "9833",
      "cloud_coverage_percent": 33.62,
      "usable_area_percent": 66.38,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtfr",
      "relative_path": "9834",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtgk",
      "relative_path": "9835",
      "cloud_coverage_percent": 0.11,
      "usable_area_percent": 99.89,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtgt",
      "relative_path": "9836",
      "cloud_coverage_percent": 76.69,
      "usable_area_percent": 23.31,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtgw",
      "relative_path": "9837",
      "cloud_coverage_percent": 93.96,
      "usable_area_percent": 6.04,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wthb",
      "relative_path": "9838",
      "cloud_coverage_percent": 21.23,
      "usable_area_percent": 78.77,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wthd",
      "relative_path": "9839",
      "cloud_coverage_percent": 49.24,
      "usable_area_percent": 50.76,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtjd",
      "relative_path": "9840",
      "cloud_coverage_percent": 65.1,
      "usable_area_percent": 34.9,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtjf",
      "relative_path": "9841",
      "cloud_coverage_percent": 16.47,
      "usable_area_percent": 83.53,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtjn",
      "relative_path": "9842",
      "cloud_coverage_percent": 37.69,
      "usable_area_percent": 62.31,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtld",
      "relative_path": "9843",
      "cloud_coverage_percent": 3.31,
      "usable_area_percent": 96.69,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtmi",
      "relative_path": "9844",
      "cloud_coverage_percent": 41.13,
      "usable_area_percent": 58.87,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtnd",
      "relative_path": "9845",
      "cloud_coverage_percent": 0.53,
      "usable_area_percent": 99.47,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtnj",
      "relative_path": "9846",
      "cloud_coverage_percent": 3.55,
      "usable_area_percent": 96.45,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtnk",
      "relative_path": "9847",
      "cloud_coverage_percent": 2.21,
      "usable_area_percent": 97.79,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtnx",
      "relative_path": "9848",
      "cloud_coverage_percent": 93.21,
      "usable_area_percent": 6.79,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtny",
      "relative_path": "9849",
      "cloud_coverage_percent": 11.8,
      "usable_area_percent": 88.2,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtoa",
      "relative_path": "9850",
      "cloud_coverage_percent": 13.46,
      "usable_area_percent": 86.54,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtoe",
      "relative_path": "9851",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtpj",
      "relative_path": "9852",
      "cloud_coverage_percent": 36.05,
      "usable_area_percent": 63.95,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtqc",
      "relative_path": "9853",
      "cloud_coverage_percent": 13.07,
      "usable_area_percent": 86.93,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtqe",
      "relative_path": "9854",
      "cloud_coverage_percent": 44.39,
      "usable_area_percent": 55.61,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtqn",
      "relative_path": "9855",
      "cloud_coverage_percent": 14.86,
      "usable_area_percent": 85.14,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtqu",
      "relative_path": "9856",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtrn",
      "relative_path": "9857",
      "cloud_coverage_percent": 1.47,
      "usable_area_percent": 98.53,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtrt",
      "relative_path": "9858",
      "cloud_coverage_percent": 3.33,
      "usable_area_percent": 96.67,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtse",
      "relative_path": "9859",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtsh",
      "relative_path": "9860",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtsx",
      "relative_path": "9861",
      "cloud_coverage_percent": 1.64,
      "usable_area_percent": 98.36,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtun",
      "relative_path": "9862",
      "cloud_coverage_percent": 14.13,
      "usable_area_percent": 85.87,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtuy",
      "relative_path": "9863",
      "cloud_coverage_percent": 25.31,
      "usable_area_percent": 74.69,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtxc",
      "relative_path": "9864",
      "cloud_coverage_percent": 0.01,
      "usable_area_percent": 99.99,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtxi",
      "relative_path": "9865",
      "cloud_coverage_percent": 3.13,
      "usable_area_percent": 96.87,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtxo",
      "relative_path": "9866",
      "cloud_coverage_percent": 12.97,
      "usable_area_percent": 87.03,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wtzh",
      "relative_path": "9867",
      "cloud_coverage_percent": 7.72,
      "usable_area_percent": 92.28,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wuae",
      "relative_path": "9868",
      "cloud_coverage_percent": 90.34,
      "usable_area_percent": 9.66,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wuai",
      "relative_path": "9869",
      "cloud_coverage_percent": 89.12,
      "usable_area_percent": 10.88,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wubb",
      "relative_path": "9870",
      "cloud_coverage_percent": 2.21,
      "usable_area_percent": 97.79,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wubp",
      "relative_path": "9871",
      "cloud_coverage_percent": 6.11,
      "usable_area_percent": 93.89,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wucd",
      "relative_path": "9872",
      "cloud_coverage_percent": 1.92,
      "usable_area_percent": 98.08,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wuci",
      "relative_path": "9873",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wudz",
      "relative_path": "9874",
      "cloud_coverage_percent": 7.67,
      "usable_area_percent": 92.33,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wuel",
      "relative_path": "9875",
      "cloud_coverage_percent": 43.45,
      "usable_area_percent": 56.55,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wufl",
      "relative_path": "9876",
      "cloud_coverage_percent": 27.43,
      "usable_area_percent": 72.57,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wugs",
      "relative_path": "9877",
      "cloud_coverage_percent": 28.68,
      "usable_area_percent": 71.32,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wuib",
      "relative_path": "9878",
      "cloud_coverage_percent": 6.52,
      "usable_area_percent": 93.48,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wuiu",
      "relative_path": "9879",
      "cloud_coverage_percent": 2.72,
      "usable_area_percent": 97.28,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wukw",
      "relative_path": "9880",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wulc",
      "relative_path": "9881",
      "cloud_coverage_percent": 41.91,
      "usable_area_percent": 58.09,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wulw",
      "relative_path": "9882",
      "cloud_coverage_percent": 48.56,
      "usable_area_percent": 51.44,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wumo",
      "relative_path": "9883",
      "cloud_coverage_percent": 9.51,
      "usable_area_percent": 90.49,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wums",
      "relative_path": "9884",
      "cloud_coverage_percent": 15.23,
      "usable_area_percent": 84.77,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wunq",
      "relative_path": "9885",
      "cloud_coverage_percent": 41.18,
      "usable_area_percent": 58.82,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wunt",
      "relative_path": "9886",
      "cloud_coverage_percent": 60.09,
      "usable_area_percent": 39.91,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wuod",
      "relative_path": "9887",
      "cloud_coverage_percent": 14.11,
      "usable_area_percent": 85.89,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wupw",
      "relative_path": "9888",
      "cloud_coverage_percent": 76.61,
      "usable_area_percent": 23.39,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wuqt",
      "relative_path": "9889",
      "cloud_coverage_percent": 41.14,
      "usable_area_percent": 58.86,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wutx",
      "relative_path": "9890",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wutz",
      "relative_path": "9891",
      "cloud_coverage_percent": 4.15,
      "usable_area_percent": 95.85,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wuup",
      "relative_path": "9892",
      "cloud_coverage_percent": 43.42,
      "usable_area_percent": 56.58,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wuva",
      "relative_path": "9893",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wuvk",
      "relative_path": "9894",
      "cloud_coverage_percent": 51.48,
      "usable_area_percent": 48.52,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wuvp",
      "relative_path": "9895",
      "cloud_coverage_percent": 56.46,
      "usable_area_percent": 43.54,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wuwc",
      "relative_path": "9896",
      "cloud_coverage_percent": 90.8,
      "usable_area_percent": 9.2,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wuwx",
      "relative_path": "9897",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wuzh",
      "relative_path": "9898",
      "cloud_coverage_percent": 52.6,
      "usable_area_percent": 47.4,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wuzt",
      "relative_path": "9899",
      "cloud_coverage_percent": 20.4,
      "usable_area_percent": 79.6,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvat",
      "relative_path": "9900",
      "cloud_coverage_percent": 38.98,
      "usable_area_percent": 61.02,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvcr",
      "relative_path": "9901",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvcs",
      "relative_path": "9902",
      "cloud_coverage_percent": 74.99,
      "usable_area_percent": 25.01,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvct",
      "relative_path": "9903",
      "cloud_coverage_percent": 96.74,
      "usable_area_percent": 3.26,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvcu",
      "relative_path": "9904",
      "cloud_coverage_percent": 25.58,
      "usable_area_percent": 74.42,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvcz",
      "relative_path": "9905",
      "cloud_coverage_percent": 74.31,
      "usable_area_percent": 25.69,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvdg",
      "relative_path": "9906",
      "cloud_coverage_percent": 52.35,
      "usable_area_percent": 47.65,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvdh",
      "relative_path": "9907",
      "cloud_coverage_percent": 0.72,
      "usable_area_percent": 99.28,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvdn",
      "relative_path": "9908",
      "cloud_coverage_percent": 2.97,
      "usable_area_percent": 97.03,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvdq",
      "relative_path": "9909",
      "cloud_coverage_percent": 28.65,
      "usable_area_percent": 71.35,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wveb",
      "relative_path": "9910",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvec",
      "relative_path": "9911",
      "cloud_coverage_percent": 4.89,
      "usable_area_percent": 95.11,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvev",
      "relative_path": "9912",
      "cloud_coverage_percent": 66.09,
      "usable_area_percent": 33.91,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvhe",
      "relative_path": "9913",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvij",
      "relative_path": "9914",
      "cloud_coverage_percent": 87.14,
      "usable_area_percent": 12.86,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvjs",
      "relative_path": "9915",
      "cloud_coverage_percent": 39.18,
      "usable_area_percent": 60.82,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvkb",
      "relative_path": "9916",
      "cloud_coverage_percent": 62.96,
      "usable_area_percent": 37.04,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvkl",
      "relative_path": "9917",
      "cloud_coverage_percent": 29.08,
      "usable_area_percent": 70.92,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvlm",
      "relative_path": "9918",
      "cloud_coverage_percent": 78.03,
      "usable_area_percent": 21.97,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvlz",
      "relative_path": "9919",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvml",
      "relative_path": "9920",
      "cloud_coverage_percent": 1.31,
      "usable_area_percent": 98.69,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvnq",
      "relative_path": "9921",
      "cloud_coverage_percent": 17.25,
      "usable_area_percent": 82.75,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvog",
      "relative_path": "9922",
      "cloud_coverage_percent": 73.37,
      "usable_area_percent": 26.63,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvon",
      "relative_path": "9923",
      "cloud_coverage_percent": 4.72,
      "usable_area_percent": 95.28,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvpg",
      "relative_path": "9924",
      "cloud_coverage_percent": 28.74,
      "usable_area_percent": 71.26,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvpu",
      "relative_path": "9925",
      "cloud_coverage_percent": 34.88,
      "usable_area_percent": 65.12,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvqw",
      "relative_path": "9926",
      "cloud_coverage_percent": 42.95,
      "usable_area_percent": 57.05,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvrd",
      "relative_path": "9927",
      "cloud_coverage_percent": 77.16,
      "usable_area_percent": 22.84,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvrq",
      "relative_path": "9928",
      "cloud_coverage_percent": 7.33,
      "usable_area_percent": 92.67,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvrs",
      "relative_path": "9929",
      "cloud_coverage_percent": 49.25,
      "usable_area_percent": 50.75,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvrt",
      "relative_path": "9930",
      "cloud_coverage_percent": 93.33,
      "usable_area_percent": 6.67,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvug",
      "relative_path": "9931",
      "cloud_coverage_percent": 1.57,
      "usable_area_percent": 98.43,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvxd",
      "relative_path": "9932",
      "cloud_coverage_percent": 9.63,
      "usable_area_percent": 90.37,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvyf",
      "relative_path": "9933",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvzh",
      "relative_path": "9934",
      "cloud_coverage_percent": 14.57,
      "usable_area_percent": 85.43,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvzl",
      "relative_path": "9935",
      "cloud_coverage_percent": 46.36,
      "usable_area_percent": 53.64,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wvzy",
      "relative_path": "9936",
      "cloud_coverage_percent": 17.2,
      "usable_area_percent": 82.8,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wwav",
      "relative_path": "9937",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wwbm",
      "relative_path": "9938",
      "cloud_coverage_percent": 9.97,
      "usable_area_percent": 90.03,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wwbv",
      "relative_path": "9939",
      "cloud_coverage_percent": 87.36,
      "usable_area_percent": 12.64,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wwcr",
      "relative_path": "9940",
      "cloud_coverage_percent": 11.64,
      "usable_area_percent": 88.36,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wwcv",
      "relative_path": "9941",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wwfk",
      "relative_path": "9942",
      "cloud_coverage_percent": 66.78,
      "usable_area_percent": 33.22,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wwgg",
      "relative_path": "9943",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wwil",
      "relative_path": "9944",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wwjg",
      "relative_path": "9945",
      "cloud_coverage_percent": 3.13,
      "usable_area_percent": 96.87,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wwjo",
      "relative_path": "9946",
      "cloud_coverage_percent": 27.37,
      "usable_area_percent": 72.63,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wwjq",
      "relative_path": "9947",
      "cloud_coverage_percent": 10.38,
      "usable_area_percent": 89.62,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wwkb",
      "relative_path": "9948",
      "cloud_coverage_percent": 69.25,
      "usable_area_percent": 30.75,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wwmi",
      "relative_path": "9949",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wwne",
      "relative_path": "9950",
      "cloud_coverage_percent": 11.75,
      "usable_area_percent": 88.25,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wwnl",
      "relative_path": "9951",
      "cloud_coverage_percent": 24.48,
      "usable_area_percent": 75.52,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wwnp",
      "relative_path": "9952",
      "cloud_coverage_percent": 86.37,
      "usable_area_percent": 13.63,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wwpd",
      "relative_path": "9953",
      "cloud_coverage_percent": 39.79,
      "usable_area_percent": 60.21,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wwsq",
      "relative_path": "9954",
      "cloud_coverage_percent": 58.4,
      "usable_area_percent": 41.6,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wwtf",
      "relative_path": "9955",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wwtg",
      "relative_path": "9956",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wwui",
      "relative_path": "9957",
      "cloud_coverage_percent": 37.57,
      "usable_area_percent": 62.43,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wwvk",
      "relative_path": "9958",
      "cloud_coverage_percent": 29.45,
      "usable_area_percent": 70.55,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wwvv",
      "relative_path": "9959",
      "cloud_coverage_percent": 82.36,
      "usable_area_percent": 17.64,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wwwd",
      "relative_path": "9960",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wwwe",
      "relative_path": "9961",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wwyd",
      "relative_path": "9962",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wwyp",
      "relative_path": "9963",
      "cloud_coverage_percent": 29.67,
      "usable_area_percent": 70.33,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wwyu",
      "relative_path": "9964",
      "cloud_coverage_percent": 30.09,
      "usable_area_percent": 69.91,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wwzu",
      "relative_path": "9965",
      "cloud_coverage_percent": 36.17,
      "usable_area_percent": 63.83,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wxan",
      "relative_path": "9966",
      "cloud_coverage_percent": 16.57,
      "usable_area_percent": 83.43,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wxat",
      "relative_path": "9967",
      "cloud_coverage_percent": 18.15,
      "usable_area_percent": 81.85,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wxbc",
      "relative_path": "9968",
      "cloud_coverage_percent": 22.81,
      "usable_area_percent": 77.19,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wxbd",
      "relative_path": "9969",
      "cloud_coverage_percent": 28.18,
      "usable_area_percent": 71.82,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wxbu",
      "relative_path": "9970",
      "cloud_coverage_percent": 99.14,
      "usable_area_percent": 0.86,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wxcl",
      "relative_path": "9971",
      "cloud_coverage_percent": 86.74,
      "usable_area_percent": 13.26,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wxco",
      "relative_path": "9972",
      "cloud_coverage_percent": 58.35,
      "usable_area_percent": 41.65,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wxcy",
      "relative_path": "9973",
      "cloud_coverage_percent": 76.19,
      "usable_area_percent": 23.81,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wxdd",
      "relative_path": "9974",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wxed",
      "relative_path": "9975",
      "cloud_coverage_percent": 33.99,
      "usable_area_percent": 66.01,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wxeh",
      "relative_path": "9976",
      "cloud_coverage_percent": 86.55,
      "usable_area_percent": 13.45,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wxfr",
      "relative_path": "9977",
      "cloud_coverage_percent": 37.83,
      "usable_area_percent": 62.17,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "wxfx",
      "relative_path": "9978",
      "cloud_coverage_percent": 38.6,
      "usable_area_percent": 61.4,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xjqe",
      "relative_path": "10324",
      "cloud_coverage_percent": 19.82,
      "usable_area_percent": 80.18,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xjqx",
      "relative_path": "10325",
      "cloud_coverage_percent": 85.21,
      "usable_area_percent": 14.79,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xjrh",
      "relative_path": "10326",
      "cloud_coverage_percent": 75.72,
      "usable_area_percent": 24.28,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xjrs",
      "relative_path": "10327",
      "cloud_coverage_percent": 98.74,
      "usable_area_percent": 1.26,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xjrz",
      "relative_path": "10328",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xjss",
      "relative_path": "10329",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xjva",
      "relative_path": "10330",
      "cloud_coverage_percent": 83.67,
      "usable_area_percent": 16.33,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xjvn",
      "relative_path": "10331",
      "cloud_coverage_percent": 95.47,
      "usable_area_percent": 4.53,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xjwu",
      "relative_path": "10332",
      "cloud_coverage_percent": 71.97,
      "usable_area_percent": 28.03,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xjyc",
      "relative_path": "10333",
      "cloud_coverage_percent": 89.55,
      "usable_area_percent": 10.45,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xjym",
      "relative_path": "10334",
      "cloud_coverage_percent": 66.24,
      "usable_area_percent": 33.76,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xjzb",
      "relative_path": "10335",
      "cloud_coverage_percent": 2.78,
      "usable_area_percent": 97.22,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xjzr",
      "relative_path": "10336",
      "cloud_coverage_percent": 93.38,
      "usable_area_percent": 6.62,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xjzw",
      "relative_path": "10337",
      "cloud_coverage_percent": 75.01,
      "usable_area_percent": 24.99,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xkbk",
      "relative_path": "10338",
      "cloud_coverage_percent": 98.35,
      "usable_area_percent": 1.65,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xkbv",
      "relative_path": "10339",
      "cloud_coverage_percent": 1.42,
      "usable_area_percent": 98.58,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xkdt",
      "relative_path": "10340",
      "cloud_coverage_percent": 3.23,
      "usable_area_percent": 96.77,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xkfl",
      "relative_path": "10341",
      "cloud_coverage_percent": 8.15,
      "usable_area_percent": 91.85,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xkgb",
      "relative_path": "10342",
      "cloud_coverage_percent": 0.29,
      "usable_area_percent": 99.71,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xkgf",
      "relative_path": "10343",
      "cloud_coverage_percent": 99.99,
      "usable_area_percent": 0.01,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xkhu",
      "relative_path": "10344",
      "cloud_coverage_percent": 37.81,
      "usable_area_percent": 62.19,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xkio",
      "relative_path": "10345",
      "cloud_coverage_percent": 3.75,
      "usable_area_percent": 96.25,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xkiv",
      "relative_path": "10346",
      "cloud_coverage_percent": 97.86,
      "usable_area_percent": 2.14,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xkjn",
      "relative_path": "10347",
      "cloud_coverage_percent": 89.92,
      "usable_area_percent": 10.08,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xkkr",
      "relative_path": "10348",
      "cloud_coverage_percent": 40.61,
      "usable_area_percent": 59.39,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xkmf",
      "relative_path": "10349",
      "cloud_coverage_percent": 67.2,
      "usable_area_percent": 32.8,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xkoh",
      "relative_path": "10350",
      "cloud_coverage_percent": 85.41,
      "usable_area_percent": 14.59,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xkov",
      "relative_path": "10351",
      "cloud_coverage_percent": 50.32,
      "usable_area_percent": 49.68,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xkpa",
      "relative_path": "10352",
      "cloud_coverage_percent": 39.32,
      "usable_area_percent": 60.68,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xkpj",
      "relative_path": "10353",
      "cloud_coverage_percent": 72.28,
      "usable_area_percent": 27.72,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xksd",
      "relative_path": "10354",
      "cloud_coverage_percent": 94.83,
      "usable_area_percent": 5.17,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xksv",
      "relative_path": "10355",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xktc",
      "relative_path": "10356",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xkwb",
      "relative_path": "10357",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xkwk",
      "relative_path": "10358",
      "cloud_coverage_percent": 31.64,
      "usable_area_percent": 68.36,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xkwm",
      "relative_path": "10359",
      "cloud_coverage_percent": 57.96,
      "usable_area_percent": 42.04,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xkwr",
      "relative_path": "10360",
      "cloud_coverage_percent": 98.78,
      "usable_area_percent": 1.22,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xkxb",
      "relative_path": "10361",
      "cloud_coverage_percent": 92.56,
      "usable_area_percent": 7.44,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xkxk",
      "relative_path": "10362",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xkyf",
      "relative_path": "10363",
      "cloud_coverage_percent": 99.27,
      "usable_area_percent": 0.73,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xlas",
      "relative_path": "10364",
      "cloud_coverage_percent": 10.46,
      "usable_area_percent": 89.54,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xlbd",
      "relative_path": "10365",
      "cloud_coverage_percent": 74.99,
      "usable_area_percent": 25.01,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xlbs",
      "relative_path": "10366",
      "cloud_coverage_percent": 87.61,
      "usable_area_percent": 12.39,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xldo",
      "relative_path": "10367",
      "cloud_coverage_percent": 44.88,
      "usable_area_percent": 55.12,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xlgg",
      "relative_path": "10368",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xlgr",
      "relative_path": "10369",
      "cloud_coverage_percent": 54.46,
      "usable_area_percent": 45.54,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xlhq",
      "relative_path": "10370",
      "cloud_coverage_percent": 67.6,
      "usable_area_percent": 32.4,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xlhx",
      "relative_path": "10371",
      "cloud_coverage_percent": 99.79,
      "usable_area_percent": 0.21,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xljg",
      "relative_path": "10372",
      "cloud_coverage_percent": 86.39,
      "usable_area_percent": 13.61,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xlki",
      "relative_path": "10373",
      "cloud_coverage_percent": 75.14,
      "usable_area_percent": 24.86,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xlle",
      "relative_path": "10374",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xllj",
      "relative_path": "10375",
      "cloud_coverage_percent": 61.48,
      "usable_area_percent": 38.52,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xlmq",
      "relative_path": "10376",
      "cloud_coverage_percent": 55.2,
      "usable_area_percent": 44.8,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xlmv",
      "relative_path": "10377",
      "cloud_coverage_percent": 56.48,
      "usable_area_percent": 43.52,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xlnk",
      "relative_path": "10378",
      "cloud_coverage_percent": 1.59,
      "usable_area_percent": 98.41,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xlqi",
      "relative_path": "10379",
      "cloud_coverage_percent": 35.54,
      "usable_area_percent": 64.46,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xlqo",
      "relative_path": "10380",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xlqr",
      "relative_path": "10381",
      "cloud_coverage_percent": 76.39,
      "usable_area_percent": 23.61,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xlra",
      "relative_path": "10382",
      "cloud_coverage_percent": 78.34,
      "usable_area_percent": 21.66,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xlsy",
      "relative_path": "10383",
      "cloud_coverage_percent": 72.82,
      "usable_area_percent": 27.18,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xltr",
      "relative_path": "10384",
      "cloud_coverage_percent": 55.48,
      "usable_area_percent": 44.52,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xluc",
      "relative_path": "10385",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xlus",
      "relative_path": "10386",
      "cloud_coverage_percent": 72.96,
      "usable_area_percent": 27.04,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xlve",
      "relative_path": "10387",
      "cloud_coverage_percent": 80.19,
      "usable_area_percent": 19.81,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xlvh",
      "relative_path": "10388",
      "cloud_coverage_percent": 64.51,
      "usable_area_percent": 35.49,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xlvr",
      "relative_path": "10389",
      "cloud_coverage_percent": 7.56,
      "usable_area_percent": 92.44,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xlvz",
      "relative_path": "10390",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmau",
      "relative_path": "10391",
      "cloud_coverage_percent": 37.14,
      "usable_area_percent": 62.86,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmdd",
      "relative_path": "10392",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmdm",
      "relative_path": "10393",
      "cloud_coverage_percent": 52.5,
      "usable_area_percent": 47.5,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmfc",
      "relative_path": "10394",
      "cloud_coverage_percent": 99.54,
      "usable_area_percent": 0.46,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmfz",
      "relative_path": "10395",
      "cloud_coverage_percent": 48.65,
      "usable_area_percent": 51.35,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmgi",
      "relative_path": "10396",
      "cloud_coverage_percent": 40.35,
      "usable_area_percent": 59.65,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmhc",
      "relative_path": "10397",
      "cloud_coverage_percent": 0.9,
      "usable_area_percent": 99.1,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmhh",
      "relative_path": "10398",
      "cloud_coverage_percent": 84.35,
      "usable_area_percent": 15.65,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmho",
      "relative_path": "10399",
      "cloud_coverage_percent": 99.79,
      "usable_area_percent": 0.21,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmic",
      "relative_path": "10400",
      "cloud_coverage_percent": 62.06,
      "usable_area_percent": 37.94,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmiw",
      "relative_path": "10401",
      "cloud_coverage_percent": 84.54,
      "usable_area_percent": 15.46,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmja",
      "relative_path": "10402",
      "cloud_coverage_percent": 73.62,
      "usable_area_percent": 26.38,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmkj",
      "relative_path": "10403",
      "cloud_coverage_percent": 89.64,
      "usable_area_percent": 10.36,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmkl",
      "relative_path": "10404",
      "cloud_coverage_percent": 98.97,
      "usable_area_percent": 1.03,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmkq",
      "relative_path": "10405",
      "cloud_coverage_percent": 99.78,
      "usable_area_percent": 0.22,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmkv",
      "relative_path": "10406",
      "cloud_coverage_percent": 72.63,
      "usable_area_percent": 27.37,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmlu",
      "relative_path": "10407",
      "cloud_coverage_percent": 5.96,
      "usable_area_percent": 94.04,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmmc",
      "relative_path": "10408",
      "cloud_coverage_percent": 99.5,
      "usable_area_percent": 0.5,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmnq",
      "relative_path": "10409",
      "cloud_coverage_percent": 62.79,
      "usable_area_percent": 37.21,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmpr",
      "relative_path": "10410",
      "cloud_coverage_percent": 77.93,
      "usable_area_percent": 22.07,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmqq",
      "relative_path": "10411",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmrn",
      "relative_path": "10412",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmrs",
      "relative_path": "10413",
      "cloud_coverage_percent": 20.91,
      "usable_area_percent": 79.09,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmsg",
      "relative_path": "10414",
      "cloud_coverage_percent": 77.34,
      "usable_area_percent": 22.66,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmss",
      "relative_path": "10415",
      "cloud_coverage_percent": 68.51,
      "usable_area_percent": 31.49,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmsu",
      "relative_path": "10416",
      "cloud_coverage_percent": 85.29,
      "usable_area_percent": 14.71,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmtd",
      "relative_path": "10417",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmtu",
      "relative_path": "10418",
      "cloud_coverage_percent": 83.48,
      "usable_area_percent": 16.52,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmul",
      "relative_path": "10419",
      "cloud_coverage_percent": 9.33,
      "usable_area_percent": 90.67,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmvr",
      "relative_path": "10420",
      "cloud_coverage_percent": 61.58,
      "usable_area_percent": 38.42,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmxa",
      "relative_path": "10421",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmxs",
      "relative_path": "10422",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmyt",
      "relative_path": "10423",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmzb",
      "relative_path": "10424",
      "cloud_coverage_percent": 12.69,
      "usable_area_percent": 87.31,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xmzr",
      "relative_path": "10425",
      "cloud_coverage_percent": 98.56,
      "usable_area_percent": 1.44,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xnaa",
      "relative_path": "10426",
      "cloud_coverage_percent": 88.38,
      "usable_area_percent": 11.62,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xnap",
      "relative_path": "10427",
      "cloud_coverage_percent": 93.89,
      "usable_area_percent": 6.11,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xnbs",
      "relative_path": "10428",
      "cloud_coverage_percent": 54.07,
      "usable_area_percent": 45.93,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xncu",
      "relative_path": "10429",
      "cloud_coverage_percent": 20.66,
      "usable_area_percent": 79.34,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xncx",
      "relative_path": "10430",
      "cloud_coverage_percent": 0.77,
      "usable_area_percent": 99.23,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xnen",
      "relative_path": "10431",
      "cloud_coverage_percent": 88.89,
      "usable_area_percent": 11.11,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xnep",
      "relative_path": "10432",
      "cloud_coverage_percent": 82.86,
      "usable_area_percent": 17.14,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xnez",
      "relative_path": "10433",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xnff",
      "relative_path": "10434",
      "cloud_coverage_percent": 48.53,
      "usable_area_percent": 51.47,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xnfm",
      "relative_path": "10435",
      "cloud_coverage_percent": 81.08,
      "usable_area_percent": 18.92,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xnfn",
      "relative_path": "10436",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xnjr",
      "relative_path": "10437",
      "cloud_coverage_percent": 4.39,
      "usable_area_percent": 95.61,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xnjy",
      "relative_path": "10438",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xnkc",
      "relative_path": "10439",
      "cloud_coverage_percent": 41.77,
      "usable_area_percent": 58.23,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xnkf",
      "relative_path": "10440",
      "cloud_coverage_percent": 46.64,
      "usable_area_percent": 53.36,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xnkl",
      "relative_path": "10441",
      "cloud_coverage_percent": 65.35,
      "usable_area_percent": 34.65,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xnlv",
      "relative_path": "10442",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xnps",
      "relative_path": "10443",
      "cloud_coverage_percent": 99.18,
      "usable_area_percent": 0.82,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xnqf",
      "relative_path": "10444",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xnqn",
      "relative_path": "10445",
      "cloud_coverage_percent": 73.18,
      "usable_area_percent": 26.82,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xnqs",
      "relative_path": "10446",
      "cloud_coverage_percent": 63.45,
      "usable_area_percent": 36.55,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xnqx",
      "relative_path": "10447",
      "cloud_coverage_percent": 92.16,
      "usable_area_percent": 7.84,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xnqz",
      "relative_path": "10448",
      "cloud_coverage_percent": 2.93,
      "usable_area_percent": 97.07,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xnre",
      "relative_path": "10449",
      "cloud_coverage_percent": 87.76,
      "usable_area_percent": 12.24,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xnrp",
      "relative_path": "10450",
      "cloud_coverage_percent": 4.85,
      "usable_area_percent": 95.15,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xnsd",
      "relative_path": "10451",
      "cloud_coverage_percent": 15.49,
      "usable_area_percent": 84.51,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xnsp",
      "relative_path": "10452",
      "cloud_coverage_percent": 58.63,
      "usable_area_percent": 41.37,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xnva",
      "relative_path": "10453",
      "cloud_coverage_percent": 76.09,
      "usable_area_percent": 23.91,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xnvn",
      "relative_path": "10454",
      "cloud_coverage_percent": 14.86,
      "usable_area_percent": 85.14,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xnwh",
      "relative_path": "10455",
      "cloud_coverage_percent": 46.04,
      "usable_area_percent": 53.96,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xnxh",
      "relative_path": "10456",
      "cloud_coverage_percent": 11.27,
      "usable_area_percent": 88.73,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xnzr",
      "relative_path": "10457",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xoac",
      "relative_path": "10458",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xoaz",
      "relative_path": "10459",
      "cloud_coverage_percent": 84.56,
      "usable_area_percent": 15.44,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xobg",
      "relative_path": "10460",
      "cloud_coverage_percent": 35.96,
      "usable_area_percent": 64.04,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xobk",
      "relative_path": "10461",
      "cloud_coverage_percent": 4.86,
      "usable_area_percent": 95.14,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xobs",
      "relative_path": "10462",
      "cloud_coverage_percent": 79.03,
      "usable_area_percent": 20.97,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xoca",
      "relative_path": "10463",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xocs",
      "relative_path": "10464",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xoda",
      "relative_path": "10465",
      "cloud_coverage_percent": 67.96,
      "usable_area_percent": 32.04,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xogi",
      "relative_path": "10466",
      "cloud_coverage_percent": 60.33,
      "usable_area_percent": 39.67,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xohb",
      "relative_path": "10467",
      "cloud_coverage_percent": 17.11,
      "usable_area_percent": 82.89,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xohs",
      "relative_path": "10468",
      "cloud_coverage_percent": 96.48,
      "usable_area_percent": 3.52,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xojc",
      "relative_path": "10469",
      "cloud_coverage_percent": 67.37,
      "usable_area_percent": 32.63,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xoln",
      "relative_path": "10470",
      "cloud_coverage_percent": 71.97,
      "usable_area_percent": 28.03,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xolp",
      "relative_path": "10471",
      "cloud_coverage_percent": 89.12,
      "usable_area_percent": 10.88,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xomc",
      "relative_path": "10472",
      "cloud_coverage_percent": 59.33,
      "usable_area_percent": 40.67,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xone",
      "relative_path": "10473",
      "cloud_coverage_percent": 68.92,
      "usable_area_percent": 31.08,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xooq",
      "relative_path": "10474",
      "cloud_coverage_percent": 47.18,
      "usable_area_percent": 52.82,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xoqg",
      "relative_path": "10475",
      "cloud_coverage_percent": 95.73,
      "usable_area_percent": 4.27,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xoqk",
      "relative_path": "10476",
      "cloud_coverage_percent": 79.79,
      "usable_area_percent": 20.21,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xoqx",
      "relative_path": "10477",
      "cloud_coverage_percent": 88.21,
      "usable_area_percent": 11.79,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xors",
      "relative_path": "10478",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xosw",
      "relative_path": "10479",
      "cloud_coverage_percent": 2.95,
      "usable_area_percent": 97.05,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xoux",
      "relative_path": "10480",
      "cloud_coverage_percent": 64.74,
      "usable_area_percent": 35.26,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xowb",
      "relative_path": "10481",
      "cloud_coverage_percent": 88.11,
      "usable_area_percent": 11.89,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xoxk",
      "relative_path": "10482",
      "cloud_coverage_percent": 97.19,
      "usable_area_percent": 2.81,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xpbd",
      "relative_path": "10483",
      "cloud_coverage_percent": 55.96,
      "usable_area_percent": 44.04,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xpbe",
      "relative_path": "10484",
      "cloud_coverage_percent": 61.13,
      "usable_area_percent": 38.87,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xpcb",
      "relative_path": "10485",
      "cloud_coverage_percent": 7.66,
      "usable_area_percent": 92.34,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xpcd",
      "relative_path": "10486",
      "cloud_coverage_percent": 93.93,
      "usable_area_percent": 6.07,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xpcn",
      "relative_path": "10487",
      "cloud_coverage_percent": 97.66,
      "usable_area_percent": 2.34,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xpcu",
      "relative_path": "10488",
      "cloud_coverage_percent": 58.71,
      "usable_area_percent": 41.29,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xpdf",
      "relative_path": "10489",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xpek",
      "relative_path": "10490",
      "cloud_coverage_percent": 71.85,
      "usable_area_percent": 28.15,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xpey",
      "relative_path": "10491",
      "cloud_coverage_percent": 91.26,
      "usable_area_percent": 8.74,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xpfj",
      "relative_path": "10492",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xpip",
      "relative_path": "10493",
      "cloud_coverage_percent": 66.8,
      "usable_area_percent": 33.2,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xpkj",
      "relative_path": "10494",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xpkt",
      "relative_path": "10495",
      "cloud_coverage_percent": 61.31,
      "usable_area_percent": 38.69,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xplw",
      "relative_path": "10496",
      "cloud_coverage_percent": 56.31,
      "usable_area_percent": 43.69,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xpmg",
      "relative_path": "10497",
      "cloud_coverage_percent": 75.46,
      "usable_area_percent": 24.54,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xpms",
      "relative_path": "10498",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xpnp",
      "relative_path": "10499",
      "cloud_coverage_percent": 99.84,
      "usable_area_percent": 0.16,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xpok",
      "relative_path": "10500",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xpos",
      "relative_path": "10501",
      "cloud_coverage_percent": 87.94,
      "usable_area_percent": 12.06,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xpqx",
      "relative_path": "10502",
      "cloud_coverage_percent": 63.56,
      "usable_area_percent": 36.44,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xprk",
      "relative_path": "10503",
      "cloud_coverage_percent": 96.75,
      "usable_area_percent": 3.25,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xpuf",
      "relative_path": "10504",
      "cloud_coverage_percent": 37.92,
      "usable_area_percent": 62.08,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xpuk",
      "relative_path": "10505",
      "cloud_coverage_percent": 83.86,
      "usable_area_percent": 16.14,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xpvz",
      "relative_path": "10506",
      "cloud_coverage_percent": 88.24,
      "usable_area_percent": 11.76,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xpwh",
      "relative_path": "10507",
      "cloud_coverage_percent": 93.97,
      "usable_area_percent": 6.03,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xpwu",
      "relative_path": "10508",
      "cloud_coverage_percent": 98.35,
      "usable_area_percent": 1.65,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xpxg",
      "relative_path": "10509",
      "cloud_coverage_percent": 73.47,
      "usable_area_percent": 26.53,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xpyp",
      "relative_path": "10510",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xpyq",
      "relative_path": "10511",
      "cloud_coverage_percent": 78.86,
      "usable_area_percent": 21.14,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xqav",
      "relative_path": "10512",
      "cloud_coverage_percent": 96.33,
      "usable_area_percent": 3.67,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xqax",
      "relative_path": "10513",
      "cloud_coverage_percent": 58.51,
      "usable_area_percent": 41.49,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xqcn",
      "relative_path": "10514",
      "cloud_coverage_percent": 4.06,
      "usable_area_percent": 95.94,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xqct",
      "relative_path": "10515",
      "cloud_coverage_percent": 95.76,
      "usable_area_percent": 4.24,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xqeq",
      "relative_path": "10516",
      "cloud_coverage_percent": 84.62,
      "usable_area_percent": 15.38,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xqey",
      "relative_path": "10517",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xqfn",
      "relative_path": "10518",
      "cloud_coverage_percent": 74.07,
      "usable_area_percent": 25.93,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xqga",
      "relative_path": "10519",
      "cloud_coverage_percent": 22.75,
      "usable_area_percent": 77.25,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "xqgf",
      "relative_path": "10520",
      "cloud_coverage_percent": 99.38,
      "usable_area_percent": 0.62,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yvjn",
      "relative_path": "11354",
      "cloud_coverage_percent": 82.81,
      "usable_area_percent": 17.19,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yvki",
      "relative_path": "11355",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yvky",
      "relative_path": "11356",
      "cloud_coverage_percent": 0.3,
      "usable_area_percent": 99.7,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yvlq",
      "relative_path": "11357",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yvlu",
      "relative_path": "11358",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yvmd",
      "relative_path": "11359",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yvnf",
      "relative_path": "11360",
      "cloud_coverage_percent": 88.37,
      "usable_area_percent": 11.63,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yvnz",
      "relative_path": "11361",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yvpk",
      "relative_path": "11362",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yvpv",
      "relative_path": "11363",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yvqq",
      "relative_path": "11364",
      "cloud_coverage_percent": 97.71,
      "usable_area_percent": 2.29,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yvrs",
      "relative_path": "11365",
      "cloud_coverage_percent": 19.28,
      "usable_area_percent": 80.72,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yvti",
      "relative_path": "11366",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yvtn",
      "relative_path": "11367",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yvuk",
      "relative_path": "11368",
      "cloud_coverage_percent": 37.47,
      "usable_area_percent": 62.53,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yvvp",
      "relative_path": "11369",
      "cloud_coverage_percent": 49.79,
      "usable_area_percent": 50.21,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yvvy",
      "relative_path": "11370",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yvwr",
      "relative_path": "11371",
      "cloud_coverage_percent": 0.04,
      "usable_area_percent": 99.96,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yvwy",
      "relative_path": "11372",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yvxj",
      "relative_path": "11373",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yvxx",
      "relative_path": "11374",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yvyc",
      "relative_path": "11375",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yvzu",
      "relative_path": "11376",
      "cloud_coverage_percent": 71.6,
      "usable_area_percent": 28.4,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ywaa",
      "relative_path": "11377",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ywcm",
      "relative_path": "11378",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ywcv",
      "relative_path": "11379",
      "cloud_coverage_percent": 66.7,
      "usable_area_percent": 33.3,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ywdq",
      "relative_path": "11380",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ywdv",
      "relative_path": "11381",
      "cloud_coverage_percent": 16.25,
      "usable_area_percent": 83.75,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ywer",
      "relative_path": "11382",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ywfj",
      "relative_path": "11383",
      "cloud_coverage_percent": 0.09,
      "usable_area_percent": 99.91,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ywfp",
      "relative_path": "11384",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ywih",
      "relative_path": "11385",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ywjq",
      "relative_path": "11386",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ywkj",
      "relative_path": "11387",
      "cloud_coverage_percent": 16.25,
      "usable_area_percent": 83.75,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ywlr",
      "relative_path": "11388",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ywma",
      "relative_path": "11389",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ywmd",
      "relative_path": "11390",
      "cloud_coverage_percent": 97.82,
      "usable_area_percent": 2.18,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ywqk",
      "relative_path": "11391",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ywqq",
      "relative_path": "11392",
      "cloud_coverage_percent": 0.22,
      "usable_area_percent": 99.78,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ywtb",
      "relative_path": "11393",
      "cloud_coverage_percent": 7.73,
      "usable_area_percent": 92.27,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ywtf",
      "relative_path": "11394",
      "cloud_coverage_percent": 22.2,
      "usable_area_percent": 77.8,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ywtr",
      "relative_path": "11395",
      "cloud_coverage_percent": 99.63,
      "usable_area_percent": 0.37,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ywts",
      "relative_path": "11396",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ywuy",
      "relative_path": "11397",
      "cloud_coverage_percent": 93.58,
      "usable_area_percent": 6.42,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ywwl",
      "relative_path": "11398",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ywxo",
      "relative_path": "11399",
      "cloud_coverage_percent": 29.26,
      "usable_area_percent": 70.74,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ywyh",
      "relative_path": "11400",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "ywyl",
      "relative_path": "11401",
      "cloud_coverage_percent": 11.89,
      "usable_area_percent": 88.11,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxaj",
      "relative_path": "11402",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxcy",
      "relative_path": "11403",
      "cloud_coverage_percent": 3.55,
      "usable_area_percent": 96.45,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxdg",
      "relative_path": "11404",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxdh",
      "relative_path": "11405",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxdw",
      "relative_path": "11406",
      "cloud_coverage_percent": 58.09,
      "usable_area_percent": 41.91,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxga",
      "relative_path": "11407",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxgi",
      "relative_path": "11408",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxgj",
      "relative_path": "11409",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxgp",
      "relative_path": "11410",
      "cloud_coverage_percent": 0.04,
      "usable_area_percent": 99.96,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxhi",
      "relative_path": "11411",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxhk",
      "relative_path": "11412",
      "cloud_coverage_percent": 90.19,
      "usable_area_percent": 9.81,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxib",
      "relative_path": "11413",
      "cloud_coverage_percent": 99.86,
      "usable_area_percent": 0.14,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxjk",
      "relative_path": "11414",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxjr",
      "relative_path": "11415",
      "cloud_coverage_percent": 7.39,
      "usable_area_percent": 92.61,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxkw",
      "relative_path": "11416",
      "cloud_coverage_percent": 25.58,
      "usable_area_percent": 74.42,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxlb",
      "relative_path": "11417",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxld",
      "relative_path": "11418",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxlg",
      "relative_path": "11419",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxlm",
      "relative_path": "11420",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxmn",
      "relative_path": "11421",
      "cloud_coverage_percent": 63.11,
      "usable_area_percent": 36.89,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxnp",
      "relative_path": "11422",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxoi",
      "relative_path": "11423",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxoy",
      "relative_path": "11424",
      "cloud_coverage_percent": 94.61,
      "usable_area_percent": 5.39,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxps",
      "relative_path": "11425",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxqo",
      "relative_path": "11426",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxqr",
      "relative_path": "11427",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxqy",
      "relative_path": "11428",
      "cloud_coverage_percent": 99.53,
      "usable_area_percent": 0.47,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxsc",
      "relative_path": "11429",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxsl",
      "relative_path": "11430",
      "cloud_coverage_percent": 52.48,
      "usable_area_percent": 47.52,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxtc",
      "relative_path": "11431",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxuc",
      "relative_path": "11432",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxuw",
      "relative_path": "11433",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxvj",
      "relative_path": "11434",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxwv",
      "relative_path": "11435",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxxo",
      "relative_path": "11436",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxys",
      "relative_path": "11437",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yxzm",
      "relative_path": "11438",
      "cloud_coverage_percent": 13.77,
      "usable_area_percent": 86.23,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yyav",
      "relative_path": "11439",
      "cloud_coverage_percent": 6.92,
      "usable_area_percent": 93.08,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yyax",
      "relative_path": "11440",
      "cloud_coverage_percent": 99.64,
      "usable_area_percent": 0.36,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yydh",
      "relative_path": "11441",
      "cloud_coverage_percent": 26.47,
      "usable_area_percent": 73.53,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yydi",
      "relative_path": "11442",
      "cloud_coverage_percent": 85.95,
      "usable_area_percent": 14.05,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yyfb",
      "relative_path": "11443",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yyfv",
      "relative_path": "11444",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yyhh",
      "relative_path": "11445",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yyhm",
      "relative_path": "11446",
      "cloud_coverage_percent": 0.02,
      "usable_area_percent": 99.98,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yyie",
      "relative_path": "11447",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yyjq",
      "relative_path": "11448",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yyjs",
      "relative_path": "11449",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yyjx",
      "relative_path": "11450",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yyka",
      "relative_path": "11451",
      "cloud_coverage_percent": 0.04,
      "usable_area_percent": 99.96,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yykc",
      "relative_path": "11452",
      "cloud_coverage_percent": 99.98,
      "usable_area_percent": 0.02,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yylc",
      "relative_path": "11453",
      "cloud_coverage_percent": 2.48,
      "usable_area_percent": 97.52,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yylr",
      "relative_path": "11454",
      "cloud_coverage_percent": 2.62,
      "usable_area_percent": 97.38,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yymt",
      "relative_path": "11455",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yynj",
      "relative_path": "11456",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yynu",
      "relative_path": "11457",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yyqn",
      "relative_path": "11458",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yyrt",
      "relative_path": "11459",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yyss",
      "relative_path": "11460",
      "cloud_coverage_percent": 3.02,
      "usable_area_percent": 96.98,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yyta",
      "relative_path": "11461",
      "cloud_coverage_percent": 0.13,
      "usable_area_percent": 99.87,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yytp",
      "relative_path": "11462",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yyuw",
      "relative_path": "11463",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yzaf",
      "relative_path": "11464",
      "cloud_coverage_percent": 80.21,
      "usable_area_percent": 19.79,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yzao",
      "relative_path": "11465",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yzbo",
      "relative_path": "11466",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yzbs",
      "relative_path": "11467",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yzbt",
      "relative_path": "11468",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yzbw",
      "relative_path": "11469",
      "cloud_coverage_percent": 0.0,
      "usable_area_percent": 100.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yzby",
      "relative_path": "11470",
      "cloud_coverage_percent": 98.1,
      "usable_area_percent": 1.9,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yzca",
      "relative_path": "11471",
      "cloud_coverage_percent": 3.15,
      "usable_area_percent": 96.85,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yzce",
      "relative_path": "11472",
      "cloud_coverage_percent": 17.97,
      "usable_area_percent": 82.03,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yzch",
      "relative_path": "11473",
      "cloud_coverage_percent": 20.02,
      "usable_area_percent": 79.98,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yzck",
      "relative_path": "11474",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yzcw",
      "relative_path": "11475",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yzdu",
      "relative_path": "11476",
      "cloud_coverage_percent": 30.46,
      "usable_area_percent": 69.54,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yzek",
      "relative_path": "11477",
      "cloud_coverage_percent": 71.48,
      "usable_area_percent": 28.52,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yzeq",
      "relative_path": "11478",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yzfk",
      "relative_path": "11479",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yzhj",
      "relative_path": "11480",
      "cloud_coverage_percent": 81.84,
      "usable_area_percent": 18.16,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yzik",
      "relative_path": "11481",
      "cloud_coverage_percent": 15.8,
      "usable_area_percent": 84.2,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yzit",
      "relative_path": "11482",
      "cloud_coverage_percent": 99.86,
      "usable_area_percent": 0.14,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yziw",
      "relative_path": "11483",
      "cloud_coverage_percent": 79.75,
      "usable_area_percent": 20.25,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yzjf",
      "relative_path": "11484",
      "cloud_coverage_percent": 87.97,
      "usable_area_percent": 12.03,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yzjm",
      "relative_path": "11485",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yzju",
      "relative_path": "11486",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yzkr",
      "relative_path": "11487",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yzks",
      "relative_path": "11488",
      "cloud_coverage_percent": 97.25,
      "usable_area_percent": 2.75,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yzlp",
      "relative_path": "11489",
      "cloud_coverage_percent": 99.93,
      "usable_area_percent": 0.07,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yzlv",
      "relative_path": "11490",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yzmn",
      "relative_path": "11491",
      "cloud_coverage_percent": 100.0,
      "usable_area_percent": 0.0,
      "nodata_percent": 0.0
    },
    {
      "scene_id": "yznf",
      "relative_path": "11492",
      "cloud_coverage_percent": 45.64,
      "usable_area_percent": 54.36,
      "nodata_percent": 0.0
    }
  ]
};
