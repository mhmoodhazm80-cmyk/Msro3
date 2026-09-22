'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import PageTransition from '@/components/PageTransition';
import ContactButtons from '@/components/ContactButtons';
import { Palette, Code, Megaphone, Video } from 'lucide-react';

export default function CareersPage() {
  const t = useTranslations('careers');
  const roles = [
    { icon: Palette, title: 'مصمم UI/UX', desc: 'خبرة في تصميم واجهات احترافية' },
    { icon: Code, title: 'مطوّر ويب', desc: 'خبرة في Next.js / React' },
    { icon: Megaphone, title: 'مسؤول تسويق', desc: 'خبرة في السوشيال ميديا والإعلانات' },
    { icon: Video, title: 'مونتير فيديو', desc: 'خبرة في صناعة المحتوى' },
  ];

  return (
    <PageTransition>
      <section className="relative pt-32 pb-20 bg-grid overflow-hidden">
        <div className="absolute top-20 end-1/3 w-[500px] h-[500px] bg-brand-300/40 blur-[120px] rounded-full" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.7 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink-900 mb-6">{t('title')}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.65, duration: 0.7 }} className="text-xl text-ink-600 max-w-2xl mx-auto mb-16">{t('subtitle')}</motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {roles.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.75 + i * 0.1, duration: 0.6 }} whileHover={{ y: -6 }} className="p-6 rounded-2xl bg-white border border-ink-100 hover:border-brand-300 hover:shadow-[0_20px_60px_rgba(124,77,255,0.12)] transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center mb-4 mx-auto"><r.icon size={22} /></div>
                <h3 className="font-bold text-ink-900 mb-2">{r.title}</h3>
                <p className="text-ink-600 text-sm">{r.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.3, duration: 0.6 }} className="max-w-2xl mx-auto p-10 rounded-3xl bg-brand-50 border border-brand-100">
            <h2 className="text-2xl font-bold text-ink-900 mb-4">تحب تنضم لفريقنا؟</h2>
            <p className="text-ink-600 mb-8">ابعتلنا وكلمنا — بنستقبل المواهب باستمرار.</p>
            <div className="flex justify-center"><ContactButtons /></div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
