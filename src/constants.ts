import portalBackgroundImg from './assets/images/portal-background.webp';
import apothekeCard800Img from './assets/images/apotheke-card-reference-800.webp';
import apothekeCard1200Img from './assets/images/apotheke-card-reference-1200.webp';
import apothekeCardImg from './assets/images/apotheke-card-reference.webp';
import bibliothekCard800Img from './assets/images/bibliothek-card-reference-800.webp';
import bibliothekCard1200Img from './assets/images/bibliothek-card-reference-1200.webp';
import bibliothekCardImg from './assets/images/bibliothek-card-reference.webp';

/** Product destinations linked from the bio site cards. */
export const PRODUCT_1_URL = 'https://wissens-portal.vercel.app/';
export const PRODUCT_2_URL = 'https://geheimebibliothek.netlify.app/';

export const ASSETS = {
  portalBackground: portalBackgroundImg,
  apothekeCard800: apothekeCard800Img,
  apothekeCard1200: apothekeCard1200Img,
  apothekeCard: apothekeCardImg,
  bibliothekCard800: bibliothekCard800Img,
  bibliothekCard1200: bibliothekCard1200Img,
  bibliothekCard: bibliothekCardImg,
} as const;
