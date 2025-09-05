import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Phone, MapPin, Star, Clock, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import ImagePreloader from "@/components/ImagePreloader";
import { useState, useEffect } from "react";

const MidlandTexas = () => {
  const [showStickyBar, setShowStickyBar] = useState(false);
  
  const criticalImages = [
    "/lovable-uploads/b808aa46-b91e-4f5b-8573-6e27bb488e2e.png",
    "/lovable-uploads/9963ca67-782b-4932-aabd-62132c2849cc.png",
    "/lovable-uploads/8ee16cd7-0fa7-471d-bed9-4470d670809a.png"
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const midlandFeatures = [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "24/7 Emergency Service",
      description: "Available around the clock for storm damage and emergency repairs in Midland"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Insurance Specialists",
      description: "Expert help with insurance claims and storm damage assessments"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "15+ Years Experience",
      description: "Trusted by Midland homeowners for over a decade"
    }
  ];

  const serviceAreas = [
    "Downtown Midland",
    "Grassland Estates",
    "Polo Park",
    "Stonegate",
    "Midland Country Club",
    "Fairway Oaks",
    "Sleepy Hollow",
    "North Midland"
  ];

  return (
    <div className="min-h-screen bg-white font-inter">
      <ImagePreloader images={criticalImages} />
      
      {/* SEO Meta Tags */}
      <title>Professional Roofing Services in Midland, Texas | Happy Home Roofing</title>
      <meta name="description" content="Expert roofing services in Midland, TX. Free inspections, storm damage repair, roof installation. Call (432) 999-4694 for trusted local roofers." />
      
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/b808aa46-b91e-4f5b-8573-6e27bb488e2e.png" 
                alt="Happy Home Roofing - Midland Texas Roofers" 
                className="h-16 md:h-20 w-auto" 
                loading="eager" 
                fetchPriority="high" 
              />
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center text-foreground">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+14329994694" className="font-medium hover:text-primary transition-colors">
                  (432) 999-4694
                </a>
              </div>
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm md:text-base px-3 md:px-4 py-2 md:py-3" 
                onClick={() => document.getElementById('estimate-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Estimate
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky CTA Bar */}
      <div className={`fixed top-0 left-0 right-0 bg-primary text-primary-foreground py-2 md:py-3 px-2 md:px-4 shadow-lg z-50 transform transition-transform duration-300 ${
        showStickyBar ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center flex-1 mr-2">
            <Phone className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2 flex-shrink-0" />
            <span className="font-semibold text-xs md:text-base">
              <span className="hidden sm:inline">MIDLAND'S TRUSTED ROOFERS - FREE INSPECTION!</span>
              <span className="sm:hidden">FREE ROOF INSPECTION!</span>
            </span>
          </div>
          <a 
            href="tel:+14329994694" 
            className="bg-white text-primary px-2 md:px-4 py-1 md:py-2 rounded-lg font-bold text-xs md:text-sm hover:bg-gray-100 transition-colors flex-shrink-0"
          >
            <span className="hidden sm:inline">(432) 999-4694</span>
            <span className="sm:hidden">CALL NOW</span>
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-heading-black text-4xl md:text-6xl font-bold mb-6 font-poppins">
            Expert Roofing Services in<br />
            <span className="text-primary">Midland, Texas</span>
          </h1>
          <p className="text-foreground/80 text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your trusted local roofing contractor serving Midland and surrounding areas with quality installations, repairs, and emergency services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => document.getElementById('estimate-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Free Roof Inspection
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open('tel:+14329994694')}
            >
              Call (432) 999-4694
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Midland */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-heading-black text-3xl md:text-4xl font-bold text-center mb-12 font-poppins">
            Why Midland Homeowners Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {midlandFeatures.map((feature, index) => (
              <Card key={index} className="text-center p-6 border-2 hover:border-primary/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-heading-black text-xl font-bold mb-3 font-poppins">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-heading-black text-3xl md:text-4xl font-bold text-center mb-12 font-poppins">
            Midland Areas We Serve
          </h2>
          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center shadow-sm border">
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="h-4 w-4 text-primary mr-2" />
                  <span className="font-semibold text-foreground">{area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section id="estimate-form" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <img 
              src="/lovable-uploads/9963ca67-782b-4932-aabd-62132c2849cc.png" 
              alt="Happy Home Roofing - Midland's Trusted Roofer"
              className="w-auto h-24 md:h-32 max-w-full"
              loading="lazy"
            />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
            <div className="order-2 lg:order-1">
              <div className="p-6 lg:p-8 bg-primary rounded-2xl">
                <h3 className="text-2xl lg:text-3xl font-bold mb-6 font-poppins text-primary-foreground">
                  Midland's Premier Roofing Company
                </h3>
                <div className="space-y-4 text-primary-foreground">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 mr-3 flex-shrink-0" />
                    <h4 className="font-semibold text-lg">Licensed & Insured in Texas</h4>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 mr-3 flex-shrink-0" />
                    <h4 className="font-semibold text-lg">Local Midland Family Business</h4>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 mr-3 flex-shrink-0" />
                    <h4 className="font-semibold text-lg">Premium Materials & Warranties</h4>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 mr-3 flex-shrink-0" />
                    <h4 className="font-semibold text-lg">Free Detailed Inspections</h4>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 mr-3 flex-shrink-0" />
                    <h4 className="font-semibold text-lg">Storm Damage Specialists</h4>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 mr-3 flex-shrink-0" />
                    <h4 className="font-semibold text-lg">Insurance Claim Assistance</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <Card className="border w-full max-w-md lg:max-w-none">
                <CardContent className="p-6 sm:p-8 lg:p-12">
                  <h3 className="text-heading-black text-2xl font-bold mb-6 text-center font-poppins">
                    FREE ROOF INSPECTION - MIDLAND
                  </h3>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-poppins">
            Ready to Protect Your Midland Home?
          </h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center">
              <Phone className="h-6 w-6 mr-3 text-primary" />
              <a href="tel:+14329994694" className="text-2xl font-bold hover:text-primary transition-colors">
                (432) 999-4694
              </a>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="h-5 w-5 mr-2 text-primary" />
              <span className="text-lg">Proudly Serving Midland, Texas & Surrounding Areas</span>
            </div>
          </div>
          <Link to="/" className="text-primary hover:text-primary/80 font-semibold">
            ← Back to Main Site
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MidlandTexas;