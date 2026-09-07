'use client';

import React from 'react';
import { Briefcase, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CareerItem } from '@/data/experience';

interface DiaryPageOneProps {
  data: CareerItem;
}

export const DiaryPageOne: React.FC<DiaryPageOneProps> = ({ data }) => {
  return (
    <div className="w-full md:col-span-6 p-4 sm:p-5 lg:p-6 flex flex-col justify-between h-full relative overflow-hidden bg-gradient-to-l from-[#1e134a] via-[#130d2e] to-[#0d0922] rounded-2xl md:rounded-r-none md:rounded-l-[22px] shadow-inner">
      {/* Stacked Paper Block Texture (Outer Left Edge - Many pages stacked beneath) */}
      <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-r from-[#1b1145] via-[#150d38] to-transparent border-r border-violet-500/30 flex flex-col justify-between py-1 pointer-events-none z-20">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-full h-[1px] bg-violet-400/25" />
        ))}
      </div>

      {/* Spine Paper Curvature Shadow (Page arches upwards at center spine fold) */}
      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-20 lg:w-28 bg-gradient-to-l from-black/80 via-purple-950/40 via-violet-500/10 to-transparent pointer-events-none z-15" />

      {/* Lined Notebook Paper Rules (Blue/Violet lines every 22px) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_21px,rgba(139,92,246,0.12)_22px)] [background-size:100%_22px] pointer-events-none" />

      {/* Left Margin Red Line (Desktop/Laptop/Tablet) */}
      <div className="hidden md:block absolute left-7 lg:left-9 top-0 bottom-0 w-[1px] bg-red-500/35 pointer-events-none" />

      {/* 3D Punched Paper Hole Sockets along right margin */}
      <div className="hidden md:flex absolute right-1.5 top-0 bottom-0 flex-col justify-between py-6 pointer-events-none z-20">
        {[15, 40, 65, 90].map((topPos, i) => (
          <div
            key={i}
            className="w-3 h-3 lg:w-3.5 lg:h-3.5 rounded-full bg-[#04020b] border border-violet-950 shadow-[inset_0_2px_4px_rgba(0,0,0,0.95)]"
            style={{ top: `${topPos}%` }}
          />
        ))}
      </div>


      {/* Page Header */}
      <div className="space-y-1 pb-2 border-b border-violet-800/40 z-10 pl-0 md:pl-4 lg:pl-5">
        <div className="hidden md:flex items-center gap-2">
          <Briefcase size={15} className="text-violet-400" />
          <span className="text-[9px] lg:text-[10px] font-mono text-violet-400 font-bold uppercase tracking-widest">
            PAGE 01 // WORK EXPERIENCE
          </span>
        </div>

        <h3 className="text-sm sm:text-base lg:text-lg font-mono font-extrabold text-white tracking-tight leading-tight">
          {data.title}
        </h3>

        <div className="flex items-center justify-between text-xs font-mono text-violet-200">
          <span className="text-[9px] lg:text-[10px] font-mono text-violet-300 bg-violet-950/80 px-2 py-0.5 rounded border border-violet-800/40 font-bold">
            {data.period}
          </span>
        </div>
      </div>

      {/* Lined Log Entry Highlights */}
      <div className="space-y-1 py-1.5 z-10 flex-1 flex flex-col justify-center pl-0 md:pl-4 lg:pl-5">
        <span className="text-[8px] lg:text-[9px] font-mono text-violet-400 font-bold uppercase tracking-widest">
          {data.subtitle || 'WHAT I WORK ON'}
        </span>
        <ul className="space-y-1 sm:space-y-1.5">
          {data.highlights.map((point, idx) => (
            <li key={idx} className="flex items-start gap-1.5 lg:gap-2 text-[11px] sm:text-xs lg:text-sm font-mono text-gray-200 leading-normal">
              <CheckCircle2 size={12} className="text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Laptop Sticker Skill Pills (Laptop & Desktop) */}
      <div className="hidden md:flex pt-1.5 border-t border-violet-800/40 items-center justify-between gap-2 z-10 pl-4 lg:pl-5">
        <div className="flex flex-wrap items-center gap-1.5">
          {data.skills.map((skill) => (
            <span
              key={skill}
              className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-[#080516] border border-violet-700/50 text-violet-200 shadow-sm"
            >
              #{skill}
            </span>
          ))}
        </div>

        <span title="Verified Production Record">
          <ShieldCheck size={14} className="text-emerald-400 flex-shrink-0" />
        </span>
      </div>
    </div>
  );
};
