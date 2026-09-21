import React from 'react';

/**
 * Custom golden ornaments and icons reproducing the historical archival aesthetic
 */

// Elegant 3-leaf botanical motif (as seen under WISSENSPORTAL title and in the footer)
export const GoldBotanicalMotif: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg 
    viewBox="0 0 48 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    aria-hidden="true"
  >
    {/* Center leaf */}
    <path 
      d="M24 2C24 2 29 10 28 19C27 24 24 27 24 27C24 27 21 24 20 19C19 10 24 2 24 2Z" 
      fill="url(#goldGrad)" 
    />
    {/* Left leaf */}
    <path 
      d="M19 19C19 19 12 14 5 18C0 21 4 27 10 26C14 25.5 19 21 19 19Z" 
      fill="url(#goldGradLight)" 
    />
    {/* Right leaf */}
    <path 
      d="M29 19C29 19 36 14 43 18C48 21 44 27 38 26C34 25.5 29 21 29 19Z" 
      fill="url(#goldGradLight)" 
    />
    {/* Central small stem/dot */}
    <circle cx="24" cy="28.5" r="1.5" fill="#E5C77A" />
    <defs>
      <linearGradient id="goldGrad" x1="20" y1="2" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F5E4B3" />
        <stop offset="0.5" stopColor="#C9A45A" />
        <stop offset="1" stopColor="#96742E" />
      </linearGradient>
      <linearGradient id="goldGradLight" x1="10" y1="14" x2="38" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E5C77A" />
        <stop offset="1" stopColor="#A88338" />
      </linearGradient>
    </defs>
  </svg>
);

// Classical Temple / Pantheon icon (as seen in Card 2)
export const ClassicalTempleIcon: React.FC<{ className?: string; color?: string }> = ({ 
  className = "w-5 h-5",
  color = "#C9A45A"
}) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    style={{ color }}
    aria-hidden="true"
  >
    {/* Pediment triangle roof */}
    <path d="M12 2L2 7H22L12 2Z" />
    {/* Architrave / roof beam */}
    <rect x="3" y="7.5" width="18" height="1.5" rx="0.3" />
    {/* Columns (4 classical pillars) */}
    <rect x="4.5" y="10" width="2" height="9" rx="0.4" />
    <rect x="9" y="10" width="2" height="9" rx="0.4" />
    <rect x="13" y="10" width="2" height="9" rx="0.4" />
    <rect x="17.5" y="10" width="2" height="9" rx="0.4" />
    {/* Base podium / steps */}
    <rect x="3" y="19.5" width="18" height="1.5" rx="0.3" />
    <rect x="1.5" y="21.5" width="21" height="1.5" rx="0.4" />
  </svg>
);

// Single small herbal leaf icon (for button in Card 1)
export const ApothekeLeafIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg 
    viewBox="0 0 20 20" 
    fill="currentColor" 
    className={className}
    aria-hidden="true"
  >
    <path d="M10 2C7.5 4 4 7 4 11C4 14.5 6.7 17 10 17C13.3 17 16 14.5 16 11C16 7 12.5 4 10 2ZM10 15.5C8.1 15.5 6.5 13.9 6.5 11.5C6.5 9.5 8.2 7 10 4.8C11.8 7 13.5 9.5 13.5 11.5C13.5 13.9 11.9 15.5 10 15.5Z" />
    <path d="M10 5V14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

// Archival horizontal divider with diamonds and responsive text wrapping
export const ArchivalDivider: React.FC<{ text: string; className?: string }> = ({ text, className = "" }) => (
  <div className={`flex items-center justify-center gap-1.5 sm:gap-2 text-[#C9A45A]/90 max-w-full px-1 ${className}`}>
    <span className="h-[1px] w-4 xs:w-6 sm:w-8 bg-gradient-to-r from-transparent via-[#C9A45A]/70 to-[#C9A45A] shrink-0" />
    <span className="text-[10.5px] xs:text-[11px] sm:text-xs tracking-[0.14em] sm:tracking-[0.18em] font-editorial italic text-[#E5C77A] text-center break-words leading-tight">
      {text}
    </span>
    <span className="h-[1px] w-4 xs:w-6 sm:w-8 bg-gradient-to-l from-transparent via-[#C9A45A]/70 to-[#C9A45A] shrink-0" />
  </div>
);
