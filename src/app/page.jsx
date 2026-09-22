import Link from 'next/link';
import {
  ArrowLeft, Sparkles, Phone, MessageCircle, Facebook, Instagram, Music2,
  Globe, ShoppingBag, Search, Share2, Megaphone, Video, LayoutGrid, Store,
  PenTool, ExternalLink
} from 'lucide-react';

export const metadata = {
  title: 'لحظة ميديا | وكالة تسويق وحلول رقمية',
  description: 'لحظة ميديا — وكالة متخصصة في التسويق والحلول الرقمية.',
};

const services = [
  { icon: Globe, name: 'تصميم وتطوير المواقع', desc: 'مواقع سريعة وعصرية متوافقة مع كل الأجهزة' },
  { icon: ShoppingBag, name: 'تصميم المتاجر الإلكترونية', desc: 'متاجر احترافية بتجربة شراء سلسة' },
  { icon: Search, name: 'تحسين محركات البحث', desc: 'نوصّلك لأولى نتائج البحث بخطة مدروسة' },
  { icon: Share2, name: 'إدارة السوشيال ميديا', desc: 'إدارة كاملة بمحتوى جذاب وتفاعل حقيقي' },
  { icon: Megaphone, name: 'الحملات الإعلانية', desc: 'حملات مدفوعة بتحقق أعلى عائد' },
  { icon: Video, name: 'صناعة الفيديوهات', desc: 'فيديوهات احترافية بمونتاج وهوية بصرية' },
  { icon: LayoutGrid, name: 'المنصات الرقمية', desc: 'منصات مخصصة حسب احتياج مشروعك' },
  { icon: Store, name: 'إدارة المتاجر', desc: 'إدارة كاملة من الطلبات للشحن' },
  { icon: PenTool, name: 'صناعة المحتوى', desc: 'محتوى تسويقي مكتوب باحترافية' },
];

const projects = [
  { name: 'ربق', url: 'https://rabaq.co/', image: '/images/projects/rabaq.jpg', desc: 'متجر عطور فاخرة' },
  { name: 'سهم', url: 'https://sahem.shop/', image: '/images/projects/sahem.jpg', desc: 'منصة تسوق إلكترونية' },
  { name: 'فينيرسا', url: 'https://vaneersa.com/ar', image: '/images/projects/vaneersa.jpg', desc: 'موقع شركة متعدد اللغات' },
  { name: 'لاجوي', url: 'https://lajoie7.com/', image: '/images/projects/lajoie.jpg', desc: 'متجر إلكتروني راقي' },
  { name: 'كيدز آر أس', url: 'https://kidsrus.fun/', image: '/images/projects/kidsrus.jpg', desc: 'موقع ترفيهي للأطفال' },
];

