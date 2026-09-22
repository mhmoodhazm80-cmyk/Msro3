'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import PageTransition from '@/components/PageTransition';
import { Phone, MessageCircle, Facebook, Instagram, Music2 } from 'lucide-react';
import { site } from '@/config/site';

export default function ContactPage() {
  const t = useTranslations('contact');
  const channels = [
    { icon: Phone, title: t('call'), value: site.phoneDisplay, href: `tel:${site.phone}`, color: 'from-brand-500 to-brand-700' },
    { icon: MessageCircle, title: t('whatsapp'), value: site.phoneDisplay, href: site.whatsapp, color: 'from-green-500 to-green-700' },
  ];
  const socials = [
    { icon: Facebook, href: site.social.facebook, label: 'Facebook' },
    { icon: Instagram, href: site.social.instagram, label: 'Instagram' },
    { icon: Music2, href: site.social.tiktok, label: 'TikTok' },
  ];

  return (
    <PageTransition>
      <section className="relative pt-32 pb-20 bg-grid overflow-hidden">
        <div className="absolute top-20 start-1/3 w-[500px] h-[500px] bg-brand-300/40 blur-[120px] rounded-full" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.7 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink-900 mb-6">{t('title')}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.65, duration: 0.7 }} className="text-xl text-ink-600 max-w-2xl mx-auto mb-16">{t('subtitle')}</motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            {channels.map((c, i) => (
              <motion.a key={i} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.75 + i * 0.1, duration: 0.6 }} whileHover={{ y: -6 }} className={`group relative p-8 rounded-3xl bg-gradient-to-br ${c.color} text-white overflow-hidden shadow-[0_20px_60px_rgba(124,77,255,0.3)]`}>
                <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-10 -end-10 w-40 h-40 bg-white/20 blur-2xl rounded-full" />
                <div className="relative flex flex-col items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform"><c.icon size={26} /></div>
                  <div className="text-lg font-bold">{c.title}</div>
                  <div className="text-sm opacity-90" dir="ltr">{c.value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.1, duration: 0.6 }} className="flex justify-center gap-3">
            {socials.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white border border-ink-100 text-brand-600 flex items-center justify-center hover:bg-brand-500 hover:text-white hover:border-brand-500 transition-all" aria-label={s.label}>
                <s.icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
