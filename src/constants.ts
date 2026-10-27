import portalBackgroundImg from './assets/images/portal-background.webp';
import apothekeCard800Img from './assets/images/apotheke-card-reference-800.webp';
import apothekeCard1200Img from './assets/images/apotheke-card-reference-1200.webp';
import apothekeCardImg from './assets/images/apotheke-card-reference.webp';
import bibliothekCard800Img from './assets/images/bibliothek-card-reference-800.webp';
import bibliothekCard1200Img from './assets/images/bibliothek-card-reference-1200.webp';
import bibliothekCardImg from './assets/images/bibliothek-card-reference.webp';

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
  portalBackground: portalBackgroundImg,
  apothekeCard800: apothekeCard800Img,
  apothekeCard1200: apothekeCard1200Img,
  apothekeCard: apothekeCardImg,
  bibliothekCard800: bibliothekCard800Img,
  bibliothekCard1200: bibliothekCard1200Img,
  bibliothekCard: bibliothekCardImg,
} as const;
