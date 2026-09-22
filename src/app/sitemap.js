import { locales } from '@/i18n';
import { services } from '@/config/services';
import { projects } from '@/config/projects';

export default function sitemap() {
  const base = 'https://lahzamedia.com';
  const staticPages = ['', '/about', '/vision', '/services', '/portfolio', '/contact', '/careers', '/faq', '/privacy', '/terms'];
  const urls = [];

  locales.forEach((locale) => {
    staticPages.forEach((path) => {
      urls.push({
        url: `${base}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: path === '' ? 1 : 0.8,
      });
    });
    services.forEach((s) => {
      urls.push({ url: `${base}/${locale}/services/${s.slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 });
    });
    projects.forEach((p) => {
      urls.push({ url: `${base}/${locale}/portfolio/${p.slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 });
    });
  });

  return urls;
}
