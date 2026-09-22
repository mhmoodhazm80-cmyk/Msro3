'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Globe, ShoppingBag, Search, Share2, Megaphone, Video, LayoutGrid, Store, PenTool, ArrowUpRight } from 'lucide-react';
import { services } from '@/config/services';

const iconMap = { Globe, ShoppingBag, Search, Share2, Megaphone, Video, LayoutGrid, Store, PenTool };

export default function ServicesGrid({ limit }) {
  const t = useTranslations('services');
  const tn = useTranslations('serviceNames');
  const td = useTranslations('serviceDescriptions');
  const locale = useLocale();
  const list = limit ? services.slice(0, limit) : services;

  return (
    <section className="relative py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 mb-4">{t('title')}</h2>
          <p className="text-lg text-ink-600">{t('subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div key={service.slug} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.06 }}>
                <Link href={`/${locale}/services/${service.slug}`} className="group relative block h-full p-8 rounded-2xl bg-ink-50 border border-ink-100 hover:border-brand-300 hover:bg-white hover:shadow-[0_20px_60px_rgba(124,77,255,0.12)] transition-all duration-500 overflow-hidden">
                  <div className="absolute -top-20 -end-20 w-40 h-40 bg-brand-400/0 group-hover:bg-brand-400/20 blur-3xl rounded-full transition-all duration-700" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center mb-6 group-hover:bg-brand-500 group-hover:text-white transition-all duration-500">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-ink-900 mb-3 group-hover:text-brand-600 transition-colors">{tn(service.slug)}</h3>
                    <p className="text-ink-600 leading-relaxed text-sm mb-6">{td(service.slug)}</p>
                    <span className="inline-flex items-center gap-1 text-brand-600 text-sm font-semibold">
                      {t('learnMore')} <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {limit && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
            <Link href={`/${locale}/services`} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-50 text-brand-600 font-semibold hover:bg-brand-100 transition-colors">
              {t('viewAll')} <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
