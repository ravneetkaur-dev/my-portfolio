export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
  iconName?: string;
  proficiency?: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}
