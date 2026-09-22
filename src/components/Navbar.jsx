'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const links = [
    { href: '', key: 'home' },
    { href: '/about', key: 'about' },
    { href: '/services', key: 'services' },
    { href: '/portfolio', key: 'portfolio' },
    { href: '/vision', key: 'vision' },
    { href: '/contact', key: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(124,77,255,0.08)]' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            <motion.div whileHover={{ rotate: 8, scale: 1.05 }} className="relative w-10 h-10 sm:w-12 sm:h-12">
              <Image src="/images/logo.png" alt="Lahza Media" fill className="object-contain" priority />
            </motion.div>
            <span className="hidden sm:block font-bold text-lg sm:text-xl text-ink-900">لحظة <span className="text-brand-500">ميديا</span></span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => {
              const fullHref = `/${locale}${link.href}`;
              const isActive = pathname === fullHref;
              return (
                <Link key={link.key} href={fullHref} className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isActive ? 'text-brand-600' : 'text-ink-700 hover:text-brand-500'}`}>
                  {t(link.key)}
                  {isActive && <motion.span layoutId="nav-active" className="absolute inset-x-2 -bottom-0.5 h-0.5 bg-brand-500 rounded-full" />}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />
            <button onClick={() => setOpen(!open)} className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-brand-50 text-brand-600" aria-label="Menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-brand-100">
            <nav className="px-6 py-6 flex flex-col gap-1">
              {links.map((link, i) => (
                <motion.div key={link.key} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.05 }}>
                  <Link href={`/${locale}${link.href}`} className="block px-4 py-3 rounded-lg text-ink-800 hover:bg-brand-50 hover:text-brand-600 font-medium">{t(link.key)}</Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
