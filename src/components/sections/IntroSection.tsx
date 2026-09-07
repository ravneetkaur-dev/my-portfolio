'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '@/data/personal';
import { InteractiveHeroVisual } from '@/components/visual/InteractiveHeroVisual';
import { SectionId } from '@/types/navigation';
import { ArrowRight, ArrowDown } from 'lucide-react';

interface IntroSectionProps {
  onNavigate: (sectionId: SectionId) => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="intro"
      className="w-full lg:w-screen lg:min-w-[100vw] h-auto min-h-screen lg:h-screen flex-shrink-0 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 sm:px-10 lg:pl-12 lg:pr-24 pt-14 pb-16 lg:pt-14 lg:pb-16 relative select-none lg:snap-start wave-mesh-bg overflow-hidden bg-gradient-to-b from-[#05040d] via-[#15070f] to-[#210a14]"
    >
      {/* Centralized Mobile / Left-Aligned Desktop Content Area */}
      <div className="w-full lg:max-w-md xl:max-w-xl z-30 relative pointer-events-auto space-y-3 sm:space-y-5 lg:space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start my-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#2e0d1c]/90 via-black to-[#210a14]/80 border border-[#fb7185]/40 text-xs font-mono text-[#ff9eaa] shadow-lg shadow-[#210a14]/60"
        >
          <span className="w-2 h-2 rounded-full bg-[#ff9eaa] animate-pulse" />
          <span>{PERSONAL_INFO.title}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
        >
          Hello, <br />
          <span className="bg-gradient-to-r from-white via-rose-200 via-pink-200 to-[#ff9eaa] bg-clip-text text-transparent">
            I'm {PERSONAL_INFO.shortName}.
          </span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-20 h-1 bg-gradient-to-r from-[#fb7185] via-[#ff9eaa] to-black rounded-full origin-center lg:origin-left mx-auto lg:mx-0"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-md lg:max-w-none"
        >
          {PERSONAL_INFO.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-2 flex items-center justify-center lg:justify-start gap-4"
        >
          <button
            onClick={() => onNavigate('projects')}
            className="group relative inline-flex items-center gap-3 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-[#3b1124] via-[#210a14] to-black text-white font-mono text-sm sm:text-base font-semibold tracking-wider hover:from-[#4d162f] hover:to-slate-950 shadow-lg shadow-[#210a14]/60 hover:shadow-[#3b1124]/40 transition-all cursor-pointer border border-[#fb7185]/40"
          >
            <span>VIEW MY WORK</span>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight size={16} />
            </div>
          </button>
        </motion.div>

        {/* Mobile Animated Scroll-Down Arrow Button */}
        <motion.button
          onClick={() => onNavigate('about')}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="lg:hidden mt-6 flex flex-col items-center gap-2 group cursor-pointer"
        >
          <span className="text-xs font-mono tracking-widest text-[#ff9eaa]/80 uppercase">
            SCROLL DOWN
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-10 h-10 rounded-full bg-[#210a14]/80 border border-[#fb7185]/50 flex items-center justify-center text-[#ff9eaa] shadow-lg shadow-[#210a14]/80"
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.button>
      </div>

      {/* Full-Screen Living System Visual Layer */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="absolute inset-0 w-full h-full z-20 pointer-events-none"
      >
        <InteractiveHeroVisual />
      </motion.div>

      {/* Bottom Scroll Prompt */}
      <button
        onClick={() => onNavigate('about')}
        className="absolute bottom-20 right-25 z-30 hidden md:flex items-center gap-3 text-xs font-mono text-gray-400 hover:text-[#ff9eaa] transition-colors group cursor-pointer"
      >
        <span className="tracking-widest uppercase">SCROLL TO EXPLORE</span>
        <div className="w-8 h-8 rounded-full border border-[#fb7185]/30 flex items-center justify-center group-hover:border-[#ff9eaa] group-hover:translate-y-1 transition-all">
          <ArrowRight size={14} className="text-[#ff9eaa]" />
        </div>
      </button>
    </section>
  );
};
