'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Music2, Phone, MessageCircle } from 'lucide-react';
import { site } from '@/config/site';

export default function Footer() {
  const t = useTranslations('footer');
  const tn = useTranslations('nav');
  const locale = useLocale();

  const quickLinks = [
    { href: '', key: 'home' },
    { href: '/about', key: 'about' },
    { href: '/services', key: 'services' },
    { href: '/portfolio', key: 'portfolio' },
    { href: '/contact', key: 'contact' },
  ];

  const socials = [
    { icon: Facebook, href: site.social.facebook, label: 'Facebook' },
    { icon: Instagram, href: site.social.instagram, label: 'Instagram' },
    { icon: Music2, href: site.social.tiktok, label: 'TikTok' },
    { icon: MessageCircle, href: site.whatsapp, label: 'WhatsApp' },
    { icon: Phone, href: `tel:${site.phone}`, label: 'Phone' },
  ];

  return (
    <footer className="relative bg-ink-950 text-white overflow-hidden">
      <div className="absolute -top-40 start-1/4 w-[500px] h-[500px] bg-brand-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12">
                <Image src="/images/logo.png" alt="Lahza Media" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold">لحظة <span className="text-brand-400">ميديا</span></span>
            </div>
            <p className="text-ink-300 leading-relaxed max-w-md">وكالة تسويق وحلول رقمية — بنفهم مشروعك، وبننفّذ الحل المناسب، وبنكمّل معاك لحد ما توصل لنتيجة حقيقية.</p>
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" whileHover={{ y: -4, scale: 1.08 }} whileTap={{ scale: 0.95 }} className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-500 hover:border-brand-500 transition-colors" aria-label={s.label}>
                  <s.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link href={`/${locale}${link.href}`} className="text-ink-300 hover:text-brand-400 transition-colors">{tn(link.key)}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t('contactUs')}</h3>
            <ul className="space-y-3 text-ink-300">
              <li><a href={`tel:${site.phone}`} className="hover:text-brand-400 transition-colors flex items-center gap-2"><Phone size={16} /> {site.phoneDisplay}</a></li>
              <li><a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition-colors flex items-center gap-2"><MessageCircle size={16} /> WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-ink-400 text-sm">
          © {new Date().getFullYear()} لحظة ميديا. {t('rights')}.
        </div>
      </div>
    </footer>
  );
}
