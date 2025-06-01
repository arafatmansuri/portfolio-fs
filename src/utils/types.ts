export interface Project {
  id: number;
  title: string;
  description: string;
  githubUrl: string;
  techs: string[];
  status: 'completed' | 'in-progress';
  features: string[];
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'language' | 'tool';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}