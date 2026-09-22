'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Page error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center p-8 text-center bg-ink-50">
      <div>
        <h1 className="text-4xl font-bold text-brand-500 mb-4">
          حدث خطأ غير متوقع
        </h1>
        <p className="text-ink-600 mb-8">
          يرجى تحديث الصفحة
        </p>
        <button
          onClick={reset}
          className="px-8 py-3 rounded-xl bg-brand-500 text-white font-semibold hover:bg-brand-600 transition-colors"
        >
          حاول مرة أخرى
        </button>
      </div>
    </div>
  );
}
