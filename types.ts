export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  impact: string[];
  tags: string[];
  link?: string;
  image: string;
  color: string; // Hex code for dynamic theming
  logo?: string; // For company logos like YouTube/Instagram
  gallery: {
    image: string;
    caption: string;
    symbolism: string;
  }[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface SkillSet {
  category: string;
  skills: string[];
}