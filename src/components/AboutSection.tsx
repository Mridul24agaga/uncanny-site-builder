import { Button } from "@/components/ui/button";
import { Home, Building2, Check } from "lucide-react";
import aboutRoofer from "@/assets/about-roofer.jpg";

const AboutSection = () => {
  const features = [
    "Dedicated to serving family homes across the permian basin",
    "Specializing in durable, high-quality roofing solutions.",
    "Focused on protecting your loved ones with safe and stylish roofs."
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={aboutRoofer} 
                alt="Professional roofer working" 
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
              
              {/* Experience Badge */}
              <div className="absolute bottom-6 left-6 bg-[#169AFF] text-white rounded-lg p-6 text-center shadow-lg max-w-[200px]">
                <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
                <div className="text-sm font-medium leading-tight">
                  Years of experience in this field
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="mt-6">
              <Button 
                className="bg-[#169AFF] hover:bg-[#0080e6] text-white font-semibold px-8 py-3 text-lg w-full sm:w-auto"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book My Free Roof Inspection
              </Button>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <p className="text-[#169AFF] font-semibold mb-4 text-sm tracking-wide uppercase">
                ABOUT US
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Welcome to Happy Home Roofing
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Welcome to Happy Home Roofing, proudly serving the permian basin families with reliable and beautiful roofing solutions. Protecting your home and loved ones is our top priority.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                At Happy Home Roofing, our team specializes in crafting roofs that combine durability with timeless appeal, ensuring your home stays safe and cozy. Serving the Permian Basin, including Midland & Odessa, TX, for over 15 years. We take pride in supporting our local community with top-tier service and unmatched quality. From roof repairs to installations, we deliver solutions tailored to your family's needs. Trust us to protect what matters most—your home and loved ones.
              </p>
            </div>

            {/* Service Types */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#169AFF]/10 rounded-lg flex items-center justify-center">
                  <Home className="h-6 w-6 text-[#169AFF]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Residential</h3>
                  <p className="text-sm text-muted-foreground">Roofing</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#169AFF]/10 rounded-lg flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-[#169AFF]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Commercial</h3>
                  <p className="text-sm text-muted-foreground">Roofing</p>
                </div>
              </div>
            </div>

            {/* Feature Points */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#169AFF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-muted-foreground leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;