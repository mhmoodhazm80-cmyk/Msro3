'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] bg-ink-950 flex items-center justify-center">
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }} className="w-12 h-12 rounded-full border-2 border-brand-500/30 border-t-brand-500" />
    </div>
  );
}
