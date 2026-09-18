import canineExamImg from '../assets/images/gallery_canine_exam.webp';
import ultrasoundImg from '../assets/images/gallery_ultrasound.webp';
import felineCareImg from '../assets/images/gallery_feline_care.webp';
import boardingImg from '../assets/images/gallery_boarding.webp';
import immunizationImg from '../assets/images/gallery_immunization.webp';
import happyPetsImg from '../assets/images/gallery_happy_pets.webp';
import petShopImg from '../assets/images/gallery_pet_shop.webp';
import pharmacyImg from '../assets/images/gallery_pharmacy.webp';
import groomingImg from '../assets/images/gallery_grooming.webp';

export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  details: string;
  badge?: string;
  iconName: string;
  inclusions: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'clinical' | 'diagnostics' | 'boarding' | 'shop' | 'grooming' | 'pets';
  imageUrl: string;
  caption: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  petType: string;
  rating: number;
  date: string;
  comment: string;
  serviceUsed: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const HOSPITAL_INFO = {
  name: "Asjad Veterinary Hospital & Pet Shop",
  alternateName: "Asjad Veterinary Clinic & Pet Care Center",
  tagline: "Compassionate Medical Care • Pet Shop • Grooming • 24/7 Emergency Support",
  headline: "Compassionate, Advanced Veterinary Care & Pet Shop in Sargodha",
  subheadline:
    "Complete pet hospital, licensed pharmacy, certified nutrition shop, ultrasound diagnosis, surgical care, grooming, and supervised pet boarding at 47 Link Road, Cantt View, Sargodha.",
  address: "47 Link Road, Opposite C Block, Cantt View, Near Waris Town, PAF Link Road, Sargodha, Punjab, Pakistan",
  shortAddress: "47 Link Road, Opp C Block, Cantt View, Sargodha",
  landmark: "Near Waris Town, PAF Link Road",
  email: "asjadveterinaryhospital@gmail.com",
  googleMapsUrl: "https://maps.app.goo.gl/T5jVKsNnHzHP6bG66",
  phones: [
    { display: "0311 5030752", raw: "+923115030752", label: "Primary / WhatsApp" },
    { display: "0300 1579211", raw: "+923001579211", label: "Helpline / Emergency" },
  ],
  whatsappNumber: "923115030752",
  hours: "Daily Consultations & 24/7 Emergency Medical Care",
  emergencyAvailability: "24/7 Emergency Service Available",
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "consultation",
    name: "General Health Checkups & Clinical Diagnosis",
    shortDesc: "Thorough head-to-tail physical examinations to evaluate your pet's overall health, vitals, and wellness.",
    details: "Routine checkups detect early signs of illness before they become serious. We examine ears, eyes, coat, oral hygiene, heart rate, temperature, and musculoskeletal wellness.",
    iconName: "Stethoscope",
    badge: "Core Service",
    inclusions: [
      "Physical examination & vitals check",
      "Nutritional and lifestyle evaluation",
      "Early disease screening",
      "Personalized treatment plan",
    ],
  },
  {
    id: "emergency",
    name: "24/7 Emergency & Critical Care",
    shortDesc: "Immediate medical response and stabilization for critical pet trauma, poisoning, or acute distress.",
    details: "When unexpected accidents or acute illnesses occur, time is vital. Our emergency protocol ensures rapid triage, oxygenation, pain management, and stabilization.",
    iconName: "Activity",
    badge: "24/7 Availability",
    inclusions: [
      "Rapid triage & stabilization",
      "Trauma & wound emergency management",
      "Intravenous fluid therapy",
      "Round-the-clock monitoring",
    ],
  },
  {
    id: "ultrasonography",
    name: "Diagnostic Ultrasonography (Sonography)",
    shortDesc: "Non-invasive abdominal and soft-tissue ultrasound imaging for clear internal organ evaluation.",
    details: "Modern ultrasonography allows painless, real-time visualization of internal organs including bladder, kidneys, liver, spleen, digestive tract, and pregnancy diagnosis in pets.",
    iconName: "Eye",
    badge: "Advanced Technology",
    inclusions: [
      "Abdominal organ scanning",
      "Pregnancy confirmation & monitoring",
      "Bladder & urinary stone assessment",
      "Painless, non-radiating imaging",
    ],
  },
  {
    id: "pathology",
    name: "Microscopic Examinations & Clinical Pathology",
    shortDesc: "In-house microscopic analysis for rapid identification of skin parasites, blood issues, and infections.",
    details: "Accurate treatment requires precise diagnosis. Our in-house microscope enables instant evaluation of skin scrapings, ear cytology, blood smears, and fecal screenings.",
    iconName: "Microscope",
    badge: "In-House Diagnostic",
    inclusions: [
      "Skin scraping & ectoparasite analysis",
      "Ear swab cytology for infections",
      "Fecal testing for internal parasites",
      "Blood film evaluation",
    ],
  },
  {
    id: "petshop",
    name: "Pet Shop & Nutrition Essentials",
    shortDesc: "Premium cat and dog food brands, dietary supplements, grooming shampoos, leashes, and accessories.",
    details: "Our in-house pet shop stocks genuine, premium pet foods including Royal Canin, Reflex, Fluffy, and Me-O, along with high-potency calcium, vitamin syrups, dental treats, travel cages, and toys.",
    iconName: "ShoppingBag",
    badge: "In-House Shop",
    inclusions: [
      "Royal Canin, Reflex, Fluffy & Me-O foods",
      "Veterinary vitamins & calcium supplements",
      "Collars, harnesses, leashes & carriers",
      "Pet shampoos, de-shedding brushes & toys",
    ],
  },
  {
    id: "grooming",
    name: "Professional Pet Grooming & Spa",
    shortDesc: "Hygienic pet baths, coat styling, de-matting, nail trimming, and gentle ear cleaning.",
    details: "Keep your companion fresh and smelling great with gentle, stress-free grooming performed by trained handlers using hypoallergenic and medicated shampoos.",
    iconName: "Sparkles",
    badge: "Spa & Grooming",
    inclusions: [
      "Warm water medicated or routine bath",
      "Coat de-shedding, brushing & trimming",
      "Safe nail clipping & paw care",
      "Deep ear cleaning & eye wiping",
    ],
  },
  {
    id: "surgery",
    name: "Veterinary Surgery & Soft Tissue Procedures",
    shortDesc: "Dedicated sterile surgical care from routine procedures to wound reconstructive surgeries.",
    details: "Performed in a sanitized surgical setting with strict sterilization protocols, anaesthetic monitoring, and dedicated post-operative pain relief management.",
    iconName: "Shield",
    badge: "Surgical Care",
    inclusions: [
      "Pre-surgical physical screening",
      "Sterile operating environment",
      "Dedicated anaesthesia monitoring",
      "Structured post-op recovery protocol",
    ],
  },
  {
    id: "vaccination",
    name: "Pet Vaccination & Immunization Center",
    shortDesc: "Essential vaccines protecting dogs, cats, and small animals from fatal contagious viruses.",
    details: "Immunization is the cornerstone of pet longevity. We provide full puppy and kitten core vaccination schedules, annual booster shots, and official pet health records.",
    iconName: "Syringe",
    badge: "Preventive Care",
    inclusions: [
      "Core canine & feline immunization schedules",
      "Rabies & viral disease protection",
      "Vaccination health record booklet",
      "Deworming & parasite prevention",
    ],
  },
  {
    id: "boarding",
    name: "Safe & Supervised Pet Boarding",
    shortDesc: "Clean, comfortable temporary stay for your pet with daily care, nutrition, and on-site veterinary supervision.",
    details: "Traveling or renovating? Our pet boarding facility provides clean, well-ventilated accommodation where your animal is looked after with compassionate attention and immediate medical safety.",
    iconName: "Home",
    badge: "Boarding Facility",
    inclusions: [
      "Comfortable, sanitary individual enclosures",
      "Dedicated feeding and hydration schedule",
      "Active daily veterinary supervision",
      "Emergency medical support on premises",
    ],
  },
];

