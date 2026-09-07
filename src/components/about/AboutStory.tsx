'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const AboutStory: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="space-y-4 text-base sm:text-lg text-slate-200 font-medium leading-relaxed tracking-wide max-w-2xl"
    >
      <p>
        I'm a full-stack developer who loves turning ideas into real products and understanding what happens underneath them. I like being involved in the whole process — shaping the <span className="text-violet-300 font-normal">architecture</span>, building the <span className="text-indigo-300 font-normal">backend</span>, crafting the UI, and solving the edge cases that make a system production-ready.
      </p>
      <p>
        Naturally curious, I dig until I know <em className="text-white font-bold not-italic">why</em> something works, not just how to use it. From databases and authentication to media delivery and payments, I take complicated problems and break them down into reliable, intuitive systems.
      </p>
    </motion.div>
  );
};
