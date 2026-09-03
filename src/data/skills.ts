import { SkillCategory } from '@/types/skill';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'FRONTEND',
    skills: [
      { name: 'Next.js', category: 'frontend', proficiency: 95 },
      { name: 'React', category: 'frontend', proficiency: 98 },
      { name: 'TypeScript', category: 'frontend', proficiency: 92 },
      { name: 'Tailwind CSS', category: 'frontend', proficiency: 95 },
    ]
  },
  {
    title: 'BACKEND',
    skills: [
      { name: 'NestJS', category: 'backend', proficiency: 90 },
      { name: 'Node.js', category: 'backend', proficiency: 94 },
      { name: 'PostgreSQL', category: 'backend', proficiency: 88 },
      { name: 'Prisma', category: 'backend', proficiency: 90 },
    ]
  },
  {
    title: 'TOOLS & CLOUD',
    skills: [
      { name: 'AWS', category: 'tools', proficiency: 85 },
      { name: 'Docker', category: 'tools', proficiency: 88 },
      { name: 'Git & GitHub', category: 'tools', proficiency: 96 },
      { name: 'Postman', category: 'tools', proficiency: 90 },
    ]
  }
];
