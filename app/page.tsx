import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import StatsSection from "@/components/stats";
import MissionVisionSection from "@/components/mission-vision";
import EcosystemSection from "@/components/ecosystem";
import BrandsSection from "@/components/brands";
import OffersSection from "@/components/offers";
import TestimonialsSection from "@/components/testimonials-section";
import ConsultationCTA from "@/components/consultation-cta";
import PricingDemo from "@/components/pricing-demo";
import { FAQDemo } from "@/components/faq-demo";
import Chatbot from "@/components/chatbot";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-neutral-50 font-sans text-black">
      <Navbar />
      <Hero />
      <StatsSection />
      <MissionVisionSection />
      <BrandsSection />
      <EcosystemSection />
      <OffersSection />
      <TestimonialsSection />
      <ConsultationCTA />
      <PricingDemo />
      <FAQDemo />



      <Footer />
      <Chatbot />
    </div>
  );
}


