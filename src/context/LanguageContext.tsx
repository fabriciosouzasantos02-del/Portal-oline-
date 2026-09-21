import React, { createContext, useContext, useEffect, useState } from 'react';
import { detectUserLanguage, LanguageContent, saveUserLanguage, SupportedLanguage, TRANSLATIONS } from '../i18n';

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
  const [language, setLanguageState] = useState<SupportedLanguage>('de');

  useEffect(() => {
    const detected = detectUserLanguage();
    setLanguageState(detected);
  }, []);

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    saveUserLanguage(lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        content: TRANSLATIONS[language] || TRANSLATIONS.de,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
