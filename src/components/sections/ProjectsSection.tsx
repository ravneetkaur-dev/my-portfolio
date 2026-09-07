'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA } from '@/data/projects';
import { Project } from '@/types/project';
import { LaptopMockup } from '@/components/visual/LaptopMockup';
import { Modal } from '@/components/common/Modal';
import { TechIcon } from '@/components/common/TechIcon';
import { ChevronLeft, ChevronRight, ExternalLink, ArrowRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const currentProject = PROJECTS_DATA[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? PROJECTS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === PROJECTS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="projects"
      className="w-full lg:w-screen lg:min-w-[100vw] h-auto min-h-screen lg:h-screen flex-shrink-0 flex flex-col justify-between px-6 sm:px-10 lg:pl-12 lg:pr-28 pt-14 pb-16 lg:pt-14 lg:pb-16 relative select-none lg:snap-start overflow-hidden bg-gradient-to-b from-[#210a14] via-[#18060f] to-[#210a14]"
    >
      {/* Whole Section Content with Smooth Scroll Entrance Animation */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 flex flex-col justify-between z-10 my-auto py-1 h-full"
      >
        {/* Top Header & Slider Controls */}
        <div className="flex items-center justify-between z-10 pb-2 border-b border-[#3b1124]/40">
          <div>
            <span className="text-xs font-mono tracking-widest font-bold uppercase bg-gradient-to-r from-pink-300 via-rose-400 to-pink-500 bg-clip-text text-transparent">
              03 / PROJECTS
            </span>
          </div>

          {/* Slide Controls */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-gray-400">
              <span className="font-bold bg-gradient-to-r from-pink-300 via-rose-400 to-pink-500 bg-clip-text text-transparent">0{currentIndex + 1}</span> / 0{PROJECTS_DATA.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-black/70 border border-pink-500/30 flex items-center justify-center text-gray-300 hover:text-white hover:bg-rose-950/60 hover:border-pink-400 transition-all cursor-pointer shadow-sm"
                title="Previous Project"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-black/70 border border-pink-500/30 flex items-center justify-center text-gray-300 hover:text-white hover:bg-rose-950/60 hover:border-pink-400 transition-all cursor-pointer shadow-sm"
                title="Next Project"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center z-10 my-auto py-1">
          {/* Left: Laptop Mockup Visual */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 flex justify-center max-w-xs sm:max-w-md lg:max-w-full mx-auto"
            >
              <LaptopMockup project={currentProject} />
            </motion.div>
          </AnimatePresence>

          {/* Right: Project Details Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id + '-details'}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 space-y-3 sm:space-y-4 lg:space-y-5"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-black/80 border border-pink-400/40 text-xs font-mono text-pink-200 shadow-sm">
                FEATURED SAAS PLATFORM
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                <span>{currentProject.title}</span>
                <span className="block sm:inline text-lg sm:text-2xl font-normal sm:ml-3 bg-gradient-to-r from-pink-300 via-rose-400 to-pink-500 bg-clip-text text-transparent">
                  — {currentProject.subtitle}
                </span>
              </h3>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {currentProject.description}
              </p>

              {/* Tech Stack Pills with React Tech Icons */}
              <div className="flex flex-wrap gap-2 pt-2">
                {currentProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-black/80 text-pink-200 border border-rose-900/60 shadow-sm"
                  >
                    <TechIcon name={tag} size={13} />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => setSelectedProject(currentProject)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-300 via-rose-400 via-pink-500 to-black hover:from-pink-200 hover:via-rose-300 hover:to-pink-400 text-white font-mono text-xs font-bold tracking-wider shadow-[0_4px_20px_rgba(244,63,94,0.4)] hover:shadow-[0_4px_25px_rgba(244,63,94,0.6)] transition-all cursor-pointer border border-pink-300/40 active:scale-[0.99]"
                >
                  <span>EXPLORE PROJECT </span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Project Slider Indicator Dots */}
        <div className="flex justify-center gap-2 z-10">
          {PROJECTS_DATA.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                idx === currentIndex ? 'w-8 bg-gradient-to-r from-pink-300 via-rose-400 to-pink-500' : 'w-2 bg-black/80 border border-rose-900/60 hover:bg-rose-950'
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Interactive Project Details Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  );
};
