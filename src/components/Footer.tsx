import React from 'react';
import { ASSETS } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { GoldBotanicalMotif } from './Icons';

export const Footer: React.FC = () => {
  const { content } = useLanguage();

  return (
    <footer id="wissensportal-footer" className="relative mt-5 w-full max-w-full select-none overflow-hidden pb-2 pt-6 sm:mt-8 sm:pt-10">
      {/* Central Philosophical Archival Quote */}
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto px-4 text-center z-10">
        <blockquote className="break-words font-editorial text-[17px] font-normal italic leading-[1.35] tracking-wide text-[#E5C77A]/95 drop-shadow-[0_2px_8px_rgba(0,0,0,.8)] sm:text-[23px] sm:leading-[1.45]">
          <p className="mb-0">
            {content.footer.quote}
          </p>
        </blockquote>

        {/* Small Golden Botanical Motif with horizontal accent lines */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 my-3.5 sm:my-4 opacity-90 max-w-full px-2">
          <span className="h-[1px] w-6 xs:w-8 sm:w-16 bg-gradient-to-r from-transparent via-[#C9A45A]/60 to-[#C9A45A] shrink-0" />
          <GoldBotanicalMotif className="w-5 h-3.5 sm:w-6 sm:h-4 text-[#C9A45A] shrink-0" />
          <span className="h-[1px] w-6 xs:w-8 sm:w-16 bg-gradient-to-l from-transparent via-[#C9A45A]/60 to-[#C9A45A] shrink-0" />
        </div>
      </div>

      {/* Cinematic Golden Sunrise Valley Horizon at the bottom */}
      <div className="relative mt-3 aspect-[16/7] w-full max-h-[280px] overflow-hidden rounded-b-xl sm:mt-5 sm:aspect-[16/5.5]">
        {/* Soft top gradient to blend landscape smoothly into page background */}
        <div 
          className="absolute inset-x-0 top-0 h-14 sm:h-20 bg-gradient-to-b from-[#07110D] via-[#07110D]/75 to-transparent z-[2] pointer-events-none" 
          aria-hidden="true" 
        />
        
        {/* Landscape Image */}
        <img
          src={ASSETS.valley}
          alt="Morgendämmerung über dem Tal des Wissens"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-bottom filter brightness-[0.88] contrast-[1.05]"
          loading="lazy"
        />

        {/* Bottom edge fade */}
        <div 
          className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#07110D] to-transparent z-[2] pointer-events-none" 
          aria-hidden="true" 
        />
      </div>
    </footer>
  );
};
