import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GoldBotanicalMotif } from './Icons';

export const Footer: React.FC = () => {
  const { content } = useLanguage();

  return (
    <footer id="wissensportal-footer" className="relative mt-5 w-full select-none pb-8 pt-4 sm:mt-8 sm:pb-12 sm:pt-6">
      <div className="mx-auto w-full max-w-[760px] rounded-2xl bg-[#06130d]/50 px-4 py-4 text-center backdrop-blur-[1px] sm:px-8 sm:py-5">
        <blockquote className="break-words font-editorial text-[17px] font-normal italic leading-[1.35] tracking-wide text-[#E5C77A] drop-shadow-[0_2px_8px_rgba(0,0,0,.95)] sm:text-[23px] sm:leading-[1.45]">
          {content.footer.quote}
        </blockquote>
        <div className="my-3 flex items-center justify-center gap-3 opacity-95 sm:my-4">
          <span className="h-px w-12 bg-gradient-to-r from-transparent via-[#C9A45A]/60 to-[#C9A45A] sm:w-20" />
          <GoldBotanicalMotif className="h-4 w-6 shrink-0 text-[#C9A45A]" />
          <span className="h-px w-12 bg-gradient-to-l from-transparent via-[#C9A45A]/60 to-[#C9A45A] sm:w-20" />
        </div>
      </div>
    </footer>
  );
};
