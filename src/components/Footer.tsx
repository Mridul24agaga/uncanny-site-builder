import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About US", path: "/#about" }, 
    { name: "Services", path: "/#services" },
    { name: "Why Choose Us", path: "/#why-choose" },
    { name: "Projects", path: "/#projects" },
    { name: "Testimonials", path: "/#testimonials" },
    { name: "Contact Us", path: "/#contact" }
  ];

  const handleQuickLinkClick = (path: string) => {
    if (path.startsWith('/#')) {
      const sectionId = path.substring(2); // Remove the /#
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For home, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer>
      {/* Blue Top Bar */}
      <div className="py-6 relative border-b border-white/10 bg-[#169AFF] footer-gradient">
        <style>{`
          @media (min-width: 768px) {
            .footer-gradient {
              background: linear-gradient(to right, #169AFF 50%, #1E2124 50%) !important;
            }
          }
        `}</style>
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/20 transform -translate-x-px"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            <div className="flex items-center space-x-3">
              <MessageCircle className="h-6 w-6 text-white" />
              <Button 
                variant="outline" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#169AFF] font-medium px-6 py-2 rounded-full"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact us Now
              </Button>
            </div>
            <div className="flex items-center text-white">
              <Phone className="h-5 w-5 text-green-400 mr-3" />
              <span className="text-sm font-medium mr-2">CALL US AT</span>
              <a href="tel:+14329994694" className="text-xl font-bold hover:text-gray-200 transition-colors">
                (432) 999-4694
              </a>
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
                <Phone className="h-5 w-5 text-[#169AFF] flex-shrink-0" />
                <a href="tel:+14329994694" className="text-[#169AFF] font-medium text-lg hover:text-[#0080e6] transition-colors">
                  (432) 999-4694
                </a>
              </div>

              <div>
                <span className="text-white font-medium">Instagram: </span>
                <span className="text-[#169AFF] font-medium">Happy Home Roofing</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => handleQuickLinkClick(link.path)}
                      className="text-gray-400 hover:text-white transition-colors block cursor-pointer text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Logo */}
            <div className="flex justify-center md:justify-start items-start">
              <div className="text-center">
                <img 
                  src="/lovable-uploads/b808aa46-b91e-4f5b-8573-6e27bb488e2e.png" 
                  alt="Happy Home Roofing" 
                  className="h-40 md:h-48 lg:h-56 w-auto"
                  loading="lazy"
                  decoding="async"
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