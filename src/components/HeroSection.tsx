import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Check } from "lucide-react";
import ContactForm from "./ContactForm";

const HeroSection = () => {
  const features = [
    "Highest Quality Materials",
    "Trustworthy Craftsmanship With Attention-to-Detail",
    "Comprehensive Warranties Available",
    "Top Rated Roofer With Over 1,000 5-Star Reviews"
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url(/lovable-uploads/8ee16cd7-0fa7-471d-bed9-4470d670809a.png)`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-hero-overlay"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-white space-y-8">
            <div>
              <p className="text-lg mb-4 opacity-90">
                Top Rated Permian Basin Roofing Company
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                We Build Roofs<br />
                To Last
              </h1>
            </div>
            
            <p className="text-lg opacity-90 leading-relaxed max-w-lg">
              With over 100 years of combined experience, we've been the go-to expert for quality roofing in Midland, Odessa, Big Spring, TX and surrounding areas. Catering to both residential and commercial properties.
            </p>

            <Button 
              className="bg-primary hover:bg-roofing-blue-dark text-primary-foreground font-semibold px-8 py-4 text-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Schedule Free Inspection!
            </Button>

            {/* Features List */}
            <div className="space-y-4 pt-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-success-green flex-shrink-0" />
                  <span className="text-white">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex justify-center lg:justify-end">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;