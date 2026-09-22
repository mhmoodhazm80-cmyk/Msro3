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
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">

      {/* ============================================================
          اللوجو الخلفية — كبير جدًا في نص الشاشة
          ============================================================ */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">

        {/* توهج بنفسجي كبير ورا اللوجو */}
        <div
          className="absolute w-[700px] h-[700px] sm:w-[900px] sm:h-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(124,77,255,0.25) 0%, rgba(124,77,255,0.05) 40%, transparent 70%)',
            animation: 'pulseGlow 8s ease-in-out infinite',
          }}
        />

        {/* اللوجو الكبير كخلفية */}
        <div
          className="relative"
          style={{
            width: '90vw',
            maxWidth: '900px',
            aspectRatio: '1 / 1',
            animation: 'logoBreath 10s ease-in-out infinite',
          }}
        >
          <Image
            src="/images/logo.png"
            alt="Lahza Media"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 900px"
            style={{
              objectFit: 'contain',
              opacity: 0.15,
              filter: 'blur(0.5px)',
            }}
          />
        </div>

        {/* حلقة دائرية دوارة */}
        <div
          className="absolute rounded-full border border-brand-400/20"
          style={{
            width: '80vw',
            maxWidth: '800px',
            aspectRatio: '1 / 1',
            animation: 'rotateSlow 60s linear infinite',
          }}
        />

        {/* حلقة تانية دوارة بالعكس */}
        <div
          className="absolute rounded-full border border-brand-400/10"
          style={{
            width: '95vw',
            maxWidth: '950px',
            aspectRatio: '1 / 1',
            animation: 'rotateSlow 90s linear infinite reverse',
          }}
        />
      </div>

      {/* توهجات جانبية */}
      <div className="absolute top-20 start-1/4 w-[500px] h-[500px] bg-brand-300/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 end-1/4 w-[400px] h-[400px] bg-brand-500/15 blur-[120px] rounded-full" />

      {/* ============================================================
          المحتوى (الكلام والأزرار) — فوق اللوجو
          ============================================================ */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-4xl mx-auto lg:mx-0">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-brand-200 text-brand-600 text-sm font-medium mb-6 shadow-lg shadow-brand-500/10">
            <Sparkles size={14} />
            {t('badge')}
          </div>

          {/* العنوان */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] tracking-tight text-ink-900 mb-6 drop-shadow-sm">
            {t('title')}
            <br />
            <span className="text-gradient">{t('titleAccent')}</span>
          </h1>

          {/* الوصف */}
          <p className="text-lg sm:text-xl text-ink-700 leading-relaxed max-w-2xl mb-10">
            {t('subtitle')}
          </p>

          {/* الأزرار */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={`/${locale}/services`}
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-brand-500 text-white font-semibold shadow-[0_10px_40px_rgba(124,77,255,0.35)] hover:shadow-[0_15px_50px_rgba(124,77,255,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              {t('ctaPrimary')}
              <Arrow size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={`/${locale}/portfolio`}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/80 backdrop-blur-md border-2 border-brand-200 text-brand-600 font-semibold hover:border-brand-500 hover:-translate-y-1 transition-all duration-300"
            >
              {t('ctaSecondary')}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 start-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-ink-500 tracking-widest uppercase">Scroll</span>
        <div className="w-1 h-8 rounded-full bg-gradient-to-b from-brand-500 to-transparent" style={{ animation: 'floatY 2s ease-in-out infinite' }} />
      </div>
    </section>
  );
}
