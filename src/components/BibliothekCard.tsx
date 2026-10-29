import React from 'react';
import { ASSETS, PRODUCT_2_URL } from '../constants';
import { useLanguage } from '../context/LanguageContext';

export const BibliothekCard: React.FC = () => {
  const { content } = useLanguage();
  const card = content.card2;

  return (
    <article
      id="card-verborgene-bibliothek"
      className="group relative w-full overflow-hidden rounded-[18px] shadow-[0_14px_38px_-10px_rgba(0,0,0,.9)] transition-transform duration-300 hover:-translate-y-1"
    >
      <a
        id="btn-bibliothek-betreten"
        href={PRODUCT_2_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={card.buttonText}
        className="relative block w-full overflow-hidden rounded-[18px] border border-[#C9A45A]/75 bg-[#07130D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C77A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07110D]"
      >
        <div className="relative aspect-[1672/941] w-full overflow-hidden">
          <img
            src={ASSETS.bibliothekCard}
            srcSet={`${ASSETS.bibliothekCard800} 800w, ${ASSETS.bibliothekCard1200} 1200w, ${ASSETS.bibliothekCard} 1672w`}
            sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(100vw - 64px), 820px"
            width={1672}
            height={941}
            alt={card.imageAlt}
            className="absolute inset-0 block h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.01]"
            loading="lazy"
            decoding="async"
          />

          <div
            aria-hidden="true"
            className="absolute inset-y-[7.5%] left-[49%] right-[2.7%] rounded-r-[12px] border-y border-r border-[#C9A45A]/45 bg-gradient-to-br from-[#07110D] via-[#08150E] to-[#0C1D12] shadow-[-10px_0_28px_rgba(0,0,0,.55)]"
          />

          <div className="absolute inset-y-[10%] left-[52%] right-[5%] flex flex-col items-center justify-center gap-1 px-2 text-center sm:gap-2 sm:px-5">
            <h2 className="m-0 font-serif-botanical text-[clamp(11px,3vw,16px)] font-bold leading-tight tracking-wide text-[#E5C77A] drop-shadow-[0_2px_6px_rgba(0,0,0,.9)] sm:text-[clamp(19px,2.3vw,27px)]">
              {card.title}
            </h2>
            <p className="m-0 font-editorial text-[clamp(9px,2.2vw,13px)] italic leading-tight text-[#F3EBDD] sm:text-[clamp(15px,1.7vw,20px)]">
              {card.subtitle}
            </p>
            <p className="m-0 hidden max-w-[38ch] font-editorial text-[clamp(13px,1.55vw,18px)] italic leading-snug text-[#E0D7C6] sm:block">
              {card.description}
            </p>
            <span className="mt-1 inline-flex items-center justify-center rounded-full border border-[#E5C77A]/75 bg-[#C9A45A] px-2 py-1 font-editorial text-[clamp(9px,2.2vw,11px)] font-semibold leading-tight text-[#07110D] shadow-[0_3px_10px_rgba(0,0,0,.5)] sm:mt-2 sm:px-4 sm:py-2 sm:text-[clamp(12px,1.35vw,16px)]">
              {card.buttonText}
            </span>
          </div>
        </div>

        <p className="m-0 border-t border-[#C9A45A]/45 bg-[#07130D] px-5 py-4 text-center font-editorial text-[16px] font-medium italic leading-[1.3] text-[#F3EBDD] sm:hidden">
          {card.description}
        </p>
      </a>
    </article>
  );
};
