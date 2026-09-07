'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '@/data/personal';
import { NAVIGATION_ITEMS, SectionId } from '@/types/navigation';
import { GithubIcon, LinkedinIcon, MailIcon } from '@/icons';
import { ArrowUpLeft, ArrowUp, Sparkles, Heart, X } from 'lucide-react';

interface FooterSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: SectionId) => void;
}

export const FooterSheet: React.FC<FooterSheetProps> = ({ isOpen, onClose, onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 pointer-events-auto"
          />

          {/* Desktop Slide-Out Drawer Sheet Panel (From Right Side on Contact Screen) */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed top-0 right-0 w-[45vw] min-w-[420px] max-w-xl h-screen bg-gradient-to-br from-[#280c1b]/98 via-[#1f0914]/98 to-[#0d0307]/98 border-l-2 border-rose-500/50 p-8 xl:p-12 flex flex-col justify-between select-none z-50 shadow-[0_0_80px_rgba(255,158,170,0.3)] backdrop-blur-2xl"
          >
            {/* Background Ambient Radial Glow */}
            <div className="absolute top-1/4 right-0 w-80 h-80 bg-rose-600/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-pink-700/15 rounded-full blur-[100px] pointer-events-none" />

            {/* Top Close Button & Header */}
            <div className="space-y-4 z-10 pt-2">
              <div className="flex items-center justify-between border-b border-rose-900/40 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-300 via-rose-400 via-pink-500 to-black flex items-center justify-center font-extrabold text-white tracking-widest text-sm border border-pink-300/40 shadow-xl shadow-rose-950">
                    {PERSONAL_INFO.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">{PERSONAL_INFO.name}</h3>
                    <p className="text-xs font-mono bg-gradient-to-r from-pink-300 via-rose-400 to-pink-500 bg-clip-text text-transparent font-bold">{PERSONAL_INFO.title}</p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-black/80 hover:bg-rose-950 border border-pink-400/40 text-pink-200 hover:text-white transition-all cursor-pointer shadow-lg"
                  aria-label="Close Footer Sheet"
                >
                  <X size={20} />
                </button>
              </div>

              <p className="text-sm font-bold text-gray-300 leading-relaxed max-w-md pt-1">
                You actually read the whole thing. Respect. 🫡 <br />
                No, there is no secret button. I checked.
              </p>
              
            </div>

            {/* Quick Navigation Links */}
            <div className="space-y-3 z-10 my-auto py-4 border-y border-rose-900/40">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest block pb-1 bg-gradient-to-r from-pink-300 via-rose-400 to-pink-500 bg-clip-text text-transparent">
                // QUICK NAVIGATION
              </span>
              <div className="grid grid-cols-2 gap-2">
                {NAVIGATION_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      onClose();
                    }}
                    className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white hover:bg-rose-950/60 px-3 py-2 rounded-xl border border-transparent hover:border-pink-400/40 transition-all cursor-pointer text-left"
                  >
                    <span className="text-pink-300 font-bold">{item.number}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Return to Start CTA Button */}
            <div className="z-10 py-2">
              <button
                onClick={() => {
                  onNavigate('intro');
                  onClose();
                }}
                className="group w-full inline-flex items-center justify-between px-6 py-3.5 rounded-2xl bg-gradient-to-r from-pink-300 via-rose-400 via-pink-500 to-black hover:from-pink-200 hover:via-rose-300 hover:to-pink-400 text-white font-mono text-xs font-bold tracking-wider border border-pink-300/40 shadow-[0_4px_20px_rgba(244,63,94,0.4)] hover:shadow-[0_4px_25px_rgba(244,63,94,0.6)] transition-all cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Sparkles size={14} className="text-white group-hover:rotate-12 transition-transform" />
                  <span>RETURN TO START</span>
                </span>
                <div className="w-8 h-8 rounded-full bg-black/40 border border-white/30 flex items-center justify-center group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 transition-transform">
                  <ArrowUpLeft size={16} className="text-white" />
                </div>
              </button>
            </div>

            {/* Bottom Socials & Copyright */}
            <div className="space-y-2 z-10 pt-3 border-t border-rose-900/40">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-black/80 border border-rose-800/40 text-gray-300 hover:text-white hover:border-pink-400 transition-all"
                    title="GitHub"
                  >
                    <GithubIcon size={16} />
                  </a>
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-black/80 border border-rose-800/40 text-gray-300 hover:text-white hover:border-pink-400 transition-all"
                    title="LinkedIn"
                  >
                    <LinkedinIcon size={16} />
                  </a>
                  <a
                    href={PERSONAL_INFO.socials.email}
                    className="p-2 rounded-xl bg-black/80 border border-rose-800/40 text-gray-300 hover:text-white hover:border-pink-400 transition-all"
                    title="Email"
                  >
                    <MailIcon size={16} />
                  </a>
                </div>

                <span className="text-[10px] font-mono text-gray-500">
                  © {currentYear} {PERSONAL_INFO.shortName}
                </span>
              </div>

              <p className="text-[10px] font-mono text-gray-500 flex items-center justify-center gap-1 text-center pt-2">
                <span>Built with Next.js · curiosity · and questionable amounts of debugging 🫠</span>
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

interface MobileFooterProps {
  onNavigate: (sectionId: SectionId) => void;
}

export const MobileFooter: React.FC<MobileFooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="lg:hidden w-full flex-shrink-0 bg-[#0d0307] border-t border-rose-900/50 pt-12 pb-28 px-6 sm:px-10 relative overflow-hidden select-none z-30">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-40 bg-pink-500/10 blur-3xl pointer-events-none" />

      {/* Main Full-Width Content Layout Container */}
      <div className="w-full max-w-xl mx-auto space-y-8 relative z-10">
        {/* Row 1: Brand & Tagline Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-rose-900/40">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-300 via-rose-400 via-pink-500 to-black flex items-center justify-center font-extrabold text-white tracking-widest text-base border border-pink-300/40 shadow-lg shadow-rose-950">
              {PERSONAL_INFO.initials}
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold text-white tracking-tight">{PERSONAL_INFO.name}</h3>
              <p className="text-xs font-mono bg-gradient-to-r from-pink-300 via-rose-400 to-pink-500 bg-clip-text text-transparent font-bold">{PERSONAL_INFO.title}</p>
            </div>
          </div>

          <span className="inline-flex text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 items-center gap-1.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{PERSONAL_INFO.status}</span>
          </span>
        </div>

        <p className="text-sm font-bold text-gray-300 leading-relaxed max-w-md pb-5 border-b border-rose-900/40">
          You actually read the whole thing. Respect. 🫡<br />
          No, there is no secret button. I checked.
        </p>

        {/* Row 2: 2-Column Footer Site Map & Quick Jump Links */}
        <div className="grid grid-cols-2 gap-8 text-left">
          {/* Column A: Navigation Links */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest block bg-gradient-to-r from-pink-300 via-rose-400 to-pink-500 bg-clip-text text-transparent">
              // SECTIONS
            </span>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="flex items-center gap-2 text-xs font-mono text-gray-300 hover:text-white transition-colors cursor-pointer group"
                  >
                    <span className="text-pink-300 font-bold group-hover:translate-x-0.5 transition-transform">
                      {item.number}
                    </span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column B: Social Channels */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest block bg-gradient-to-r from-pink-300 via-rose-400 to-pink-500 bg-clip-text text-transparent">
              // CONNECT
            </span>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-gray-300 hover:text-white transition-colors group"
                >
                  <GithubIcon size={15} className="text-pink-300 group-hover:scale-110 transition-transform" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-gray-300 hover:text-white transition-colors group"
                >
                  <LinkedinIcon size={15} className="text-pink-300 group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.socials.email}
                  className="inline-flex items-center gap-2 text-xs font-mono text-gray-300 hover:text-white transition-colors group"
                >
                  <MailIcon size={15} className="text-pink-300 group-hover:scale-110 transition-transform" />
                  <span>Email Direct</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Row 3: Full-Width Back To Top CTA Button */}
        <div className="pt-2">
          <button
            onClick={() => onNavigate('intro')}
            className="group w-full inline-flex items-center justify-between px-6 py-3.5 rounded-2xl bg-gradient-to-r from-pink-300 via-rose-400 via-pink-500 to-black hover:from-pink-200 hover:via-rose-300 hover:to-pink-400 text-white font-mono text-xs font-bold tracking-wider border border-pink-300/40 shadow-[0_4px_20px_rgba(244,63,94,0.4)] hover:shadow-[0_4px_25px_rgba(244,63,94,0.6)] transition-all cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <Sparkles size={14} className="text-white group-hover:rotate-12 transition-transform" />
              <span>RETURN TO TOP</span>
            </span>
            <ArrowUp size={16} className="text-white group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Row 4: Real Footer Bottom Bar - Copyright & Signature */}
        <div className="pt-6 border-t border-rose-900/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs font-mono text-gray-500">
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="text-xs font-mono text-gray-500 flex items-center justify-center gap-1.5">
            Built with Next.js · curiosity · and questionable amounts of debugging 🫠
          </p>
        </div>
      </div>
    </footer>
  );
};
