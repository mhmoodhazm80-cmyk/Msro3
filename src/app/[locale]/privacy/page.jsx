'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';

export default function PrivacyPage() {
  const sections = [
    { title: 'المعلومات اللي بنجمعها', body: 'بنجمع المعلومات اللي بتقدمها لنا بشكل مباشر (الاسم، الإيميل، رقم التليفون) عند التواصل معانا أو طلب خدماتنا.' },
    { title: 'إزاي بنستخدم المعلومات', body: 'بنستخدم معلوماتك عشان نرد عليك، نقدّم الخدمة المطلوبة، نحسّن خدماتنا، ونبعتلك تحديثات لو وافقت.' },
    { title: 'حماية المعلومات', body: 'بناخد إجراءات أمنية مناسبة لحماية معلوماتك من الوصول غير المصرح به.' },
    { title: 'مشاركة المعلومات', body: 'مش بنشارك معلوماتك مع أي طرف تالت غير لما يكون ضروري لتقديم الخدمة أو لو القانون بيلزمنا.' },
    { title: 'حقوقك', body: 'لك حق الوصول لمعلوماتك، تعديلها، أو طلب حذفها — كلمنا في أي وقت.' },
    { title: 'التعديلات', body: 'ممكن نحدّث سياسة الخصوصية من وقت للتاني، والتعديلات بتصبح سارية بمجرد نشرها.' },
  ];

  return (
    <PageTransition>
      <section className="relative pt-32 pb-20 bg-grid overflow-hidden">
        <div className="absolute top-20 start-1/3 w-[500px] h-[500px] bg-brand-300/40 blur-[120px] rounded-full" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.7 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink-900 mb-6">سياسة الخصوصية</motion.h1>
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
