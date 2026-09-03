import { useEffect, useRef } from 'react';
import { NAVIGATION_ITEMS, SectionId } from '@/types/navigation';

export function useHorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToSection = (sectionId: string, smooth: boolean = true) => {
    const el = containerRef.current;
    if (!el) return;

    const targetSection = el.querySelector(`#${sectionId}`) as HTMLElement;
    if (targetSection) {
      const isMobile = window.innerWidth < 1024;

      if (isMobile) {
        // Vertical scroll positioning on Mobile devices
        const headerOffset = 48; // Mobile header height
        const targetTop = Math.max(0, targetSection.offsetTop - headerOffset);

        if (smooth) {
          el.style.scrollBehavior = 'smooth';
          el.scrollTo({
            top: targetTop,
            behavior: 'smooth',
          });
        } else {
          el.style.scrollBehavior = 'auto';
          el.scrollTop = targetTop;
        }
      } else {
        // Horizontal scroll positioning on Desktop devices
        const sidebarOffset = 80;
        const targetLeft = Math.max(0, targetSection.offsetLeft - sidebarOffset);

        if (smooth) {
          el.style.scrollBehavior = 'smooth';
          el.scrollTo({
            left: targetLeft,
            behavior: 'smooth',
          });
        } else {
          el.style.scrollBehavior = 'auto';
          el.scrollLeft = targetLeft;
        }
      }
    }
  };

  // Restore scroll position on initial mount or page refresh
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const getTargetFromHashOrStorage = (): SectionId | null => {
      if (typeof window === 'undefined') return null;
      const hash = window.location.hash.replace('#', '');
      const validIds: SectionId[] = NAVIGATION_ITEMS.map((item) => item.id);
      if (hash && validIds.includes(hash as SectionId)) {
        return hash as SectionId;
      }
      const saved = sessionStorage.getItem('activeSection') as SectionId;
      if (saved && validIds.includes(saved)) {
        return saved;
      }
      return null;
    };

    const initialTarget = getTargetFromHashOrStorage();
    if (initialTarget && initialTarget !== 'intro') {
      // Disable smooth animation during initial load so page appears instantly at target section
      el.style.scrollBehavior = 'auto';
      scrollToSection(initialTarget, false);

      const rAF = requestAnimationFrame(() => {
        if (el) {
          el.style.scrollBehavior = 'auto';
          scrollToSection(initialTarget, false);
        }
      });
      const timer = setTimeout(() => {
        if (el) {
          el.style.scrollBehavior = 'auto';
          scrollToSection(initialTarget, false);
        }
      }, 60);

      return () => {
        cancelAnimationFrame(rAF);
        clearTimeout(timer);
      };
    }
  }, []);

  // Listen for browser back / forward navigation and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validIds: SectionId[] = NAVIGATION_ITEMS.map((item) => item.id);
      if (hash && validIds.includes(hash as SectionId)) {
        scrollToSection(hash as SectionId, true);
      }
    };

    window.addEventListener('popstate', handleHashChange);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('popstate', handleHashChange);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Mouse wheel scroll handler (Desktop horizontal canvas page-by-page smooth navigation)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      // Do NOT intercept vertical wheel scrolling on mobile devices (< 768px)!
      if (window.innerWidth < 768) return;

      // Do NOT intercept scroll if inside a modal or text input
      const target = e.target as HTMLElement | null;
      if (target && target.closest('[data-modal-container], textarea, input, select')) {
        return;
      }

      // Ignore zero delta events
      const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (Math.abs(delta) < 2) return;

      // Prevent default vertical page scroll
      e.preventDefault();

      // Cooldown lock during active smooth section transition
      if (isScrollingRef.current) return;

      const sidebarOffset = 80;
      const currentScrollLeft = el.scrollLeft;

      // Find nearest active section index based on current scroll left position
      let currentIndex = 0;
      let minDistance = Infinity;

      NAVIGATION_ITEMS.forEach((item, idx) => {
        const sec = el.querySelector(`#${item.id}`) as HTMLElement;
        if (sec) {
          const secLeft = sec.offsetLeft - sidebarOffset;
          const dist = Math.abs(secLeft - currentScrollLeft);
          if (dist < minDistance) {
            minDistance = dist;
            currentIndex = idx;
          }
        }
      });

      let targetIndex = currentIndex;
      if (delta > 0) {
        // Scroll Down / Right -> Next Section Page
        targetIndex = Math.min(NAVIGATION_ITEMS.length - 1, currentIndex + 1);
      } else {
        // Scroll Up / Left -> Previous Section Page
        targetIndex = Math.max(0, currentIndex - 1);
      }

      if (targetIndex !== currentIndex) {
        isScrollingRef.current = true;
        scrollToSection(NAVIGATION_ITEMS[targetIndex].id, true);

        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
          isScrollingRef.current = false;
        }, 500);
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      el.removeEventListener('wheel', handleWheel);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return { containerRef, scrollToSection: (id: SectionId, smooth: boolean = true) => scrollToSection(id, smooth) };
}
