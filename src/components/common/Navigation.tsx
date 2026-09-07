import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAVIGATION_ITEMS, SectionId } from '@/types/navigation';
import { PERSONAL_INFO } from '@/data/personal';
import { GithubIcon, LinkedinIcon, MailIcon } from '@/icons';
import { Menu, X, ChevronRight, Download } from 'lucide-react';

interface NavigationProps {
  activeSection: SectionId;
  onNavigate: (sectionId: SectionId) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const activeItem = NAVIGATION_ITEMS.find((i) => i.id === activeSection) || NAVIGATION_ITEMS[0];

  const handleMobileSelect = (id: SectionId) => {
    onNavigate(id);
    setIsMobileOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 lg:left-20 right-0 h-12 lg:h-10 z-40 bg-gradient-to-r from-[#17050d]/95 via-[#2b0c1b]/95 to-[#17050d]/95 backdrop-blur-md border-b border-[#ff9eaa]/20 flex items-center justify-between px-4 lg:px-10 select-none">
        {/* Mobile Header Brand Monogram Only */}
        <button
          onClick={() => onNavigate('intro')}
          className="flex items-center gap-2 lg:hidden cursor-pointer focus:outline-none group"
          title="Return to Intro (Section 01)"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-rose-500 via-pink-700 to-black flex items-center justify-center font-extrabold text-white tracking-widest text-xs border border-rose-400/40 shadow-md shadow-rose-950 group-hover:scale-105 group-hover:border-rose-300 transition-all">
            {PERSONAL_INFO.initials}
          </div>
        </button>

        {/* Desktop Horizontal Nav Tabs */}
        <nav className="hidden lg:flex items-center gap-3 lg:gap-6 overflow-x-auto no-scrollbar">
          {NAVIGATION_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-1.5 text-xs font-mono tracking-wider transition-all duration-300 py-1 px-2.5 rounded-md cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'text-white bg-rose-600/20 border border-rose-500/40 shadow-sm shadow-rose-900/50'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className={isActive ? 'text-[#ff9eaa] font-bold' : 'text-gray-500'}>
                  {item.number}
                </span>
                <span>/ {item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Header Controls: Resume Download Button + Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.resume}
            download="Ravneet_Kaur_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-rose-950 via-[#280c1b] to-black border border-rose-500/40 hover:border-rose-300 text-[11px] font-mono font-bold text-rose-200 hover:text-white shadow-md shadow-rose-950/80 transition-all duration-200 cursor-pointer group"
            title="Download Resume (PDF)"
          >
            <Download size={13} className="text-[#ff9eaa] group-hover:translate-y-0.5 transition-transform" />
            <span>RESUME</span>
          </a>

          {/* Mobile Vertical Menu Toggle Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-1.5 rounded-xl bg-rose-950/80 border border-rose-500/40 text-rose-300 hover:text-white transition-all cursor-pointer shadow-md shadow-rose-950"
            aria-label="Toggle Mobile Sidebar Menu"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Half-Screen Slide-in Sidebar Drawer from Right */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop Dark Glass Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
            />

            {/* Slide-in Right Sidebar Drawer */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-64 sm:w-72 max-w-[80vw] h-screen bg-gradient-to-b from-[#2d0c1b] via-[#1c0812] to-[#0d0308] border-l border-rose-500/40 shadow-[0_0_50px_rgba(255,158,170,0.3)] px-5 pt-5 pb-14 sm:pb-16 md:hidden flex flex-col justify-between select-none"
            >
              {/* Mobile Drawer Top Brand Header */}
              <div className="flex items-center justify-between pb-4 border-b border-rose-900/50">
                <button
                  onClick={() => handleMobileSelect('intro')}
                  className="flex items-center gap-2.5 cursor-pointer focus:outline-none group"
                  title="Return to Intro (Section 01)"
                >
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-rose-600 to-black flex items-center justify-center font-bold text-white tracking-widest text-xs border border-rose-400/40 group-hover:scale-105 group-hover:border-rose-300 transition-all">
                    {PERSONAL_INFO.initials}
                  </div>
                  <span className="text-xs font-mono font-bold text-white tracking-wider group-hover:text-rose-300 transition-colors">NAVIGATE</span>
                </button>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-1.5 rounded-lg bg-rose-950/80 border border-rose-500/40 text-rose-300 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Vertical Menu Items */}
              <div className="flex flex-col space-y-2 py-4 flex-1 overflow-y-auto no-scrollbar">
                {NAVIGATION_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleMobileSelect(item.id)}
                      className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-mono tracking-wider transition-all cursor-pointer group ${
                        isActive
                          ? 'bg-gradient-to-r from-rose-700/80 via-rose-800/90 to-rose-950 text-white font-bold border border-rose-400/60 shadow-lg shadow-rose-950'
                          : 'text-gray-300 hover:text-white hover:bg-rose-950/50 border border-transparent hover:border-rose-800/30'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={isActive ? 'text-rose-300 font-bold' : 'text-rose-400/70 group-hover:text-rose-300'}>
                          {item.number}
                        </span>
                        <span>/ {item.label}</span>
                      </div>
                      {isActive ? (
                        <div className="w-2 h-2 rounded-full bg-[#ff9eaa] animate-pulse" />
                      ) : (
                        <ChevronRight size={14} className="text-gray-600 group-hover:text-[#ff9eaa] group-hover:translate-x-0.5 transition-transform" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Drawer Bottom Action & Socials */}
              <div className="pt-4 pb-2 mb-2 border-t border-rose-900/50 space-y-3">
                <a
                  href={PERSONAL_INFO.resume}
                  download="Ravneet_Kaur_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-950 via-[#280c1b] to-black border border-rose-500/40 hover:border-rose-300 text-white font-mono text-xs font-bold tracking-wider shadow-lg shadow-rose-950 transition-all duration-200 cursor-pointer group"
                >
                  <Download size={14} className="text-[#ff9eaa] group-hover:translate-y-0.5 transition-transform" />
                  <span>DOWNLOAD RESUME</span>
                </a>

                <div className="flex items-center justify-around text-gray-400 pt-1">
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-rose-950/50 border border-rose-800/30 hover:border-rose-400 hover:text-rose-300 transition-all"
                  >
                    <GithubIcon size={16} />
                  </a>
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-rose-950/50 border border-rose-800/30 hover:border-rose-400 hover:text-rose-300 transition-all"
                  >
                    <LinkedinIcon size={16} />
                  </a>
                  <a
                    href={PERSONAL_INFO.socials.email}
                    className="p-2 rounded-lg bg-rose-950/50 border border-rose-800/30 hover:border-rose-400 hover:text-rose-300 transition-all"
                  >
                    <MailIcon size={16} />
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
