'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import '@/styles/globals.css';

export default function NotFound() {
  return (
    <html lang="ar-EG" dir="rtl">
      <body className="min-h-screen flex items-center justify-center bg-ink-50 px-4">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center">
          <div className="text-[120px] sm:text-[180px] font-bold text-gradient leading-none mb-4">404</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-ink-900 mb-4">الصفحة مش موجودة</h1>
          <p className="text-ink-600 mb-8">يمكن الرابط قديم أو فيه غلطة</p>
          <Link href="/ar-EG" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-500 text-white font-semibold shadow-[0_10px_40px_rgba(124,77,255,0.35)] hover:-translate-y-1 transition-all">
            <Home size={18} /> الرئيسية
          </Link>
        </motion.div>
      </body>
    </html>
  );
}
