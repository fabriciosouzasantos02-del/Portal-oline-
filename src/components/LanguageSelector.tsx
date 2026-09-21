import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SupportedLanguage } from '../i18n';

const LANGUAGES: { code: SupportedLanguage; label: string }[] = [
  { code: 'de', label: 'DE' },
  { code: 'en', label: 'EN' },
  { code: 'pt', label: 'PT' },
  { code: 'fr', label: 'FR' },
  { code: 'es', label: 'ES' },
];

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <nav 
      aria-label="Language selector" 
      className="flex items-center justify-center pt-2 pb-1 z-20 select-none"
    >
      <div 
        className="inline-flex items-center p-[2px] rounded-full bg-[#0B1812]/90 border border-[#C9A45A]/35 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
      >
        {LANGUAGES.map((lang) => {
          const isActive = language === lang.code;
          return (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              aria-current={isActive ? 'true' : undefined}
              className={`relative px-2.5 sm:px-3 py-1 text-[10.5px] sm:text-[11.5px] font-semibold tracking-wider transition-all duration-200 rounded-full cursor-pointer min-w-[32px] sm:min-w-[36px] text-center ${
                isActive
                  ? 'text-[#07110D] bg-gradient-to-b from-[#FFF3D6] via-[#E5C77A] to-[#C9A45A] font-bold shadow-[0_2px_8px_rgba(201,164,90,0.4)]'
                  : 'text-[#B9B2A4]/80 hover:text-[#F3EBDD] hover:bg-white/5 active:scale-95'
              }`}
            >
              {lang.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
