'use client';

import React from 'react';
import {
  SiNextdotjs,
  SiReact,
  SiNestjs,
  SiPostgresql,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiC,
  SiHtml5,
  SiCss,
  SiRedux,
  SiBootstrap,
  SiPrisma,
  SiDocker,
  SiRedis,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiZod,
  SiExpress,
  SiReactquery,
  SiGit,
  SiGithub,
  SiPostman,
} from 'react-icons/si';
import { FaAws, FaJava } from 'react-icons/fa6';
import { TbApi, TbTerminal, TbLayersIntersect, TbBinaryTree, TbCube, TbDatabase, TbCpu } from 'react-icons/tb';

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, size = 15, className = '' }) => {
  const normName = name.toLowerCase().trim();

  // Languages
  if (normName === 'typescript' || normName.includes('typescript')) return <SiTypescript size={size} className={`text-blue-400 ${className}`} />;
  if (normName === 'javascript' || normName.includes('javascript')) return <SiJavascript size={size} className={`text-yellow-400 ${className}`} />;
  if (normName === 'java') return <FaJava size={size} className={`text-orange-400 ${className}`} />;
  if (normName === 'c++' || normName.includes('c++')) return <SiCplusplus size={size} className={`text-blue-500 ${className}`} />;
  if (normName === 'c') return <SiC size={size} className={`text-sky-400 ${className}`} />;
  if (normName.includes('html')) return <SiHtml5 size={size} className={`text-orange-500 ${className}`} />;
  if (normName === 'css' || normName.includes('css')) return <SiCss size={size} className={`text-blue-400 ${className}`} />;

  // Frontend
  if (normName.includes('redux')) return <SiRedux size={size} className={`text-purple-400 ${className}`} />;
  if (normName.includes('bootstrap')) return <SiBootstrap size={size} className={`text-violet-500 ${className}`} />;
  if (normName.includes('tailwind')) return <SiTailwindcss size={size} className={`text-cyan-300 ${className}`} />;
  if (normName.includes('next')) return <SiNextdotjs size={size} className={`text-white ${className}`} />;
  if (normName.includes('react')) return <SiReact size={size} className={`text-cyan-400 ${className}`} />;

  // Backend
  if (normName.includes('nest')) return <SiNestjs size={size} className={`text-red-500 ${className}`} />;
  if (normName.includes('node')) return <SiNodedotjs size={size} className={`text-emerald-500 ${className}`} />;
  if (normName.includes('express')) return <SiExpress size={size} className={`text-gray-300 ${className}`} />;

  // Data
  if (normName.includes('postgres')) return <SiPostgresql size={size} className={`text-blue-400 ${className}`} />;
  if (normName.includes('mongo')) return <SiMongodb size={size} className={`text-emerald-400 ${className}`} />;
  if (normName.includes('mysql')) return <SiMysql size={size} className={`text-amber-400 ${className}`} />;
  if (normName.includes('prisma')) return <SiPrisma size={size} className={`text-teal-300 ${className}`} />;

  // Libraries & Workflow
  if (normName.includes('tanstack') || normName.includes('query')) return <SiReactquery size={size} className={`text-rose-400 ${className}`} />;
  if (normName.includes('hook form')) return <SiReact size={size} className={`text-[#ec5990] ${className}`} />;
  if (normName.includes('zod')) return <SiZod size={size} className={`text-indigo-400 ${className}`} />;
  if (normName === 'git') return <SiGit size={size} className={`text-orange-500 ${className}`} />;
  if (normName.includes('github')) return <SiGithub size={size} className={`text-white ${className}`} />;
  if (normName.includes('postman')) return <SiPostman size={size} className={`text-orange-400 ${className}`} />;

  // Foundations
  if (normName.includes('data structures') || normName.includes('dsa') || normName.includes('algorithm')) return <TbBinaryTree size={size} className={`text-violet-400 ${className}`} />;
  if (normName.includes('oop') || normName.includes('object')) return <TbCube size={size} className={`text-purple-400 ${className}`} />;
  if (normName.includes('dbms') || normName.includes('database')) return <TbDatabase size={size} className={`text-cyan-400 ${className}`} />;
  if (normName.includes('operating') || normName.includes('os')) return <TbCpu size={size} className={`text-emerald-400 ${className}`} />;

  // Other utilities
  if (normName.includes('aws') || normName.includes('amazon')) return <FaAws size={size} className={`text-amber-500 ${className}`} />;
  if (normName.includes('stripe')) return <SiStripe size={size} className={`text-purple-400 ${className}`} />;
  if (normName.includes('docker')) return <SiDocker size={size} className={`text-sky-400 ${className}`} />;
  if (normName.includes('redis')) return <SiRedis size={size} className={`text-red-500 ${className}`} />;

  return <TbLayersIntersect size={size} className={`text-violet-400 ${className}`} />;
};
