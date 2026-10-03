export interface ServiceItem {
  id: string;
  name: string;
  category: 'cuts' | 'beard' | 'locs' | 'color' | 'vip';
  price: number;
  durationMinutes: number;
  description: string;
  popular?: boolean;
}

export interface HaircutStyle {
  id: string;
  title: string;
  category: 'fades' | 'locs' | 'beard' | 'dye';
  image: string;
  price: number;
  serviceId: string;
  description: string;
  barberTip: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  serviceUsed: string;
}

export interface BarberSpecialist {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experienceYears: number;
  available: boolean;
}

export interface AppointmentBooking {
  id: string;
  clientName: string;
  clientPhone: string;
  serviceId: string;
  serviceName: string;
  price: number;
  barberId: string;
  barberName: string;
  date: string;
  timeSlot: string;
  notes?: string;
  createdAt: string;
  status: 'confirmed' | 'pending';
}
