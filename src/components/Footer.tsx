import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    "Home",
    "About US", 
    "Services",
    "Why Choose Us",
    "Projects",
    "Testimonials",
    "Contact Us"
  ];

  return (
    <footer>
      {/* Blue Top Bar */}
      <div className="py-6" style={{ background: 'linear-gradient(to right, hsl(var(--primary)) 50%, #1E2124 50%)' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <MessageCircle className="h-6 w-6 text-white" />
              <Button 
                variant="outline" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-medium px-6 py-2 rounded-full"
              >
                Contact us Now
              </Button>
            </div>
            <div className="flex items-center text-white">
              <Phone className="h-5 w-5 text-green-400 mr-3" />
              <span className="text-sm font-medium mr-2">CALL US AT</span>
              <span className="text-xl font-bold">
                (432) 999 4694
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#1E2124] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">214 W Texas ave,</p>
                  <p className="text-gray-400">Midland, Tx 79701</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-primary font-medium text-lg">(432) 999 4694</p>
              </div>

              <div>
                <span className="text-white font-medium">Instagram: </span>
                <span className="text-primary font-medium">Happy Home Roofing</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Logo */}
            <div className="flex justify-center md:justify-end items-start">
              <div className="text-center">
                <img 
                  src="/lovable-uploads/b808aa46-b91e-4f5b-8573-6e27bb488e2e.png" 
                  alt="Happy Home Roofing" 
                  className="h-32 md:h-40 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#1E2124] py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 text-sm">
            © 2025 Powered By Happy Home Roofing . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;