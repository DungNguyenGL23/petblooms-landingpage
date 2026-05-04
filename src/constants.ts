import { Service, Review, TeamMember } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Veterinary Checkup',
    description: 'Comprehensive health examinations by our experienced veterinarians to ensure your pet stays in peak condition.',
    price: 'From $45',
    icon: 'Stethoscope',
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Pet Spa & Grooming',
    description: 'Transform your pet with our luxury grooming services, from calming baths to stylish precision cuts.',
    price: 'From $30',
    icon: 'Bath',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Dental Care',
    description: 'Professional cleaning and oral health assessments to prevent disease and keep their smiles bright.',
    price: 'From $60',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1599443015574-be5fe8a05783?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'Vaccinations',
    description: 'Stay ahead of infectious diseases with our tailor-made vaccination protocols for your specific needs.',
    price: 'From $25',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Sarah Jenkins',
    role: 'Golden Retriever Owner',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    content: "The level of care at Petblooms is unmatched. They treat my Max like family every time we visit for a checkup.",
    rating: 5
  },
  {
    id: '2',
    author: 'Mark Thompson',
    role: 'Cat Parent',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    content: "Excellent groomers! My cat usually hates water, but they have a magic touch that keeps him calm and looking great.",
    rating: 5
  },
  {
    id: '3',
    author: 'Elena Rodriguez',
    role: 'Poodle Owner',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    content: "Convenient booking and professional staff. I love the reminders they send for vaccination schedules.",
    rating: 5
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Emily Chen',
    role: 'Senior Veterinarian',
    image: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=400',
    specialization: 'Internal Medicine'
  },
  {
    id: '2',
    name: 'Dr. James Wilson',
    role: 'Veterinary Surgeon',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
    specialization: 'Orthopedic Surgery'
  },
  {
    id: '3',
    name: 'Sophia Miller',
    role: 'Lead Groomer',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400',
    specialization: 'Styling & Care'
  }
];

export const STATS = [
  { label: 'Happy Pets', value: '12k+' },
  { label: 'Expert Staff', value: '25+' },
  { label: 'Years Experience', value: '15+' },
  { label: 'Services Offered', value: '40+' }
];
