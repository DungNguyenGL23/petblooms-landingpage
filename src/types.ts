export type Section = 'home' | 'about' | 'services' | 'testimonials' | 'booking';

export interface Service {
  id: string;
  title: string;
  description: string;
  price?: string;
  icon: string;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  specialization: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
