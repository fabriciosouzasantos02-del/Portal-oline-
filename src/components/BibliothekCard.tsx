import React from 'react';
import { ASSETS, CONTENT } from '../constants';

export const BibliothekCard: React.FC = () => {
  return (
    <article id="card-verborgene-bibliothek" className="group relative w-full overflow-hidden rounded-[18px] shadow-[0_14px_38px_-10px_rgba(0,0,0,.9)] transition-transform duration-300 hover:-translate-y-1">
      <a
        id="btn-bibliothek-betreten"
        href={CONTENT.card2.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={CONTENT.card2.buttonText}
        className="relative block w-full overflow-hidden rounded-[18px] border border-[#C9A45A]/75 bg-[#07130D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C77A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07110D]"
      >
        <img
          src={ASSETS.bibliothekCard}
          alt="Verborgene Bibliothek – Wissen um den Heiligen Gral"
          className="block h-auto w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.01]"
          loading="lazy"
        />

        {/* The supplied artwork leaves a clean area above its built-in button. */}
        <p className="pointer-events-none absolute left-[52%] right-[8%] top-[49%] m-0 hidden max-h-[18%] overflow-hidden text-center font-editorial text-[clamp(15px,1.75vw,23px)] font-medium italic leading-[1.14] text-[#F3EBDD] drop-shadow-[0_2px_5px_rgba(0,0,0,.98)] sm:block">
          {CONTENT.card2.description}
        </p>

        <p className="m-0 border-t border-[#C9A45A]/45 bg-[#07130D] px-5 py-4 text-center font-editorial text-[18px] font-medium italic leading-[1.3] text-[#F3EBDD] drop-shadow-[0_2px_4px_rgba(0,0,0,.9)] sm:hidden">
          {CONTENT.card2.description}
        </p>
      </a>
    </article>
  );
};
