import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import ServicesGrid from "@/components/home/ServicesGrid";
import AISpotlight from "@/components/home/AISpotlight";
import PortfolioCarousel from "@/components/home/PortfolioCarousel";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesGrid />
      <AISpotlight />
      <PortfolioCarousel />
      <Testimonials />
      <CTABanner />
    </>
  );
}
