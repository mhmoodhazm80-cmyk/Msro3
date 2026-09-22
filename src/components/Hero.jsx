'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const isRTL = locale.startsWith('ar');
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-grid pt-32 pb-20">
      <div className="absolute top-20 start-1/4 w-[500px] h-[500px] bg-brand-300/40 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 end-1/4 w-[400px] h-[400px] bg-brand-500/30 blur-[120px] rounded-full animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100/60 border border-brand-200 text-brand-600 text-sm font-medium mb-6">
            <Sparkles size={14} />
            {t('badge')}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] tracking-tight text-ink-900 mb-6">
            {t('title')}
            <br />
            <span className="text-gradient">{t('titleAccent')}</span>
          </h1>

          <p className="text-lg sm:text-xl text-ink-600 leading-relaxed max-w-2xl mb-10">
            {t('subtitle')}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href={`/${locale}/services`}
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-brand-500 text-white font-semibold shadow-[0_10px_40px_rgba(124,77,255,0.35)] hover:shadow-[0_15px_50px_rgba(124,77,255,0.5)] hover:-translate-y-1 transition-all"
            >
              {t('ctaPrimary')}
              <Arrow size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={`/${locale}/portfolio`}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white border-2 border-brand-200 text-brand-600 font-semibold hover:border-brand-500 hover:-translate-y-1 transition-all"
            >
              {t('ctaSecondary')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
