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
      className="w-full lg:w-screen lg:min-w-[100vw] h-auto min-h-screen lg:h-screen flex-shrink-0 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 sm:px-10 lg:pl-12 lg:pr-24 pt-14 pb-16 lg:pt-14 lg:pb-16 relative select-none lg:snap-start wave-mesh-bg overflow-hidden bg-gradient-to-b from-[#05040d] via-[#070514] to-[#090716]"
    >
      {/* Centralized Mobile / Left-Aligned Desktop Content Area */}
      <div className="w-full lg:max-w-md xl:max-w-xl z-10 space-y-3 sm:space-y-5 lg:space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start my-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-violet-950/90 via-black to-purple-950/80 border border-violet-500/40 text-xs font-mono text-violet-300 shadow-lg shadow-violet-950/60"
        >
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          <span>{PERSONAL_INFO.title}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
        >
          Hello, <br />
          <span className="bg-gradient-to-r from-white via-violet-300 via-purple-300 to-violet-500 bg-clip-text text-transparent">
            I'm {PERSONAL_INFO.shortName}.
          </span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-20 h-1 bg-gradient-to-r from-violet-600 via-purple-400 to-black rounded-full origin-center lg:origin-left mx-auto lg:mx-0"
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
            className="group relative inline-flex items-center gap-3 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-violet-900 via-violet-950 to-black text-white font-mono text-sm sm:text-base font-semibold tracking-wider hover:from-violet-800 hover:to-slate-950 shadow-lg shadow-violet-950/60 hover:shadow-violet-800/40 transition-all cursor-pointer border border-violet-500/40"
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
          <span className="text-xs font-mono tracking-widest text-violet-300/80 uppercase">
            SCROLL DOWN
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-10 h-10 rounded-full bg-violet-950/80 border border-violet-500/50 flex items-center justify-center text-violet-300 shadow-lg shadow-violet-950/80"
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.button>
      </div>

      {/* Desktop Living System Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="flex-1 w-full max-w-sm lg:max-w-md xl:max-w-xl hidden lg:flex items-center justify-center z-10"
      >
        <InteractiveHeroVisual />
      </motion.div>

      {/* Bottom Scroll Prompt */}
      <button
        onClick={() => onNavigate('about')}
        className="absolute bottom-20 right-25 z-10 hidden md:flex items-center gap-3 text-xs font-mono text-gray-400 hover:text-violet-300 transition-colors group cursor-pointer"
      >
        <span className="tracking-widest uppercase">SCROLL TO EXPLORE</span>
        <div className="w-8 h-8 rounded-full border border-violet-500/30 flex items-center justify-center group-hover:border-violet-400 group-hover:translate-y-1 transition-all">
          <ArrowRight size={14} className="text-violet-400" />
        </div>
      </button>
    </section>
  );
};
