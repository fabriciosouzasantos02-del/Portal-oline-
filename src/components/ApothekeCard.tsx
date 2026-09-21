import React from 'react';
import { ASSETS, CONTENT } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { ApothekeLeafIcon, ArchivalDivider, GoldBotanicalMotif } from './Icons';

export const ApothekeCard: React.FC = () => {
  const { content } = useLanguage();

  return (
    <article 
      id="card-verbotene-apotheke"
      className="group relative w-full rounded-2xl bg-[#091710] p-[2px] transition-transform duration-300 hover:translate-y-[-2px] max-w-full"
      style={{
        boxShadow: '0 12px 35px -8px rgba(0, 0, 0, 0.8), 0 0 20px -4px rgba(38, 63, 46, 0.4)'
      }}
    >
      {/* Outer dual-layer golden archival border */}
      <div className="relative w-full rounded-2xl p-[1px] bg-gradient-to-b from-[#C9A45A]/70 via-[#7A5E2A]/40 to-[#C9A45A]/60">
        <div className="relative w-full rounded-[15px] bg-gradient-to-b from-[#0F2218] via-[#091710] to-[#060E0A] p-3 sm:p-4 overflow-hidden">
          
          {/* Subtle atmospheric ambient glow inside card */}
          <div 
            className="absolute -top-16 -right-16 w-40 h-40 bg-[#263F2E]/30 rounded-full blur-2xl pointer-events-none" 
            aria-hidden="true" 
          />
          <div 
            className="absolute -bottom-10 -left-10 w-36 h-36 bg-[#382116]/25 rounded-full blur-2xl pointer-events-none" 
            aria-hidden="true" 
          />

          {/* Card Layout: Balanced dual-row layout for mobile WebViews (TikTok/IG/FB) */}
          <div className="relative flex flex-col gap-2.5 sm:gap-3.5">
            
            {/* Upper Section: Image on left + Information on right */}
            <div className="flex flex-row items-center gap-2.5 xs:gap-3 sm:gap-4">
              
              {/* Left: Apothecary Archive Photo */}
              <div className="relative w-[36%] xs:w-[38%] sm:w-[40%] shrink-0 self-stretch flex items-center">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-[#C9A45A]/45 shadow-[inset_0_0_12px_rgba(0,0,0,0.8)]">
                  <img
                    src={ASSETS.apothecary}
                    alt="Historisches Apotheken Archiv"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.98] group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle vignette over the image */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" 
                    aria-hidden="true" 
                  />
                </div>
              </div>

              {/* Right: Information */}
              <div className="flex-1 min-w-0 flex flex-col justify-center text-center items-center py-0.5">
                
                {/* Top Golden Leaf Icon */}
                <div className="mb-0.5 opacity-90">
                  <GoldBotanicalMotif className="w-4 h-3 sm:w-5 sm:h-3.5 text-[#C9A45A]" />
                </div>

                {/* Title */}
                <h2 
                  id="apotheke-title"
                  className="font-display font-bold text-[12.5px] xs:text-[14px] sm:text-[16px] md:text-[18px] leading-tight tracking-[0.1em] sm:tracking-[0.12em] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5DC] via-[#E5C77A] to-[#C9A45A] uppercase drop-shadow-[0_1px_6px_rgba(201,164,90,0.25)] break-words w-full px-0.5"
                >
                  {content.card1.title}
                </h2>

                {/* Localized badge if translated */}
                {content.card1.badge && (
                  <span className="text-[9.5px] xs:text-[10px] sm:text-[11px] text-[#E5C77A]/85 font-sans tracking-wide uppercase mt-0.5 break-words">
                    {content.card1.badge}
                  </span>
                )}

                {/* Subtitle with divider lines */}
                <div className="my-1 sm:my-1.5 w-full flex items-center justify-center">
                  <ArchivalDivider text={content.card1.subtitle} />
                </div>

                {/* Description */}
                <p className="font-editorial italic text-[11px] xs:text-[11.5px] sm:text-[12.5px] md:text-[13px] leading-[1.35] sm:leading-[1.4] text-[#F3EBDD]/90 px-0.5 break-words">
                  {content.card1.description}
                </p>

              </div>

            </div>

            {/* Lower Section: Full-Width Prominent Call-to-Action Button */}
            <div className="w-full pt-0.5 flex justify-center">
              <a
                id="btn-archiv-oeffnen"
                href={CONTENT.card1.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 sm:py-3 rounded-full gold-button-gradient text-[#1a1104] font-semibold text-[12.5px] xs:text-[13.5px] sm:text-[14.5px] tracking-wide transition-all duration-300 hover:brightness-110 active:scale-[0.98] shadow-[0_4px_16px_rgba(201,164,90,0.35)] cursor-pointer group/btn overflow-hidden min-h-[44px]"
              >
                {/* Button sheen animation */}
                <span 
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" 
                  aria-hidden="true" 
                />
                <ApothekeLeafIcon className="w-4 h-4 text-[#2b1b06] shrink-0" />
                <span className="font-semibold text-stone-950 text-center leading-tight">
                  {content.card1.buttonText}
                </span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </article>
  );
};
