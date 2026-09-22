import Link from 'next/link';
import { Phone, MessageCircle, Facebook, Instagram, Music2 } from 'lucide-react';

export const metadata = {
  title: 'تواصل معنا | لحظة ميديا',
  description: 'تواصل مع لحظة ميديا — وكالة تسويق وحلول رقمية.',
};

export default function Contact() {
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-xl border-b border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-3">
              <img src="/images/logo.png" alt="لحظة ميديا" width="48" height="48" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
              <span className="font-bold text-lg sm:text-xl">لحظة <span className="text-brand-500">ميديا</span></span>
            </Link>
            <Link href="/" className="text-sm font-medium text-brand-600">← الرئيسية</Link>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink-900 mb-6">تواصل معنا</h1>
          <p className="text-xl text-ink-600 mb-12">يسعدنا سماعك</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            <a href="tel:+966562978648" className="p-8 rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-[0_20px_60px_rgba(124,77,255,0.3)]">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Phone size={26} />
              </div>
              <div className="text-lg font-bold mb-2">اتصل بينا</div>
              <div className="text-sm opacity-90" dir="ltr">+966 56 297 8648</div>
            </a>

            <a href="https://wa.me/966562978648" target="_blank" rel="noopener noreferrer" className="p-8 rounded-3xl bg-gradient-to-br from-green-500 to-green-700 text-white shadow-[0_20px_60px_rgba(34,197,94,0.3)]">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                <MessageCircle size={26} />
              </div>
              <div className="text-lg font-bold mb-2">واتساب</div>
              <div className="text-sm opacity-90" dir="ltr">+966 56 297 8648</div>
            </a>
          </div>

          <div className="flex justify-center gap-3">
            <a href="https://www.facebook.com/profile.php?id=61594535481918" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white border border-ink-100 text-brand-600 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="https://www.instagram.com/lahzamediasa/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white border border-ink-100 text-brand-600 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="https://www.tiktok.com/@lahzamediasa" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white border border-ink-100 text-brand-600 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all" aria-label="TikTok"><Music2 size={20} /></a>
          </div>
        </div>
      </main>
    </>
  );
}
