'use client';

import React from 'react';
import { Send, Radio, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/personal';

export const ContactHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between pb-2 border-b border-violet-900/40">
      <span className="text-xs font-mono tracking-widest text-violet-400 font-bold uppercase flex items-center gap-2">
        <Send size={14} className="text-cyan-400 animate-pulse" />
        <span>06 / CONTACT TERMINAL</span>
      </span>

      <div className="flex items-center gap-2">
        <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 flex items-center gap-1.5 shadow-sm">
          <Radio size={10} className="text-emerald-400 animate-pulse" />
          <span>{PERSONAL_INFO.status}</span>
        </span>
      </div>
    </div>
  );
};
