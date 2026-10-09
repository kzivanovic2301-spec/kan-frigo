export interface ContactInfo {
  companyName: string;
  technicianName: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  phoneSecondary?: string;
  phoneSecondaryDisplay?: string;
  viberNumber: string;
  whatsappNumber: string;
  workHoursWeekday?: string;
  workHoursWeekend?: string;
  emergencyAvailable: boolean;
  baseCity: string;
  coverageAreaText: string;
  email?: string;
}

export interface ACProduct {
  id: string;
  brand: string;
  model: string;
  capacityBtu: string; // e.g. "12.000 BTU"
  energyClass: string; // e.g. "A++"
  type: 'Inverter' | 'Standard (On/Off)';
  areaCoverage: string; // e.g. "Do 45 m²"
  priceType: 'on_inquiry' | 'fixed';
  priceRsd?: number;
  priceNote?: string; // e.g. "Mogućnost ugradnje"
  imageUrl: string;
  features: string[];
  inStock: boolean;
  popular?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  priceType: 'on_inquiry' | 'fixed' | 'from';
  priceRsd?: number;
  priceNote?: string;
  duration: string;
  includes: string[];
  badge?: string;
  iconName: string;
}

export interface WorkShowcase {
  id: string;
  title: string;
  location: string;
  date: string;
  imageUrl: string;
  description: string;
  category: 'Montaža' | 'Servis' | 'Popravka';
}
