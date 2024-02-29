// breakpoints for grid
export const SCREEN_S = 320;
export const SCREEN_M = 768;
export const SCREEN_L = 1024;
export const SCREEN_XL = 1080;

// urls for links
export const WEB_URL =
  process.env.FEATURE_ENV === 'staging'
    ? 'https://staging.stdaux.com'
    : 'https://www.stdaux.com';
export const APP_URL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : WEB_URL;
export const GFW_API =
  process.env.FEATURE_ENV === 'staging'
    ? 'https://staging-api.stdaux.com'
    : 'https://production-api.stdaux.com';
export const TRASE_API = 'https://trase.earth/api/v3';
export const BITLY_API_URL = 'https://api-ssl.bitly.com/v3';
export const DEVELOPERS_URL = 'https://developers.stdaux.com';
export const HOWTO_URL = 'https://www.stdaux.com/howto';
export const DATA_PORTAL_URL = 'https://data.stdaux.com';
export const BLOG_URL = 'https://blog.stdaux.com';

export const STDAUX_TAG_LINE = 'Accelerating Transition to Sustainable Development';


