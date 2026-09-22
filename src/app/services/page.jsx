import Link from 'next/link';
import { Globe, ShoppingBag, Search, Share2, Megaphone, Video, LayoutGrid, Store, PenTool } from 'lucide-react';

export const metadata = {
  title: 'خدماتنا | لحظة ميديا',
  description: 'حلول رقمية متكاملة: تصميم مواقع، متاجر إلكترونية، SEO، سوشيال ميديا، حملات إعلانية، والمزيد.',
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

export default function Services() {
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink-900 mb-6">خدماتنا</h1>
            <p className="text-xl text-ink-600">حلول رقمية متكاملة تحت سقف واحد</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="group p-8 rounded-2xl bg-white border border-ink-100 hover:border-brand-300 hover:shadow-[0_20px_60px_rgba(124,77,255,0.12)] transition-all duration-500">
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
      </main>
    </>
  );
}
