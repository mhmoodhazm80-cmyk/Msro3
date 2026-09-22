import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import '@/styles/globals.css';

const metaByLocale = {
  'ar-EG': { title: '\u0644\u062d\u0638\u0629 \u0645\u064a\u062f\u064a\u0627 | \u0648\u0643\u0627\u0644\u0629 \u062a\u0633\u0648\u064a\u0642 \u0648\u062d\u0644\u0648\u0644 \u0631\u0642\u0645\u064a\u0629', description: '\u0644\u062d\u0638\u0629 \u0645\u064a\u062f\u064a\u0627 \u2014 \u0648\u0643\u0627\u0644\u0629 \u0645\u062a\u062e\u0635\u0635\u0629 \u0641\u064a \u0627\u0644\u062a\u0633\u0648\u064a\u0642 \u0648\u0627\u0644\u062d\u0644\u0648\u0644 \u0627\u0644\u0631\u0642\u0645\u064a\u0629.' },
  'ar-SA': { title: '\u0644\u062d\u0638\u0629 \u0645\u064a\u062f\u064a\u0627 | \u0648\u0643\u0627\u0644\u0629 \u062a\u0633\u0648\u064a\u0642 \u0648\u062d\u0644\u0648\u0644 \u0631\u0642\u0645\u064a\u0629', description: '\u0644\u062d\u0638\u0629 \u0645\u064a\u062f\u064a\u0627 \u2014 \u0648\u0643\u0627\u0644\u0629 \u0645\u062a\u062e\u0635\u0635\u0629 \u0641\u064a \u0627\u0644\u062a\u0633\u0648\u064a\u0642 \u0648\u0627\u0644\u062d\u0644\u0648\u0644 \u0627\u0644\u0631\u0642\u0645\u064a\u0629.' },
  'de': { title: 'Lahza Media | Digitalagentur f\u00fcr Marketing', description: 'Lahza Media \u2014 Digitalagentur f\u00fcr Marketing und digitale L\u00f6sungen.' },
  'en': { title: 'Lahza Media | Digital Marketing Agency', description: 'Lahza Media \u2014 a digital marketing and solutions agency.' },
};

export async function generateMetadata({ params: { locale } }) {
  const meta = metaByLocale[locale] || metaByLocale['en'];
  return {
    title: meta.title,
    description: meta.description,
    metadataBase: new URL('https://lahzamedia.com'),
    alternates: {
      canonical: `/${locale}`,
      languages: { 'ar-EG': '/ar-EG', 'ar-SA': '/ar-SA', 'de': '/de', 'en': '/en' },
    },
    openGraph: { title: meta.title, description: meta.description, type: 'website', images: ['/images/logo.png'] },
    twitter: { card: 'summary_large_image', title: meta.title, description: meta.description },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params: { locale } }) {
  if (!locales.includes(locale)) notFound();

  setRequestLocale(locale);

  const messages = await getMessages();
  const dir = locale.startsWith('ar') ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#7c4dff" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body className="bg-ink-50 text-ink-900 antialiased overflow-x-hidden">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="pt-16 sm:pt-20">{children}</main>
          <Footer />
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
