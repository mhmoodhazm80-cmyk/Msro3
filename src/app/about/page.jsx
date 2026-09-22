import Link from 'next/link';

export const metadata = {
  title: 'من نحن | لحظة ميديا',
  description: 'لحظة ميديا — وكالة تسويق وحلول رقمية. شريكك الرقمي من الفكرة للنمو.',
};

export default function About() {
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink-900 mb-6">من نحن</h1>
          <p className="text-xl text-ink-600 mb-12">شريكك الرقمي من الفكرة للنمو</p>

          <div className="space-y-6 text-ink-600 leading-relaxed text-lg">
            <p><strong className="text-brand-600">لحظة ميديا</strong> وكالة متخصصة في التسويق والحلول الرقمية، نقدّم خدمات احترافية وموثوقة تساعد الشركات وأصحاب المشاريع على بناء حضور رقمي قوي والوصول لعملائهم وتحقيق نتائج فعلية.</p>
            <p>اللي يميزنا إننا ما نقدّم خدمة منفصلة فقط، لكن نعمل على فهم احتياج كل مشروع وتقديم الحل المناسب له — من بناء الموقع أو المتجر، إلى التسويق والوصول للعملاء ومتابعة النتائج.</p>
            <p>اشتغلنا مع عملاء في مجالات مختلفة، وساعدناهم على تطوير حضورهم الرقمي وتحسين وصولهم للعملاء وتحقيق نتائج ملموسة من خلال حلول واستراتيجيات مناسبة لكل مشروع.</p>
          </div>
        </div>
      </main>
    </>
  );
}
