import { labels } from './ui';

export const defaultLang = 'es';

export function useTranslations(lang: keyof typeof labels) {
  return function traslate(key: keyof typeof labels[typeof defaultLang]) {
    return labels[lang][key] || labels[defaultLang][key];
  }
}