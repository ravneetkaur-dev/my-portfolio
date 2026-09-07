'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Copy, Check, ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/icons';
import { PERSONAL_INFO } from '@/data/personal';

export const ContactChannels: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { label: 'GitHub', href: PERSONAL_INFO.socials.github, icon: GithubIcon, handle: '@ravneetkaur' },
    { label: 'LinkedIn', href: PERSONAL_INFO.socials.linkedin, icon: LinkedinIcon, handle: 'in/ravneetkaur' },
  ];

  return (
    <div className="space-y-4 flex flex-col justify-between h-full">
      {/* Top Welcome Title & Subtitle */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-violet-950/80 border border-violet-700/50 text-[10px] font-mono text-violet-300 font-bold">
          <Sparkles size={11} className="text-cyan-400" />
          <span>INITIATE DIRECT COMMUNICATION</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-mono font-extrabold text-white tracking-tight leading-tight">
          Got something worth <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-300 to-purple-400">building?</span>
        </h3>

        <p className="text-xs font-mono text-gray-300 leading-relaxed">
          Open for full-stack engineering roles, technical architecture collaborations, and ambitious SaaS products.
        </p>
      </div>

      {/* Direct Communication Channels Container */}
      <div className="space-y-2.5">
        {/* Email Quick-Copy Node */}
        <div className="p-3 rounded-xl bg-violet-950/40 border border-violet-500/30 hover:border-cyan-400/50 transition-all duration-300 group shadow-md relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          <div className="flex items-center justify-between relative z-10">
            <a
              href={PERSONAL_INFO.socials.email}
              className="flex items-center gap-3 group/link hover:opacity-90 transition-opacity"
              title="Send Direct Email"
            >
              <div className="p-2 rounded-lg bg-violet-900/60 border border-violet-500/40 text-cyan-400 group-hover/link:text-white transition-colors">
                <Mail size={16} />
              </div>
              <div>
                <span className="text-[9px] font-mono text-violet-400 font-bold uppercase tracking-wider block">
                  MY EMAIL
                </span>
                <span className="text-xs font-mono text-white font-semibold group-hover/link:decoration-cyan-400">
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </a>

            <button
              onClick={handleCopyEmail}
              className="p-1.5 rounded-lg bg-violet-900/40 hover:bg-violet-800/60 border border-violet-500/30 text-violet-200 hover:text-white transition-all duration-200 flex items-center gap-1 text-[10px] font-mono cursor-pointer"
              title="Copy Email Address"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-emerald-400" />
                  <span className="text-emerald-300 font-bold">COPIED</span>
                </>
              ) : (
                <>
                  <Copy size={13} className="text-cyan-400" />
                  <span>COPY</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Location Node */}
        <div className="p-3 rounded-xl bg-violet-950/30 border border-violet-800/40 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-violet-900/40 border border-violet-700/40 text-purple-400">
            <MapPin size={16} />
          </div>
          <div>
            <span className="text-[9px] font-mono text-gray-400 font-bold uppercase tracking-wider block">
              BASED IN
            </span>
            <span className="text-xs font-mono text-gray-200 font-semibold">
              {PERSONAL_INFO.location} · Remote / Global Availability
            </span>
          </div>
        </div>
      </div>

      {/* Social Orbit Cards */}
      <div className="space-y-1.5 pt-1">
        <span className="text-[9px] font-mono text-violet-400 font-bold uppercase tracking-widest block">
          FIND ME ONLINE
        </span>

        <div className="grid grid-cols-2 gap-2">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#0d0a1c] border border-violet-800/40 hover:border-cyan-400/60 hover:bg-violet-950/60 transition-all duration-200 flex flex-col justify-between group shadow-sm"
              >
                <div className="flex items-center justify-between text-gray-400 group-hover:text-cyan-300 mb-1">
                  <IconComponent size={14} />
                  <ExternalLink size={10} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-[10px] font-mono text-gray-200 font-bold group-hover:text-white truncate">
                  {social.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
