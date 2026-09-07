'use client';

import React from 'react';

export const SpineBinder: React.FC = () => {
  return (
    <div className="hidden lg:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-40 flex-col items-center justify-between py-6 pointer-events-none w-14">
      {/* Spine Gutter Crease Shadow */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-purple-950/40 to-black/95 border-x border-black/90 shadow-2xl z-10" />

      {/* Spine Top & Bottom V-Notch Shadow Accent */}
      <div
        className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black via-purple-950/80 to-transparent z-20 pointer-events-none"
        style={{
          clipPath: 'polygon(0 0, 50% 12px, 100% 0, 100% 100%, 0 100%)',
        }}
      />

      {/* Long V-Cut Satin Bookmark Ribbon with Specular Silver Edge Piping (Hangs past bottom V-spine notch) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-4.5 h-[408px] bg-gradient-to-b from-purple-900 via-violet-900 via-fuchsia-900 to-indigo-900 shadow-[0_6px_22px_rgba(0,0,0,0.95)] border-x-2 border-slate-200/90 z-30 pointer-events-none origin-top"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 97%, 0 100%)',
        }}
      />

      {/* 4 Tapered 3D Metallic Rings (w-[32px], wider h-[8px] at hole sockets, thinner h-[4px] at center) */}
      {[15, 40, 65, 90].map((topPos, i) => (
        <div
          key={i}
          className="absolute z-50 w-[32px] h-[8px] flex items-center justify-between pointer-events-none"
          style={{ top: `${topPos}%` }}
        >
          {/* Left Wider Socket Insertion Ring Head (h-8px) */}
          <div className="w-2.5 h-[8px] rounded-full bg-gradient-to-b from-slate-100 via-white to-slate-400 border border-slate-300 shadow-[0_2px_5px_rgba(0,0,0,0.95)] flex-shrink-0 z-20" />

          {/* Thin Center Metallic Wire Span (h-3.5px) */}
          <div className="flex-1 h-[3.5px] bg-gradient-to-r from-slate-300 via-white via-slate-100 to-slate-300 shadow-[0_2px_4px_rgba(0,0,0,0.9)] rounded-full -mx-1.5 z-10 border-y border-slate-300/80" />

          {/* Right Wider Socket Insertion Ring Head (h-8px) */}
          <div className="w-2.5 h-[8px] rounded-full bg-gradient-to-b from-slate-100 via-white to-slate-400 border border-slate-300 shadow-[0_2px_5px_rgba(0,0,0,0.95)] flex-shrink-0 z-20" />
        </div>
      ))}
    </div>
  );
};
