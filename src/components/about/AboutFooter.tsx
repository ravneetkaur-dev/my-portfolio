'use client';

import React from 'react';

export const AboutFooter: React.FC = () => {
  return (
    <div className="flex justify-between items-center text-xs font-mono text-gray-500 z-10 flex-shrink-0 pt-2 border-t border-violet-950/60">
      <span>02 / 06</span>
      <span className="hidden sm:inline-block uppercase">MAKING COMPLEX THINGS FEEL SIMPLE</span>
    </div>
  );
};
