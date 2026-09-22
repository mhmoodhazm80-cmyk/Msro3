import '@/styles/globals.css';

export const metadata = {
  title: 'لحظة ميديا | وكالة تسويق وحلول رقمية',
  description: 'لحظة ميديا — وكالة متخصصة في التسويق والحلول الرقمية. تصميم مواقع، متاجر إلكترونية، SEO، سوشيال ميديا، وحملات إعلانية.',
  keywords: ['تسويق رقمي', 'تصميم مواقع', 'متاجر إلكترونية', 'SEO', 'سوشيال ميديا', 'لحظة ميديا'],
  openGraph: {
    title: 'لحظة ميديا',
    description: 'وكالة تسويق وحلول رقمية',
    type: 'website',
    images: ['/images/logo.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#7c4dff" />
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body className="bg-ink-50 text-ink-900 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
