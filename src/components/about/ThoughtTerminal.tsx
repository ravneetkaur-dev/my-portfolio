'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, ShieldCheck } from 'lucide-react';

const THOUGHTS = [
  "I build. I question. I break things occasionally. Then I figure out why.",
  "hmm... what if I do it this way?",
  "okay, let's see...",
  "wait, that's actually working.",
  "...there's an edge case.",
  "oh come on.\nfixing that just broke something else.",
  "wait.\n...there it is.",
  "okay.\nthat feels good.",
];

export const ThoughtTerminal: React.FC = () => {
  const [thoughtIndex, setThoughtIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setThoughtIndex((prev) => (prev + 1) % THOUGHTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="p-6 sm:p-7 rounded-3xl bg-[#0c091f]/95 border border-violet-500/30 shadow-2xl shadow-violet-950/80 space-y-5 relative overflow-hidden group"
    >
      {/* Top Mac-Style Terminal Notch */}
      <div className="flex items-center justify-between pb-3 border-b border-violet-900/40">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <span className="text-[11px] font-mono text-violet-300 font-semibold tracking-wider ml-1">
            dev_brain.sh
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2 py-0.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>THINKING</span>
        </div>
      </div>

      {/* Dynamic Animated Thought Screen */}
      <div className="min-h-[110px] flex items-center bg-[#070512] p-4 rounded-2xl border border-violet-950/80 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={thoughtIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="w-full font-mono text-sm sm:text-base font-bold text-violet-100 whitespace-pre-line leading-relaxed flex items-start gap-2.5"
          >
            <span className="text-violet-400 select-none flex-shrink-0 mt-0.5">{`>`}</span>
            <span>
              {THOUGHTS[thoughtIndex]}
              <span className="inline-block w-2 h-4 bg-violet-400 ml-1.5 animate-pulse align-middle" />
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Interactive Thought Indicators */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-1.5">
          {THOUGHTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setThoughtIndex(i)}
              className={`h-1 rounded-full transition-all cursor-pointer ${
                i === thoughtIndex ? 'w-5 bg-violet-400' : 'w-1.5 bg-violet-900/60 hover:bg-violet-700'
              }`}
              title={`Thought ${i + 1}`}
            />
          ))}
        </div>

        <span className="text-[10px] font-mono text-violet-400 font-medium">
          0{thoughtIndex + 1} / 0{THOUGHTS.length}
        </span>
      </div>

      {/* Core Trait Tags */}
      <div className="pt-3 border-t border-violet-900/40 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-violet-950/70 border border-violet-800/40 text-xs font-mono text-violet-200">
          <Code2 size={13} className="text-violet-400" />
          <span>BUILDING</span>
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-violet-950/70 border border-violet-800/40 text-xs font-mono text-violet-200">
          <Database size={13} className="text-cyan-400" />
          <span>DEBUGGING</span>
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-violet-950/70 border border-violet-800/40 text-xs font-mono text-violet-200">
          <ShieldCheck size={13} className="text-emerald-400" />
          <span>FIGURING IT OUT</span>
        </span>
      </div>
    </motion.div>
  );
};
