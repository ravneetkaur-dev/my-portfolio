'use client';

import React from 'react';
import { Sidebar } from '@/components/common/Sidebar';
import { Navigation } from '@/components/common/Navigation';
import { ProgressTimeline } from '@/components/common/ProgressTimeline';
import { IntroSection } from '@/components/sections/IntroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { StackSection } from '@/components/sections/StackSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { MobileFooter } from '@/components/common/Footer';
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useKeyboardNav } from '@/hooks/useKeyboardNav';
import { SectionId } from '@/types/navigation';

export default function Home() {
  const { containerRef, scrollToSection } = useHorizontalScroll();
  const { activeSection, scrollProgress, lockActiveSection } = useActiveSection(containerRef);

  useKeyboardNav(activeSection, (id) => {
    lockActiveSection(id);
    scrollToSection(id, true);
  });

  const handleNavigate = (sectionId: SectionId) => {
    lockActiveSection(sectionId);
    scrollToSection(sectionId, true);
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', `#${sectionId}`);
      sessionStorage.setItem('activeSection', sectionId);
    }
  };

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#0b0914] text-white">
      {/* Sidebar Rail */}
      <Sidebar onNavigate={handleNavigate} />

      {/* Top Header Tabs Nav */}
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Horizontal Canvas Scroll Area (Desktops lg: 1024px+) / Vertical Natural Scroll (Mobile & Tablets < 1024px) */}
      <div
        ref={containerRef}
        className="flex flex-col lg:flex-row w-full h-full overflow-y-auto lg:overflow-y-hidden overflow-x-hidden lg:overflow-x-auto no-scrollbar pl-0 lg:pl-20"
      >
        {/* Section 01: INTRO */}
        <IntroSection onNavigate={handleNavigate} />

        {/* Section 02: ABOUT */}
        <AboutSection onNavigate={handleNavigate} />

        {/* Section 03: PROJECTS */}
        <ProjectsSection />

        {/* Section 04: STACK */}
        <StackSection />

        {/* Section 05: EXPERIENCE */}
        <ExperienceSection />

        {/* Section 06: CONTACT */}
        <ContactSection onNavigate={handleNavigate} />

        {/* Mobile & Tablet End-of-Page Footer */}
        <MobileFooter onNavigate={handleNavigate} />
      </div>

      {/* Bottom Timeline Progress Bar */}
      <ProgressTimeline
        activeSection={activeSection}
        scrollProgress={scrollProgress}
        onNavigate={handleNavigate}
      />
    </main>
  );
}