export default function Home() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-xl border-b border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-3">
              <img src="/images/logo.png" alt="لحظة ميديا" width="48" height="48" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
              <span className="font-bold text-lg sm:text-xl">لحظة <span className="text-brand-500">ميديا</span></span>
            </Link>
            <nav className="hidden lg:flex items-center gap-1">
              <Link href="/" className="px-4 py-2 text-sm font-medium text-brand-600">الرئيسية</Link>
              <Link href="/about" className="px-4 py-2 text-sm font-medium text-ink-700 hover:text-brand-500 transition-colors">من نحن</Link>
              <Link href="/services" className="px-4 py-2 text-sm font-medium text-ink-700 hover:text-brand-500 transition-colors">خدماتنا</Link>
              <Link href="/portfolio" className="px-4 py-2 text-sm font-medium text-ink-700 hover:text-brand-500 transition-colors">أعمالنا</Link>
              <Link href="/contact" className="px-4 py-2 text-sm font-medium text-ink-700 hover:text-brand-500 transition-colors">تواصل</Link>
            </nav>
            <a href="https://wa.me/966562978648" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-500 text-white text-sm font-semibold">
              <MessageCircle size={16} /> واتساب
            </a>
          </div>
        </div>
      </header>

      <main className="pt-16 sm:pt-20">

        {/* ===== HERO ===== */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-20">
          {/* اللوجو الخلفية — LCP Element */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <div
              className="absolute w-[700px] h-[700px] sm:w-[900px] sm:h-[900px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(124,77,255,0.2) 0%, rgba(124,77,255,0.05) 40%, transparent 70%)',
              }}
            />
            <div
              className="relative"
              style={{
                width: '90vw',
                maxWidth: '900px',
                height: '90vw',
                maxHeight: '900px',
              }}
            >
              <img
                src="/images/logo.png"
                alt="لحظة ميديا"
                width="900"
                height="900"
                fetchPriority="high"
                style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: 0.15 }}
              />
            </div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-brand-200 text-brand-600 text-sm font-medium mb-6">
                <Sparkles size={14} />
                وكالة تسويق وحلول رقمية
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] tracking-tight text-ink-900 mb-6">
                بنبني حضورك الرقمي
                <br />
                <span className="text-gradient">من أول فكرة لحد النمو</span>
              </h1>

              <p className="text-lg sm:text-xl text-ink-700 leading-relaxed max-w-2xl mb-10">
                لحظة ميديا شريكك الرقمي — بنفهم مشروعك، وبننفّذ الحل المناسب، وبنكمّل معاك لحد ما توصل لنتيجة حقيقية.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/services" className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-brand-500 text-white font-semibold shadow-[0_10px_40px_rgba(124,77,255,0.35)] hover:-translate-y-1 transition-all">
                  اكتشف خدماتنا
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                </Link>
                <Link href="/portfolio" className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/80 backdrop-blur-md border-2 border-brand-200 text-brand-600 font-semibold hover:border-brand-500 hover:-translate-y-1 transition-all">
                  شوف شغلنا
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== STATS ===== */}
        <section className="relative py-20 bg-ink-950 overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-3">5<span className="text-brand-400">+</span></div>
                <div className="text-ink-300">سنين خبرة</div>
              </div>
              <div>
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-3">9</div>
                <div className="text-ink-300">خدمة احترافية</div>
              </div>
              <div>
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-3">5<span className="text-brand-400">+</span></div>
                <div className="text-ink-300">مشروع منفّذ</div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SERVICES ===== */}
        <section className="relative py-24 sm:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 mb-4">خدماتنا</h2>
              <p className="text-lg text-ink-600">حلول رقمية متكاملة تحت سقف واحد</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className="group p-8 rounded-2xl bg-ink-50 border border-ink-100 hover:border-brand-300 hover:bg-white hover:shadow-[0_20px_60px_rgba(124,77,255,0.12)] transition-all duration-500">
                    <div className="w-14 h-14 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center mb-6 group-hover:bg-brand-500 group-hover:text-white transition-all">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-ink-900 mb-3">{s.name}</h3>
                    <p className="text-ink-600 leading-relaxed text-sm">{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== PORTFOLIO ===== */}
        <section className="relative py-24 sm:py-32 bg-ink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 mb-4">شغلنا</h2>
              <p className="text-lg text-ink-600">مشاريع بنفتخر بيها</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((p, i) => (
                <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="group relative block rounded-2xl overflow-hidden bg-white border border-ink-100 hover:border-brand-300 hover:shadow-[0_30px_80px_rgba(124,77,255,0.15)] transition-all duration-500">
                  <div className="relative aspect-[16/10] overflow-hidden bg-ink-100">
                    <img src={p.image} alt={p.name} loading="lazy" width="800" height="500" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-ink-900 group-hover:text-brand-600 transition-colors mb-2">{p.name}</h3>
                    <p className="text-ink-600 text-sm mb-4">{p.desc}</p>
                    <div className="flex items-center gap-2 text-brand-600 text-sm font-semibold">
                      <ExternalLink size={14} /> زور الموقع
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="relative py-24 sm:py-32 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 p-10 sm:p-16 text-center overflow-hidden">
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">جاهز تبدأ مشروعك؟</h2>
                <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">خلينا نساعدك توصل لعملائك وتحقق نتائج حقيقية</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <a href="tel:+966562978648" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-brand-600 font-semibold">
                    <Phone size={18} /> اتصل بينا
                  </a>
                  <a href="https://wa.me/966562978648" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-ink-950 text-white font-semibold">
                    <MessageCircle size={18} /> واتساب
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="relative bg-ink-950 text-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <img src="/images/logo.png" alt="لحظة ميديا" width="48" height="48" className="w-12 h-12 object-contain" />
                  <span className="text-xl font-bold">لحظة <span className="text-brand-400">ميديا</span></span>
                </div>
                <p className="text-ink-300 leading-relaxed max-w-md">وكالة تسويق وحلول رقمية — بنفهم مشروعك، وبننفّذ الحل المناسب، وبنكمّل معاك لحد ما توصل لنتيجة حقيقية.</p>
                <div className="flex gap-3 mt-6">
                  <a href="https://www.facebook.com/profile.php?id=61594535481918" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors" aria-label="Facebook"><Facebook size={18} /></a>
                  <a href="https://www.instagram.com/lahzamediasa/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors" aria-label="Instagram"><Instagram size={18} /></a>
                  <a href="https://www.tiktok.com/@lahzamediasa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors" aria-label="TikTok"><Music2 size={18} /></a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
                <ul className="space-y-2 text-ink-300">
                  <li><Link href="/" className="hover:text-brand-400 transition-colors">الرئيسية</Link></li>
                  <li><Link href="/about" className="hover:text-brand-400 transition-colors">من نحن</Link></li>
                  <li><Link href="/services" className="hover:text-brand-400 transition-colors">خدماتنا</Link></li>
                  <li><Link href="/portfolio" className="hover:text-brand-400 transition-colors">أعمالنا</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">تواصل معانا</h3>
                <ul className="space-y-3 text-ink-300">
                  <li><a href="tel:+966562978648" className="hover:text-brand-400 flex items-center gap-2"><Phone size={16} /> +966 56 297 8648</a></li>
                  <li><a href="https://wa.me/966562978648" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 flex items-center gap-2"><MessageCircle size={16} /> WhatsApp</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 text-center text-ink-400 text-sm">
              © {new Date().getFullYear()} لحظة ميديا. كل الحقوق محفوظة.
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
