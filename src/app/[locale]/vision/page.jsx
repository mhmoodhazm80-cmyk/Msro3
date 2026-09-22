'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import PageTransition from '@/components/PageTransition';
import CTASection from '@/components/CTASection';
import { Eye, Rocket, Gem, TrendingUp } from 'lucide-react';

export default function VisionPage() {
  const t = useTranslations('vision');
  const pillars = [
    { icon: Eye, title: 'رؤيتنا', desc: 'نكون الشريك الرقمي الأول لكل مشروع عربي بيحلم ينمو.' },
    { icon: Rocket, title: 'رسالتنا', desc: 'نساعد الشركات على بناء حضور رقمي قوي ووصول لعملائها بأدوات احترافية.' },
    { icon: Gem, title: 'قيمنا', desc: 'الجودة، الشفافية، الالتزام، والنتائج الحقيقية — قبل أي حاجة.' },
    { icon: TrendingUp, title: 'هدفنا', desc: 'نكون شريك رقمي يعتمد عليه العميل من الفكرة والتنفيذ للتسويق والنمو.' },
  ];

  return (
    <PageTransition>
      <section className="relative pt-32 pb-20 bg-ink-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-1/4 start-1/3 w-[500px] h-[500px] bg-brand-500/30 blur-[120px] rounded-full" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.7 }} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 max-w-3xl">{t('title')}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.65, duration: 0.7 }} className="text-xl text-ink-300 max-w-2xl leading-relaxed">{t('subtitle')}</motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative p-8 sm:p-10 rounded-3xl bg-ink-50 border border-ink-100 hover:bg-white hover:border-brand-300 hover:shadow-[0_30px_80px_rgba(124,77,255,0.12)] transition-all">
              <div className="w-14 h-14 rounded-2xl bg-brand-500 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><p.icon size={24} /></div>
              <h2 className="text-2xl font-bold text-ink-900 mb-3">{p.title}</h2>
              <p className="text-ink-600 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </PageTransition>
  );
}
