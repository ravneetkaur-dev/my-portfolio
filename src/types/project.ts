export interface BuiltSystemGroup {
  category: string;
  items: string[];
}

export interface EngineeringHighlight {
  title: string;
  description: string;
}

export interface TechStackCategory {
  category: string;
  skills: string[];
}

export interface ProjectDetails {
  ownershipStatement?: string;
  whatIBuilt?: BuiltSystemGroup[];
  architecture?: {
    frontend: string[];
    backend: string[];
    infrastructure: string[];
    services: string[];
  };
  engineeringHighlights?: EngineeringHighlight[];
  subscriptionFlow?: {
    steps: string[];
    explanation: string;
  };
  techStackBreakdown?: TechStackCategory[];
  outcome?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  stats?: {
    label: string;
    value: string;
  }[];
  details?: ProjectDetails;
}
