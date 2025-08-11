import { Button } from "@/components/ui/button";
import { Home, Layers, Wrench, CloudRain, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Free Roof Inspection",
      description: "Comprehensive roof assessment at no cost to identify potential issues and recommend solutions."
    },
    {
      icon: Layers,
      title: "Roof Installation", 
      description: "Professional installation of new roofs using premium materials and expert craftsmanship."
    },
    {
      icon: Wrench,
      title: "Roof Damage Repair",
      description: "Expert repair services for damaged roofs, restoring safety and integrity to your home."
    },
    {
      icon: CloudRain,
      title: "Storm Restoration",
      description: "Complete storm damage restoration services to get your roof back to perfect condition."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#169AFF] font-semibold mb-4 text-sm tracking-wide uppercase">
            OUR SERVICES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Services We Offer
          </h2>
        </div>

        {/* Services Grid - 4 cards in one line */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow min-h-[300px] flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 bg-[#169AFF]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-[#169AFF]" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <div>
                  <button 
                    className="text-[#169AFF] font-semibold text-sm hover:text-[#0080e6] transition-colors flex items-center justify-center mx-auto group"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    READ MORE
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            className="bg-[#169AFF] hover:bg-[#0080e6] text-white font-semibold px-8 py-3 text-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book My Free Roof Inspection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;