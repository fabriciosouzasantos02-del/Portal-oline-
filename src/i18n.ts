/**
 * Internationalization (i18n) for WISSENSPORTAL
 * Supported languages: German (de - Default), English (en), Portuguese (pt), French (fr), Spanish (es).
 * Automatically detects the user's device/browser language (including TikTok/IG/FB in-app browsers).
 */

export type SupportedLanguage = 'de' | 'en' | 'pt' | 'fr' | 'es';

export interface LanguageContent {
  code: SupportedLanguage;
  name: string;
  flag: string;
  header: {
    title: string;
    welcome: string;
    subtitle: string;
  };
  card1: {
    title: string;
    badge?: string;
    subtitle: string;
    description: string;
    buttonText: string;
  };
  card2: {
    title: string;
    badge?: string;
    subtitle: string;
    description: string;
    buttonText: string;
  };
  footer: {
    quote: string;
  };
}

export const TRANSLATIONS: Record<SupportedLanguage, LanguageContent> = {
  de: {
    code: 'de',
    name: 'Deutsch',
    flag: 'DE',
    header: {
      title: 'WISSENSPORTAL',
      welcome: 'Willkommen im Portal!',
      subtitle: 'Hier finden Sie Informationen, Wissen und verborgene Wahrheiten.',
    },
    card1: {
      title: 'DIE VERBOTENE APOTHEKE',
      subtitle: 'Archiv 1910–',
      description: 'Die verborgene Wahrheit der Natur. Wissen und Techniken, die Ihnen niemals hätten vorenthalten werden dürfen.',
      buttonText: 'Archiv öffnen →',
    },
    card2: {
      title: 'Verborgene Bibliothek',
      subtitle: 'Wissen um den Heiligen Gral.',
      description: 'Verborgene Schriften, geheime Zivilisationen, verbotenes Wissen, spirituelle Wahrheiten.',
      buttonText: 'Bibliothek betreten →',
    },
    footer: {
      quote: 'Archive, die niemals hätten gesehen werden dürfen, verborgene Experimente, verbotene Intelligenz; in diesen Archiven und Schriften ist die Zukunft bereits geschehen.',
    },
  },

  en: {
    code: 'en',
    name: 'English',
    flag: 'EN',
    header: {
      title: 'WISSENSPORTAL',
      welcome: 'Welcome to the Portal!',
      subtitle: 'Here you will find information, knowledge and hidden truths.',
    },
    card1: {
      title: 'DIE VERBOTENE APOTHEKE',
      badge: 'The Forbidden Apothecary',
      subtitle: 'Archive 1910–',
      description: 'The hidden truth of nature. Knowledge and techniques that should never have been withheld from you.',
      buttonText: 'Open Archive →',
    },
    card2: {
      title: 'Verborgene Bibliothek',
      badge: 'Hidden Library',
      subtitle: 'Knowledge of the Holy Grail.',
      description: 'Hidden scriptures, secret civilizations, forbidden knowledge, spiritual truths.',
      buttonText: 'Enter Library →',
    },
    footer: {
      quote: 'Archives that should never have been seen, hidden experiments, forbidden intelligence; in these archives and writings, the future has already occurred.',
    },
  },

  pt: {
    code: 'pt',
    name: 'Português',
    flag: 'PT',
    header: {
      title: 'WISSENSPORTAL',
      welcome: 'Bem-vindo ao Portal!',
      subtitle: 'Aqui você encontrará informações, conhecimento e verdades ocultas.',
    },
    card1: {
      title: 'DIE VERBOTENE APOTHEKE',
      badge: 'A Botica Proibida',
      subtitle: 'Arquivo 1910–',
      description: 'A verdade oculta da natureza. Conhecimentos e técnicas que jamais deveriam ter sido ocultados de você.',
      buttonText: 'Abrir Arquivo →',
    },
    card2: {
      title: 'Verborgene Bibliothek',
      badge: 'Biblioteca Oculta',
      subtitle: 'Conhecimento do Santo Graal.',
      description: 'Escrituras ocultas, civilizações secretas, conhecimento proibido, verdades espirituais.',
      buttonText: 'Entrar na Biblioteca →',
    },
    footer: {
      quote: 'Arquivos que nunca deveriam ter sido vistos, experimentos ocultos, inteligência proibida; nestes arquivos e escrituras, o futuro já aconteceu.',
    },
  },

  fr: {
    code: 'fr',
    name: 'Français',
    flag: 'FR',
    header: {
      title: 'WISSENSPORTAL',
      welcome: 'Bienvenue sur le Portail !',
      subtitle: 'Vous trouverez ici des informations, des connaissances et des vérités cachées.',
    },
    card1: {
      title: 'DIE VERBOTENE APOTHEKE',
      badge: "L'Apothicaire Interdit",
      subtitle: 'Archives 1910–',
      description: "La vérité cachée de la nature. Des connaissances et techniques qui n'auraient jamais dû vous être dissimulées.",
      buttonText: 'Ouvrir les Archives →',
    },
    card2: {
      title: 'Verborgene Bibliothek',
      badge: 'Bibliothèque Cachée',
      subtitle: 'Le Savoir du Saint Graal.',
      description: 'Écrits cachés, civilisations secrètes, savoir interdit, vérités spirituelles.',
      buttonText: 'Entrer dans la Bibliothèque →',
    },
    footer: {
      quote: "Des archives qui n'auraient jamais dû être vues, des expériences cachées, une intelligence interdite ; dans ces archives et écrits, l'avenir a déjà eu lieu.",
    },
  },

  es: {
    code: 'es',
    name: 'Español',
    flag: 'ES',
    header: {
      title: 'WISSENSPORTAL',
      welcome: '¡Bienvenido al Portal!',
      subtitle: 'Aquí encontrará información, conocimiento y verdades ocultas.',
    },
    card1: {
      title: 'DIE VERBOTENE APOTHEKE',
      badge: 'La Botica Proibida',
      subtitle: 'Archivo 1910–',
      description: 'La verdad oculta de la naturaleza. Conocimientos y técnicas que nunca debieron haberle sido ocultados.',
      buttonText: 'Abrir Archivo →',
    },
    card2: {
      title: 'Verborgene Bibliothek',
      badge: 'Biblioteca Oculta',
      subtitle: 'Conocimiento del Santo Grial.',
      description: 'Escritos ocultos, civilizaciones secretas, conocimiento prohibido, verdades espirituales.',
      buttonText: 'Entrar a la Biblioteca →',
    },
    footer: {
      quote: 'Archivos que nunca debieron haber sido vistos, experimentos ocultos, inteligencia prohibida; en estos archivos y escritos, el futuro ya ha sucedido.',
    },
  },
};

