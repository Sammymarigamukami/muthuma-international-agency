import type { Product } from "./types"

export const products: Product[] = [

    {
    id: "e8c9a7f2-2b6d-4c3f-8b29-1a3f6a110011",
    name: "Blood Collection Tubes",
    slug: "blood-collection-tubes",
    description: "Vacuum-sealed tubes for safe and sterile blood sample collection.",
    price: 0,
    image: "/bloodtube.jpg?height=400&width=400",
    images: ["/bloodtube.jpg?height=400&width=400","/bloodtube1.jpg?height=400&width=400"],
    category: "Consumables",
    subcategory: null,
    ingredients: [],
    tags: ["blood", "collection", "lab", "vacutainer", "consumables"],
    usage: [],
    rating: 0,
    reviews: 0,
    featured: false,
    inStock: true,
  },
  {
    id: "1a9f4d3b-6c8e-42e1-bb2d-12a34b5c6d7e",
    name: "Accurate HIV 1/2 Test Kit",
    slug: "accurate-hiv-test",
    description: "Reliable rapid diagnostic test for detecting HIV-1 and HIV-2 antibodies and antigen. Designed for quick screening with accurate results within minutes.",
    price: 150,
    image: "/accurateHIV.png?height=400&width=400",
    images: ["/accurateHIV.jpg?height=400&width=400","/accurateHIV1.jpg?height=400&width=400","/accurateHIV2.jpg?height=400&width=400"],
    category: "Medical Test Kits",
    subcategory: "Infectious Disease Test Kits",
    ingredients: [],
    tags: ["HIV", "diagnostic", "test", "medical", "kit"],
    usage: [
      { label: "Step 1", value: "Collect a blood or serum sample." },
      { label: "Step 2", value: "Add sample to the test strip as directed." },
      { label: "Step 3", value: "Wait for 15 minutes and read results." }
    ],
    rating: 0,
    reviews: 0,
    featured: true,
    inStock: true
  },
  {
    id: "2b8e4c1a-9a0d-45b3-9d0e-23b45d6e7f8g",
    name: "Accurate HCV (Hepatitis C) Test Kit",
    slug: "accurate-hcv-test",
    description: "Rapid test for the qualitative detection of antibodies to Hepatitis C virus in human blood or serum. Provides results in minutes.",
    price: 150,
    image: "/accurateHCV.jpg?height=400&width=400",
    images: ["/accurateHCV.jpg?height=400&width=400","/accurateHCV1.jpg?height=400&width=400","/accurateHCV2.jpg?height=400&width=400"],
    category: "Medical Test Kits",
    subcategory: "Infectious Disease Test Kits",
    ingredients: [],
    tags: ["HCV", "hepatitis", "test", "diagnostic", "medical"],
    usage: [
      { label: "Step 1", value: "Collect blood or serum sample." },
      { label: "Step 2", value: "Apply to test cassette." },
      { label: "Step 3", value: "Wait for 10–15 minutes to read the result." }
    ],
    rating: 0,
    reviews: 0,
    featured: false,
    inStock: true
  },
  {
    id: "3c7f5b2d-8d1f-4b8a-9e3c-67a89f1a2b3c",
    name: "Accurate TP (Syphilis) Test Kit",
    slug: "accurate-tp-test",
    description: "Accurate TP Syphilis Test Kit is a one-step rapid test for the detection of Treponema pallidum antibodies in human blood or serum.",
    price: 150,
    image: "/accurateTP.jpg?height=400&width=400",
    images: ["/accurateTP.jpg?height=400&width=400","/accurateTP1.jpg?height=400&width=400","/accurateTP2.jpg?height=400&width=400"],
    category: "Medical Test Kits",
    subcategory: "Infectious Disease Test Kits",
    ingredients: [],
    tags: ["syphilis", "TP", "test", "medical", "diagnostic"],
    usage: [
      { label: "Step 1", value: "Add sample to test area." },
      { label: "Step 2", value: "Wait for 10–15 minutes." },
      { label: "Step 3", value: "Check for lines indicating the result." }
    ],
    rating: 0,
    reviews: 0,
    featured: false,
    inStock: true
  },
  {
    id: "4d6e7f2a-1b2c-4d8e-9a0b-8c7f5d6e4b3a",
    name: "Accurate HCG (Pregnancy) Test Kit",
    slug: "accurate-hcg-test",
    description: "One-step urine test for the qualitative detection of human chorionic gonadotropin (HCG) to determine early pregnancy.",
    price: 100,
    image: "/accurateHCG.jpg?height=400&width=400",
    images: ["/accurateHCG.jpg?height=400&width=400","/accurateHCG1.jpg?height=400&width=400"],
    category: "Medical Test Kits",
    subcategory: "Pregnancy Test Kits",
    ingredients: [],
    tags: ["HCG", "pregnancy", "test", "urine", "kit"],
    usage: [
      { label: "Step 1", value: "Collect urine sample." },
      { label: "Step 2", value: "Dip test strip for a few seconds." },
      { label: "Step 3", value: "Read results within 5 minutes." }
    ],
    rating: 0,
    reviews: 0,
    featured: true,
    inStock: true
  }
]
