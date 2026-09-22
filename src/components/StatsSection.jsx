'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { site } from '@/config/site';

function Counter({ to }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let current = 0;
      const step = to / 40;
      const interval = setInterval(() => {
        current += step;
        if (current >= to) {
          setCount(to);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [inView, to]);

  return <span ref={ref}>{count}</span>;
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
            <div key={i} className="text-center">
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-3">
                <Counter to={stat.value} />
                <span className="text-brand-400">{stat.suffix}</span>
              </div>
              <div className="text-ink-300 text-sm sm:text-base tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
