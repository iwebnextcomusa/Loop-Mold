export type ActivePage = 'home' | 'services' | 'industries' | 'materials' | 'gallery' | 'about' | 'faq' | 'contact' | 'quote';

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  description: string;
  benefits: string[];
  industriesServed: string[];
  detailedInfo: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  iconName: string;
  description: string;
  useCases: string[];
  popularMaterials: string[];
}

export interface MaterialItem {
  id: string;
  name: string;
  shortName: string;
  category: string;
  strength: number; // 1-10
  durability: number; // 1-10
  flexibility: number; // 1-10
  printQuality: number; // 1-10
  heatResistance: string;
  applications: string[];
  description: string;
  pros: string[];
  cons: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  material: string;
  turnaround: string;
  industry: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'turnaround' | 'pricing' | 'materials' | 'files' | 'shipping' | 'general';
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface QuoteFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  serviceNeeded: string;
  materialPreference: string;
  cadFile: File | null;
  projectDescription: string;
  quantity: number;
  infillDensity: number;
  deadline: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}
