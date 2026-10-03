import { ServiceItem, HaircutStyle, Testimonial, BarberSpecialist } from '../types';
import { salonImages } from '../assets/images';

export const SALON_INFO = {
  name: "Yusluk Barbing Salon",
  tagline: "Premier Grooming & Hair Craftsmanship in Sagamu",
  address: "Oja Oba Market, beside vigilante office, Sagamu 121102, Ogun State",
  phone: "0810 732 2203",
  phoneRaw: "08107322203",
  whatsappNumber: "+234 810 732 2203",
  whatsappUrlDigits: "2348107322203",
  closingHour: "9:30 PM",
  closingHour24: 21.5,
  openingHour24: 8.5,
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Oja+Oba+Market+Sagamu+Ogun+State",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=Oja%20Oba%20Market,%20Sagamu,%20Ogun%20State,%20Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed",
  ownerQuote: "Yusluk Barbing Salon is a hair salon located at Sagamu. We offer services such as trendy cuts, hair coloring, hair treatment and care, dreadlocks. Our staffs are professionals in the act of barbing and always ready to give you haircut that will complement your elegant look."
};

export const SERVICES: ServiceItem[] = [
  {
    id: "cut-fade-razor",
    name: "Skin Fade & Razor Line-Up",
    category: "cuts",
    price: 3500,
    durationMinutes: 35,
    description: "Flawless taper or low/mid/high skin fade with surgical razor edge hairline and aftershave mist.",
    popular: true
  },
  {
    id: "cut-classic",
    name: "Classic Gentleman's Cut",
    category: "cuts",
    price: 2500,
    durationMinutes: 25,
    description: "Standard clean cut, taper trim, neck shave, and soothing alcohol-free antiseptic splash."
  },
  {
    id: "cut-waves-fade",
    name: "360 Waves Care & Fade",
    category: "cuts",
    price: 4000,
    durationMinutes: 40,
    description: "Wave definition pomade application, crown brushing, precision hairline shaping, and temple fade."
  },
  {
    id: "cut-kids",
    name: "Gentleman Junior (Kids Cut)",
    category: "cuts",
    price: 2000,
    durationMinutes: 20,
    description: "Gentle, patient, and stylish haircuts for young boys under 12 years with clean outline."
  },
  {
    id: "beard-sculpt-towel",
    name: "Beard Sculpting & Hot Towel Treatment",
    category: "beard",
    price: 3000,
    durationMinutes: 30,
    description: "Precision razor cheek & jawline shaping, warm aromatic towel steam, organic beard oil massage.",
    popular: true
  },
  {
    id: "beard-trim-simple",
    name: "Quick Beard Trim & Clean Edges",
    category: "beard",
    price: 1800,
    durationMinutes: 15,
    description: "Clipper bulk reduction, clean moustache line, and antiseptic calming balm."
  },
  {
    id: "locs-relocking",
    name: "Dreadlocks Relocking & Styling",
    category: "locs",
    price: 8000,
    durationMinutes: 75,
    description: "Interlocking/palm-rolling roots, scalp moisturizing butter, and customized two-strand or barrel twist styling.",
    popular: true
  },
  {
    id: "locs-starter",
    name: "Starter Locs Creation",
    category: "locs",
    price: 12000,
    durationMinutes: 120,
    description: "Crisp sectioned starter dreadlocks with specialized locking gel and scalp nutrition therapy."
  },
  {
    id: "locs-wash-retwist",
    name: "Locs Detox, Wash & Retwist",
    category: "locs",
    price: 9500,
    durationMinutes: 90,
    description: "Deep clarifying apple cider / mint wash, build-up removal, conditioning, and fresh retwist."
  },
  {
    id: "color-tint-blonde",
    name: "Trendy Blonde / Honey Hair Tint",
    category: "color",
    price: 6000,
    durationMinutes: 50,
    description: "Professional light bleaching and custom honey/platinum blonde coloring with tone protective conditioner.",
    popular: true
  },
  {
    id: "color-jetblack-dye",
    name: "Jet Black Hair & Beard Henna Dye",
    category: "color",
    price: 3500,
    durationMinutes: 30,
    description: "Rich natural jet black enhancement to cover greys or accentuate sharp hairline and thick beard."
  },
  {
    id: "vip-presidential",
    name: "Presidential VIP Full Grooming Package",
    category: "vip",
    price: 15000,
    durationMinutes: 90,
    description: "The complete luxury experience: Signature Cut, Hot Towel Beard Sculpting, Deep Facial Scrub, Scalp Massage, Hair Wash, and Premium Fragrance Finish.",
    popular: true
  },
  {
    id: "vip-cut-beard-wash",
    name: "Executive Cut + Beard + Hair Wash",
    category: "vip",
    price: 6500,
    durationMinutes: 50,
    description: "Precision fade, hot towel beard sculpting, refreshing shampoo rinse, and cooling scalp treatment."
  }
];

