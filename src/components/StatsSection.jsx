'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { site } from '@/config/site';

function Counter({ to }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 1.8, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [inView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function StatsSection() {
  const t = useTranslations('stats');
  const stats = [
    { value: site.stats.years, label: t('years'), suffix: '+' },
    { value: site.stats.services, label: t('services'), suffix: '' },
    { value: site.stats.projects, label: t('projects'), suffix: '+' },
  ];

  return (
    <section className="relative py-20 bg-ink-950 overflow-hidden">
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-500/20 blur-[120px] rounded-full" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }} className="text-center">
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-3">
                <Counter to={stat.value} /><span className="text-brand-400">{stat.suffix}</span>
              </div>
              <div className="text-ink-300 text-sm sm:text-base tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