/**
 * Detects the user's preferred language.
 * Default fallback is German ('de') as mandated.
 */
export function detectUserLanguage(): SupportedLanguage {
  // 1. Check local storage preference
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = localStorage.getItem('wissensportal_language');
      if (saved && (saved in TRANSLATIONS)) {
        return saved as SupportedLanguage;
      }
    }
  } catch {
    // Storage access might be restricted in some webview sandboxes
  }

  // 2. Check browser / device / webview language
  try {
    if (typeof navigator !== 'undefined') {
      const candidateLanguages = navigator.languages && navigator.languages.length > 0
        ? navigator.languages
        : [navigator.language];

      for (const lang of candidateLanguages) {
        if (!lang) continue;
        const normalized = lang.toLowerCase().trim();
        if (normalized.startsWith('pt')) return 'pt';
        if (normalized.startsWith('en')) return 'en';
        if (normalized.startsWith('fr')) return 'fr';
        if (normalized.startsWith('es')) return 'es';
        if (normalized.startsWith('de')) return 'de';
      }
    }
  } catch {
    // Fallback to default
  }

  // 3. Mandated default language is German
  return 'de';
}

export function saveUserLanguage(lang: SupportedLanguage): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('wissensportal_language', lang);
    }
  } catch {
    // Ignore restricted webview errors
  }
}
