'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { site } from '@/config/site';

export default function ContactButtons({ size = 'md' }) {
  const t = useTranslations('contact');
  const sizes = { sm: 'px-4 py-2 text-sm', md: 'px-6 py-3 text-base', lg: 'px-8 py-4 text-lg' };

  return (
    <div className="flex flex-wrap gap-3">
      <motion.a href={`tel:${site.phone}`} whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }} className={`group inline-flex items-center gap-2 rounded-xl bg-brand-500 text-white font-semibold shadow-[0_8px_30px_rgba(124,77,255,0.35)] hover:shadow-[0_12px_40px_rgba(124,77,255,0.5)] transition-all ${sizes[size]}`}>
        <Phone size={18} /> {t('call')}
      </motion.a>
      <motion.a href={site.whatsapp} target="_blank" rel="noopener noreferrer" whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }} className={`group inline-flex items-center gap-2 rounded-xl bg-white text-brand-600 font-semibold border-2 border-brand-200 hover:border-brand-500 shadow-sm hover:shadow-[0_8px_30px_rgba(124,77,255,0.15)] transition-all ${sizes[size]}`}>
        <MessageCircle size={18} /> {t('whatsapp')}
      </motion.a>
    </div>
  );
}
