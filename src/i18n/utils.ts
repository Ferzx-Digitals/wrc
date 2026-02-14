import en from './en.json';
import es from './es.json';
import fr from './fr.json';

const translations: Record<string, Record<string, string>> = { en, es, fr };

export type Locale = 'en' | 'es' | 'fr';

export function t(key: string, locale: Locale = 'en'): string {
  const dict = translations[locale] ?? translations['en'];
  return dict[key] ?? translations['en'][key] ?? key;
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, locale] = url.pathname.split('/');
  if (locale === 'es' || locale === 'fr') return locale;
  return 'en';
}

export function getLocalizedPath(path: string, locale: Locale): string {
  const cleanPath = path.replace(/^\/(en|es|fr)/, '');
  return `/${locale}${cleanPath || '/'}`;
}
