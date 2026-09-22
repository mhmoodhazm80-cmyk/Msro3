import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import ServicesGrid from '@/components/ServicesGrid';
import PortfolioGrid from '@/components/PortfolioGrid';
import CTASection from '@/components/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesGrid limit={6} />
      <PortfolioGrid limit={4} />
      <CTASection />
    </>
  );
}
