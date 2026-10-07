import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GoldBotanicalMotif } from './Icons';

type SocialIconName = 'facebook' | 'instagram' | 'whatsapp' | 'youtube' | 'tiktok' | 'email';

const SOCIAL_LINKS: ReadonlyArray<{
  label: string;
  href: string;
  icon: SocialIconName;
}> = [
  { label: 'Facebook', href: 'https://www.facebook.com/share/1JatTEH8ZS/', icon: 'facebook' },
  { label: 'Instagram', href: 'https://www.instagram.com/wissens.portal.offiziell?stkn=MWFsbHJrenlweHYzcQ==', icon: 'instagram' },
  { label: 'WhatsApp', href: 'https://wa.me/4915219451494', icon: 'whatsapp' },
  { label: 'YouTube', href: 'https://youtube.com/@wissens.portal.offiziell?si=OrZ9D04v0TLNMZXP', icon: 'youtube' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@wissensportal?_r=1&_t=ZG-9AAdG18WG8H', icon: 'tiktok' },
  { label: 'E-mail', href: 'mailto:unterstutzung.service@gmail.com', icon: 'email' },
];

const SocialIcon: React.FC<{ name: SocialIconName }> = ({ name }) => {
  const commonProps = {
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    'aria-hidden': true,
    className: 'h-5 w-5',
  } as const;

  switch (name) {
    case 'facebook':
      return <svg {...commonProps}><path d="M13.5 21v-8h2.75l.5-3h-3.25V8.05c0-.87.28-1.47 1.55-1.47h1.65V3.9c-.29-.04-1.28-.13-2.43-.13-2.4 0-4.05 1.47-4.05 4.17V10H8v3h2.22v8h3.28Z" /></svg>;
    case 'instagram':
      return <svg {...commonProps} fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3.1" y="3.1" width="17.8" height="17.8" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.65" cy="6.45" r="1" fill="currentColor" stroke="none" /></svg>;
    case 'whatsapp':
      return <svg {...commonProps}><path d="M12 2.25a9.72 9.72 0 0 0-8.36 14.67L2.5 21.5l4.7-1.1A9.75 9.75 0 1 0 12 2.25Zm0 17.7a7.92 7.92 0 0 1-4.04-1.1l-.29-.17-2.79.65.67-2.72-.19-.3A7.92 7.92 0 1 1 12 19.95Zm4.35-5.94c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.31-.74-1.8-.2-.48-.4-.42-.54-.43h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.15 1.51.09.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" /></svg>;
    case 'youtube':
      return <svg {...commonProps}><path d="M21.58 7.19a2.98 2.98 0 0 0-2.1-2.1C17.63 4.6 12 4.6 12 4.6s-5.63 0-7.48.49a2.98 2.98 0 0 0-2.1 2.1C1.93 9.04 1.93 12 1.93 12s0 2.96.49 4.81a2.98 2.98 0 0 0 2.1 2.1c1.85.49 7.48.49 7.48.49s5.63 0 7.48-.49a2.98 2.98 0 0 0 2.1-2.1c.49-1.85.49-4.81.49-4.81s0-2.96-.49-4.81ZM10.1 15.1V8.9l5.2 3.1-5.2 3.1Z" /></svg>;
    case 'tiktok':
      return <svg {...commonProps}><path d="M15.7 3h2.52c.2 1.54 1.05 2.7 2.55 3.45v2.58c-1.4-.04-2.73-.47-3.85-1.25v6.03c0 3.34-2.13 5.6-5.34 5.6-2.91 0-5.08-2.02-5.08-4.75 0-2.98 2.46-5.16 5.71-5.16.33 0 .65.03.96.08v2.67a4.3 4.3 0 0 0-.96-.11c-1.57 0-2.75.98-2.75 2.37 0 1.2.9 2.12 2.13 2.12 1.42 0 2.11-.92 2.11-2.73V3Z" /></svg>;
    case 'email':
      return <svg {...commonProps} fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="2.75" y="4.75" width="18.5" height="14.5" rx="2.2" /><path d="m4 6.5 8 6 8-6" /></svg>;
  }
};

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
        <nav aria-label="Redes sociais e contato" className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {SOCIAL_LINKS.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A45A]/45 bg-[#07110D]/75 text-[#E5C77A] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E5C77A] hover:bg-[#C9A45A]/15 hover:text-[#FFF1B7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C77A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07110D]"
            >
              <SocialIcon name={icon} />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};
