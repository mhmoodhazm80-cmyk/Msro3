'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const isRTL = locale.startsWith('ar');
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-grid pt-32 pb-20">

      {/* ========== اللوجو في الخلفية - متحرك ========== */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* توهج بنفسجي خلف اللوجو */}
        <div className="absolute w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full bg-brand-400/20 blur-[120px] animate-pulse-glow" />

        {/* اللوجو الكبير */}
        <div className="relative w-[80vw] max-w-[700px] h-[80vw] max-h-[700px] animate-logo-breath">
          <Image
            src="/images/logo.png"
            alt="Lahza Media"
            fill
            priority
            sizes="(max-width: 768px) 80vw, 700px"
            className="object-contain opacity-[0.13] sm:opacity-[0.16]"
          />
        </div>

        {/* حلقات دوارة حوالين اللوجو */}
        <div className="absolute w-[70vw] max-w-[600px] aspect-square rounded-full border border-brand-300/20 animate-rotate-slow" />
        <div className="absolute w-[85vw] max-w-[750px] aspect-square rounded-full border border-brand-300/10 animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '60s' }} />
      </div>

      {/* ========== توهجات جانبية ========== */}
      <div className="absolute top-20 start-1/4 w-[500px] h-[500px] bg-brand-300/30 blur-[120px] rounded-full animate-float-slow" />
      <div className="absolute bottom-0 end-1/4 w-[400px] h-[400px] bg-brand-500/20 blur-[120px] rounded-full animate-float-slow" style={{ animationDelay: '3s' }} />

      {/* ========== المحتوى فوق اللوجو ========== */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-4xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-brand-200 text-brand-600 text-sm font-medium mb-6 animate-fade-up">
            <Sparkles size={14} />
            {t('badge')}
          </div>

          {/* العنوان */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] tracking-tight text-ink-900 mb-6 animate-fade-up delay-200">
            {t('title')}
            <br />
            <span className="text-gradient">{t('titleAccent')}</span>
          </h1>

          {/* الوصف */}
          <p className="text-lg sm:text-xl text-ink-700 leading-relaxed max-w-2xl mb-10 animate-fade-up delay-400">
            {t('subtitle')}
          </p>

          {/* الأزرار */}
          <div className="flex flex-wrap gap-4 animate-fade-up delay-700">
            <Link
              href={`/${locale}/services`}
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-brand-500 text-white font-semibold shadow-[0_10px_40px_rgba(124,77,255,0.35)] hover:shadow-[0_15px_50px_rgba(124,77,255,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              {t('ctaPrimary')}
              <Arrow size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={`/${locale}/portfolio`}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/80 backdrop-blur-sm border-2 border-brand-200 text-brand-600 font-semibold hover:border-brand-500 hover:-translate-y-1 transition-all duration-300"
            >
              {t('ctaSecondary')}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 start-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-1000">
        <span className="text-xs text-ink-500 tracking-widest uppercase">Scroll</span>
        <div className="w-1 h-8 rounded-full bg-gradient-to-b from-brand-500 to-transparent animate-float" />
      </div>
    </section>
  );
}
