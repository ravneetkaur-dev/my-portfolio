'use client';

import React from 'react';

export const Glowing3DRing: React.FC = () => {
  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center pointer-events-none select-none">
      {/* Outer ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/30 via-purple-600/20 to-pink-500/30 rounded-full blur-3xl animate-pulse" />
      
      {/* Dynamic Animated Torus Ring Graphic */}
      <div className="relative w-full h-full animate-ring flex items-center justify-center">
        {/* Ring 1 - Metallic Specular Outer */}
        <div className="absolute inset-4 rounded-full border-[18px] border-transparent border-t-violet-400 border-r-purple-600 border-b-indigo-900 border-l-pink-500 opacity-90 blur-[1px] shadow-2xl shadow-violet-500/50" />
        
        {/* Ring 2 - Deep Violet Inner Ring */}
        <div className="absolute inset-10 rounded-full border-[14px] border-violet-950/80 bg-gradient-to-br from-violet-900/40 to-black/80 backdrop-blur-md shadow-inner border-t-violet-400/80" />
        
        {/* Center core light orb */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-violet-400 to-pink-400 blur-md opacity-80 animate-ping" />
      </div>

      {/* Floating particles background hint */}
      <div className="absolute top-4 left-6 w-2 h-2 rounded-full bg-violet-400 animate-bounce" />
      <div className="absolute bottom-8 right-10 w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
    </div>
  );
};
