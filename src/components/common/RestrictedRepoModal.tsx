'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, ShieldAlert, X, Mail, ExternalLink, FileCode, CheckCircle2 } from 'lucide-react';
import { Project } from '@/types/project';

interface RestrictedRepoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestAccess?: () => void;
  project: Project | null;
}

export const RestrictedRepoModal: React.FC<RestrictedRepoModalProps> = ({
  isOpen,
  onClose,
  onRequestAccess,
  project,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleContactClick = () => {
    onClose();
    if (onRequestAccess) {
      onRequestAccess();
    }
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = 'contact';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop Overlay with Ambient Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 25 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="relative w-full max-w-lg bg-[#18070e] border border-rose-500/50 rounded-3xl shadow-[0_10px_50px_rgba(244,63,94,0.3)] z-10 overflow-hidden flex flex-col p-6 sm:p-8 text-white"
          >
            {/* Ambient Glowing Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/15 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-700/15 rounded-full blur-[90px] pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-rose-950/80 border border-rose-500/30 text-gray-300 hover:text-white hover:bg-rose-900/70 hover:border-rose-400 transition-all cursor-pointer z-20"
              title="Close Modal"
            >
              <X size={18} />
            </button>

            {/* Top Security Header Icon */}
            <div className="flex flex-col items-center text-center space-y-4 pt-2">
              <div className="relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-rose-950 via-[#280916] to-black border border-rose-500/50 flex items-center justify-center shadow-lg shadow-rose-950/80">
                  <Lock size={32} className="text-[#ff9eaa] animate-pulse" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rose-600 border-2 border-[#18070e] flex items-center justify-center">
                  <ShieldAlert size={10} className="text-white" />
                </div>
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/90 border border-rose-500/40 text-xs font-mono text-[#ff9eaa] tracking-widest uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                <span>RESTRICTED REPOSITORY ACCESS</span>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  Private Codebase
                </h3>
                {project && (
                  <p className="text-sm font-mono text-pink-300/90 font-medium">
                    {project.title} — {project.subtitle}
                  </p>
                )}
              </div>
            </div>

            {/* Content Body / Explanation */}
            <div className="my-6 space-y-4">
              <div className="p-4 rounded-2xl bg-[#240a16] border border-rose-900/40 space-y-2 text-left">
                <div className="flex items-center gap-2 text-xs font-mono text-rose-300 font-bold uppercase tracking-wider">
                  <FileCode size={14} className="text-[#ff9eaa]" />
                  <span>Confidentiality Notice</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                  This repository contains proprietary client architecture, trade code, or production codebase built under Non-Disclosure Agreements (NDA). Public access to the source repository is restricted.
                </p>
              </div>

              {/* Security Specs Grid */}
              <div className="grid grid-cols-2 gap-2 text-left">
                <div className="p-3 rounded-xl bg-black/60 border border-rose-900/30 space-y-1">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">Access Control</span>
                  <span className="text-xs font-mono font-bold text-rose-300 flex items-center gap-1.5">
                    <ShieldAlert size={12} className="text-rose-400" />
                    Private / NDA
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-black/60 border border-rose-900/30 space-y-1">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">Code Walkthrough</span>
                  <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="text-emerald-400" />
                    On Request
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={handleContactClick}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-rose-600 via-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-500 text-white font-mono text-xs font-bold tracking-wider shadow-lg shadow-rose-950/80 transition-all border border-rose-400/40 cursor-pointer active:scale-[0.99]"
              >
                <Mail size={14} />
                <span>REQUEST ACCESS / CONTACT</span>
              </button>

              {project?.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-rose-950/80 hover:bg-rose-900/80 text-rose-200 border border-rose-700/50 text-xs font-mono font-semibold tracking-wider transition-all cursor-pointer"
                >
                  <ExternalLink size={14} />
                  <span>VIEW LIVE DEMO</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
