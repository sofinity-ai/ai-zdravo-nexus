import PublicNavigation from "@/components/PublicNavigation";
import HeroSection from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import FeaturesSection from "@/components/FeaturesSection";
import CoursePreviewSection from "@/components/CoursePreviewSection";
import InstructorSpotlight from "@/components/InstructorSpotlight";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <PublicNavigation />
      <HeroSection />
      <SocialProofBar />
      <FeaturesSection />
      <CoursePreviewSection />
      <InstructorSpotlight />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Landing;