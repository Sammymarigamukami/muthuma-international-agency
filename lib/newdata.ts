import { newProduct } from "./newtype";

export const newproducts: newProduct[] = [
  {
    id: "1",
    name: "Digital Thermometer",
    description: "Accurate thermometer for oral, rectal, or underarm temperature readings.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Medical Equipment",
    packaging: "Box of 1 unit",
    usage: [
      { label: "Measures body temperature" },
      { label: "Used in hospitals and homes" },
      { label: "Ideal for fever detection" }
    ],
    rating: 4.7,
    reviews: 145,
    featured: true,
    inStock: true
  },
  {
    id: "2",
    name: "Stethoscope",
    description: "Acoustic stethoscope for auscultation of heart, lung and bowel sounds.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Medical Equipment",
    packaging: "Box of 1",
    usage: [
      { label: "Used to listen to heart and lungs" },
      { label: "Essential for clinical examinations" }
    ],
    rating: 4.8,
    reviews: 320,
    featured: true,
    inStock: true
  },
  {
    id: "3",
    name: "Sphygmomanometer (Manual)",
    description: "Manual blood pressure cuff and aneroid gauge for clinical use.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Medical Equipment",
    packaging: "Set of 1",
    usage: [
      { label: "Measures systolic and diastolic blood pressure" },
      { label: "Used by healthcare professionals" }
    ],
    rating: 4.6,
    reviews: 210,
    featured: false,
    inStock: true
  },
  {
    id: "4",
    name: "Pulse Oximeter",
    description: "Portable fingertip device to measure SpO2 and pulse rate non-invasively.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Homecare Equipment",
    packaging: "Box of 1",
    usage: [
      { label: "Monitors oxygen saturation" },
      { label: "Useful for respiratory patients" }
    ],
    rating: 4.5,
    reviews: 187,
    featured: false,
    inStock: true
  },
  {
    id: "5",
    name: "Infrared Thermometer (Contactless)",
    description: "Contactless forehead thermometer for rapid temperature screening.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Medical Equipment",
    packaging: "Box of 1",
    usage: [
      { label: "Fast temperature checks" },
      { label: "Used for triage and screening" }
    ],
    rating: 4.4,
    reviews: 98,
    featured: false,
    inStock: true
  },
  {
    id: "6",
    name: "Disposable Examination Gloves (Box)",
    description: "Powder-free nitrile exam gloves for hygiene and protection.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Medical Supplies",
    packaging: "Box of 100",
    usage: [
      { label: "Protects staff and patients from contamination" },
      { label: "Used across clinical and lab settings" }
    ],
    rating: 4.5,
    reviews: 275,
    featured: true,
    inStock: true
  },
  {
    id: "7",
    name: "Surgical Face Mask (Disposable)",
    description: "3-layer surgical mask for infection control.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Medical Supplies",
    packaging: "Box of 50",
    usage: [
      { label: "Reduces spread of respiratory droplets" },
      { label: "Used in operating rooms and clinical areas" }
    ],
    rating: 4.3,
    reviews: 402,
    featured: false,
    inStock: true
  },
  {
    id: "8",
    name: "Sterile Syringe with Needle (5ml)",
    description: "Single-use sterile syringe with attached needle for injections.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Medical Supplies",
    packaging: "Box of 100",
    usage: [
      { label: "For injections and sample withdrawal" },
      { label: "Disposable and sterile" }
    ],
    rating: 4.6,
    reviews: 198,
    featured: false,
    inStock: true
  },
  {
    id: "9",
    name: "IV Cannula (Various Sizes)",
    description: "Sterile peripheral IV cannulas for fluid and medication delivery.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Medical Supplies",
    packaging: "Box of 50",
    usage: [
      { label: "Intravenous access for fluids and meds" },
      { label: "Used in wards and emergency departments" }
    ],
    rating: 4.4,
    reviews: 122,
    featured: false,
    inStock: true
  },
  {
    id: "10",
    name: "Microscope (Compound)",
    description: "Laboratory compound microscope for biological specimens.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Lab Equipment",
    packaging: "Box of 1 unit",
    usage: [
      { label: "Observes cells and microorganisms" },
      { label: "Used in pathology and teaching labs" }
    ],
    rating: 4.9,
    reviews: 188,
    featured: true,
    inStock: true
  },
  {
    id: "11",
    name: "Centrifuge (Benchtop)",
    description: "Electric benchtop centrifuge for sample separation.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Lab Equipment",
    packaging: "1 unit",
    usage: [
      { label: "Separates blood components" },
      { label: "Used in diagnostic laboratories" }
    ],
    rating: 4.6,
    reviews: 134,
    featured: false,
    inStock: true
  },
  {
    id: "12",
    name: "Test Tubes (Borosilicate)",
    description: "Durable glass test tubes for heating and storage.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Lab Glassware",
    packaging: "Pack of 100",
    usage: [
      { label: "Holding and heating small volumes" },
      { label: "Used in experiments and sample storage" }
    ],
    rating: 4.5,
    reviews: 98,
    featured: false,
    inStock: true
  },
  {
    id: "13",
    name: "Beaker Set (5 pcs)",
    description: "Graduated glass beakers in assorted sizes for mixing and measuring.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Lab Glassware",
    packaging: "Set of 5",
    usage: [
      { label: "Measuring and mixing liquids" },
      { label: "Used in teaching and research labs" }
    ],
    rating: 4.7,
    reviews: 122,
    featured: false,
    inStock: true
  },
  {
    id: "14",
    name: "Volumetric Flask (250ml)",
    description: "Calibrated volumetric flask for precise solution preparation.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Lab Glassware",
    packaging: "Box of 3",
    usage: [
      { label: "Preparing accurate standard solutions" },
      { label: "Used in titration and analysis" }
    ],
    rating: 4.6,
    reviews: 76,
    featured: false,
    inStock: true
  },
  {
    id: "15",
    name: "Petri Dishes (Sterile)",
    description: "Sterile plastic Petri dishes for microbial culture.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Lab Disposables",
    packaging: "Pack of 20",
    usage: [
      { label: "Culturing bacteria and fungi" },
      { label: "Used in microbiology labs" }
    ],
    rating: 4.4,
    reviews: 58,
    featured: false,
    inStock: true
  },
  {
    id: "16",
    name: "Micropipette (Adjustable)",
    description: "Precision adjustable micropipette for microliter volume handling.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Lab Equipment",
    packaging: "1 unit",
    usage: [
      { label: "Accurate small-volume liquid transfer" },
      { label: "Common in molecular biology labs" }
    ],
    rating: 4.8,
    reviews: 203,
    featured: true,
    inStock: true
  },
  {
    id: "17",
    name: "Disposable Pipette Tips (Filter)",
    description: "Sterile filtered pipette tips to prevent aerosol contamination.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Lab Disposables",
    packaging: "Box of 1000",
    usage: [
      { label: "Prevents sample cross-contamination" },
      { label: "Used with micropipettes" }
    ],
    rating: 4.6,
    reviews: 140,
    featured: false,
    inStock: true
  },
  {
    id: "18",
    name: "Glass Slides & Cover Slips",
    description: "High-quality microscope slides and cover slips for specimen mounting.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Lab Disposables",
    packaging: "Slides box of 50, slips box of 100",
    usage: [
      { label: "Preparing specimens for microscopic examination" },
      { label: "Used across pathology and teaching labs" }
    ],
    rating: 4.5,
    reviews: 66,
    featured: false,
    inStock: true
  },
  {
    id: "19",
    name: "pH Meter (Digital)",
    description: "Portable digital pH meter with electrode for solution testing.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Lab Equipment",
    packaging: "1 unit with electrode",
    usage: [
      { label: "Measures acidity/alkalinity of solutions" },
      { label: "Used in chemical and clinical labs" }
    ],
    rating: 4.3,
    reviews: 49,
    featured: false,
    inStock: true
  },
  {
    id: "20",
    name: "Autoclave Indicator Tape",
    description: "Self-adhesive autoclave tape that changes color after sterilization.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Lab Disposables",
    packaging: "Roll of 50m",
    usage: [
      { label: "Marks items as sterilized after autoclaving" },
      { label: "Used in sterilization departments" }
    ],
    rating: 4.2,
    reviews: 31,
    featured: false,
    inStock: true
  },
  {
    id: "21",
    name: "Blood Collection Tubes (Vacutainer)",
    description: "Vacuum-sealed tubes with different additives for blood sampling.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Medical Test Kits",
    packaging: "Pack of 100",
    usage: [
      { label: "Collects and preserves blood samples" },
      { label: "Used in hematology and biochemistry tests" }
    ],
    rating: 4.6,
    reviews: 250,
    featured: true,
    inStock: true
  },
  {
    id: "22",
    name: "Urine Test Strips (Multi-parameter)",
    description: "Reagent strips testing glucose, protein, ketones and pH in urine.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Medical Test Kits",
    packaging: "Bottle of 100 strips",
    usage: [
      { label: "Quick urinalysis for common conditions" },
      { label: "Used in clinics and point-of-care testing" }
    ],
    rating: 4.4,
    reviews: 161,
    featured: false,
    inStock: true
  },
  {
    id: "23",
    name: "Rapid Malaria Test Kit",
    description: "Lateral flow test for quick malaria antigen detection from blood.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Medical Test Kits",
    packaging: "Box of 25 tests",
    usage: [
      { label: "Detects malaria antigens in minutes" },
      { label: "Used in endemic areas and clinics" }
    ],
    rating: 4.8,
    reviews: 312,
    featured: true,
    inStock: true
  },
  {
    id: "24",
    name: "HIV Rapid Test Kit",
    description: "Rapid immune-assay kit for HIV antibody screening.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Medical Test Kits",
    packaging: "Box of 50 tests",
    usage: [
      { label: "Screening for HIV antibodies" },
      { label: "Used in clinics and outreach programs" }
    ],
    rating: 4.5,
    reviews: 220,
    featured: false,
    inStock: true
  },
  {
    id: "25",
    name: "Pregnancy Test Kit (Urine)",
    description: "Rapid HCG urine test for pregnancy detection at home or clinic.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Medical Test Kits",
    packaging: "Box of 10 tests",
    usage: [
      { label: "Detects pregnancy hormone HCG" },
      { label: "Easy to use and read" }
    ],
    rating: 4.6,
    reviews: 145,
    featured: false,
    inStock: true
  },
  {
    id: "26",
    name: "Patient Bed (Adjustable)",
    description: "Hospital bed with adjustable head and foot sections and side rails.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Medical Furniture",
    packaging: "1 unit",
    usage: [
      { label: "Supports patient positioning and comfort" },
      { label: "Used in wards and recovery rooms" }
    ],
    rating: 4.4,
    reviews: 89,
    featured: false,
    inStock: true
  },
  {
    id: "27",
    name: "Overbed Table (Adjustable)",
    description: "Height-adjustable overbed table for meals and bedside activities.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Medical Furniture",
    packaging: "1 unit",
    usage: [
      { label: "Used for patient meals and record-keeping" },
      { label: "Adjustable and mobile" }
    ],
    rating: 4.2,
    reviews: 37,
    featured: false,
    inStock: true
  },
  {
    id: "28",
    name: "Bedside Locker",
    description: "Compact bedside locker for patient personal items and clinical charts.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Medical Furniture",
    packaging: "1 unit",
    usage: [
      { label: "Storage for patient belongings" },
      { label: "Used in hospital wards" }
    ],
    rating: 4.1,
    reviews: 22,
    featured: false,
    inStock: true
  },
  {
    id: "29",
    name: "Wheelchair (Manual)",
    description: "Foldable manual wheelchair with footrests for patient mobility.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Mobility Aids",
    packaging: "1 unit per box",
    usage: [
      { label: "Assists patient mobility" },
      { label: "Used in hospitals and homecare" }
    ],
    rating: 4.0,
    reviews: 143,
    featured: false,
    inStock: true
  },
  {
    id: "30",
    name: "Walking Stick (Adjustable)",
    description: "Lightweight aluminum walking stick with rubber tip and adjustable height.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Mobility Aids",
    packaging: "1 piece",
    usage: [
      { label: "Provides walking support" },
      { label: "Suitable for rehabilitation and elderly" }
    ],
    rating: 4.2,
    reviews: 58,
    featured: false,
    inStock: true
  },
  {
    id: "31",
    name: "Walker Frame (Standard)",
    description: "Aluminum walker with rubber feet for stable assisted walking.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Mobility Aids",
    packaging: "1 frame",
    usage: [
      { label: "Assists mobility for patients with balance issues" },
      { label: "Used in rehabilitation" }
    ],
    rating: 4.1,
    reviews: 41,
    featured: false,
    inStock: true
  },
  {
    id: "32",
    name: "Commode Chair (Portable)",
    description: "Portable commode chair with removable bucket and armrests.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Homecare Supplies",
    packaging: "1 unit",
    usage: [
      { label: "Assists patients with toileting needs" },
      { label: "Used at home and in care facilities" }
    ],
    rating: 4.0,
    reviews: 33,
    featured: false,
    inStock: true
  },
  {
    id: "33",
    name: "Oxygen Cylinder (Medical)",
    description: "High-pressure oxygen cylinder with regulator and mask.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Homecare - Respiratory Care",
    packaging: "1 cylinder with regulator",
    usage: [
      { label: "Provides supplemental oxygen therapy" },
      { label: "Used in hospitals and homecare" }
    ],
    rating: 4.7,
    reviews: 211,
    featured: true,
    inStock: true
  },
  {
    id: "34",
    name: "Oxygen Concentrator (Portable)",
    description: "Portable oxygen concentrator for continuous oxygen supply at home.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Homecare Equipment",
    packaging: "1 unit",
    usage: [
      { label: "Delivers concentrated oxygen from ambient air" },
      { label: "Suitable for COPD and chronic respiratory patients" }
    ],
    rating: 4.6,
    reviews: 167,
    featured: true,
    inStock: true
  },
  {
    id: "35",
    name: "Nebulizer (Compressor)",
    description: "Compressor nebulizer for aerosol medication delivery.",
    price: 0,
    image: "/comingsoon.png?height=400&width=400",
    images: [
      "/image1.png?height=400&width=400",
      "/image2.png?height=400&width=400",
      "/image3.png?height=400&width=400"
    ],
    category: "Homecare - Respiratory Care",
    packaging: "1 unit with mask and tubing",
    usage: [
      { label: "Delivers bronchodilator and steroid medications" },
      { label: "Used for asthma and COPD management" }
    ],
    rating: 4.4,
    reviews: 129,
    featured: false,
    inStock: true
  },
]
