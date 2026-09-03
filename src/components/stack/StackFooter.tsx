'use client';

import React from 'react';

export const StackFooter: React.FC = () => {
  return (
    <div className="flex justify-between items-center text-xs font-mono text-gray-500 z-10 flex-shrink-0 pt-2 border-t border-violet-950/60">
      <span>04 / 06</span>
      <span className="hidden sm:inline-block uppercase">CONTINUOUSLY EXPANDING THE TOOLKIT</span>
    </div>
  );
};
