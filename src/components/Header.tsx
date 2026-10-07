import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Header: React.FC = () => {
  const { content } = useLanguage();

  return (
    <header id="wissensportal-header" className="relative mx-auto flex w-full max-w-[720px] flex-col items-center px-3 pb-5 pt-[clamp(12rem,35vw,22rem)] text-center sm:pb-8">
      <div id="portal-subtitle" className="max-w-[680px] rounded-2xl bg-[#06130d]/45 px-4 py-3 font-editorial text-[19px] leading-tight text-[#F3EBDD] drop-shadow-[0_2px_8px_rgba(0,0,0,.95)] backdrop-blur-[1px] sm:px-7 sm:py-4 sm:text-[27px] sm:leading-snug">
        <span className="block">{content.header.welcome}</span>
        <p className="mt-1 text-[#E0D7C6]">{content.header.subtitle}</p>
      </div>
    </header>
  );
};
