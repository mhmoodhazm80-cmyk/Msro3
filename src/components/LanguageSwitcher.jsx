'use client';

import { useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Check } from 'lucide-react';

const languages = [
  { code: 'ar-EG', label: 'مصري', flag: '🇪🇬' },
  { code: 'ar-SA', label: 'سعودي', flag: '🇸🇦' },
  { code: 'en',    label: 'English', flag: '🇬🇧' },
  { code: 'de',    label: 'Deutsch', flag: '🇩🇪' },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const switchTo = (code) => {
    const segments = pathname.split('/').filter(Boolean);
    segments[0] = code;
    router.push('/' + segments.join('/'));
    setOpen(false);
  };

  const current = languages.find((l) => l.code === locale);

  return (
    <div ref={ref} className="relative">
      <button onClick={() => setOpen(!open)} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-brand-50 hover:bg-brand-100 text-brand-600 text-sm font-medium transition-colors" aria-label="Change language">
        <Globe size={16} />
        <span className="hidden sm:inline">{current?.flag} {current?.label}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.96 }} className="absolute end-0 mt-2 w-44 bg-white rounded-xl shadow-[0_10px_40px_rgba(124,77,255,0.15)] border border-brand-100 overflow-hidden z-50">
            {languages.map((lang) => (
              <button key={lang.code} onClick={() => switchTo(lang.code)} className={`w-full flex items-center justify-between gap-3 px-4 py-3 text-sm transition-colors ${locale === lang.code ? 'bg-brand-50 text-brand-600 font-semibold' : 'text-ink-700 hover:bg-brand-50'}`}>
                <span className="flex items-center gap-2"><span>{lang.flag}</span><span>{lang.label}</span></span>
                {locale === lang.code && <Check size={14} />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
