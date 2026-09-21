import React from 'react';
import { ASSETS } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { GoldBotanicalMotif } from './Icons';

export const Header: React.FC = () => {
  const { content } = useLanguage();

  return (
    <header id="wissensportal-header" className="relative flex w-full flex-col items-center px-2 pb-3 pt-5 text-center sm:pb-5 sm:pt-8">
      <div className="relative mb-4 sm:mb-5">
        <div className="absolute -inset-5 rounded-full bg-[#C9A45A]/20 blur-2xl" aria-hidden="true" />
        <svg className="pointer-events-none absolute -inset-5 h-[calc(100%+40px)] w-[calc(100%+40px)] text-[#C9A45A] opacity-90" viewBox="0 0 120 120" fill="none" aria-hidden="true">
          <path d="M26 88C16 73 16 55 31 34M94 88C104 73 104 55 89 34" stroke="currentColor" strokeWidth="1.3" strokeOpacity=".65" strokeLinecap="round" />
          <path d="M18 70C12 68 10 63 12 59C14 55 19 56 22 62M22 82C17 81 14 77 16 73C18 69 23 70 25 76M19 56C14 53 13 47 16 44C19 41 24 43 25 50M25 43C21 38 22 32 26 30C30 28 34 32 33 38" fill="#263F2E" stroke="currentColor" strokeWidth=".8" />
          <path d="M102 70C108 68 110 63 108 59C106 55 101 56 98 62M98 82C103 81 106 77 104 73C102 69 97 70 95 76M101 56C106 53 107 47 104 44C101 41 96 43 95 50M95 43C99 38 98 32 94 30C90 28 86 32 87 38" fill="#263F2E" stroke="currentColor" strokeWidth=".8" />
        </svg>
        <div className="relative h-28 w-28 rounded-full bg-gradient-to-b from-[#FFF4D0] via-[#C9A45A] to-[#6F4A19] p-[3px] shadow-[0_10px_30px_rgba(0,0,0,.85)] sm:h-36 sm:w-36">
          <div className="h-full w-full rounded-full bg-[#07110D] p-[3px]">
            <img src={ASSETS.avatar} alt="Wissensportal Experte" className="h-full w-full rounded-full object-cover object-center" loading="eager" />
          </div>
        </div>
      </div>

      <h1 id="portal-title" className="w-full font-display text-3xl font-bold tracking-[.13em] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5DC] via-[#E5C77A] to-[#C9A45A] drop-shadow-[0_2px_14px_rgba(201,164,90,.35)] sm:text-5xl sm:tracking-[.18em]">
        {content.header.title}
      </h1>
      <div className="my-2 flex items-center justify-center">
        <GoldBotanicalMotif className="h-4 w-9 text-[#C9A45A] sm:h-5 sm:w-12" />
      </div>
      <div id="portal-subtitle" className="max-w-[680px] px-2 font-editorial text-[18px] leading-tight text-[#F3EBDD] sm:text-[25px] sm:leading-snug">
        <span className="block">{content.header.welcome}</span>
        <p className="mt-1 text-[#E0D7C6]">{content.header.subtitle}</p>
      </div>
    </header>
  );
};
