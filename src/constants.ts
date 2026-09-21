import avatarImg from './assets/images/expert_avatar_1789988369397.jpg';
import apothecaryImg from './assets/images/apothecary_archive_1789983998561.jpg';
import libraryImg from './assets/images/library_archive_1789984022059.jpg';
import valleyImg from './assets/images/valley_dawn_1789984037607.jpg';

/**
 * WISSENSPORTAL - Central Destination URLs
 * Easily updated whenever destination addresses change.
 */
export const PRODUCT_1_URL = "https://wissens-portal.vercel.app/";
export const PRODUCT_2_URL = "https://geheimebibliothek.netlify.app/";

/**
 * Exact Text Copy - Mandated without alteration, translation, or rephrasing
 */
export const CONTENT = {
  header: {
    title: "WISSENSPORTAL",
    subtitle: "Willkommen im Portal! Hier finden Sie Informationen, Wissen und verborgene Wahrheiten.",
  },
  card1: {
    title: "DIE VERBOTENE APOTHEKE",
    subtitle: "Archiv 1910–",
    description: "Die verborgene Wahrheit der Natur. Wissen und Techniken, die Ihnen niemals hätten vorenthalten werden dürfen.",
    buttonText: "Archiv öffnen →",
    url: PRODUCT_1_URL,
  },
  card2: {
    title: "Verborgene Bibliothek",
    subtitle: "Wissen um den Heiligen Gral.",
    description: "Verborgene Schriften, geheime Zivilisationen, verbotenes Wissen, spirituelle Wahrheiten.",
    buttonText: "Bibliothek betreten →",
    url: PRODUCT_2_URL,
  },
  footer: {
    quote: "Archive, die niemals hätten gesehen werden dürfen, verborgene Experimente, verbotene Intelligenz; in diesen Archiven und Schriften ist die Zukunft bereits geschehen.",
  },
} as const;

export const ASSETS = {
  avatar: avatarImg,
  apothecary: apothecaryImg,
  library: libraryImg,
  valley: valleyImg,
} as const;

