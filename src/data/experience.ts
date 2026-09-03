export interface CareerMetric {
  label: string;
  value: string;
}

export interface CareerItem {
  id: string;
  type: 'experience' | 'education';
  categoryLabel: string;
  title: string;
  subtitle: string;
  organization: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  grade?: string;
  description: string;
  metrics: CareerMetric[];
  highlights: string[];
  skills: string[];
}

export const CAREER_DATA: CareerItem[] = [
  {
    id: 'exp-1',
    type: 'experience',
    categoryLabel: 'WORK EXPERIENCE',
    title: 'Full-Stack Web Developer',
    subtitle: 'WHAT I WORK ON',
    organization: 'Product Engineering',
    location: 'Remote',
    period: 'Jan 2026 — Present',
    isCurrent: true,
    description: 'Building and maintaining production SaaS applications across frontend, backend, and database systems.',
    metrics: [
      { label: 'Role Focus', value: 'Full-Stack Web Dev' },
      { label: 'Primary Stack', value: 'Next.js + NestJS' },
      { label: 'Database', value: 'PostgreSQL' },
      { label: 'Language', value: 'TypeScript' },
    ],
    highlights: [
      'Building and maintaining production SaaS applications across frontend, backend, and database systems.',
      'Developing features across authentication, payments, subscriptions, media, dashboards, and community systems.',
      'Working across modern web technologies and cloud infrastructure to ship production-ready features.'
    ],
    skills: ['Next.js', 'NestJS', 'PostgreSQL', 'TypeScript']
  },
  {
    id: 'edu-1',
    type: 'education',
    categoryLabel: 'ACADEMIC LOG',
    title: 'Master of Computer Applications',
    subtitle: 'ACADEMIC FOCUS',
    organization: 'Postgraduate Studies',
    location: 'University',
    period: '2024 — 2026',
    grade: 'Postgraduate Program',
    description: 'Advanced Computer Applications program focused on Data Structures, Object-Oriented System Architecture, and Database Systems.',
    metrics: [
      { label: 'Program', value: 'Master of Computer Applications' },
      { label: 'Timeline', value: '2024 — 2026' },
      { label: 'Core Focus', value: 'DSA & Algorithms' },
      { label: 'Systems', value: 'DBMS & OS' },
    ],
    highlights: [
      'Strong foundation in Data Structures & Algorithms and core computer science concepts.',
      'Built full-stack projects through academic coursework and independent exploration.',
      'Developed problem-solving skills through algorithmic thinking and implementation.'
    ],
    skills: ['DSA', 'OOP', 'DBMS', 'Operating Systems']
  }
];
