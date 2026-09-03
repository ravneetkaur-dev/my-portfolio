import { useState, useEffect, useRef, RefObject } from 'react';
import { SectionId, NAVIGATION_ITEMS } from '@/types/navigation';

export function useActiveSection(containerRef: RefObject<HTMLDivElement | null>) {
  const [activeSection, setActiveSection] = useState<SectionId>('intro');
  const [scrollProgress, setScrollProgress] = useState(0);
  const isNavigatingRef = useRef(false);
  const navLockTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const lockActiveSection = (targetId: SectionId) => {
    setActiveSection(targetId);
    isNavigatingRef.current = true;

    if (navLockTimeoutRef.current) clearTimeout(navLockTimeoutRef.current);
    navLockTimeoutRef.current = setTimeout(() => {
      isNavigatingRef.current = false;
    }, 550);
  };

  // Restore active section state from URL hash / storage after client hydration
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      const validIds: SectionId[] = NAVIGATION_ITEMS.map((item) => item.id);
      if (hash && validIds.includes(hash as SectionId)) {
        setActiveSection(hash as SectionId);
      } else {
        const saved = sessionStorage.getItem('activeSection') as SectionId;
        if (saved && validIds.includes(saved)) {
          setActiveSection(saved);
        }
      }
    }
  }, []);

  // Sync active section to URL hash and sessionStorage as user scrolls
  useEffect(() => {
    if (activeSection) {
      sessionStorage.setItem('activeSection', activeSection);
      if (typeof window !== 'undefined') {
        const currentHash = window.location.hash.replace('#', '');
        if (currentHash !== activeSection) {
          window.history.replaceState(null, '', `#${activeSection}`);
        }
      }
    }
  }, [activeSection]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const isMobile = window.innerWidth < 1024;

      if (isMobile) {
        const scrollTop = el.scrollTop;
        const maxScroll = el.scrollHeight - el.clientHeight;
        const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;
        setScrollProgress(progress);

        if (isNavigatingRef.current) return;

        const sections = NAVIGATION_ITEMS.map((item) => el.querySelector(`#${item.id}`) as HTMLElement).filter(Boolean);
        for (const sec of sections) {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.2) {
            setActiveSection(sec.id as SectionId);
            break;
          }
        }
      } else {
        const scrollLeft = el.scrollLeft;
        const maxScroll = el.scrollWidth - el.clientWidth;
        const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
        setScrollProgress(progress);

        if (isNavigatingRef.current) return;

        const sections = NAVIGATION_ITEMS.map((item) => el.querySelector(`#${item.id}`) as HTMLElement).filter(Boolean);
        for (const sec of sections) {
          const rect = sec.getBoundingClientRect();
          if (rect.left <= window.innerWidth * 0.4 && rect.right >= window.innerWidth * 0.2) {
            setActiveSection(sec.id as SectionId);
            break;
          }
        }
      }
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      el.removeEventListener('scroll', handleScroll);
      if (navLockTimeoutRef.current) clearTimeout(navLockTimeoutRef.current);
    };
  }, [containerRef]);

  return { activeSection, scrollProgress, lockActiveSection };
}
