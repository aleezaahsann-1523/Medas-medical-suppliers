export interface FeatureGroup {
  title: string;
  items: string[];
}

// 150 features & functions supplied by Medas Medical Suppliers (used for Volta Notepad and Volta VSonic only)
export const VOLTA_FEATURE_GROUPS: FeatureGroup[] = [
  {
    "title": "Core System & Hardware",
    "items": [
      "32-Channel Digital Main Board",
      "96-Element Digital Convex Probe",
      "15\" Front Display",
      "12\" Digital HD LCD Display",
      "HD High-Resolution Imaging Display",
      "Portable Notepad-Type Ultrasound Design",
      "Compact Digital Ultrasound System",
      "Lightweight Portable Design",
      "Digital Beamforming Technology",
      "High-Sensitivity Digital Processing"
    ]
  },
  {
    "title": "Image & Scanning Functions",
    "items": [
      "B-Mode Imaging",
      "Real-Time B-Mode Scanning",
      "High-Resolution B-Mode Image",
      "Multi-Frequency Imaging Technology",
      "Digital Image Processing",
      "High-Sensitivity Signal Processing",
      "Improved Tissue Visualization",
      "Clear Anatomical Structure Display",
      "Real-Time Image Refresh",
      "Fast Image Response",
      "Gain Adjustment",
      "Overall Gain Control",
      "TGC Adjustment",
      "Dynamic Range Adjustment",
      "Contrast Adjustment",
      "Brightness Adjustment",
      "Sharpness Adjustment",
      "Focus Adjustment",
      "Depth Adjustment",
      "Zoom Function"
    ]
  },
  {
    "title": "Image Optimization",
    "items": [
      "Image Freeze Function",
      "Image Unfreeze / Live Scanning",
      "Cine Review Function",
      "Cine Loop Playback",
      "Image Magnification",
      "Image Position Adjustment",
      "Image Area Optimization",
      "Near-Field Optimization",
      "Far-Field Optimization",
      "Overall Image Optimization",
      "Speckle Reduction Processing",
      "Noise Reduction Processing",
      "Edge Enhancement",
      "Detail Enhancement",
      "Image Smoothness Adjustment",
      "Gray-Scale Image Processing",
      "Tissue Contrast Enhancement",
      "Fine Structure Enhancement",
      "Image Uniformity Optimization",
      "Digital Image Enhancement"
    ]
  },
  {
    "title": "Measurement Functions",
    "items": [
      "Distance Measurement",
      "Depth Measurement",
      "Area Measurement",
      "Circumference Measurement",
      "Volume Measurement",
      "Ratio Measurement",
      "General Measurement Tools",
      "Electronic Calipers",
      "Multiple Measurement Support",
      "Measurement Result Display",
      "Obstetric Measurement Support",
      "Gestational Age Calculation",
      "Fetal Measurement Support",
      "BPD Measurement",
      "FL Measurement",
      "AC Measurement",
      "HC Measurement",
      "CRL Measurement",
      "Estimated Fetal Weight Calculation",
      "Pregnancy Measurement Support"
    ]
  },
  {
    "title": "Report & Data Functions",
    "items": [
      "Built-In Image Storage",
      "Patient Data Storage",
      "Patient Information Entry",
      "Patient ID Entry",
      "Patient Name Entry",
      "Examination Information Storage",
      "Image Recall Function",
      "Previous Image Review",
      "Examination Review",
      "Saved Data Management",
      "Report Page Function",
      "Examination Report Support",
      "Measurement Data in Report",
      "Patient Information in Report",
      "Image Selection for Report",
      "Report Data Storage",
      "Report Review",
      "Report Printing Support",
      "Digital Report Management",
      "Clinical Documentation Support"
    ]
  },
  {
    "title": "Display & User Interface",
    "items": [
      "15\" Front Display",
      "12\" Digital HD LCD Display",
      "HD High-Resolution Display",
      "Clear On-Screen Information",
      "Patient Information Display",
      "Measurement Information Display",
      "Imaging Parameter Display",
      "Examination Information Display",
      "User-Friendly Interface",
      "Easy Menu Navigation"
    ]
  },
  {
    "title": "Probe & Hardware",
    "items": [
      "96-Element Digital Convex Probe",
      "Multi-Frequency Probe Technology",
      "High-Sensitivity Probe",
      "Digital Probe Processing",
      "Wide Scanning Field",
      "Real-Time Probe Signal Processing",
      "Digital Beamforming Support",
      "High-Quality Ultrasound Signal Reception",
      "Stable Image Processing",
      "Reliable Digital Hardware Platform"
    ]
  },
  {
    "title": "Workflow & Operation",
    "items": [
      "Quick System Startup",
      "Fast Patient Registration",
      "Fast Examination Workflow",
      "Easy Image Freeze",
      "Easy Image Review",
      "Easy Measurement Operation",
      "Easy Patient Data Entry",
      "Easy Report Operation",
      "Simple Operator Interface",
      "Efficient Daily Clinical Workflow"
    ]
  },
  {
    "title": "Clinical Applications",
    "items": [
      "General Ultrasound Examination",
      "Abdominal Examination",
      "Obstetric Examination",
      "Gynecological Examination",
      "Urological Examination",
      "Renal Examination",
      "Liver Examination",
      "Gallbladder Examination",
      "Pancreas Examination",
      "Spleen Examination",
      "Bladder Examination",
      "Prostate Examination",
      "Pelvic Examination",
      "Fetal Examination",
      "Pregnancy Follow-Up",
      "Soft Tissue Examination",
      "Superficial Structure Examination",
      "Emergency Ultrasound Support",
      "Outpatient Examination",
      "Clinic-Based Ultrasound"
    ]
  },
  {
    "title": "Portability & Practical Use",
    "items": [
      "Portable Ultrasound Solution",
      "Notepad-Type Portable Design",
      "Space-Saving Design",
      "Easy Transportation",
      "Suitable for Clinics",
      "Suitable for Hospitals",
      "Suitable for Diagnostic Centers",
      "Suitable for Private Practice",
      "Suitable for Mobile Medical Use",
      "Designed for Everyday Ultrasound Practice"
    ]
  }
];

export const VOLTA_KEY_HIGHLIGHTS: string[] = [
  "32-Channel Digital Main Board",
  "96-Element Digital Convex Probe",
  "15\" Front Display",
  "12\" Digital HD LCD Display",
  "HD High-Resolution Imaging",
  "Digital Beamforming Technology",
  "Multi-Frequency Probe Technology",
  "Image Optimization Functions",
  "Measurement Functions",
  "Report & Patient Data Functions",
  "Portable Notepad-Type Design"
];

// Volta VSonic uses an 80-element digital convex probe (Volta Notepad keeps the 96-element probe)
const toEighty = (text: string): string => text.replace(/96-Element/g, '80-Element');

export const VSONIC_FEATURE_GROUPS: FeatureGroup[] = VOLTA_FEATURE_GROUPS.map((group) => ({
  title: group.title,
  items: group.items.map(toEighty),
}));

export const VSONIC_KEY_HIGHLIGHTS: string[] = VOLTA_KEY_HIGHLIGHTS.map(toEighty);
