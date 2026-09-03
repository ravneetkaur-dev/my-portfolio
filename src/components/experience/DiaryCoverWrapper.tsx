'use client';

import React from 'react';

interface DiaryCoverWrapperProps {
  children: React.ReactNode;
}

export const DiaryCoverWrapper: React.FC<DiaryCoverWrapperProps> = ({ children }) => {
  return (
    <div className="relative w-full h-[420px] sm:h-[450px] p-2.5 sm:p-4 flex items-center justify-center">
      {/* 1. OUTER LEATHER HARDCOVER BINDER BACKING WRAPPER with Top & Bottom V-Spine Notch */}
      <div
        className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#334155] via-[#1e293b] via-[#1b1034] to-[#020617] border-2 border-slate-300/90 shadow-[0_25px_65px_rgba(147,51,234,0.35)] overflow-hidden"
        style={{
          clipPath: 'polygon(0 0, calc(50% - 36px) 0, 50% 14px, calc(50% + 36px) 0, 100% 0, 100% 100%, calc(50% + 36px) 100%, 50% calc(100% - 14px), calc(50% - 36px) 100%, 0 100%)',
        }}
      >
        {/* Top Leather Dual-Tone Purple & Silver Specular Radial Sheen Highlight */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(147,51,234,0.22),rgba(241,245,249,0.18)_50%,transparent_75%)] pointer-events-none" />

        {/* Hardcover Dual-Tone Purple & Silver Chrome Stitching Border Line */}
        <div className="absolute inset-2 sm:inset-3 rounded-[24px] border border-dashed border-purple-300/60 pointer-events-none" />
      </div>

      {/* 2. ELEGANT 3D UNDERLYING PAPER PAGE STACK LAYERS (Matching V-Spine Dips) */}
      {/* Underlying Paper Layer 2 */}
      <div
        className="absolute inset-0 rounded-[22px] bg-gradient-to-r from-[#334155] via-[#2d124d] to-[#0f172a] border border-purple-300/60 translate-y-[6px] translate-x-[4px] rotate-[0.8deg] shadow-[0_4px_15px_rgba(147,51,234,0.25)] pointer-events-none z-0 opacity-95"
        style={{
          clipPath: 'polygon(0 0, calc(50% - 34px) 0, 50% 13px, calc(50% + 34px) 0, 100% 0, 100% 100%, calc(50% + 34px) 100%, 50% calc(100% - 13px), calc(50% - 34px) 100%, 0 100%)',
        }}
      />

      {/* Underlying Paper Layer 1 */}
      <div
        className="absolute inset-0 rounded-[22px] bg-gradient-to-r from-[#475569] via-[#3b1a64] to-[#1e293b] border border-slate-200/90 translate-y-[3px] translate-x-[2px] rotate-[0.4deg] shadow-md pointer-events-none z-0 opacity-100"
        style={{
          clipPath: 'polygon(0 0, calc(50% - 33px) 0, 50% 12.5px, calc(50% + 33px) 0, 100% 0, 100% 100%, calc(50% + 33px) 100%, 50% calc(100% - 12.5px), calc(50% - 33px) 100%, 0 100%)',
        }}
      />

      {/* Children: Pen, Binder, Pages */}
      {children}
    </div>
  );
};
