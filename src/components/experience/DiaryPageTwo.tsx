'use client';

import React from 'react';
import { GraduationCap, CheckCircle2, Award, Cpu } from 'lucide-react';
import { CareerItem } from '@/data/experience';

interface DiaryPageTwoProps {
  data: CareerItem;
}

export const DiaryPageTwo: React.FC<DiaryPageTwoProps> = ({ data }) => {
  return (
    <div className="w-full md:col-span-6 p-4 sm:p-5 lg:p-6 flex flex-col justify-between h-full relative overflow-hidden bg-gradient-to-r from-[#16274e] via-[#0d1832] to-[#080f22] rounded-2xl md:rounded-l-none md:rounded-r-[22px] shadow-inner">
      {/* Stacked Paper Block Texture (Outer Right Edge - Many pages stacked beneath) */}
      <div className="absolute right-0 top-0 bottom-0 w-2.5 bg-gradient-to-l from-[#111f42] via-[#0b142c] to-transparent border-l border-cyan-500/30 flex flex-col justify-between py-1 pointer-events-none z-20">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-full h-[1px] bg-cyan-400/25" />
        ))}
      </div>

      {/* Spine Paper Curvature Shadow (Page arches upwards at center spine fold) */}
      <div className="hidden md:block absolute left-0 top-0 bottom-0 w-20 lg:w-28 bg-gradient-to-r from-black/80 via-blue-950/40 via-cyan-500/10 to-transparent pointer-events-none z-15" />

      {/* Lined Graph Paper Rules (Cyan Grid lines) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.08)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      {/* Left Margin Red Line (Desktop/Laptop/Tablet) */}
      <div className="hidden md:block absolute left-7 lg:left-9 top-0 bottom-0 w-[1px] bg-red-500/35 pointer-events-none z-10" />

      {/* 3D Punched Paper Hole Sockets along left margin */}
      <div className="hidden md:flex absolute left-1.5 top-0 bottom-0 flex-col justify-between py-6 pointer-events-none z-20">
        {[15, 40, 65, 90].map((topPos, i) => (
          <div
            key={i}
            className="w-3 h-3 lg:w-3.5 lg:h-3.5 rounded-full bg-[#04020b] border border-cyan-950 shadow-[inset_0_2px_4px_rgba(0,0,0,0.95)]"
            style={{ top: `${topPos}%` }}
          />
        ))}
      </div>

      {/* Page Header */}
      <div className="space-y-1 pb-2 border-b border-cyan-800/40 z-10 pl-0 md:pl-4 lg:pl-5">
        <div className="hidden md:flex items-center gap-2">
          <GraduationCap size={15} className="text-cyan-400" />
          <span className="text-[9px] lg:text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-widest">
            PAGE 02 // ACADEMIC LOG
          </span>
        </div>

        <h3 className="text-sm sm:text-base lg:text-lg font-mono font-extrabold text-white tracking-tight leading-tight">
          {data.title}
        </h3>

        <div className="flex items-center justify-between text-xs font-mono text-cyan-200">
          <span className="text-[9px] lg:text-[10px] font-mono text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/40 font-bold">
            [2024-2026]
          </span>
        </div>
      </div>

      {/* Lined Log Entry Highlights */}
      <div className="space-y-1 py-1.5 z-10 flex-1 flex flex-col justify-center pl-0 md:pl-4 lg:pl-5">
        <span className="text-[8px] lg:text-[9px] font-mono text-cyan-400 font-bold uppercase tracking-widest">
          {data.subtitle || 'ACADEMIC FOCUS'}
        </span>
        <ul className="space-y-1 sm:space-y-1.5">
          {data.highlights.map((point, idx) => (
            <li key={idx} className="flex items-start gap-1.5 lg:gap-2 text-[11px] sm:text-xs lg:text-sm font-mono text-gray-200 leading-normal">
              <CheckCircle2 size={12} className="text-cyan-400 flex-shrink-0 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Foundation Subject Tag Pills (Laptop & Desktop) */}
      <div className="hidden md:flex pt-1.5 border-t border-cyan-800/40 items-center justify-between gap-2 z-10 pl-4 lg:pl-5">
        <div className="flex flex-wrap items-center gap-1.5">
          {data.skills.map((skill) => (
            <span
              key={skill}
              className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-[#040a18] border border-cyan-700/50 text-cyan-200 shadow-sm"
            >
              #{skill}
            </span>
          ))}
        </div>

        <span title="Core Foundations Verified">
          <Cpu size={14} className="text-cyan-400 flex-shrink-0" />
        </span>
      </div>
    </div>
  );
};
