'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ButterflyIntro from './ButterflyIntro';

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [key, setKey] = useState(pathname);

  useEffect(() => { setKey(pathname); }, [pathname]);

  return (
    <>
      <ButterflyIntro trigger={key} />
      <AnimatePresence mode="wait">
        <motion.div key={key} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 1.4 }}>
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
