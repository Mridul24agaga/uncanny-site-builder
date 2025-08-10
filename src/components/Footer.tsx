import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/happy-home-roofing-logo.png";

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
      <div className="bg-primary py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <MessageCircle className="h-6 w-6 text-white mr-3" />
              <Button 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              >
                Contact us Now
              </Button>
            </div>
            <div className="flex items-center text-white">
              <Phone className="h-5 w-5 text-green-400 mr-2" />
              <span className="text-sm font-medium">CALL US AT</span>
              <span className="ml-2 text-lg font-bold text-primary-foreground">
                (432) 999 4694
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">214 W Texas ave,</p>
                  <p className="text-gray-300">Midland, Tx 79701</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-primary font-medium">(432) 999 4694</p>
              </div>

              <div>
                <p className="text-gray-300">
                  <span className="font-medium">Instagram:</span> 
                  <span className="text-primary ml-1">Happy Home Roofing</span>
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Logo */}
            <div className="flex justify-start lg:justify-end">
              <div className="text-center">
                <img 
                  src={logo} 
                  alt="Happy Home Roofing" 
                  className="h-24 w-auto mb-4 brightness-0 invert"
                  style={{ filter: 'brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(202deg) brightness(97%) contrast(94%)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-slate-900 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-400 text-sm">
            © 2025 Powered By Happy Home Roofing . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;