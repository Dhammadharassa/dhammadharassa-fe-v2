import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from './routing';

type Locale = typeof locales[number];

export default getRequestConfig(async ({ locale }) => {
  
  const isValidLocale = (value: unknown): value is Locale =>
    typeof value === 'string' && locales.includes(value as Locale);

  const validLocale = isValidLocale(locale) ? locale : defaultLocale;

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default
  };
});
