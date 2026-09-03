'use client';

import React from 'react';
import { NAVIGATION_ITEMS, SectionId } from '@/types/navigation';

interface ProgressTimelineProps {
  activeSection: SectionId;
  scrollProgress: number;
  onNavigate: (sectionId: SectionId) => void;
}

export const ProgressTimeline: React.FC<ProgressTimelineProps> = ({
  activeSection,
  scrollProgress,
  onNavigate,
}) => {
  return (
    <footer className="hidden lg:flex fixed bottom-0 left-20 right-0 h-14 z-30 bg-[#0a0814]/90 backdrop-blur-md border-t border-[#8b5cf6]/15 items-center justify-between px-12 select-none">
      {/* Dynamic Progress Track & Section Nodes */}
      <div className="relative flex-1 max-w-4xl mx-auto flex items-center justify-between">
        {/* Background Track Line */}
        <div className="absolute left-0 right-0 h-[2px] bg-violet-950/80 rounded-full top-1/2 -translate-y-1/2" />

        {/* Filled Active Progress Line */}
        <div
          className="absolute left-0 h-[2px] bg-gradient-to-r from-violet-600 via-purple-400 to-pink-500 rounded-full top-1/2 -translate-y-1/2 transition-all duration-150"
          style={{ width: `${Math.min(Math.max(scrollProgress * 100, 2), 100)}%` }}
        />

        {/* Section Node Indicators */}
        {NAVIGATION_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="relative z-10 flex flex-col items-center group cursor-pointer"
              title={`${item.number} ${item.label}`}
            >
              <div
                className={`w-3.5 h-3.5 rounded-full transition-all duration-300 flex items-center justify-center ${
                  isActive
                    ? 'bg-violet-400 ring-4 ring-violet-500/30 scale-125 shadow-lg shadow-violet-500/50'
                    : 'bg-[#1a1533] border border-violet-800/50 hover:bg-violet-600/50 hover:scale-110'
                }`}
              >
                {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
              </div>
              <span
                className={`absolute top-5 text-[10px] font-mono tracking-wider transition-colors whitespace-nowrap ${
                  isActive ? 'text-violet-300 font-bold' : 'text-gray-500 group-hover:text-gray-300'
                }`}
              >
                {item.number} {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </footer>
  );
};
