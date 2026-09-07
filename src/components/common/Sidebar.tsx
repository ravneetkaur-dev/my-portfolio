'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/personal';
import { GithubIcon, LinkedinIcon, MailIcon } from '@/icons';

import { SectionId } from '@/types/navigation';

interface SidebarProps {
  onNavigate?: (sectionId: SectionId) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onNavigate }) => {
  return (
    <aside className="hidden lg:flex w-16 md:w-20 h-screen fixed left-0 top-0 bottom-0 z-40 bg-[#0a0814]/90 backdrop-blur-xl border-r border-[#8b5cf6]/15 flex-col justify-between items-center py-6 select-none">
      {/* Brand Initials Logo */}
      <button
        onClick={() => onNavigate?.('intro')}
        className="flex flex-col items-center gap-1 group cursor-pointer focus:outline-none"
        title="Return to Intro (Section 01)"
      >
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-700 to-black-400 flex items-center justify-center font-bold text-white tracking-widest text-sm shadow-lg shadow-violet-950/50 border border-violet-400/30 group-hover:scale-105 group-hover:border-violet-300 transition-all">
          {PERSONAL_INFO.initials}
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse mt-1" />
      </button>

      {/* Vertical Scroll Text Indicator */}
      <div className="hidden md:flex flex-col items-center gap-3 text-[10px] tracking-[0.25em] text-gray-400 uppercase rotate-180 [writing-mode:vertical-lr]">
        <span className="opacity-70 font-mono">SCROLL HORIZONTALLY</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-violet-500/50 to-transparent" />
      </div>

      {/* Social Icons & Status */}
      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-col items-center gap-3 text-gray-400">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400 transition-colors p-1.5 rounded-lg hover:bg-violet-950/30"
            title="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400 transition-colors p-1.5 rounded-lg hover:bg-violet-950/30"
            title="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={PERSONAL_INFO.socials.email}
            className="hover:text-violet-400 transition-colors p-1.5 rounded-lg hover:bg-violet-950/30"
            title="Email"
          >
            <MailIcon size={18} />
          </a>
        </div>

        <div className="w-8 h-[1px] bg-violet-900/30" />

        {/* Location & Status Marker */}
        <div className="hidden lg:flex items-center gap-2 text-[9px] font-mono uppercase text-gray-400 tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="truncate max-w-[80px]">{PERSONAL_INFO.location}</span>
        </div>
      </div>
    </aside>
  );
};