export const HAIRCUT_STYLES: HaircutStyle[] = [
  {
    id: "style-waves-fade",
    title: "Skin Fade with 360 Deep Waves",
    category: "fades",
    image: salonImages.cutFadeWaves,
    price: 4000,
    serviceId: "cut-waves-fade",
    description: "Pristine circular 360 waves with clean geometric razor lineup and mid-drop fade blend.",
    barberTip: "Maintain with silk durag every night and medium brush sessions."
  },
  {
    id: "style-dreadlocks-taper",
    title: "High-Top Locs with Clean Taper",
    category: "locs",
    image: salonImages.cutDreadlocksFade,
    price: 8000,
    serviceId: "locs-relocking",
    description: "Neatly groomed locs tied back with sharp temple taper, razor-sharp perimeter, and oiled scalp.",
    barberTip: "Relock roots every 4-6 weeks to protect hairline health."
  },
  {
    id: "style-sculpted-beard",
    title: "Executive Beard Sculpt & Taper",
    category: "beard",
    image: salonImages.cutBeardGrooming,
    price: 5000,
    serviceId: "beard-sculpt-towel",
    description: "Full symmetrical beard shaping with clean razor cheek gradient and warm towel hydration.",
    barberTip: "Daily beard balm keeps texture soft and prevents itchiness."
  },
  {
    id: "style-blonde-crop",
    title: "Textured Crop with Honey Tint",
    category: "dye",
    image: salonImages.cutHairDyeTint,
    price: 6000,
    serviceId: "color-tint-blonde",
    description: "Modern top texture with warm golden highlights paired with low skin fade and crisp forehead shape-up.",
    barberTip: "Use sulfate-free shampoo to preserve vibrant tint tone."
  }
];

export const BARBERS: BarberSpecialist[] = [
  {
    id: "barber-yusluk",
    name: "Master Yusluk",
    role: "Founder & Master Craftsman",
    specialty: "Precision Fades, Beard Sculpting & VIP Styling",
    experienceYears: 12,
    available: true
  },
  {
    id: "barber-tunde",
    name: "Stylist Tunde",
    role: "Senior Barber & Waves Specialist",
    specialty: "360 Waves, Razor Line-ups & Skin Fades",
    experienceYears: 7,
    available: true
  },
  {
    id: "barber-dammy",
    name: "Dammy 'LocsKing'",
    role: "Dreadlocks & Color Chemist",
    specialty: "Locs Retwist, Styling, Highlights & Dye",
    experienceYears: 6,
    available: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    author: "Engr. Babatunde Adeyemi",
    location: "GRA Sagamu",
    rating: 5,
    date: "September 2026",
    comment: "Yusluk is by far the cleanest and most professional salon in Sagamu. The clippers are sterilized right in front of you, the AC is always cold even during power outages, and the beard hot towel treatment is unmatched.",
    verified: true,
    serviceUsed: "Presidential VIP Full Grooming"
  },
  {
    id: "test-2",
    author: "Femi Sowunmi",
    location: "Olabisi Onabanjo University Alum",
    rating: 5,
    date: "August 2026",
    comment: "I used to travel all the way to Ikeja for my dreadlocks retwist until a friend introduced me to Yusluk near Oja Oba. Dammy did my starter locs and maintenance flawlessly. Punctual appointments, zero waiting time when you book ahead!",
    verified: true,
    serviceUsed: "Dreadlocks Relocking & Styling"
  },
  {
    id: "test-3",
    author: "Kunle Quadri",
    location: "Sabon Gari, Sagamu",
    rating: 5,
    date: "September 2026",
    comment: "Best razor outline and mid-fade I have gotten in Ogun State. Very respectful staff, cool Afrobeat music, and you can easily schedule your slot via WhatsApp without standing in line.",
    verified: true,
    serviceUsed: "Skin Fade & Razor Line-Up"
  },
  {
    id: "test-4",
    author: "Alhaji Ibrahim Danjuma",
    location: "Akarigbo Road, Sagamu",
    rating: 5,
    date: "July 2026",
    comment: "I bring both my sons here every fortnight. The patience they have with children is commendable, and the prices are very honest for this high level of craftsmanship.",
    verified: true,
    serviceUsed: "Gentleman Junior & Classic Cut"
  }
];
