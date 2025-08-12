import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Check } from "lucide-react";
import ContactForm from "./ContactForm";
import { useState, useEffect } from "react";

const OptimizedHeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const heroImageUrl = "/lovable-uploads/8ee16cd7-0fa7-471d-bed9-4470d670809a.png";

  const features = [
    "Highest Quality Materials",
    "Trustworthy Craftsmanship With Attention-to-Detail",
    "Comprehensive Warranties Available",
    "Top Rated Roofer With Over 1,000 5-Star Reviews"
  ];

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = heroImageUrl;
  }, [heroImageUrl]);

  return (
    <section 
      className={`relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat transition-all duration-500 ${
        imageLoaded ? 'bg-gray-900' : 'bg-gray-800'
      }`}
      style={{ 
        backgroundImage: imageLoaded ? `url(${heroImageUrl})` : 'none',
      }}
    >
      {/* Progressive loading placeholder */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse"></div>
      )}
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-hero-overlay"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Hero Content */}
          <div className="text-white space-y-4 md:space-y-6 pt-0 md:pt-2">
            <div>
              <img 
                src="/lovable-uploads/12e5a293-1d12-4f3a-93e6-d7c74c65a5ec.png" 
                alt="Happy Home Roofing & Construction - Permian Trusted Roofer" 
                className="h-32 md:h-40 mb-4 md:mb-6"
              />
              <p className="text-sm md:text-lg mb-2 md:mb-4 opacity-90">
                Top Rated Permian Basin Roofing Company
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
                We Build Roofs<br />
                To Last
              </h1>
            </div>
            
            <p className="text-base md:text-lg opacity-90 leading-relaxed max-w-lg mb-6 md:mb-8">
              With over 100 years of combined experience, we've been the go-to expert for quality roofing in Midland, Odessa, Big Spring, TX and surrounding areas. Catering to both residential and commercial properties.
            </p>

            <Button 
              className="bg-[#169AFF] hover:bg-[#0080e6] text-white font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg mb-8 md:mb-12 w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Schedule Free Inspection!
            </Button>

            {/* Features List */}
            <div className="space-y-3 md:space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="h-5 w-5 md:h-6 md:w-6 text-success-green flex-shrink-0 mt-0.5" />
                  <span className="text-white text-sm md:text-lg leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex justify-center lg:justify-end pt-4 md:pt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizedHeroSection;