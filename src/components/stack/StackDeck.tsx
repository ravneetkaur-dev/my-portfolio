'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TECH_CATEGORIES } from '@/data/stackData';
import { TechIcon } from '@/components/common/TechIcon';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Cpu,
  Layers,
} from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'core-stack': <Sparkles size={18} className="text-violet-400" />,
  languages: <Code2 size={18} className="text-violet-400" />,
  frontend: <Layout size={18} className="text-cyan-400" />,
  backend: <Server size={18} className="text-emerald-400" />,
  data: <Database size={18} className="text-indigo-400" />,
  'libraries-workflow': <Wrench size={18} className="text-purple-400" />,
  foundations: <Cpu size={18} className="text-pink-400" />,
};

export const StackDeck: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1200);

  const activeIndex = page;
  const isFirstCard = activeIndex === 0;
  const isLastCard = activeIndex === TECH_CATEGORIES.length - 1;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobileViewport = windowWidth < 640;
  const isTabletViewport = windowWidth >= 640 && windowWidth < 1024;

  const paginate = (newDirection: number) => {
    if (newDirection > 0) {
      if (isLastCard) {
        setPage([0, 1]);
      } else {
        setPage([page + 1, 1]);
      }
    } else if (newDirection < 0) {
      if (page > 0) {
        setPage([page - 1, -1]);
      }
    }
  };

  // Keyboard Navigation Support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') paginate(1);
      if (e.key === 'ArrowLeft' && !isFirstCard) paginate(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [page, isFirstCard, isLastCard]);

  return (
    <div className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto space-y-3 z-10 flex flex-col justify-center flex-1 my-auto relative select-none">
      {/* Section Sub-Header */}
      <div className="flex items-center justify-between pt-1 pb-2.5 border-b border-violet-900/40">
        <span className="text-xs font-mono tracking-widest text-violet-400 font-bold uppercase flex items-center gap-2">
          <Layers size={14} className="text-violet-400" />
          <span>04 / STACK</span>
        </span>

        <span className="text-xs font-mono text-gray-400">
          <span className="text-violet-300 font-bold">0{activeIndex + 1}</span> / 0
          {TECH_CATEGORIES.length}
        </span>
      </div>

      {/* Main Stacked Deck Viewport Container (Compact Height: Zero Clipping) */}
      <div className="relative w-full h-[340px] sm:h-[360px] lg:h-[380px] flex items-center justify-center">
        {/* Floating Side Left Navigation Arrow */}
        <AnimatePresence>
          {!isFirstCard && (
            <motion.button
              key="left-arrow"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              whileHover={{ scale: 1.15, x: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => paginate(-1)}
              className="absolute left-1 sm:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 z-50 w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-[#0c0920]/95 hover:bg-[#160d38] border border-violet-500/50 hover:border-violet-300 text-violet-300 hover:text-white shadow-2xl shadow-violet-950/90 flex items-center justify-center cursor-pointer transition-all duration-200 group"
              title="Previous Stack Layer (Left Arrow)"
            >
              <motion.div
                animate={{ x: [-1.5, 1.5, -1.5] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              >
                <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
              </motion.div>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating Side Right Navigation Arrow */}
        <motion.button
          key="right-arrow"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          whileHover={{ scale: 1.15, x: 4 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => paginate(1)}
          className="absolute right-1 sm:-right-12 lg:-right-16 top-1/2 -translate-y-1/2 z-50 w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-[#0c0920]/95 hover:bg-[#160d38] border border-violet-500/50 hover:border-violet-300 text-violet-300 hover:text-white shadow-2xl shadow-violet-950/90 flex items-center justify-center cursor-pointer transition-all duration-200 group"
          title={isLastCard ? 'Return to First Layer (Right Arrow)' : 'Next Stack Layer (Right Arrow)'}
        >
          <motion.div
            animate={{ x: [1.5, -1.5, 1.5] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: 'easeInOut' }}
          >
            <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </motion.div>
        </motion.button>

        {/* Layered Physical Card Stack with Fluid Physical Motion */}
        {TECH_CATEGORIES.map((cat, index) => {
          const diff = index - activeIndex;
          const isActive = diff === 0;
          const categoryIcon = CATEGORY_ICONS[cat.id] || (
            <Layers size={18} className="text-violet-400" />
          );

          // Physical card deck stacking transforms
          let scale = 1;
          let x = 0;
          let y = 0;
          let rotate = 0;
          let zIndex = 40;
          let opacity = 1;
          let borderStyle = 'border-2 border-violet-400/80 shadow-2xl shadow-violet-950/90';
          let bgGradient = 'bg-gradient-to-br from-[#140c38] via-[#0d0922] to-[#070514]';
          let pointerEvents: 'auto' | 'none' = 'auto';

          if (diff < 0) {
            // Swiped away photo
            scale = 0.88;
            x = direction > 0 ? (isMobileViewport ? -280 : -480) : (isMobileViewport ? 280 : 480);
            y = -20;
            rotate = direction > 0 ? -14 : 14;
            zIndex = 50 + diff;
            opacity = 0;
            pointerEvents = 'none';
          } else if (diff === 0) {
            // Top Active Photo
            scale = 1;
            x = 0;
            y = 0;
            rotate = 0;
            zIndex = 40;
            opacity = 1;
            borderStyle = cat.isCore
              ? 'border-2 border-violet-400/90 shadow-[0_20px_50px_rgba(139,92,246,0.35)]'
              : 'border-2 border-violet-500/70 shadow-[0_20px_50px_rgba(139,92,246,0.25)]';
            bgGradient = cat.isCore
              ? 'bg-gradient-to-br from-[#160d3e] via-[#0e0925] to-[#070514]'
              : 'bg-gradient-to-br from-[#110a2c] via-[#09071a] to-[#060412]';
          } else if (diff === 1) {
            // 2nd Layer in Stack (Peeking Right Edge)
            scale = 0.95;
            x = isMobileViewport ? 16 : isTabletViewport ? 28 : 48;
            y = 12;
            rotate = isMobileViewport ? 3 : 4.5;
            zIndex = 30;
            opacity = 0.9;
            borderStyle = 'border-2 border-violet-500/70 shadow-xl shadow-purple-950/80';
            bgGradient = 'bg-gradient-to-br from-[#1a1042] via-[#100b2a] to-[#090618]';
          } else if (diff === 2) {
            // 3rd Layer in Stack (Peeking Left Edge - Dim Glowing Layer on Left Side)
            scale = 0.91;
            x = isMobileViewport ? -16 : isTabletViewport ? -28 : -42;
            y = 20;
            rotate = isMobileViewport ? -3.5 : -5.5;
            zIndex = 20;
            opacity = 0.82;
            borderStyle = 'border-2 border-indigo-500/70 shadow-xl shadow-indigo-950/80';
            bgGradient = 'bg-gradient-to-br from-[#170e3c] via-[#0e0924] to-[#070414]';
          } else if (diff === 3) {
            // 4th Layer in Stack (Peeking Far Right Edge)
            scale = 0.86;
            x = isMobileViewport ? 22 : isTabletViewport ? 42 : 76;
            y = 28;
            rotate = isMobileViewport ? 4.5 : 7.5;
            zIndex = 10;
            opacity = 0.6;
            borderStyle = 'border-2 border-purple-500/50 shadow-lg';
            bgGradient = 'bg-gradient-to-br from-[#120a32] via-[#0b071e] to-[#050310]';
          } else {
            // Deeper hidden stack layers
            scale = 0.81;
            x = isMobileViewport ? -26 : isTabletViewport ? 48 : 92;
            y = 34;
            rotate = isMobileViewport ? -5.5 : 4.5;
            zIndex = 5;
            opacity = 0.3;
            borderStyle = 'border border-violet-800/30';
            bgGradient = 'bg-[#060412]';
            pointerEvents = 'none';
          }

          return (
            <motion.div
              key={cat.id}
              onClick={() => {
                if (!isActive && diff > 0) setPage([index, 1]);
              }}
              drag={isActive ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={(_e, info) => {
                if (!isActive) return;
                if (info.offset.x < -80 || info.velocity.x < -300) {
                  paginate(1);
                } else if (info.offset.x > 80 || info.velocity.x > 300) {
                  if (!isFirstCard) paginate(-1);
                }
              }}
              animate={{
                scale,
                x,
                y,
                rotate,
                zIndex,
                opacity,
              }}
              transition={
                isMobileViewport
                  ? { duration: 0.3, ease: [0.25, 1, 0.5, 1] }
                  : { type: 'spring', stiffness: 280, damping: 24, mass: 0.7 }
              }
              style={{ pointerEvents }}
              className={`absolute inset-0 w-full h-full rounded-3xl p-5 sm:p-7 flex flex-col justify-between overflow-hidden transition-colors duration-300 transform-gpu will-change-transform ${isActive ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer hover:border-violet-300'
                } ${borderStyle} ${bgGradient}`}
            >
              {/* Ambient Background Radial Glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

              {/* Top Category Header with Divider Line */}
              <div className="space-y-2 pb-3 mb-1 border-b border-violet-900/40 z-10">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 sm:p-2.5 rounded-2xl bg-gradient-to-br from-violet-900/70 to-black/90 border border-violet-500/40 shadow-md shadow-violet-950">
                      {categoryIcon}
                    </div>
                    <div>
                      <div className="hidden sm:flex items-center gap-2">
                        <span className="text-[10px] font-mono text-violet-400 font-bold uppercase tracking-widest">
                          LAYER 0{index + 1}
                        </span>
                        {cat.isCore && (
                          <span className="text-[10px] font-mono font-extrabold px-2.5 py-0.5 rounded-full bg-violet-600/30 border border-violet-400/50 text-violet-200 tracking-wider">
                            CORE STACK
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight mt-0.5">
                        {cat.label}
                      </h3>
                    </div>
                  </div>

                  <span className="hidden sm:inline-flex text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-violet-950/80 border border-violet-700/40 text-violet-300">
                    {cat.items.length} TECHS
                  </span>
                </div>

                <p className="text-xs font-mono text-gray-300 font-light">
                  {cat.subtitle}
                </p>
              </div>

              {/* Floating Tech Pill Showcase Grid */}
              <div className="py-1 z-10 flex-1 flex items-center justify-center">
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-xl mx-auto">
                  {cat.items.map((item) => (
                    <motion.div
                      key={item}
                      whileHover={isActive ? { scale: 1.05, y: -2 } : {}}
                      className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#09071c]/90 border border-violet-900/50 hover:border-violet-400/70 hover:bg-violet-950/70 text-slate-100 transition-all duration-200 shadow-md group/item cursor-default"
                    >
                      <TechIcon name={item} size={16} />
                      <span className="text-xs font-mono font-semibold tracking-wide">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Minimal Clean Card Footer */}
              <div className="pt-2.5 border-t border-violet-900/30 flex items-center justify-between text-[11px] font-mono text-gray-400 z-10">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-300 font-medium uppercase">My Little Toolkit</span>
                </span>

                <span className="text-[10px] text-violet-400 font-medium">
                  {isActive ? 'ACTIVE LAYER' : 'CLICK TO BRING TO FRONT'}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bullet Indicator Dots */}
      <div className="flex items-center justify-center gap-2 pt-1 select-none">
        {TECH_CATEGORIES.map((cat, idx) => (
          <button
            key={cat.id}
            onClick={() => setPage([idx, idx > activeIndex ? 1 : -1])}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${idx === activeIndex
                ? 'w-7 bg-violet-400'
                : 'w-2 bg-violet-900/50 hover:bg-violet-700'
              }`}
            title={cat.label}
          />
        ))}
      </div>
    </div>
  );
};
