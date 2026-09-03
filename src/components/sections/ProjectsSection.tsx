'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA } from '@/data/projects';
import { Project } from '@/types/project';
import { LaptopMockup } from '@/components/visual/LaptopMockup';
import { Modal } from '@/components/common/Modal';
import { TechIcon } from '@/components/common/TechIcon';
import { GithubIcon } from '@/icons';
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
      className="w-full lg:w-screen lg:min-w-[100vw] h-auto min-h-screen lg:h-screen flex-shrink-0 flex flex-col justify-between px-6 sm:px-10 lg:pl-12 lg:pr-28 pt-14 pb-16 lg:pt-14 lg:pb-16 relative select-none lg:snap-start overflow-hidden bg-gradient-to-b from-[#0c0919] via-[#0a0718] to-[#090716]"
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
        <div className="flex items-center justify-between z-10 pb-2 border-b border-violet-900/40">
          <div>
            <span className="text-xs font-mono tracking-widest text-violet-400 font-bold uppercase">
              03 / PROJECTS
            </span>
          </div>

          {/* Slide Controls */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-gray-400">
              <span className="text-violet-400 font-bold">0{currentIndex + 1}</span> / 0{PROJECTS_DATA.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-violet-950/50 border border-violet-500/30 flex items-center justify-center text-gray-300 hover:text-white hover:bg-violet-900/60 hover:border-violet-400 transition-all cursor-pointer"
                title="Previous Project"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-violet-950/50 border border-violet-500/30 flex items-center justify-center text-gray-300 hover:text-white hover:bg-violet-900/60 hover:border-violet-400 transition-all cursor-pointer"
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
              <div className="inline-block px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-xs font-mono text-violet-300">
                FEATURED SAAS PLATFORM
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                <span>{currentProject.title}</span>
                <span className="block sm:inline text-lg sm:text-2xl font-normal text-violet-400/90 sm:ml-3">
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
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-violet-950/60 text-violet-200 border border-violet-800/40"
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
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-700 text-white font-mono text-xs font-semibold tracking-wider hover:from-violet-500 hover:to-purple-600 shadow-md shadow-violet-950 transition-all cursor-pointer border border-violet-400/30"
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
                idx === currentIndex ? 'w-8 bg-violet-400' : 'w-2 bg-violet-950 hover:bg-violet-800'
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
