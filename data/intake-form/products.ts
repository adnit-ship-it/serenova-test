import type { Product } from "~/types/intake-form/checkout";

// --- PRODUCT DATA ---

// This is the master list of all available products.

export const products: Product[] = [
  {
    id: "28447979-664f-468a-96d1-7fac2562278a",
    name: "Compounded Semaglutide",
    description: "Same active ingredient as Ozempic®* and Wegovy®*• Price Includes Consult + Medication + Shipping • 15-20% average weight loss in clinical trials • 4 Weekly Subcutaneous Injections* If medication isn't prescribed, the tele-health consult fee is $80. Compounded medications are tailored to patients & made in licensed US facilities per a Rx from a medical professional. Important safety information",
    category: "wellness",
    img: "https://storage.googleapis.com/care360-next-public/productImages%2Fe3f50ddc-d6c6-4c42-a9b3-0e17efe1e2a4%2FSemaglutide%20Vial%20Example.png",
    thumbnail: "https://storage.googleapis.com/care360-next-public/productImages%2Fe3f50ddc-d6c6-4c42-a9b3-0e17efe1e2a4%2FSemaglutide%20Vial%20Example.png",
    prices: {
      monthly: 250
    },
    productBundleIds: {
      monthly: "lorem"
    },
    features: [],
    type: "injection",
    popular: false,
    quiz: null
  },
  {
    id: "287cc521-c34c-4993-b397-700cb7d1ff51",
    name: "Compounded Tirzepatide 2.5-5mg",
    description: "Same active ingredient as Mounjaro®* and Zepbound®*• Price Includes Consult + Medication + Shipping • 20-25% average weight loss in clinical trials• 4 Weekly Subcutaneous Injections* If medication isn't prescribed, the tele-health consult fee is $80. Compounded medications are tailored to patients & made in licensed US facilities per a Rx from a medical professional. Important safety informationPrice varies by dose- 2.5-5mg $5007.5-10mg $57512.5mg $65015mg $725",
    category: "sexual-health",
    img: "https://storage.googleapis.com/care360-next-public/productImages%2Fd3b463da-46c2-4ce2-b836-58a89f549cff%2FTirzepatide%20Vial%20Example.png",
    thumbnail: "https://storage.googleapis.com/care360-next-public/productImages%2Fd3b463da-46c2-4ce2-b836-58a89f549cff%2FTirzepatide%20Vial%20Example.png",
    prices: {
      monthly: 525
    },
    productBundleIds: {
      monthly: "sadasd"
    },
    features: [],
    type: "injection",
    popular: false,
    quiz: "sexual-health"
  },
  {
    id: "7e543ffa-a166-435e-a1fe-48d8b2df40fa",
    name: "Ozempic®",
    description: "• Price Includes Consult + Medication (2mg–4mg Pen)  + Shipping • FDA approved for Type 2 Diabetes Mellitus• 4 Weekly Subcutaneous Injections* If medication isn't prescribed, the tele-health consult fee is $80. Important safety information",
    category: "sexual-health",
    img: "https://storage.googleapis.com/care360-next-public/productImages%2Fa07b3930-a503-4c9f-b4a7-22d18539397d%2FOzempic2.png",
    thumbnail: "https://storage.googleapis.com/care360-next-public/productImages%2Fa07b3930-a503-4c9f-b4a7-22d18539397d%2FOzempic2.png",
    prices: {
      monthly: 480
    },
    productBundleIds: {
      monthly: "sadasd"
    },
    features: [],
    type: "injection",
    popular: false,
    quiz: null
  },
  {
    id: "d21644d1-b3bc-4631-b908-983399ad9f80",
    name: "Rybelsus®",
    description: "• Price Includes Consult + Medication (3mg–14mg 30 Tabs)  + Shipping • FDA approved for Type 2 Diabetes Mellitus• 1 Daily Tablet* If medication isn't prescribed, the tele-health consult fee is $80. Compounded medications are tailored to patients & made in licensed US facilities per a Rx from a medical professional. Important safety information",
    category: "wellness",
    img: "https://storage.googleapis.com/care360-next-public/productImages%2F65dcfea9-3a64-452b-b11a-f45a8222bf1b%2FRybelsus.png",
    thumbnail: "https://storage.googleapis.com/care360-next-public/productImages%2F65dcfea9-3a64-452b-b11a-f45a8222bf1b%2FRybelsus.png",
    prices: {
      monthly: 395
    },
    productBundleIds: {
      monthly: "asdasd"
    },
    features: [],
    type: "injection",
    popular: false,
    quiz: "sermorelin"
  },
  {
    id: "bbfd4e0e-0729-4c0a-b71f-f92277f4402a",
    name: "Wegovy®",
    description: "• Price Includes Consult + Medication (.25mg-2.4mg) + Shipping • 4 Weekly Subcutaneous Injections* If medication isn't prescribed, the tele-health consult fee is $80. Important safety information",
    category: "sexual-health",
    img: "https://storage.googleapis.com/care360-next-public/productImages%2F4dfe6940-bacb-4ea4-b1b5-1863fce3cd50%2FWegovy.png",
    thumbnail: "https://storage.googleapis.com/care360-next-public/productImages%2F4dfe6940-bacb-4ea4-b1b5-1863fce3cd50%2FWegovy.png",
    prices: {
      monthly: 755
    },
    productBundleIds: {},
    features: [],
    type: "injection",
    popular: false,
    quiz: null
  },
  {
    id: "mounjaro-injection",
    name: "Mounjaro Injection",
    description: "Weekly GLP-1 injection for weight loss and diabetes management",
    img: "/assets/images/products/mounjaro-injection.png",
    thumbnail: "/assets/images/products/mounjaro-injection.png",
    prices: {
      monthly: 399
    },
    popular: true,
    availability: "in_stock",
    type: "injection",
    category: "weight-loss",
    features: [
      "Weekly subcutaneous injection",
      "GLP-1 receptor agonist",
      "Effective for weight loss",
      "Diabetes management",
      "Prescription required"
    ],
    productBundleIds: {},
    quiz: null
  },
  {
    id: "ozempic-injection",
    name: "Ozempic Injection",
    description: "Weekly GLP-1 injection for weight loss and blood sugar control",
    img: "/assets/images/products/ozempic-injection.png",
    thumbnail: "/assets/images/products/ozempic-injection.png",
    prices: {
      monthly: 399
    },
    availability: "in_stock",
    type: "injection",
    category: "weight-loss",
    features: [
      "Weekly subcutaneous injection",
      "GLP-1 receptor agonist",
      "Weight loss support",
      "Blood sugar control",
      "Prescription required"
    ],
    productBundleIds: {},
    quiz: null
  },
  {
    id: "methylcobalamin-injection",
    name: "Methylcobalamin Injection",
    description: "Vitamin B12 injection for energy and neurological health",
    img: "/assets/images/products/methylcobalamin-injection.png",
    thumbnail: "/assets/images/products/methylcobalamin-injection.png",
    prices: {
      monthly: 399
    },
    availability: "in_stock",
    type: "injection",
    category: "wellness",
    features: [
      "Vitamin B12 supplement",
      "Energy boost",
      "Neurological support",
      "Methylated form for better absorption",
      "Prescription required"
    ],
    productBundleIds: {},
    quiz: null
  }
];


export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getPopularProducts(): Product[] {
  return products.filter((product) => product.popular);
}