export const PILLARS_OF_CARE = [
  {
    title: "Compassionate, Fear-Free Approach",
    desc: "We understand that clinic visits can be stressful for animals. Our team uses gentle handling techniques to keep pets calm and comfortable.",
    icon: "Heart",
  },
  {
    title: "Modern Diagnostic Precision",
    desc: "Equipped with diagnostic ultrasonography and in-house microscopic examinations to detect conditions quickly without unnecessary delay.",
    icon: "Activity",
  },
  {
    title: "24/7 Emergency Responsiveness",
    desc: "Pet health emergencies can happen at any hour. Our emergency channels are accessible whenever your pet faces acute health concerns.",
    icon: "Shield",
  },
  {
    title: "All-in-One Pet Care Destination",
    desc: "From veterinary diagnosis and surgery to premium pet food, accessories, and grooming, everything is available under one roof in Sargodha.",
    icon: "CheckCircle2",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-shop",
    title: "Pet Shop & Premium Food Shelves",
    category: "shop",
    imageUrl: petShopImg,
    caption: "Complete pet shop stocking original Royal Canin, Reflex, treats, vitamins, and accessories in Sargodha.",
  },
  {
    id: "g-pharm",
    title: "Veterinary Pharmacy & Clinic Counter",
    category: "clinical",
    imageUrl: pharmacyImg,
    caption: "Licensed pet pharmaceuticals, prescription drops, antibiotics, and supplements dispensed with expert guidance.",
  },
  {
    id: "g-groom",
    title: "Professional Pet Grooming & Spa",
    category: "grooming",
    imageUrl: groomingImg,
    caption: "Hygienic coat trimming, medicated baths, nail clipping, and ear cleaning for cats and dogs.",
  },
  {
    id: "g1",
    title: "Compassionate Canine Examination",
    category: "clinical",
    imageUrl: canineExamImg,
    caption: "Gentle physical examination of a canine patient in our clean clinical room.",
  },
  {
    id: "g2",
    title: "Diagnostic Sonography & Imaging",
    category: "diagnostics",
    imageUrl: ultrasoundImg,
    caption: "Ultrasonography assessment providing real-time views of internal organs.",
  },
  {
    id: "g3",
    title: "Feline Wellness & Gentle Care",
    category: "clinical",
    imageUrl: felineCareImg,
    caption: "Quiet, stress-free consultation room dedicated to domestic cats.",
  },
  {
    id: "g4",
    title: "Supervised Pet Boarding Environment",
    category: "boarding",
    imageUrl: boardingImg,
    caption: "Safe, peaceful, and temperature-controlled accommodation for boarding guests.",
  },
  {
    id: "g5",
    title: "Preventive Immunization & Health Record",
    category: "clinical",
    imageUrl: immunizationImg,
    caption: "Administering essential puppy vaccinations and maintaining health booklets.",
  },
  {
    id: "g6",
    title: "Healthy, Thriving Companions",
    category: "pets",
    imageUrl: happyPetsImg,
    caption: "Our greatest reward is seeing healthy, vibrant pets returning to happy homes.",
  },
];

