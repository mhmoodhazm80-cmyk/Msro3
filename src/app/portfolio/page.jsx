import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'أعمالنا | لحظة ميديا',
  description: 'مشاريع نفذناها لعملائنا في مجالات مختلفة.',
};

const projects = [
  { name: 'ربق', url: 'https://rabaq.co/', image: '/images/projects/rabaq.jpg', desc: 'متجر عطور فاخرة' },
  { name: 'سهم', url: 'https://sahem.shop/', image: '/images/projects/sahem.jpg', desc: 'منصة تسوق إلكترونية' },
  { name: 'فينيرسا', url: 'https://vaneersa.com/ar', image: '/images/projects/vaneersa.jpg', desc: 'موقع شركة متعدد اللغات' },
  { name: 'لاجوي', url: 'https://lajoie7.com/', image: '/images/projects/lajoie.jpg', desc: 'متجر إلكتروني راقي' },
  { name: 'كيدز آر أس', url: 'https://kidsrus.fun/', image: '/images/projects/kidsrus.jpg', desc: 'موقع ترفيهي للأطفال' },
];

export default function Portfolio() {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink-900 mb-6">أعمالنا</h1>
            <p className="text-xl text-ink-600">مشاريع بنفتخر بيها</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="group block rounded-2xl overflow-hidden bg-white border border-ink-100 hover:border-brand-300 hover:shadow-[0_30px_80px_rgba(124,77,255,0.15)] transition-all duration-500">
                <div className="relative aspect-[16/10] overflow-hidden bg-ink-100">
                  <img src={p.image} alt={p.name} loading="lazy" width="800" height="500" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-ink-900 mb-2">{p.name}</h3>
                  <p className="text-ink-600 text-sm mb-4">{p.desc}</p>
                  <div className="flex items-center gap-2 text-brand-600 text-sm font-semibold">
                    <ExternalLink size={14} /> زور الموقع
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
