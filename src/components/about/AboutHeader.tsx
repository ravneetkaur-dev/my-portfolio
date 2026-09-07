'use client';

import React from 'react';

export const AboutHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between z-10 flex-shrink-0 pb-2.5 border-b border-rose-900/40">
      <span className="text-xs font-mono tracking-widest font-bold uppercase flex items-center gap-2 bg-gradient-to-r from-pink-300 via-rose-400 to-pink-500 bg-clip-text text-transparent">
        <span>02 / ABOUT ME</span>
      </span>

      <span className="text-xs font-mono text-gray-400 hidden sm:inline-block">
        CURIOSITY · CRAFT · SYSTEMS
      </span>
    </div>
  );
};
