'use client';

import React from 'react';

export const ExecutivePen: React.FC = () => {
  return (
    <div className="hidden sm:flex absolute -right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center pointer-events-none">
      {/* Handcrafted Stitched Leather Pen Holder Loop */}
      <div className="w-12 h-32 rounded-r-2xl bg-gradient-to-r from-[#1b0610] via-[#330f1f] to-[#4d162e] border-y-2 border-r-2 border-rose-600/70 shadow-[6px_10px_24px_rgba(0,0,0,0.95)] relative flex items-center justify-center">
        {/* Leather Inner Stitching Detail */}
        <div className="absolute inset-1 rounded-r-xl border border-dashed border-rose-400/50 pointer-events-none" />

        {/* Specular Metallic Silver Bezel Frame Outer Outline */}
        <div className="w-5.8 h-[370px] p-[1.5px] bg-gradient-to-b from-slate-100 via-white via-slate-300 to-slate-500 rounded-t-full rounded-b-full shadow-[8px_12px_28px_rgba(0,0,0,0.95)] relative z-10">
          {/* 100% VISIBLE Metallic Side Handle / Pocket Clip Attached to Cap (w-1.6 h-26, z-30) */}
          <div className="absolute top-3 -left-2.5 w-1.6 h-26 rounded-l-md bg-gradient-to-b from-white via-slate-100 to-slate-300 shadow-[0_4px_12px_rgba(0,0,0,0.95)] flex flex-col justify-between items-center py-2 border border-slate-400/80 z-30">
            {/* Top Clip Ring Attachment */}
            <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
            {/* Clip Jewel Accent (Rose Peach Jewel) */}
            <div className="w-1.5 h-4 rounded-full bg-gradient-to-b from-pink-300 via-rose-400 to-pink-500 shadow-sm" />
            {/* Bottom Clip Ball Tip */}
            <div className="w-1.5 h-1.5 rounded-full bg-slate-200 shadow-sm" />
          </div>

          {/* Obsidian & Rose Peach Fountain Pen Inner Body */}
          <div className="w-full h-full rounded-t-full rounded-b-full bg-gradient-to-r from-[#1b0610] via-[#2d0e1b] via-[#1f0813] to-[#0c0307] flex flex-col justify-between items-center relative overflow-hidden">
            {/* 1. PEN CAP (Top Portion - h-33, Rounded-t-full dome) */}
            <div className="w-full h-33 rounded-t-full bg-gradient-to-r from-[#210915] via-[#381125] via-[#280c1b] to-[#12050c] border-b border-slate-300/40 relative shadow-md">
              {/* Top Metallic Cap Finial */}
              <div className="w-full h-2.5 bg-gradient-to-r from-slate-200 via-white to-slate-300 rounded-t-full opacity-95" />
            </div>

            {/* Metallic Band Separator Ring */}
            <div className="w-full h-2 bg-gradient-to-r from-slate-200 via-white via-slate-100 to-slate-300 shadow-md z-10" />

            {/* 2. MAIN PEN BODY WITH CALLIGRAPHY ENGRAVED INITIALS */}
            <div className="w-full flex-1 bg-gradient-to-r from-[#1b0610] via-[#2d0e1b] via-[#1f0813] to-[#0c0307] flex flex-col justify-between items-center pt-15 pb-2 relative">
              {/* Vertically Engraved Calligraphy Initials 'R K' */}
              <div className="[writing-mode:vertical-lr] font-serif italic font-black text-[11px] tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-b from-rose-100 via-pink-200 to-rose-300 opacity-95 drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)] uppercase select-none">
                R K
              </div>

              {/* Rose Peach Nib Collar & Nib Tip */}
              <div className="w-full flex flex-col items-center">
                <div className="w-2.5 h-1 bg-rose-400 rounded-sm" />
                <div className="w-2 h-3.5 bg-gradient-to-b from-slate-100 via-white to-slate-300 rounded-b-full shadow-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
