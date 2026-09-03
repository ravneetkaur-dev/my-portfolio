export interface TechCategory {
  id: string;
  label: string;
  subtitle: string;
  items: string[];
  isCore?: boolean;
}

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: 'core-stack',
    label: 'CORE STACK',
    subtitle: 'Primary production engine & daily toolkit',
    items: ['TypeScript', 'React', 'Next.js', 'Node.js', 'NestJS', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    isCore: true,
  },
  {
    id: 'languages',
    label: 'LANGUAGES',
    subtitle: 'Core programming & markup languages',
    items: ['TypeScript', 'JavaScript', 'Java', 'C++', 'C', 'HTML', 'CSS'],
  },
  {
    id: 'frontend',
    label: 'FRONTEND',
    subtitle: 'Client-side frameworks & styling libraries',
    items: ['React', 'Next.js', 'Tailwind CSS', 'React Redux', 'Bootstrap'],
  },
  {
    id: 'backend',
    label: 'BACKEND',
    subtitle: 'Server-side runtimes & frameworks',
    items: ['Node.js', 'NestJS', 'Express.js'],
  },
  {
    id: 'data',
    label: 'DATA & STORAGE',
    subtitle: 'Relational, NoSQL databases & ORMs',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Prisma', 'TypeORM'],
  },
  {
    id: 'libraries-workflow',
    label: 'LIBRARIES & WORKFLOW',
    subtitle: 'State management, validation & developer tools',
    items: ['TanStack Query', 'React Hook Form', 'Zod', 'Git', 'GitHub', 'Postman'],
  },
  {
    id: 'foundations',
    label: 'FOUNDATIONS',
    subtitle: 'Computer science core principles',
    items: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems'],
  },
];
