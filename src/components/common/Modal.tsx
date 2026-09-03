'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Layers, ShieldCheck, CheckCircle2, ExternalLink, Sparkles, Cpu } from 'lucide-react';
import { Project } from '@/types/project';
import { TechIcon } from '@/components/common/TechIcon';
import { GithubIcon } from '@/icons';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
  const [headerVisible, setHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setHeaderVisible(true);
      lastScrollY.current = 0;
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const currentScrollY = e.currentTarget.scrollTop;
    if (currentScrollY > lastScrollY.current + 12 && currentScrollY > 50) {
      setHeaderVisible(false);
    } else if (currentScrollY < lastScrollY.current - 6) {
      setHeaderVisible(true);
    }
    lastScrollY.current = currentScrollY;
  };

  if (!project) return null;
  const d = project.details;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
          {/* Backdrop Blur Overlay with Ambient Glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-xl"
          />

          {/* Modal Outer Futuristic Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: 'spring', damping: 28, stiffness: 340 }}
            className="relative w-full max-w-4xl bg-[#080614] border border-violet-500/40 rounded-3xl shadow-2xl shadow-violet-950/90 z-10 max-h-[88vh] overflow-hidden flex flex-col"
          >
            {/* Background Ambient Radial Glow Effects */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Smart Hide-on-Scroll Header Bar with Action Buttons */}
            <motion.div
              animate={{ y: headerVisible ? 0 : -90, opacity: headerVisible ? 1 : 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="absolute top-0 inset-x-0 z-30 px-5 sm:px-8 py-4 bg-[#080614]/90 backdrop-blur-md border-b border-violet-900/40 flex items-center justify-between pointer-events-auto"
            >
              <div className="min-w-0 pr-4">
                <span className="text-[10px] font-mono tracking-widest text-violet-400 font-bold uppercase flex items-center gap-1.5">
                  <Sparkles size={12} className="text-violet-400" />
                  <span>PROJECT SPECIFICATION</span>
                </span>
                <h2 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight mt-0.5 truncate leading-tight">
                  <span>{project.title}</span>
                  <span className="hidden sm:inline text-base font-normal text-violet-400/90 ml-2.5">
                    — {project.subtitle}
                  </span>
                </h2>
              </div>

              {/* Header Action Buttons & Close Button */}
              <div className="flex items-center gap-2.5 flex-shrink-0">

                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-violet-950/80 border border-violet-500/30 text-gray-300 hover:text-white hover:bg-violet-900/60 hover:border-violet-400 transition-colors cursor-pointer"
                  title="Close Modal"
                >
                  <X size={18} />
                </button>
              </div>
            </motion.div>

            {/* Scrollable Modal Content */}
            <div
              data-modal-container="true"
              onScroll={handleScroll}
              onWheel={(e) => e.stopPropagation()}
              className="w-full h-full overflow-y-auto modal-scrollbar px-5 sm:px-8 md:px-10 pt-24 sm:pt-28 pb-12 space-y-8 text-white z-10"
            >
              {/* FEATURED IMAGE & ACTION BUTTONS CARD */}
              <div className="space-y-3">
                {project.image && (
                  <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden border border-violet-500/30 bg-[#0d0a1a] shadow-xl group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-[1.01] transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080614] via-transparent to-transparent opacity-60 pointer-events-none" />
                  </div>
                )}

                {/* ACTION BUTTONS BAR */}
                <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-[#0c0919] border border-violet-900/40">
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={project.liveUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-mono text-xs font-bold tracking-wider shadow-lg shadow-violet-950 transition-all border border-violet-400/30 cursor-pointer"
                    >
                      <ExternalLink size={14} />
                      <span>LIVE DEMO</span>
                    </a>

                    <a
                      href={project.githubUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-950/80 hover:bg-violet-900/80 text-violet-200 border border-violet-700/50 text-xs font-mono font-semibold tracking-wider transition-all cursor-pointer"
                    >
                      <GithubIcon size={15} />
                      <span>GITHUB REPO</span>
                    </a>
                  </div>

                  <div className="text-xs font-mono text-violet-400">
                    {project.subtitle}
                  </div>
                </div>
              </div>

              {/* 01 — OVERVIEW */}
              <section className="space-y-4 pt-1">
                <div className="flex items-center gap-2 text-xs font-mono text-violet-400 font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-violet-400" />
                  <span>01 — Overview</span>
                </div>

                <div className="space-y-3">
                  {(project.longDescription || project.description).split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-base text-gray-200 leading-relaxed font-light">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>

              {/* 02 — MY CONTRIBUTION */}
              {d?.ownershipStatement && (
                <section className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-violet-400 font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    <span>02 — My Contribution</span>
                  </div>
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-violet-950/70 via-black to-black border border-violet-500/40 shadow-lg shadow-violet-950/50 space-y-2">
                    <div className="text-xs font-mono text-violet-300 font-bold tracking-wider uppercase flex items-center gap-2">
                      <ShieldCheck size={16} className="text-violet-400" />
                      <span>Full-Stack Development</span>
                    </div>
                    <p className="text-sm sm:text-base text-violet-100 font-medium leading-relaxed">
                      {d.ownershipStatement}
                    </p>
                  </div>
                </section>
              )}

              {/* 03 — WHAT I BUILT (TWO-COLUMN LAYOUT) */}
              {d?.whatIBuilt && d.whatIBuilt.length > 0 && (
                <section className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-violet-400 font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-purple-400" />
                    <span>03 — What I Built</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {d.whatIBuilt.map((group, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-[#0c0919] border border-violet-900/30 hover:border-violet-500/40 transition-all space-y-3 flex flex-col justify-between"
                      >
                        <div className="space-y-3">
                          <h4 className="text-sm font-mono font-bold text-violet-300 tracking-wide flex items-center gap-2">
                            <Layers size={15} className="text-violet-400" />
                            {group.category}
                          </h4>
                          <ul className="space-y-2">
                            {group.items.map((item, i) => (
                              <li key={i} className="text-xs sm:text-sm text-gray-300 flex items-start gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* 04 — TECHNOLOGY STACK */}
              {d?.techStackBreakdown && (
                <section className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-violet-400 font-bold uppercase tracking-wider">
                    <Cpu size={14} className="text-cyan-400" />
                    <span>04 — Technology Stack</span>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#0c0919] border border-violet-900/30 grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {d.techStackBreakdown.map((cat, idx) => (
                      <div key={idx} className="space-y-3">
                        <div className="text-[11px] font-mono font-bold text-violet-400 uppercase tracking-widest pb-2 border-b border-violet-900/40">
                          {cat.category}
                        </div>
                        <ul className="space-y-2">
                          {cat.skills.map((skill) => (
                            <li key={skill} className="flex items-center gap-2 text-xs font-mono text-gray-200">
                              <TechIcon name={skill} size={14} />
                              <span className="truncate">{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* 05 — OUTCOME & IMPACT (SINGLE UNIFIED CARD) */}
              {(d?.outcome || (d?.engineeringHighlights && d.engineeringHighlights.length > 0)) && (
                <section className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-violet-400 font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>05 — Outcome & Impact</span>
                  </div>

                  <div className="p-6 rounded-2xl bg-gradient-to-r from-violet-950/80 via-black to-black border border-violet-500/40 shadow-xl space-y-5">
                    {d?.outcome && (
                      <div className="space-y-2">
                        <div className="text-xs font-mono text-violet-300 font-bold tracking-wider uppercase flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-emerald-400" />
                          <span>Platform Capability</span>
                        </div>
                        <p className="text-sm sm:text-base text-gray-100 font-medium leading-relaxed">
                          {d.outcome}
                        </p>
                      </div>
                    )}

                    {d?.engineeringHighlights && d.engineeringHighlights.length > 0 && (
                      <div className="pt-4 border-t border-violet-900/50 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {d.engineeringHighlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-xl bg-[#0c0919]/90 border border-violet-900/40 space-y-1"
                          >
                            <h5 className="text-xs font-mono font-bold text-violet-300 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                              {highlight.title}
                            </h5>
                            <p className="text-xs text-gray-300 leading-relaxed pl-3.5">
                              {highlight.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </section>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
