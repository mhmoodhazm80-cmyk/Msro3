'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { projects } from '@/config/projects';

export default function PortfolioGrid({ limit }) {
  const t = useTranslations('portfolio');
  const tn = useTranslations('projectNames');
  const td = useTranslations('projectDescriptions');
  const locale = useLocale();
  const list = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="relative py-24 sm:py-32 bg-ink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 mb-4">{t('title')}</h2>
          <p className="text-lg text-ink-600">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {list.map((project) => (
            <Link
              key={project.slug}
              href={`/${locale}/portfolio/${project.slug}`}
              className="group relative block rounded-2xl overflow-hidden bg-white border border-ink-100 hover:border-brand-300 transition-all duration-500 hover:shadow-[0_30px_80px_rgba(124,77,255,0.15)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-ink-100">
                <Image src={project.image} alt={tn(project.slug)} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-ink-900 group-hover:text-brand-600 transition-colors">{tn(project.slug)}</h3>
                  <ArrowUpRight size={22} className="shrink-0 text-brand-500 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
                <p className="text-ink-600 leading-relaxed text-sm">{td(project.slug)}</p>
                <div className="mt-4 pt-4 border-t border-ink-100 flex items-center gap-2 text-brand-600 text-sm font-semibold">
                  <ExternalLink size={14} /> {t('visitSite')}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {limit && (
          <div className="text-center mt-12">
            <Link href={`/${locale}/portfolio`} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-500 text-white font-semibold shadow-[0_10px_30px_rgba(124,77,255,0.3)] hover:shadow-[0_15px_40px_rgba(124,77,255,0.45)] transition-all">
              {t('viewAll')} <ArrowUpRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
