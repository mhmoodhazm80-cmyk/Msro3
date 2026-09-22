'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { site } from '@/config/site';

export default function ContactButtons({ size = 'md' }) {
  const t = useTranslations('contact');
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={`tel:${site.phone}`}
        className={`group inline-flex items-center gap-2 rounded-xl bg-white text-brand-600 font-semibold shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ${sizes[size]}`}
      >
        <Phone size={18} /> {t('call')}
      </a>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={`group inline-flex items-center gap-2 rounded-xl bg-ink-950 text-white font-semibold shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ${sizes[size]}`}
      >
        <MessageCircle size={18} /> {t('whatsapp')}
      </a>
    </div>
  );
}
