import React from 'react';
import { ASSETS } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { GoldBotanicalMotif } from './Icons';

export const Header: React.FC = () => {
  const { content } = useLanguage();

  return (
    <header id="wissensportal-header" className="relative flex flex-col items-center text-center pt-2 sm:pt-6 pb-3 px-2 sm:px-4 select-none w-full max-w-full">
      {/* Botanical laurel / wreath glow backdrop */}
      <div className="relative mb-3 group">
        {/* Ambient halo behind avatar */}
        <div 
          className="absolute -inset-2.5 sm:-inset-3 rounded-full bg-gradient-to-b from-[#263F2E] via-[#C9A45A]/25 to-transparent blur-md pointer-events-none opacity-80"
          aria-hidden="true" 
        />
        
        {/* Laurel wreath leaves SVG framing the avatar */}
        <svg 
          className="absolute -inset-3 sm:-inset-4 w-[calc(100%+24px)] sm:w-[calc(100%+32px)] h-[calc(100%+24px)] sm:h-[calc(100%+32px)] pointer-events-none text-[#263F2E] filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          viewBox="0 0 120 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left laurel branch */}
          <path d="M26 88C18 76 16 60 22 46C24 42 27 38 31 34" stroke="#C9A45A" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round" />
          <path d="M18 70C12 68 10 63 12 59C14 55 19 56 22 62" fill="#2E4D38" stroke="#C9A45A" strokeWidth="0.8" strokeOpacity="0.6" />
          <path d="M22 82C17 81 14 77 16 73C18 69 23 70 25 76" fill="#263F2E" stroke="#C9A45A" strokeWidth="0.8" strokeOpacity="0.6" />
          <path d="M19 56C14 53 13 47 16 44C19 41 24 43 25 50" fill="#2E4D38" stroke="#C9A45A" strokeWidth="0.8" strokeOpacity="0.6" />
          <path d="M25 43C21 38 22 32 26 30C30 28 34 32 33 38" fill="#263F2E" stroke="#C9A45A" strokeWidth="0.8" strokeOpacity="0.6" />

          {/* Right laurel branch */}
          <path d="M94 88C102 76 104 60 98 46C96 42 93 38 89 34" stroke="#C9A45A" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round" />
          <path d="M102 70C108 68 110 63 108 59C106 55 101 56 98 62" fill="#2E4D38" stroke="#C9A45A" strokeWidth="0.8" strokeOpacity="0.6" />
          <path d="M98 82C103 81 106 77 104 73C102 69 97 70 95 76" fill="#263F2E" stroke="#C9A45A" strokeWidth="0.8" strokeOpacity="0.6" />
          <path d="M101 56C106 53 107 47 104 44C101 41 96 43 95 50" fill="#2E4D38" stroke="#C9A45A" strokeWidth="0.8" strokeOpacity="0.6" />
          <path d="M95 43C99 38 98 32 94 30C90 28 86 32 87 38" fill="#263F2E" stroke="#C9A45A" strokeWidth="0.8" strokeOpacity="0.6" />
        </svg>

        {/* Circular frame with double gold ring */}
        <div className="relative w-22 h-22 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full p-[3px] bg-gradient-to-b from-[#F3EBDD] via-[#C9A45A] to-[#382116] shadow-[0_8px_25px_rgba(0,0,0,0.85)]">
          <div className="w-full h-full rounded-full p-[2px] bg-[#07110D]">
            <img
              src={ASSETS.avatar}
              alt="Wissensportal Experte"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-full filter contrast-[1.03] brightness-[1.02]"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Main Brand Title */}
      <h1 
        id="portal-title" 
        className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.14em] sm:tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5DC] via-[#E5C77A] to-[#C9A45A] drop-shadow-[0_2px_14px_rgba(201,164,90,0.35)] mt-0.5 mb-1.5 break-words w-full px-1"
      >
        {content.header.title}
      </h1>

      {/* Small botanical gold motif */}
      <div className="flex items-center justify-center my-1 opacity-95">
        <GoldBotanicalMotif className="w-6 h-3.5 sm:w-8 sm:h-4.5 text-[#C9A45A]" />
      </div>

      {/* Subtitle / Portal Greeting */}
      <div 
        id="portal-subtitle" 
        className="text-[#F3EBDD]/90 text-[13px] xs:text-[14px] sm:text-[15.5px] font-normal leading-relaxed w-full max-w-sm sm:max-w-md mx-auto mt-0.5 px-2 font-sans tracking-wide break-words"
      >
        <span className="block font-medium text-[#F3EBDD] mb-0.5 text-center">
          {content.header.welcome}
        </span>
        <p className="text-[#E0D7C6]/85 text-center leading-normal">
          {content.header.subtitle}
        </p>
      </div>
    </header>
  );
};
