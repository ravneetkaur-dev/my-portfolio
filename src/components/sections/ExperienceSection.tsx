'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CAREER_DATA } from '@/data/experience';
import { BookOpen, ArrowRightLeft } from 'lucide-react';
import {
  DiaryCoverWrapper,
  ExecutivePen,
  SpineBinder,
  DiaryPageOne,
  DiaryPageTwo,
} from '@/components/experience';

export const ExperienceSection: React.FC = () => {
  const [mobilePageIndex, setMobilePageIndex] = useState(0);

  const expItem = CAREER_DATA.find((item) => item.type === 'experience') || CAREER_DATA[0];
  const eduItem = CAREER_DATA.find((item) => item.type === 'education') || CAREER_DATA[1] || CAREER_DATA[0];

  return (
    <section
      id="experience"
      className="w-full lg:w-screen lg:min-w-[100vw] h-auto min-h-screen lg:h-screen flex-shrink-0 flex flex-col justify-between px-6 sm:px-10 lg:pl-12 lg:pr-28 pt-14 pb-16 lg:pt-14 lg:pb-16 relative select-none lg:snap-start overflow-hidden bg-gradient-to-b from-[#210a14] via-[#2d0e1b] to-[#210a14]"
    >
      {/* Background Ambient Radial Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#fb7185]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff9eaa]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container with Scroll Reveal Animation */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-4xl mx-auto space-y-3 z-10 flex flex-col justify-center flex-1 my-auto relative py-1"
      >
        {/* Top Section Sub-Header */}
        <div className="flex items-center justify-between pb-2 border-b border-[#3b1124]/40">
          <span className="text-xs font-mono tracking-widest font-bold uppercase flex items-center gap-2">
            <BookOpen size={14} className="text-rose-400" />
            <span className="bg-gradient-to-r from-pink-300 via-rose-400 to-pink-500 bg-clip-text text-transparent">05 / DEVELOPER DIARY</span>
          </span>

          <span className="flex text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-black/80 border border-pink-400/40 text-pink-200 items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>PERSONAL ARCHIVE</span>
          </span>
        </div>

        {/* Desktop View: Dual 2-Page Hardcover Open Book Spread (1024px+) */}
        <div className="hidden lg:block w-full">
          <DiaryCoverWrapper>
            <ExecutivePen />
            <div
              className="relative w-full h-full rounded-[22px] bg-[#16050b] border border-[#fb7185]/40 grid grid-cols-12 gap-0 z-10 shadow-2xl"
              style={{
                clipPath:
                  'polygon(0 0, calc(50% - 32px) 0, 50% 12px, calc(50% + 32px) 0, 100% 0, 100% 100%, calc(50% + 32px) 100%, 50% calc(100% - 12px), calc(50% - 32px) 100%, 0 100%)',
              }}
            >
              <SpineBinder />
              <DiaryPageOne data={expItem} />
              <DiaryPageTwo data={eduItem} />
            </div>
          </DiaryCoverWrapper>
        </div>

        {/* Mobile & Tablet View: Standalone Single Notebook Page Container (< 1024px) */}
        <div className="lg:hidden w-full max-w-xl mx-auto flex flex-col items-center space-y-3">
          {/* Compact Control Bar ABOVE the Notebook Page Card */}
          <div className="flex items-center justify-center gap-2 pb-1 z-30">
            <button
              onClick={() => setMobilePageIndex(0)}
              className={`px-3.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider transition-all cursor-pointer ${
                mobilePageIndex === 0
                  ? 'bg-gradient-to-r from-pink-300 via-rose-400 via-pink-500 to-black text-white shadow-[0_4px_16px_rgba(244,63,94,0.35)] border border-pink-300/40'
                  : 'bg-black/70 text-gray-400 hover:text-white border border-rose-900/40'
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setMobilePageIndex(1)}
              className={`px-3.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider transition-all cursor-pointer ${
                mobilePageIndex === 1
                  ? 'bg-gradient-to-r from-pink-300 via-rose-400 via-pink-500 to-black text-white shadow-[0_4px_16px_rgba(244,63,94,0.35)] border border-pink-300/40'
                  : 'bg-black/70 text-gray-400 hover:text-white border border-rose-900/40'
              }`}
            >
              Education Log
            </button>
          </div>

          {/* Notebook Page Card */}
          <div className="w-full relative rounded-2xl bg-[#16050b] border-2 border-[#fb7185]/50 shadow-2xl overflow-hidden min-h-[340px] p-1">
            <AnimatePresence mode="wait">
              {mobilePageIndex === 0 ? (
                <motion.div
                  key="mobile-page-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <DiaryPageOne data={expItem} />
                </motion.div>
              ) : (
                <motion.div
                  key="mobile-page-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <DiaryPageTwo data={eduItem} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
