import i18n from 'sveltekit-i18n';
import lang from './lang.json';

/** @type {import('sveltekit-i18n').Config} */
const config = {
  translations: {
    en: { lang },
    'uk-UA': { lang },
    ru: { lang },
  },
  loaders: [
    {
      locale: 'en',
      key: 'globalTranslations',
      loader: async () => (await import('./en/globalTranslations.json')).default,
    },
    {
      locale: 'uk-UA',
      key: 'globalTranslations',
      loader: async () => (await import('./uk-UA/globalTranslations.json')).default,
    },
    {
      locale: 'ru',
      key: 'globalTranslations',
      loader: async () => (await import('./ru/globalTranslations.json')).default,
    },
  ],
};

export const defaultLocale = 'en';

export const { t, locale, locales, loading, addTranslations, loadTranslations, translations, setRoute, setLocale } = new i18n(config);

loading.subscribe(async ($loading) => {
  if ($loading) {
    await loading.toPromise();
  }
});