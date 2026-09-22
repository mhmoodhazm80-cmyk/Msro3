import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export const locales = ['ar-EG', 'ar-SA', 'de', 'en'];
export const defaultLocale = 'ar-EG';

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();
  return { messages: (await import(`./messages/${locale}.json`)).default };
});
