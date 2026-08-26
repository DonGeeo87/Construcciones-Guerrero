export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
  materialsIncluded: string[];
  idealFor: string;
}

export interface MaterialSpecialty {
  id: string;
  name: string;
  tagline: string;
  description: string;
  advantages: string[];
  idealForClimate: string;
  image: string;
  thermalEfficiency: 'Alta' | 'Muy Alta' | 'Extrema' | 'Media';
  speed: 'Rápido' | 'Muy Rápido' | 'Estándar';
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  commune: string;
  projectType: string;
  materialUsed: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
  projectImage?: string;
  highlightPhrase: string;
  verified: boolean;
}

export interface ProjectShowcase {
  id: string;
  title: string;
  location: string;
  commune: string;
  category: 'construccion' | 'remodelacion' | 'ampliacion' | 'terrazas';
  material: string;
  description: string;
  beforeImage?: string;
  afterImage: string;
  sqm: number;
  duration: string;
  features: string[];
}

export interface CommuneCoverage {
  name: string;
  zone: 'Costa' | 'Interior' | 'Costa Norte' | 'Cordillera de la Costa';
  visitAvailability: string;
  popularProjects: string;
}

export interface QuoteFormData {
  projectType: string;
  location: string;
  customLocation?: string;
  material: string;
  approxSqm: number;
  budgetGoal: string;
  name: string;
  phone: string;
  notes: string;
}
