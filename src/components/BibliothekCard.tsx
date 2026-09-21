import React from 'react';
import { ASSETS, CONTENT } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { ArchivalDivider, ClassicalTempleIcon } from './Icons';

export const BibliothekCard: React.FC = () => {
  const { content } = useLanguage();

  return (
    <article 
      id="card-verborgene-bibliothek"
      className="group relative w-full rounded-[18px] bg-[#060B08] p-[2px] transition-transform duration-300 hover:translate-y-[-2px] max-w-full"
      style={{
        boxShadow: '0 12px 35px -8px rgba(0, 0, 0, 0.85), 0 0 20px -4px rgba(201, 164, 90, 0.2)'
      }}
    >
      {/* Outer dual-layer golden archival border */}
      <div className="relative w-full rounded-2xl p-[1px] bg-gradient-to-b from-[#C9A45A]/70 via-[#6E5528]/40 to-[#C9A45A]/60">
        <div className="relative w-full overflow-hidden rounded-[15px] bg-gradient-to-b from-[#0E1511] via-[#080E0B] to-[#040605] p-3 sm:p-5 lg:p-6">
          
          {/* Subtle atmospheric ambient glow inside card */}
          <div 
            className="absolute -top-16 -left-16 w-40 h-40 bg-[#C9A45A]/15 rounded-full blur-2xl pointer-events-none" 
            aria-hidden="true" 
          />
          <div 
            className="absolute -bottom-10 -right-10 w-36 h-36 bg-[#10231A]/35 rounded-full blur-2xl pointer-events-none" 
            aria-hidden="true" 
          />

          {/* Card Layout: Balanced dual-row layout for mobile WebViews (TikTok/IG/FB) */}
          <div className="relative flex flex-col gap-2.5 sm:gap-3.5">
            
            {/* Upper Section: Image on left + Information on right */}
            <div className="flex flex-row items-center gap-2.5 xs:gap-3 sm:gap-4">
              
              {/* Left: Ancient Library Archive Photo */}
              <div className="relative w-[40%] shrink-0 self-stretch flex items-center sm:w-[48%]">
                <div className="relative w-full aspect-[1.16/1] overflow-hidden rounded-xl border border-[#C9A45A]/45 shadow-[inset_0_0_12px_rgba(0,0,0,0.8)] sm:rounded-2xl">
                  <img
                    src={ASSETS.library}
                    alt="Verborgene Bibliothek und alte Manuskripte"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter contrast-[1.08] brightness-[0.96] group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle vignette over the image */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20 pointer-events-none" 
                    aria-hidden="true" 
                  />
                </div>
              </div>

              {/* Right: Information */}
              <div className="flex-1 min-w-0 flex flex-col justify-center text-center items-center py-0.5">
                
                {/* Top Classical Temple Icon */}
                <div className="mb-0.5 opacity-90">
                  <ClassicalTempleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A45A]" />
                </div>

                {/* Title */}
                <h2 
                  id="bibliothek-title"
                  className="w-full break-words px-0.5 font-display text-[16px] font-bold leading-tight tracking-[.08em] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5DC] via-[#E5C77A] to-[#C9A45A] drop-shadow-[0_1px_6px_rgba(201,164,90,0.25)] sm:text-[25px] sm:tracking-[.1em]"
                >
                  {content.card2.title}
                </h2>

                {/* Localized badge if translated */}
                {content.card2.badge && (
                  <span className="text-[9.5px] xs:text-[10px] sm:text-[11px] text-[#E5C77A]/85 font-sans tracking-wide uppercase mt-0.5 break-words">
                    {content.card2.badge}
                  </span>
                )}

                {/* Subtitle with divider lines */}
                <div className="my-1 sm:my-1.5 w-full flex items-center justify-center">
                  <ArchivalDivider text={content.card2.subtitle} />
                </div>

                {/* Description */}
                <p className="break-words px-0.5 font-editorial text-[14px] italic leading-[1.25] text-[#F3EBDD]/90 sm:text-[20px] sm:leading-[1.35]">
                  {content.card2.description}
                </p>

              </div>

            </div>

            {/* Lower Section: Full-Width Prominent Call-to-Action Button */}
            <div className="w-full pt-0.5 flex justify-center">
              <a
                id="btn-bibliothek-betreten"
                href={CONTENT.card2.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex min-h-[48px] w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-[#C9A45A]/85 dark-button-gradient px-4 py-2.5 text-center text-[16px] font-semibold tracking-wide text-[#E5C77A] transition-all duration-300 hover:border-[#F3EBDD] hover:text-[#FFF5DC] hover:shadow-[0_0_18px_rgba(201,164,90,.4)] active:scale-[.98] sm:min-h-[60px] sm:text-[22px]"
              >
                {/* Subtle sheen sweep */}
                <span 
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#C9A45A]/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" 
                  aria-hidden="true" 
                />
                <ClassicalTempleIcon className="w-4 h-4 text-[#C9A45A] shrink-0" />
                <span className="font-semibold text-center leading-tight">
                  {content.card2.buttonText}
                </span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </article>
  );
};
