// Locale and Language Code files will live in files in this directory
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en';
import es from './locales/es';

const languageDetectorOptions = {
  // order and from where user language should be detected
  order: ['querystring', 'navigator', 'localStorage', 'sessionStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],

  // keys or params to lookup language from
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupSessionStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: 'myDomain',

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,
};

void i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: ['en'],
    debug: false,
    detection: languageDetectorOptions,
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
  });

export * from './keys';

export default i18n;
