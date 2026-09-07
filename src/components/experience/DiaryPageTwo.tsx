'use client';

import React from 'react';
import { GraduationCap, CheckCircle2, Cpu } from 'lucide-react';
import { CareerItem } from '@/data/experience';

interface DiaryPageTwoProps {
  data: CareerItem;
}

export const DiaryPageTwo: React.FC<DiaryPageTwoProps> = ({ data }) => {
  return (
    <div className="w-full md:col-span-6 p-4 sm:p-5 lg:p-6 flex flex-col justify-between h-full relative overflow-hidden bg-gradient-to-r from-[#3b1527] via-[#290e1b] to-[#1a0711] rounded-2xl md:rounded-l-none md:rounded-r-[22px] shadow-inner">
      {/* Stacked Paper Block Texture (Outer Right Edge - Many pages stacked beneath) */}
      <div className="absolute right-0 top-0 bottom-0 w-2.5 bg-gradient-to-l from-[#42182b] via-[#2e0e1e] to-transparent border-l border-rose-400/50 flex flex-col justify-between py-1 pointer-events-none z-30">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-full h-[1px] bg-rose-300/40" />
        ))}
      </div>

      {/* Spine Paper Curvature Shadow (Page arches upwards at center spine fold) */}
      <div className="hidden md:block absolute left-0 top-0 bottom-0 w-20 lg:w-28 bg-gradient-to-r from-black/70 via-rose-950/30 via-rose-500/10 to-transparent pointer-events-none z-10" />

      {/* Lined Notebook Paper Rules (Matching Page 01 notebook lines z-0) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_21px,rgba(255,158,170,0.08)_22px)] [background-size:100%_22px] pointer-events-none z-0" />

      {/* Left Margin Red Line (Desktop/Laptop/Tablet) */}
      <div className="hidden md:block absolute left-7 lg:left-9 top-0 bottom-0 w-[1px] bg-rose-400/50 pointer-events-none z-10" />

      {/* 3D Punched Paper Hole Sockets along left margin */}
      <div className="hidden md:flex absolute left-1.5 top-0 bottom-0 flex-col justify-between py-6 pointer-events-none z-30">
        {[15, 40, 65, 90].map((topPos, i) => (
          <div
            key={i}
            className="w-3 h-3 lg:w-3.5 lg:h-3.5 rounded-full bg-[#14050d] border border-rose-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.9)]"
            style={{ top: `${topPos}%` }}
          />
        ))}
      </div>

      {/* Page Header (Elevated relative z-20 above graph paper lines) */}
      <div className="relative z-20 space-y-1 pb-2 border-b border-rose-400/30 pl-0 md:pl-4 lg:pl-5">
        <div className="hidden md:flex items-center gap-2">
          <GraduationCap size={15} className="text-rose-400" />
          <span className="text-[9px] lg:text-[10px] font-mono font-bold uppercase tracking-widest bg-gradient-to-r from-pink-300 via-rose-400 to-pink-500 bg-clip-text text-transparent">
            PAGE 02 // ACADEMIC LOG
          </span>
        </div>

        <h3 className="text-sm sm:text-base lg:text-lg font-mono font-extrabold text-white tracking-tight leading-tight">
          {data.title}
        </h3>

        <div className="flex items-center justify-between text-xs font-mono text-pink-100">
          <span className="text-[9px] lg:text-[10px] font-mono text-pink-100 bg-black/80 px-2 py-0.5 rounded border border-pink-400/40 font-bold shadow-sm">
            [2024-2026]
          </span>
        </div>
      </div>

      {/* Lined Log Entry Highlights (Elevated relative z-20 above graph paper lines) */}
      <div className="relative z-20 space-y-1 py-1.5 flex-1 flex flex-col justify-center pl-0 md:pl-4 lg:pl-5">
        <span className="text-[8px] lg:text-[9px] font-mono font-bold uppercase tracking-widest bg-gradient-to-r from-pink-300 via-rose-400 to-pink-500 bg-clip-text text-transparent">
          {data.subtitle || 'ACADEMIC FOCUS'}
        </span>
        <ul className="space-y-1 sm:space-y-1.5">
          {data.highlights.map((point, idx) => (
            <li key={idx} className="flex items-start gap-1.5 lg:gap-2 text-[11px] sm:text-xs lg:text-sm font-mono text-gray-100 leading-normal">
              <CheckCircle2 size={12} className="text-[#ff9eaa] flex-shrink-0 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Foundation Subject Tag Pills (Elevated relative z-20 above graph paper lines) */}
      <div className="relative z-20 hidden md:flex pt-1.5 border-t border-rose-400/30 items-center justify-between gap-2 pl-4 lg:pl-5">
        <div className="flex flex-wrap items-center gap-1.5">
          {data.skills.map((skill) => (
            <span
              key={skill}
              className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-[#42172b]/90 border border-rose-400/40 text-pink-100 shadow-sm"
            >
              #{skill}
            </span>
          ))}
        </div>

        <span title="Core Foundations Verified">
          <Cpu size={14} className="text-[#ff9eaa] flex-shrink-0" />
        </span>
      </div>
    </div>
  );
};
