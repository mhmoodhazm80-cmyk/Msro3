'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import ContactButtons from './ContactButtons';

export default function CTASection() {
  const t = useTranslations('cta');

  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative rounded-3xl bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 p-10 sm:p-16 text-center overflow-hidden">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute -top-20 -end-20 w-72 h-72 rounded-full border border-white/10" />
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} className="absolute -bottom-32 -start-20 w-96 h-96 rounded-full border border-white/10" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">{t('title')}</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">{t('subtitle')}</p>
            <div className="flex justify-center"><ContactButtons size="lg" /></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
