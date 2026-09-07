import { useEffect, useRef } from 'react';
import { SectionId, NAVIGATION_ITEMS } from '@/types/navigation';

export function useKeyboardNav(
  activeSection: SectionId,
  scrollToSection: (id: SectionId) => void
) {
  const activeSectionRef = useRef(activeSection);
  const isNavigatingRef = useRef(false);

  // Always keep ref updated with latest active section to prevent stale closures
  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Do NOT intercept keys if user is typing in form inputs, textareas, or inside a modal
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable ||
          target.closest('[data-modal-container]'))
      ) {
        return;
      }

      const isNextKey =
        e.key === 'ArrowRight' ||
        e.key === 'ArrowDown' ||
        e.key === 'PageDown' ||
        (e.key === ' ' && !e.shiftKey);

      const isPrevKey =
        e.key === 'ArrowLeft' ||
        e.key === 'ArrowUp' ||
        e.key === 'PageUp' ||
        (e.key === ' ' && e.shiftKey);

      if (!isNextKey && !isPrevKey) return;

      // Prevent browser default 40px micro-scrolling or spacebar page jump
      e.preventDefault();

      // Prevent key bounce / rapid spam firing during section transition
      if (isNavigatingRef.current) return;

      const currentSec = activeSectionRef.current;
      const currentIndex = NAVIGATION_ITEMS.findIndex((item) => item.id === currentSec);
      if (currentIndex === -1) return;

      let targetIndex = currentIndex;
      if (isNextKey && currentIndex < NAVIGATION_ITEMS.length - 1) {
        targetIndex = currentIndex + 1;
      } else if (isPrevKey && currentIndex > 0) {
        targetIndex = currentIndex - 1;
      }

      if (targetIndex !== currentIndex) {
        isNavigatingRef.current = true;
        const targetId = NAVIGATION_ITEMS[targetIndex].id;
        scrollToSection(targetId);

        setTimeout(() => {
          isNavigatingRef.current = false;
        }, 400);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [scrollToSection]);
}
