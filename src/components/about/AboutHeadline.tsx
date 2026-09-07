'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const AboutHeadline: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-3"
    >
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
        I like finding the{' '}
        <span className="bg-gradient-to-r from-violet-300 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
          machinery behind the magic.
        </span>
      </h2>
    </motion.div>
  );
};
