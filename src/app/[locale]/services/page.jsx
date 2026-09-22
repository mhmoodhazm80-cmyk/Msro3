'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import PageTransition from '@/components/PageTransition';
import ServicesGrid from '@/components/ServicesGrid';
import CTASection from '@/components/CTASection';

export default function ServicesPage() {
  const t = useTranslations('services');

  return (
    <PageTransition>
      <section className="relative pt-32 pb-12 bg-grid overflow-hidden">
        <div className="absolute top-20 end-1/4 w-[500px] h-[500px] bg-brand-300/40 blur-[120px] rounded-full" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.7 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink-900 mb-6">{t('title')}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.65, duration: 0.7 }} className="text-xl text-ink-600 max-w-2xl mx-auto">{t('subtitle')}</motion.p>
        </div>
      </section>
      <ServicesGrid />
      <CTASection />
    </PageTransition>
  );
}
