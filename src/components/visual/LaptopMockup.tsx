'use client';

import React from 'react';
import Image from 'next/image';
import { Project } from '@/types/project';

interface LaptopMockupProps {
  project: Project;
}

export const LaptopMockup: React.FC<LaptopMockupProps> = ({ project }) => {
  return (
    <div className="relative w-full max-w-xl mx-auto flex flex-col items-center select-none group">
      {/* Ambient Back Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 via-purple-600/30 to-pink-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />

      {/* Screen Frame Outer */}
      <div className="relative w-full aspect-[16/10] bg-[#1a162b] border-[10px] border-[#251e3d] rounded-t-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Screen Top Camera Notch Dot */}
        <div className="w-full h-4 bg-[#120e20] flex items-center justify-center border-b border-violet-950/40 z-10 flex-shrink-0">
          <div className="w-1.5 h-1.5 rounded-full bg-violet-900/60" />
        </div>

        {/* Laptop Screen Content Display */}
        <div className="relative flex-1 bg-[#0d0a1a] overflow-hidden flex items-center justify-center">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              unoptimized
              className="w-full h-full object-contain bg-[#090714] p-0.5 filter brightness-95 group-hover:brightness-105 transition-all duration-500"
            />
          ) : (
            /* Fallback Dashboard Preview Screen Content */
            <div className="relative flex-1 bg-[#0d0a1a] p-4 font-sans flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between border-b border-violet-900/30 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-violet-600" />
                  <span className="text-xs font-mono font-semibold text-white tracking-wider">
                    {project.title}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                  LIVE DEMO
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 my-3">
                <div className="col-span-2 space-y-2">
                  <div className="h-20 bg-gradient-to-r from-violet-900/40 to-purple-900/30 rounded-lg border border-violet-800/20 p-2.5 flex flex-col justify-between">
                    <span className="text-[10px] text-gray-400">Weekly Performance</span>
                    <div className="w-full h-8 flex items-end gap-1">
                      <div className="w-1/6 h-[40%] bg-violet-500 rounded-t" />
                      <div className="w-1/6 h-[60%] bg-violet-500 rounded-t" />
                      <div className="w-1/6 h-[35%] bg-violet-500 rounded-t" />
                      <div className="w-1/6 h-[85%] bg-violet-400 rounded-t" />
                      <div className="w-1/6 h-[70%] bg-purple-500 rounded-t" />
                      <div className="w-1/6 h-[100%] bg-pink-500 rounded-t" />
                    </div>
                  </div>
                </div>

                <div className="col-span-1 bg-violet-950/40 rounded-lg border border-violet-800/20 p-2 space-y-2 flex flex-col justify-between">
                  <span className="text-[9px] font-mono text-violet-300">Metrics</span>
                  <div className="space-y-1.5">
                    <div className="p-1.5 rounded bg-violet-900/40 text-[9px]">
                      <p className="text-gray-400">Users</p>
                      <p className="font-bold text-white">10.4k</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Laptop Base Stand */}
      <div className="relative w-[108%] h-3 bg-[#2d2547] rounded-b-xl shadow-lg flex justify-center border-t border-violet-900/50">
        <div className="w-16 h-1 bg-[#1a152e] rounded-b" />
      </div>
    </div>
  );
};
