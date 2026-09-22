'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button initial={{ opacity: 0, scale: 0.6, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.6, y: 20 }} whileHover={{ y: -4, scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 end-6 z-40 w-12 h-12 rounded-xl bg-brand-500 text-white flex items-center justify-center shadow-[0_10px_40px_rgba(124,77,255,0.4)]" aria-label="Scroll to top">
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
