import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ReviewsSection from "@/components/ReviewsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ReviewsSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
    </div>
  );
};

export default Index;
