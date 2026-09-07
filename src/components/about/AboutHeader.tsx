'use client';

import React from 'react';

export const AboutHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between z-10 flex-shrink-0 pb-2.5 border-b border-violet-900/40">
      <span className="text-xs font-mono tracking-widest text-violet-400 font-bold uppercase flex items-center gap-2">
        <span>02 / ABOUT ME</span>
      </span>

      <span className="text-xs font-mono text-gray-400 hidden sm:inline-block">
        CURIOSITY · CRAFT · SYSTEMS
      </span>
    </div>
  );
};
