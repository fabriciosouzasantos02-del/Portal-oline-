/**
 * Internationalization for WISSENSPORTAL.
 * Browser language detection supports English, French, Spanish and Portuguese;
 * German is the fallback for unsupported languages.
 */

export type SupportedLanguage = 'de' | 'en' | 'pt' | 'fr' | 'es';

export interface LanguageContent {
  code: SupportedLanguage;
  name: string;
  flag: string;
  pageTitle: string;
  pageDescription: string;
  header: {
    title: string;
    welcome: string;
    subtitle: string;
  };
  card1: {
    description: string;
    imageAlt: string;
  };
  card2: {
    description: string;
    imageAlt: string;
  };
  footer: {
    quote: string;
  };
  accessibility: {
    languageSelector: string;
    socialLinks: string;
    emailLink: string;
  };
}

export const SUPPORTED_LANGUAGES: readonly SupportedLanguage[] = ['de', 'en', 'fr', 'es', 'pt'];

/** Resolve browser and in-app WebView language preferences to a supported locale. */
export function detectSupportedLanguage(
  preferredLanguages?: readonly string[],
): SupportedLanguage {
  const candidates = preferredLanguages ?? (
    typeof navigator === 'undefined'
      ? []
      : [...(navigator.languages ?? []), navigator.language]
  );

  for (const candidate of candidates) {
    const primaryLanguage = candidate.trim().replace(/_/g, '-').split('-')[0].toLowerCase();
    if (SUPPORTED_LANGUAGES.includes(primaryLanguage as SupportedLanguage)) {
      return primaryLanguage as SupportedLanguage;
    }
  }

  return 'de';
}

