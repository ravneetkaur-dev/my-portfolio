'use client';

import React from 'react';

interface StackHeaderProps {
  activeFilter: string;
  onFilterChange: (filterId: string) => void;
  categories: { id: string; label: string }[];
}

export const StackHeader: React.FC<StackHeaderProps> = ({
  activeFilter,
  onFilterChange,
  categories,
}) => {
  return (
    <div className="space-y-3 z-10 flex-shrink-0">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1">
        <span className="text-xs font-mono tracking-widest font-bold uppercase bg-gradient-to-r from-pink-300 via-rose-400 to-pink-500 bg-clip-text text-transparent">
          04 / TECH STACK
        </span>

        <span className="text-xs font-mono text-gray-400 hidden sm:inline-block">
          TECHNICAL CAPABILITIES · TOOLKIT
        </span>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        <button
          onClick={() => onFilterChange('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all cursor-pointer whitespace-nowrap ${
            activeFilter === 'all'
              ? 'bg-gradient-to-r from-pink-300 via-rose-400 via-pink-500 to-black text-white font-bold border border-pink-300/40 shadow-[0_4px_16px_rgba(244,63,94,0.35)]'
              : 'bg-black/70 text-gray-400 hover:text-white hover:bg-rose-950/40 border border-rose-900/40'
          }`}
        >
          ALL (30)
        </button>

        {categories.map((cat) => {
          const isActive = activeFilter === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onFilterChange(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'bg-gradient-to-r from-pink-300 via-rose-400 via-pink-500 to-black text-white font-bold border border-pink-300/40 shadow-[0_4px_16px_rgba(244,63,94,0.35)]'
                  : 'bg-black/70 text-gray-400 hover:text-white hover:bg-rose-950/40 border border-rose-900/40'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
