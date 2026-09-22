'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';

export default function TermsPage() {
  const sections = [
    { title: 'قبول الشروط', body: 'باستخدامك لموقعنا أو خدماتنا، أنت موافق على الشروط والأحكام دي.' },
    { title: 'الخدمات', body: 'بنقدّم خدمات تسويق وحلول رقمية حسب الاتفاق مع كل عميل على حدة.' },
    { title: 'الدفع', body: 'شروط الدفع بتتفق عليها مسبقًا مع كل عميل حسب المشروع والباقة.' },
    { title: 'الملكية الفكرية', body: 'كل المحتوى على الموقع ملك للشركة — يُمنع استخدامه دون إذن كتابي.' },
    { title: 'المسؤولية', body: 'بنبذل قصارى جهدنا لتقديم خدمات احترافية، لكن النتائج بتعتمد على عوامل كتير.' },
    { title: 'التعديلات', body: 'ممكن نحدّث الشروط دي من وقت للتاني، والاستمرار في استخدام الموقع يعني موافقتك على التعديلات.' },
  ];

  return (
    <PageTransition>
      <section className="relative pt-32 pb-20 bg-grid overflow-hidden">
        <div className="absolute top-20 end-1/3 w-[500px] h-[500px] bg-brand-300/40 blur-[120px] rounded-full" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.7 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink-900 mb-6">الشروط والأحكام</motion.h1>
          <div className="space-y-8 mt-16">
            {sections.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.06 }}>
                <h2 className="text-2xl font-bold text-ink-900 mb-3">{s.title}</h2>
                <p className="text-ink-600 leading-relaxed text-lg">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
