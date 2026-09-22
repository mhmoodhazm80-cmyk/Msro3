'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import PageTransition from '@/components/PageTransition';
import CTASection from '@/components/CTASection';
import { Plus } from 'lucide-react';

const faqs = [
  { q: 'بتشتغلوا مع شركات من أي حجم؟', a: 'أيوه — بنشتغل مع الشركات الناشئة، والمتوسطة، والكبيرة. كل مشروع ليه احتياجاته الخاصة.' },
  { q: 'كم يستغرق تنفيذ المشروع؟', a: 'حسب حجم المشروع ونوع الخدمة — من أسبوع للمشاريع البسيطة، لشهور للمشاريع الكبيرة.' },
  { q: 'بتقدّموا دعم بعد التسليم؟', a: 'أيوه، بنقدّم دعم ومتابعة مستمرة بعد التسليم حسب الباقة.' },
  { q: 'بتشتغلوا بأنظمة دفع معينة؟', a: 'بنشتغل مع كل أنظمة الدفع الشائعة حسب البلد والاحتياج.' },
  { q: 'إيه الفرق بينكم وبين شركات تانية؟', a: 'بنفهم مشروعك قبل أي حاجة، وبنكون شريك من الفكرة للنمو، مش مجرد منفّذ.' },
  { q: 'أسعاركم إيه؟', a: 'الأسعار بتختلف حسب حجم المشروع والخدمة المطلوبة — كلمنا وهنقولك عرض دقيق.' },
];

export default function FAQPage() {
  const t = useTranslations('faq');
  const [open, setOpen] = useState(0);

  return (
    <PageTransition>
      <section className="relative pt-32 pb-20 bg-grid overflow-hidden">
        <div className="absolute top-20 start-1/4 w-[500px] h-[500px] bg-brand-300/40 blur-[120px] rounded-full" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.7 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink-900 mb-6 text-center">{t('title')}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.65, duration: 0.7 }} className="text-xl text-ink-600 text-center mb-16">{t('subtitle')}</motion.p>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.75 + i * 0.06, duration: 0.5 }} className="rounded-2xl bg-white border border-ink-100 overflow-hidden">
                <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between gap-4 p-6 text-start hover:bg-brand-50/50 transition-colors">
                  <span className="font-bold text-ink-900 text-lg">{f.q}</span>
                  <motion.div animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.3 }} className="w-8 h-8 rounded-lg bg-brand-100 text-brand-600 flex items-center justify-center shrink-0">
                    <Plus size={18} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="px-6 pb-6 text-ink-600 leading-relaxed">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </PageTransition>
  );
}