export const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: "r1",
    author: "Malik Usman",
    petType: "Golden Retriever Owner",
    rating: 5,
    date: "Recent Patient Visit",
    comment:
      "Asjad Veterinary Hospital is a lifesaver. My dog needed urgent diagnostic ultrasound and the staff handled him with such gentle patience. Very thorough and explained everything clearly.",
    serviceUsed: "Diagnostic Ultrasonography & Consultation",
  },
  {
    id: "r2",
    author: "Dr. Ayesha Tariq",
    petType: "Persian Cat Owner",
    rating: 5,
    date: "Verified Pet Parent",
    comment:
      "Finding a veterinarian who knows how to keep anxious cats calm is rare. They gave my cat her annual vaccination smoothly without any distress. Clean hospital and very professional.",
    serviceUsed: "Feline Vaccination & Wellness",
  },
  {
    id: "r3",
    author: "Chaudhry Rizwan",
    petType: "German Shepherd Owner",
    rating: 5,
    date: "Recent Visit",
    comment:
      "I boarded my dog here while traveling out of Sargodha. Knowing there was active veterinary supervision on-site gave my entire family peace of mind. He was happy and well-fed when we picked him up.",
    serviceUsed: "Pet Boarding & Nutrition",
  },
  {
    id: "r4",
    author: "Zainab Bilal",
    petType: "Shih Tzu Owner",
    rating: 5,
    date: "Recent Visit",
    comment:
      "Finally a reliable place in Sargodha where you can get genuine Royal Canin food and get professional pet grooming under veterinary supervision. The clinic is clean and smelled fresh.",
    serviceUsed: "Pet Shop Food & Grooming Spa",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq1",
    category: "Appointments",
    question: "How do I schedule an appointment or consultation?",
    answer:
      "You can schedule an appointment quickly by clicking 'Book an Appointment' on this website, sending a message directly on our WhatsApp (+92 311 5030752), or calling our helpline (0311 5030752 / 0300 1579211). Walk-ins are also welcome.",
  },
  {
    id: "faq2",
    category: "Emergencies",
    question: "Do you handle 24/7 pet medical emergencies?",
    answer:
      "Yes. Asjad Veterinary Hospital provides 24/7 emergency support. If your pet experiences acute trauma, poisoning, severe vomiting, breathing difficulty, or sudden collapse, call us immediately at 0311 5030752 or 0300 1579211 so our team can prepare for your arrival.",
  },
  {
    id: "faq-shop",
    category: "Pet Shop",
    question: "What pet foods and accessories are available at your shop?",
    answer:
      "Our in-hospital pet shop stocks 100% authentic, imported and local quality pet foods including Royal Canin, Reflex, Fluffy, Josera, and Me-O, along with calcium syrups, multivitamins, medicated shampoos, collars, leashes, harnesses, bowls, and travel cages.",
  },
  {
    id: "faq-groom",
    category: "Grooming",
    question: "What is included in professional pet grooming and spa?",
    answer:
      "Our grooming services include medicated or regular hygiene baths, de-shedding brushing, hygienic sanitary trims, nail clipping, paw moisturizing, and ear cleaning performed with gentle, Fear-Free handling.",
  },
  {
    id: "faq3",
    category: "Location",
    question: "Where is Asjad Veterinary Hospital located in Sargodha?",
    answer:
      "We are conveniently located at 47 Link Road, Opposite C Block, Cantt View, Near Waris Town, PAF Link Road, Sargodha, Punjab. You can click 'Get Directions' anywhere on our website to open the exact pin on Google Maps directly.",
  },
  {
    id: "faq4",
    category: "Diagnostics",
    question: "What diagnostic equipment is available on-site?",
    answer:
      "Our clinic is equipped with diagnostic ultrasonography (sonography) for internal abdominal and pregnancy assessments, as well as in-house microscopic diagnostic facilities for immediate skin, ear, and fluid evaluations.",
  },
  {
    id: "faq5",
    category: "Vaccinations",
    question: "What age should I start vaccinating my puppy or kitten?",
    answer:
      "Core vaccinations typically begin between 6 to 8 weeks of age, followed by booster doses every 3 to 4 weeks until around 16 weeks old. We provide customized vaccination schedules and an official vaccination booklet.",
  },
  {
    id: "faq6",
    category: "Pet Boarding",
    question: "How does the pet boarding service work?",
    answer:
      "We offer secure, sanitary boarding with clean individual resting spaces, scheduled nutritious feeding, and daily monitoring by veterinary staff. All boarding pets must be up-to-date on core vaccinations to ensure the safety of all guests.",
  },
];
