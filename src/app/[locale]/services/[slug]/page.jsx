'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, Globe, ShoppingBag, Search, Share2, Megaphone, Video, LayoutGrid, Store, PenTool } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import ContactButtons from '@/components/ContactButtons';
import { services } from '@/config/services';

const iconMap = { Globe, ShoppingBag, Search, Share2, Megaphone, Video, LayoutGrid, Store, PenTool };

export default function ServicePage() {
  const params = useParams();
  const locale = useLocale();
  const tn = useTranslations('serviceNames');
  const td = useTranslations('serviceDescriptions');
  const isRTL = locale.startsWith('ar');
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon];
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const features = ['فريق متخصص لكل خدمة', 'تسليم في الوقت المحدد', 'متابعة مستمرة بعد التسليم', 'تقارير ونتائج قابلة للقياس'];

  return (
    <PageTransition>
      <section className="relative pt-32 pb-20 bg-grid overflow-hidden">
        <div className="absolute top-20 start-1/4 w-[500px] h-[500px] bg-brand-300/40 blur-[120px] rounded-full" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.7 }} className="max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-brand-500 text-white flex items-center justify-center mb-6"><Icon size={28} /></div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink-900 mb-6">{tn(service.slug)}</h1>
            <p className="text-xl text-ink-600 leading-relaxed mb-8">{td(service.slug)}</p>
            <ContactButtons />
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl font-bold text-ink-900 mb-6">إيه اللي بنقدّمه؟</h2>
            <p className="text-ink-600 leading-relaxed text-lg mb-6">بنقدّم خدمة {tn(service.slug)} بشكل احترافي متكامل — من التخطيط للتنفيذ للمتابعة. بنشتغل معاك خطوة بخطوة عشان نوصل لنتائج حقيقية.</p>
            <p className="text-ink-600 leading-relaxed text-lg">كل مشروع ليه احتياجاته الخاصة، عشان كده بنبدأ دايمًا بفهم مشروعك قبل أي حاجة، وبعدين نحدد الحل الأنسب.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-4">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex items-center gap-4 p-5 rounded-2xl bg-ink-50 border border-ink-100">
                <div className="w-10 h-10 rounded-xl bg-brand-500 text-white flex items-center justify-center shrink-0"><Check size={18} /></div>
                <span className="text-ink-800 font-medium">{f}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-ink-900 mb-10 text-center">خدمات تانية</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {others.map((s) => {
              const OIcon = iconMap[s.icon];
              return (
                <Link key={s.slug} href={`/${locale}/services/${s.slug}`} className="group p-6 rounded-2xl bg-white border border-ink-100 hover:border-brand-300 hover:shadow-[0_20px_60px_rgba(124,77,255,0.12)] transition-all">
                  <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center mb-4 group-hover:bg-brand-500 group-hover:text-white transition-all"><OIcon size={22} /></div>
                  <h3 className="text-lg font-bold text-ink-900 mb-2 group-hover:text-brand-600 transition-colors">{tn(s.slug)}</h3>
                  <span className="inline-flex items-center gap-1 text-brand-600 text-sm font-semibold">اعرف أكتر <Arrow size={14} /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
