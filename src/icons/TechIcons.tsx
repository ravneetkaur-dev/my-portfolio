import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const NextJsIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M16 12L9.5 5.5" />
    <path d="M15 8.5v7" />
  </svg>
);

export const ReactIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(0 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

export const TypeScriptIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <rect width="24" height="24" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
    <text x="5" y="16" fontSize="11" fontWeight="bold" fontFamily="sans-serif">TS</text>
  </svg>
);

export const TailwindIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 6c-3.3 0-5.5 1.7-6.6 5 1.1-1.7 2.5-2.2 4.1-1.7 1 .3 1.7 1.1 2.5 1.9 1.3 1.3 2.7 2.8 6.6 2.8 3.3 0 5.5-1.7 6.6-5-1.1 1.7-2.5 2.2-4.1 1.7-1-.3-1.7-1.1-2.5-1.9-1.3-1.3-2.7-2.8-6.6-2.8zM5.4 13c-3.3 0-5.5 1.7-6.6 5 1.1-1.7 2.5-2.2 4.1-1.7 1 .3 1.7 1.1 2.5 1.9 1.3 1.3 2.7 2.8 6.6 2.8 3.3 0 5.5-1.7 6.6-5-1.1 1.7-2.5 2.2-4.1 1.7-1-.3-1.7-1.1-2.5-1.9-1.3-1.3-2.7-2.8-6.6-2.8z" />
  </svg>
);
