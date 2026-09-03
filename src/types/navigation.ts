export type SectionId = 'intro' | 'about' | 'projects' | 'stack' | 'experience' | 'contact';

export interface NavigationItem {
  id: SectionId;
  number: string;
  label: string;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { id: 'intro', number: '01', label: 'INTRO' },
  { id: 'about', number: '02', label: 'ABOUT' },
  { id: 'projects', number: '03', label: 'PROJECTS' },
  { id: 'stack', number: '04', label: 'STACK' },
  { id: 'experience', number: '05', label: 'EXPERIENCE' },
  { id: 'contact', number: '06', label: 'CONTACT' },
];
