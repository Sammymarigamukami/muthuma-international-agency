
 const productsSchema = 
    {
  "@context": "https://schema.org/",
  "@graph": [
    {
      "@type": "Product",
      "name": "Blood Collection Tubes",
      "image": ["https://healthsupplymarket.it.com/bloodtube.jpg"],
      "description": "Vacuum-sealed tubes for safe and sterile blood sample collection.",
      "sku": "e8c9a7f2-2b6d-4c3f-8b29-1a3f6a110011",
      "brand": { "@type": "Brand", "name": "Health Supply Market" },
      "offers": {
        "@type": "Offer",
        "url": "https://healthsupplymarket.it.com/products/consumables/blood-collection-tubes/e8c9a7f2-2b6d-4c3f-8b29-1a3f6a110011",
        "priceCurrency": "KES",
        "price": "0",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition"
      }
    },
    {
      "@type": "Product",
      "name": "Accurate HIV 1/2 Test Kit",
      "image": ["https://healthsupplymarket.it.com/accurateHIV.png"],
      "description": "Reliable rapid diagnostic test for detecting HIV-1 and HIV-2 antibodies and antigen. Designed for quick screening with accurate results within minutes.",
      "sku": "1a9f4d3b-6c8e-42e1-bb2d-12a34b5c6d7e",
      "brand": { "@type": "Brand", "name": "Health Supply Market" },
      "offers": {
        "@type": "Offer",
        "url": "https://healthsupplymarket.it.com/products/accurate-hiv-test",
        "priceCurrency": "KES",
        "price": "150",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition"
      }
    },
    {
      "@type": "Product",
      "name": "Accurate HCV (Hepatitis C) Test Kit",
      "image": ["https://healthsupplymarket.it.com/accurateHCV.jpg"],
      "description": "Rapid test for the qualitative detection of antibodies to Hepatitis C virus in human blood or serum. Provides results in minutes.",
      "sku": "2b8e4c1a-9a0d-45b3-9d0e-23b45d6e7f8g",
      "brand": { "@type": "Brand", "name": "Health Supply Market" },
      "offers": {
        "@type": "Offer",
        "url": "https://healthsupplymarket.it.com/products/medical%20test%20kits/accurate-hcv-(hepatitis-c)-test-kit/2b8e4c1a-9a0d-45b3-9d0e-23b45d6e7f8g",
        "priceCurrency": "KES",
        "price": "150",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition"
      }
    },
    {
      "@type": "Product",
      "name": "Accurate TP (Syphilis) Test Kit",
      "image": ["https://healthsupplymarket.it.com/accurateTP.jpg"],
      "description": "Accurate TP Syphilis Test Kit is a one-step rapid test for the detection of Treponema pallidum antibodies in human blood or serum.",
      "sku": "3c7f5b2d-8d1f-4b8a-9e3c-67a89f1a2b3c",
      "brand": { "@type": "Brand", "name": "Health Supply Market" },
      "offers": {
        "@type": "Offer",
        "url": "https://healthsupplymarket.it.com/products/medical%20test%20kits/accurate-tp-(syphilis)-test-kit/3c7f5b2d-8d1f-4b8a-9e3c-67a89f1a2b3c",
        "priceCurrency": "KES",
        "price": "150",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition"
      }
    },
    {
      "@type": "Product",
      "name": "Accurate HCG (Pregnancy) Test Kit",
      "image": ["https://healthsupplymarket.it.com/accurateHCG.jpg"],
      "description": "One-step urine test for the qualitative detection of human chorionic gonadotropin (HCG) to determine early pregnancy.",
      "sku": "4d6e7f2a-1b2c-4d8e-9a0b-8c7f5d6e4b3a",
      "brand": { "@type": "Brand", "name": "Health Supply Market" },
      "offers": {
        "@type": "Offer",
        "url": "https://healthsupplymarket.it.com/products/medical%20test%20kits/accurate-hcg-(pregnancy)-test-kit/4d6e7f2a-1b2c-4d8e-9a0b-8c7f5d6e4b3a",
        "priceCurrency": "KES",
        "price": "100",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition"
      }
    }
  ]
};


const businessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Health Supply Market Kenya",
  "url": "https://healthsupplymarket.com",
  "image": "https://healthsupplymarket.com/og-image.png",
  "logo": "https://healthsupplymarket.com/logo.png",
  "description": "Trusted online store for medical supplies, test kits, consumables, and health products in Kenya. Fast delivery and verified quality.",
  "telephone": "+254790921006",
  "email": "nairobioutpatient@healthsupplymarket.it.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "KE",
    "addressLocality": "Nairobi",
    "addressRegion": "Nairobi County"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/share/1BmBCsMbmr/",
    "https://www.tiktok.com/@nairobi.outpatien?_r=1&_t=ZM-91CG8LONMRk",
  ],
  "knowsAbout": [
    "medical consumables",
    "hospital supplies",
    "medical test kits",
    "HIV test kits",
    "pregnancy test kits",
    "blood sugar monitors",
    "lab supplies",
    "PPE supplies",
    "medical equipment"
  ]
};

export { businessSchema, productsSchema };