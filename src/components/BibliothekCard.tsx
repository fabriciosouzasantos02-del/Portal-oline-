import React from 'react';
import { ASSETS, PRODUCT_2_URL } from '../constants';
import { useLanguage } from '../context/LanguageContext';

export const BibliothekCard: React.FC = () => {
  const { content } = useLanguage();
  const card = content.card2;

  return (
    <article id="card-verborgene-bibliothek" className="group relative w-full overflow-hidden rounded-[18px] shadow-[0_14px_38px_-10px_rgba(0,0,0,.9)] transition-transform duration-300 hover:-translate-y-1">
      <a
        id="btn-bibliothek-betreten"
        href={PRODUCT_2_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={card.imageAlt}
        className="relative block w-full overflow-hidden rounded-[18px] border border-[#C9A45A]/75 bg-[#07130D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C77A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07110D]"
      >
        <img
          src={ASSETS.bibliothekCard}
          srcSet={`${ASSETS.bibliothekCard800} 800w, ${ASSETS.bibliothekCard1200} 1200w, ${ASSETS.bibliothekCard} 1672w`}
          sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(100vw - 64px), 820px"
          width={1672}
          height={941}
          alt={card.imageAlt}
          className="block h-auto w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.01]"
          loading="lazy"
          decoding="async"
        />
        {/* This HTML description occupies the clean space in the original artwork. */}
        <p className="pointer-events-none absolute left-[52%] right-[8%] top-[49%] m-0 hidden max-h-[18%] overflow-hidden text-center font-editorial text-[clamp(13px,1.1vw,16px)] font-medium italic leading-[1.1] text-[#F3EBDD] drop-shadow-[0_2px_5px_rgba(0,0,0,.98)] sm:block">
          {card.description}
        </p>
        <p className="m-0 border-t border-[#C9A45A]/45 bg-[#07130D] px-5 py-4 text-center font-editorial text-[18px] font-medium italic leading-[1.3] text-[#F3EBDD] drop-shadow-[0_2px_4px_rgba(0,0,0,.9)] sm:hidden">
          {card.description}
        </p>
      </a>
    </article>
  );
};
