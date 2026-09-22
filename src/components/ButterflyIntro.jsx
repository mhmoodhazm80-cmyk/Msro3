'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ButterflyIntro({ trigger }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(timer);
  }, [trigger]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
          <motion.div initial={{ clipPath: 'circle(0% at 50% 50%)' }} animate={{ clipPath: 'circle(150% at 50% 50%)' }} exit={{ clipPath: 'circle(0% at 50% 50%)' }} transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }} className="absolute inset-0 bg-ink-950" />

          <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: [0, 1.2, 1], opacity: [0, 0.9, 0.5] }} transition={{ duration: 1.6, times: [0, 0.6, 1] }} className="absolute w-[400px] h-[400px] rounded-full bg-brand-500/40 blur-[100px]" />

          <motion.svg width="180" height="180" viewBox="0 0 200 200" className="relative z-10" initial={{ scale: 0, rotate: -30, opacity: 0 }} animate={{ scale: [0, 1.15, 1], rotate: [-30, 10, 0], opacity: [0, 1, 1] }} exit={{ scale: 1.6, opacity: 0, y: -80 }} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}>
            <motion.path d="M100 100 C 60 40, 10 50, 20 100 C 30 150, 70 140, 100 100 Z" fill="url(#wingGrad)" animate={{ scaleX: [1, 0.3, 1] }} transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut' }} style={{ transformOrigin: '100px 100px' }} />
            <motion.path d="M100 100 C 140 40, 190 50, 180 100 C 170 150, 130 140, 100 100 Z" fill="url(#wingGrad)" animate={{ scaleX: [1, 0.3, 1] }} transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut' }} style={{ transformOrigin: '100px 100px' }} />
            <ellipse cx="100" cy="105" rx="4" ry="22" fill="#fff" />
            <motion.path d="M100 85 C 95 70, 88 65, 82 62" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" animate={{ rotate: [0, -6, 0] }} transition={{ duration: 1.2, repeat: Infinity }} style={{ transformOrigin: '100px 85px' }} />
            <motion.path d="M100 85 C 105 70, 112 65, 118 62" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" animate={{ rotate: [0, 6, 0] }} transition={{ duration: 1.2, repeat: Infinity }} style={{ transformOrigin: '100px 85px' }} />
            <defs>
              <linearGradient id="wingGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#b7a6ff" />
                <stop offset="100%" stopColor="#7c4dff" />
              </linearGradient>
            </defs>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
