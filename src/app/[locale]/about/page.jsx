'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import PageTransition from '@/components/PageTransition';
import CTASection from '@/components/CTASection';
import { Target, Heart, Zap, Users } from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations('about');
  const values = [
    { icon: Target, title: 'الفهم قبل التنفيذ', desc: 'بنبدأ دايمًا بفهم احتياج مشروعك قبل ما نحدد أي حل.' },
    { icon: Zap, title: 'نتائج حقيقية', desc: 'مش بس شغل حلو — بنقيس النتائج وبنطوّر باستمرار.' },
    { icon: Heart, title: 'شراكة مش خدمة', desc: 'بنكون شريكك من الفكرة للنمو، مش مجرد منفّذ.' },
    { icon: Users, title: 'فريق متكامل', desc: 'تصميم، تطوير، تسويق، ومحتوى تحت سقف واحد.' },
  ];

  return (
    <PageTransition>
      <section className="relative pt-32 pb-20 bg-grid overflow-hidden">
        <div className="absolute top-20 start-1/3 w-[500px] h-[500px] bg-brand-300/40 blur-[120px] rounded-full" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.7 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink-900 mb-6 max-w-3xl">{t('title')}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.65, duration: 0.7 }} className="text-xl text-ink-600 max-w-2xl leading-relaxed">{t('subtitle')}</motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-6">وكالة تسويق وحلول رقمية</h2>
            <div className="space-y-4 text-ink-600 leading-relaxed text-lg">
              <p><strong className="text-brand-600">لحظة ميديا</strong> وكالة متخصصة في التسويق والحلول الرقمية، نقدّم خدمات احترافية وموثوقة تساعد الشركات وأصحاب المشاريع على بناء حضور رقمي قوي والوصول لعملائهم وتحقيق نتائج فعلية.</p>
              <p>اللي يميزنا إننا ما نقدّم خدمة منفصلة فقط، لكن نعمل على فهم احتياج كل مشروع وتقديم الحل المناسب له — من بناء الموقع أو المتجر، إلى التسويق والوصول للعملاء ومتابعة النتائج.</p>
              <p>اشتغلنا مع عملاء في مجالات مختلفة، وساعدناهم على تطوير حضورهم الرقمي وتحسين وصولهم للعملاء وتحقيق نتائج ملموسة من خلال حلول واستراتيجيات مناسبة لكل مشروع.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="grid grid-cols-2 gap-4">
            {[{ num: '5+', label: 'سنين خبرة' }, { num: '9', label: 'خدمات' }, { num: '5+', label: 'مشاريع' }, { num: '∞', label: 'شغف' }].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-brand-50 border border-brand-100 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-brand-600 mb-2">{item.num}</div>
                <div className="text-ink-600 text-sm">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-ink-900 mb-16 text-center">قيمنا</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="p-6 rounded-2xl bg-white border border-ink-100 hover:border-brand-300 hover:shadow-[0_20px_60px_rgba(124,77,255,0.1)] transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center mb-4"><v.icon size={22} /></div>
                <h3 className="text-lg font-bold text-ink-900 mb-2">{v.title}</h3>
                <p className="text-ink-600 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  );
}
