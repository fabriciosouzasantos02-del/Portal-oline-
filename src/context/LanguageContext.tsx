import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import {
  detectSupportedLanguage,
  LanguageContent,
  SupportedLanguage,
  TRANSLATIONS,
} from '../i18n';

interface LanguageContextType {
  language: SupportedLanguage;
  content: LanguageContent;
  setLanguage: (lang: SupportedLanguage) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'de',
  content: TRANSLATIONS.de,
  setLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<SupportedLanguage>(() => detectSupportedLanguage());
  const content = useMemo(() => TRANSLATIONS[language] ?? TRANSLATIONS.de, [language]);

  useEffect(() => {
    document.documentElement.lang = language;

    const contentLanguageMeta = document.querySelector<HTMLMetaElement>('meta[name="content-language"]');
    contentLanguageMeta?.setAttribute('content', language);

    const descriptionMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    descriptionMeta?.setAttribute('content', content.pageDescription);

    document.title = content.pageTitle;
  }, [content, language]);

  return (
    <LanguageContext.Provider value={{ language, content, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
