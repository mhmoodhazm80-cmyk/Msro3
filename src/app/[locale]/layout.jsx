import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import '@/styles/globals.css';

const metaByLocale = {
  'ar-EG': { title: 'لحظة ميديا | وكالة تسويق وحلول رقمية', description: 'لحظة ميديا — وكالة متخصصة في التسويق والحلول الرقمية. تصميم مواقع، متاجر إلكترونية، SEO، سوشيال ميديا، وحملات إعلانية.' },
  'ar-SA': { title: 'لحظة ميديا | وكالة تسويق وحلول رقمية', description: 'لحظة ميديا — وكالة متخصصة في التسويق والحلول الرقمية. تصميم مواقع، متاجر إلكترونية، SEO، سوشيال ميديا، وحملات إعلانية.' },
  'de': { title: 'Lahza Media | Digitalagentur für Marketing', description: 'Lahza Media — Digitalagentur für Marketing und digitale Lösungen. Webdesign, E-Commerce, SEO, Social Media und Werbekampagnen.' },
  'en': { title: 'Lahza Media | Digital Marketing Agency', description: 'Lahza Media — a digital marketing and solutions agency. Web design, e-commerce, SEO, social media, and advertising campaigns.' },
};

export async function generateMetadata({ params: { locale } }) {
  const meta = metaByLocale[locale] || metaByLocale['en'];
  return {
    title: meta.title,
    description: meta.description,
    keywords: ['Lahza Media', 'لحظة ميديا', 'تسويق رقمي', 'تصميم مواقع', 'متاجر إلكترونية', 'SEO'],
    alternates: { canonical: `/${locale}`, languages: { 'ar-EG': '/ar-EG', 'ar-SA': '/ar-SA', 'de': '/de', 'en': '/en' } },
    openGraph: { title: meta.title, description: meta.description, type: 'website', locale: locale.replace('-', '_'), images: ['/images/logo.png'] },
    twitter: { card: 'summary_large_image', title: meta.title, description: meta.description },
    robots: { index: true, follow: true },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params: { locale } }) {
  if (!locales.includes(locale)) notFound();
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
        <link rel="apple-touch-icon" href="/images/logo.png" />
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