export const TRANSLATIONS: Record<SupportedLanguage, LanguageContent> = {
  de: {
    code: 'de',
    name: 'Deutsch',
    flag: 'DE',
    pageTitle: 'WISSENSPORTAL – Wissen, Natur und verborgene Wahrheiten',
    pageDescription: 'Willkommen im Wissensportal. Entdecken Sie verborgene Archive, Naturwissen, Schriften und Wissen jenseits des Gewöhnlichen.',
    header: {
      title: 'WISSENSPORTAL',
      welcome: 'Willkommen im Portal!',
      subtitle: 'Hier finden Sie Informationen, Wissen und verborgene Wahrheiten.',
    },
    card1: {
      description: 'Die verborgene Wahrheit der Natur. Wissen und Techniken, die Ihnen niemals hätten vorenthalten werden dürfen.',
      imageAlt: 'Die verbotene Apotheke – Archiv 1910',
    },
    card2: {
      description: 'Verborgene Schriften, geheime Zivilisationen, verbotenes Wissen, spirituelle Wahrheiten.',
      imageAlt: 'Verborgene Bibliothek – Wissen um den Heiligen Gral',
    },
    footer: {
      quote: 'Archive, die niemals hätten gesehen werden dürfen, verborgene Experimente, verbotene Intelligenz; in diesen Archiven und Schriften ist die Zukunft bereits geschehen.',
    },
    accessibility: {
      languageSelector: 'Sprachauswahl',
      socialLinks: 'Soziale Netzwerke und Kontakt',
      emailLink: 'E-Mail',
    },
  },

  en: {
    code: 'en',
    name: 'English',
    flag: 'EN',
    pageTitle: 'WISSENSPORTAL – Knowledge, nature and hidden truths',
    pageDescription: 'Welcome to Wissensportal. Discover hidden archives, knowledge of nature, writings and ideas beyond the ordinary.',
    header: {
      title: 'WISSENSPORTAL',
      welcome: 'Welcome to the Portal!',
      subtitle: 'Here you will find information, knowledge and hidden truths.',
    },
    card1: {
      description: 'The hidden truth of nature. Knowledge and techniques that should never have been withheld from you.',
      imageAlt: 'The Forbidden Apothecary – Archive 1910',
    },
    card2: {
      description: 'Hidden writings, secret civilizations, forbidden knowledge and spiritual truths.',
      imageAlt: 'Hidden Library – Knowledge of the Holy Grail',
    },
    footer: {
      quote: 'Archives that should never have been seen, hidden experiments and forbidden intelligence; in these archives and writings, the future has already happened.',
    },
    accessibility: {
      languageSelector: 'Language selection',
      socialLinks: 'Social media and contact',
      emailLink: 'Email',
    },
  },

  fr: {
    code: 'fr',
    name: 'Français',
    flag: 'FR',
    pageTitle: 'WISSENSPORTAL – Savoirs, nature et vérités cachées',
    pageDescription: 'Bienvenue sur Wissensportal. Découvrez des archives cachées, les savoirs de la nature, des écrits et des connaissances hors du commun.',
    header: {
      title: 'WISSENSPORTAL',
      welcome: 'Bienvenue sur le portail !',
      subtitle: 'Vous y trouverez des informations, des connaissances et des vérités cachées.',
    },
    card1: {
      description: 'La vérité cachée de la nature. Des connaissances et des techniques qui n’auraient jamais dû vous être dissimulées.',
      imageAlt: 'Die verbotene Apotheke – Archives de 1910',
    },
    card2: {
      description: 'Écrits cachés, civilisations secrètes, savoir interdit et vérités spirituelles.',
      imageAlt: 'Verborgene Bibliothek – Le savoir du Saint Graal',
    },
    footer: {
      quote: 'Des archives qui n’auraient jamais dû être vues, des expériences cachées et une intelligence interdite ; dans ces archives et ces écrits, l’avenir a déjà eu lieu.',
    },
    accessibility: {
      languageSelector: 'Choix de la langue',
      socialLinks: 'Réseaux sociaux et contact',
      emailLink: 'E-mail',
    },
  },

  es: {
    code: 'es',
    name: 'Español',
    flag: 'ES',
    pageTitle: 'WISSENSPORTAL – Conocimiento, naturaleza y verdades ocultas',
    pageDescription: 'Bienvenido a Wissensportal. Descubra archivos ocultos, saberes de la naturaleza, escritos y conocimientos fuera de lo común.',
    header: {
      title: 'WISSENSPORTAL',
      welcome: '¡Bienvenido al portal!',
      subtitle: 'Aquí encontrará información, conocimientos y verdades ocultas.',
    },
    card1: {
      description: 'La verdad oculta de la naturaleza. Conocimientos y técnicas que nunca debieron haberle sido ocultados.',
      imageAlt: 'Die verbotene Apotheke – Archivo 1910',
    },
    card2: {
      description: 'Escritos ocultos, civilizaciones secretas, conocimiento prohibido y verdades espirituales.',
      imageAlt: 'Verborgene Bibliothek – Conocimiento del Santo Grial',
    },
    footer: {
      quote: 'Archivos que nunca debieron ser vistos, experimentos ocultos e inteligencia prohibida; en estos archivos y escritos, el futuro ya ha sucedido.',
    },
    accessibility: {
      languageSelector: 'Selección de idioma',
      socialLinks: 'Redes sociales y contacto',
      emailLink: 'Correo electrónico',
    },
  },

  pt: {
    code: 'pt',
    name: 'Português',
    flag: 'PT',
    pageTitle: 'WISSENSPORTAL – Conhecimento, natureza e verdades ocultas',
    pageDescription: 'Bem-vindo ao Wissensportal. Descubra arquivos ocultos, saberes da natureza, escritos e conhecimentos além do comum.',
    header: {
      title: 'WISSENSPORTAL',
      welcome: 'Bem-vindo ao portal!',
      subtitle: 'Aqui você encontra informações, conhecimentos e verdades ocultas.',
    },
    card1: {
      description: 'A verdade oculta da natureza. Conhecimentos e técnicas que jamais deveriam ter sido escondidos de você.',
      imageAlt: 'Die verbotene Apotheke – Arquivo 1910',
    },
    card2: {
      description: 'Escritos ocultos, civilizações secretas, conhecimentos proibidos e verdades espirituais.',
      imageAlt: 'Verborgene Bibliothek – Conhecimento sobre o Santo Graal',
    },
    footer: {
      quote: 'Arquivos que jamais deveriam ter sido vistos, experimentos ocultos e inteligência proibida; nesses arquivos e escritos, o futuro já aconteceu.',
    },
    accessibility: {
      languageSelector: 'Seleção de idioma',
      socialLinks: 'Redes sociais e contato',
      emailLink: 'E-mail',
    },
  },
};
