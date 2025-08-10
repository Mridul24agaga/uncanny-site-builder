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
      <div className="bg-primary py-6">
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
                <div className="text-primary text-6xl font-bold">
                  <svg width="200" height="120" viewBox="0 0 200 120" className="text-primary">
                    <text x="10" y="40" className="fill-primary text-2xl font-bold">Happy</text>
                    <text x="10" y="65" className="fill-primary text-2xl font-bold">Home</text>
                    <text x="10" y="90" className="fill-primary text-2xl font-bold">Roofing</text>
                    <rect x="160" y="10" width="30" height="30" className="fill-primary" rx="4"/>
                    <circle cx="170" cy="30" r="3" className="fill-white"/>
                    <circle cx="180" cy="30" r="3" className="fill-white"/>
                    <path d="M165 35 Q175 40 185 35" className="stroke-white fill-none stroke-2"/>
                  </svg>
                </div>
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