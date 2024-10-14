export interface Medicine {
  id: number;
  name: string;
  type: string;
  description: string;
  price: number;
}

export let medicine: Medicine[] = [
  {
    id: 1,
    name: "Paracetamol",
    type: "Tablet",
    description: "Pain reliever and fever reducer.",
    price: 5000,
  },
  {
    id: 2,
    name: "Amoxicillin",
    type: "Capsule",
    description: "Antibiotic used to treat bacterial infections.",
    price: 12000,
  },
  {
    id: 3,
    name: "Ibuprofen",
    type: "Tablet",
    description: "Nonsteroidal anti-inflammatory drug (NSAID).",
    price: 8000,
  },
  {
    id: 4,
    name: "Cetirizine",
    type: "Tablet",
    description: "Antihistamine used for allergy relief.",
    price: 6000,
  },
  {
    id: 5,
    name: "Omeprazole",
    type: "Capsule",
    description: "Proton pump inhibitor used to reduce stomach acid.",
    price: 15000,
  },
  {
    id: 6,
    name: "Salbutamol",
    type: "Inhaler",
    description: "Bronchodilator used for asthma treatment.",
    price: 20000,
  },
  {
    id: 7,
    name: "Metformin",
    type: "Tablet",
    description: "Medication for type 2 diabetes.",
    price: 10000,
  },
  {
    id: 8,
    name: "Diazepam",
    type: "Tablet",
    description: "Sedative used for anxiety relief.",
    price: 25000,
  },
  {
    id: 9,
    name: "Loperamide",
    type: "Capsule",
    description: "Used to treat diarrhea.",
    price: 7000,
  },
  {
    id: 10,
    name: "Hydrocortisone",
    type: "Cream",
    description: "Corticosteroid used for skin conditions.",
    price: 30000,
  },
];
