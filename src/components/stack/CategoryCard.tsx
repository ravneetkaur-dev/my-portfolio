'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TechCategory } from '@/data/stackData';
import { TechIcon } from '@/components/common/TechIcon';
import { Code2, Layout, Server, Database, Wrench, Cpu } from 'lucide-react';

interface CategoryCardProps {
  category: TechCategory;
  index: number;
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  languages: <Code2 size={16} className="text-[#ff9eaa]" />,
  frontend: <Layout size={16} className="text-rose-300" />,
  backend: <Server size={16} className="text-pink-300" />,
  data: <Database size={16} className="text-rose-200" />,
  'libraries-workflow': <Wrench size={16} className="text-[#ff9eaa]" />,
  foundations: <Cpu size={16} className="text-pink-300" />,
};

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, index }) => {
  const icon = CATEGORY_ICONS[category.id] || <Code2 size={16} className="text-[#ff9eaa]" />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="p-5 sm:p-6 rounded-2xl bg-[#120409]/95 border border-pink-500/30 hover:border-pink-400/60 shadow-xl shadow-rose-950/40 space-y-4 transition-all duration-300 group flex flex-col justify-between"
    >
      <div className="space-y-3">
        {/* Category Header */}
        <div className="flex items-center justify-between pb-2 border-b border-rose-900/40">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-black/80 border border-rose-800/40">
              {icon}
            </div>
            <div>
              <h3 className="text-xs font-mono font-bold text-white tracking-wider uppercase">
                {category.label}
              </h3>
              <p className="text-[10px] font-mono text-gray-400 hidden sm:block">
                {category.subtitle}
              </p>
            </div>
          </div>

          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-black/80 border border-pink-400/40 text-pink-200 shadow-sm">
            {category.items.length} TECHS
          </span>
        </div>

        {/* Tech Pills Grid */}
        <div className="flex flex-wrap gap-2 pt-1">
          {category.items.map((tech) => (
            <div
              key={tech}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/80 hover:bg-rose-950/60 border border-rose-900/60 hover:border-pink-400/50 text-xs font-mono text-pink-100 transition-all duration-200 cursor-default shadow-sm"
            >
              <TechIcon name={tech} size={15} />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
