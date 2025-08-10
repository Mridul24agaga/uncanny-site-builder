import { Button } from "@/components/ui/button";
import { Users, Heart, Layers, Search, Shield, Award } from "lucide-react";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Users,
      title: "Professional Trained Workers",
      description: "Our team consists of certified and experienced roofing professionals."
    },
    {
      icon: Heart,
      title: "Local & Family Owned",
      description: "Proudly serving the Permian Basin as a trusted local family business."
    },
    {
      icon: Layers,
      title: "Quality Materials",
      description: "We use only the highest quality roofing materials for lasting results."
    },
    {
      icon: Search,
      title: "Free Roof Inspection",
      description: "Comprehensive roof assessment at no cost to identify potential issues."
    },
    {
      icon: Shield,
      title: "Insured & Bonded",
      description: "Fully licensed, insured, and bonded for your peace of mind."
    },
    {
      icon: Award,
      title: "Over 100 Years of Combined Experience",
      description: "Decades of expertise ensuring quality workmanship and service."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-4 text-sm tracking-wide uppercase">
            WHY CHOOSE US
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Main Reason to Choose Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bring to the table win-win survival strategies to ensure proactive domination at the end of the day
          </p>
        </div>

        {/* Reasons Grid - 3x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            className="bg-primary hover:bg-roofing-blue-dark text-primary-foreground font-semibold px-8 py-3 text-lg"
          >
            Book My Free Roof Inspection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;