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
        <span className="text-xs font-mono tracking-widest text-violet-400 font-bold uppercase">
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
              ? 'bg-violet-600/30 text-violet-200 border border-violet-500/50 shadow-md shadow-violet-950'
              : 'bg-[#0c091f]/60 text-gray-400 hover:text-white hover:bg-violet-950/40 border border-transparent'
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
                  ? 'bg-violet-600/30 text-violet-200 border border-violet-500/50 shadow-md shadow-violet-950'
                  : 'bg-[#0c091f]/60 text-gray-400 hover:text-white hover:bg-violet-950/40 border border-transparent'
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
