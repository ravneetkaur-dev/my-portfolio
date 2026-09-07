import { useEffect } from 'react';
import { SectionId, NAVIGATION_ITEMS } from '@/types/navigation';

export function useKeyboardNav(
  activeSection: SectionId,
  scrollToSection: (id: SectionId) => void
) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const currentIndex = NAVIGATION_ITEMS.findIndex(item => item.id === activeSection);
      if (currentIndex === -1) return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        if (currentIndex < NAVIGATION_ITEMS.length - 1) {
          scrollToSection(NAVIGATION_ITEMS[currentIndex + 1].id);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        if (currentIndex > 0) {
          scrollToSection(NAVIGATION_ITEMS[currentIndex - 1].id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection, scrollToSection]);
}
