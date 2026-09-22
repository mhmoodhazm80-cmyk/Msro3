'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import ContactButtons from '@/components/ContactButtons';
import { projects } from '@/config/projects';

export default function ProjectPage() {
  const params = useParams();
  const locale = useLocale();
  const tn = useTranslations('projectNames');
  const td = useTranslations('projectDescriptions');
  const tp = useTranslations('portfolio');
  const isRTL = locale.startsWith('ar');
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <PageTransition>
      <section className="relative pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.7 }}>
            <Link href={`/${locale}/portfolio`} className="inline-flex items-center gap-2 text-brand-600 text-sm font-semibold mb-8 hover:gap-3 transition-all">
              <Arrow size={16} className="rotate-180" /> {tp('title')}
            </Link>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink-900 mb-6">{tn(project.slug)}</h1>
            <p className="text-xl text-ink-600 max-w-3xl leading-relaxed mb-8">{td(project.slug)}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-brand-500 text-white font-semibold shadow-[0_10px_40px_rgba(124,77,255,0.35)] hover:shadow-[0_15px_50px_rgba(124,77,255,0.5)] hover:-translate-y-1 transition-all">
              <ExternalLink size={18} /> {tp('visitSite')}
            </a>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8, duration: 0.8 }} className="relative rounded-3xl overflow-hidden aspect-[16/9] bg-ink-100 shadow-[0_40px_100px_rgba(124,77,255,0.15)]">
            <Image src={project.image} alt={tn(project.slug)} fill priority sizes="100vw" className="object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-ink-900 mb-10 text-center">مشاريع تانية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {others.map((p) => (
              <Link key={p.slug} href={`/${locale}/portfolio/${p.slug}`} className="group relative rounded-2xl overflow-hidden bg-white border border-ink-100 hover:border-brand-300 transition-all duration-500 hover:shadow-[0_30px_80px_rgba(124,77,255,0.15)]">
                <div className="relative aspect-[16/10] overflow-hidden bg-ink-100">
                  <Image src={p.image} alt={tn(p.slug)} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-ink-900 group-hover:text-brand-600 transition-colors">{tn(p.slug)}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-6">عندك مشروع مشابه؟</h2>
          <p className="text-lg text-ink-600 mb-8">كلمنا وخلينا نساعدك تحققه</p>
          <div className="flex justify-center"><ContactButtons size="lg" /></div>
        </div>
      </section>
    </PageTransition>
  );
}
