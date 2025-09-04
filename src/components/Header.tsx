import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  
  const handleSheetOpenChange = (open: boolean) => {
    console.log('Sheet open change:', open);
    setIsOpen(open);
  };

  const handleNavClick = (path: string) => {
    console.log('Nav click:', path);
    setIsOpen(false); // Close mobile menu when navigating
    if (path.startsWith('/#')) {
      const sectionId = path.substring(2); // Remove the /#
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (path === '/midland-odessa' || path === '/blogs') {
      window.location.href = path;
    } else {
      // For home, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/#about" }, 
    { name: "Why choose Us", path: "/#why-choose" },
    { name: "Projects", path: "/#projects" },
    { name: "Testimonial", path: "/#testimonials" },
    { name: "Blogs", path: "/blogs" }
  ];

  const serviceItems = [
    { name: "Storm Damage Repair", path: "/storm-damage-repair" },
    { name: "Metal Roofing", path: "/metal-roofing-services" },
    { name: "Asphalt Shingles", path: "/asphalt-shingles-services" },
    { name: "Tile Roofing", path: "/tile-roofing-services" },
    { name: "Gutter Services", path: "/gutter-services" },
    { name: "Roof Inspection", path: "/roof-inspection-services" }
  ];

  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/b808aa46-b91e-4f5b-8573-6e27bb488e2e.png" 
              alt="Happy Home Roofing" 
              className="h-16 md:h-20 lg:h-24 w-auto"
              loading="eager"
              fetchPriority="high"
            />
          </Link>

          {/* Navigation - Hidden on mobile, shown on larger screens */}
          <nav className="hidden xl:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.path)}
                className="text-foreground hover:text-[#169AFF] transition-colors font-medium text-sm cursor-pointer"
              >
                {item.name}
              </button>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className="text-foreground hover:text-[#169AFF] transition-colors font-medium text-sm cursor-pointer flex items-center gap-1"
              >
                Services
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {servicesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-48 bg-background border border-border rounded-lg shadow-lg z-50"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <div className="py-2">
                    {serviceItems.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block px-4 py-2 text-sm text-foreground hover:text-[#169AFF] hover:bg-muted transition-colors"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu */}
          <div className="xl:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="xl:hidden"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Toggle menu - current state:', isOpen);
                setIsOpen(!isOpen);
              }}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            
            {/* Mobile Navigation Overlay */}
            {isOpen && (
              <>
                {/* Backdrop */}
                <div 
                  className="fixed inset-0 z-40 bg-black/50" 
                  onClick={() => setIsOpen(false)}
                />
                
                {/* Menu Panel */}
                <div className="fixed top-0 right-0 bottom-0 z-50 w-[300px] sm:w-[400px] bg-background shadow-xl border-l">
                  <div className="p-6">
                    <div className="flex items-center justify-end mb-6">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="w-4 h-4 relative">
                          <div className="absolute w-full h-0.5 bg-current transform rotate-45 top-1.5"></div>
                          <div className="absolute w-full h-0.5 bg-current transform -rotate-45 top-1.5"></div>
                        </div>
                      </Button>
                    </div>
                    
                    <nav className="flex flex-col space-y-6">
                      {navItems.map((item, index) => (
                        <button
                          key={index}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleNavClick(item.path);
                          }}
                          className="text-foreground hover:text-[#169AFF] transition-colors font-medium text-lg cursor-pointer text-left"
                        >
                          {item.name}
                        </button>
                      ))}
                      
                      {/* Mobile Services Menu */}
                      <div>
                        <div className="text-foreground font-medium text-lg mb-3">Services</div>
                        <div className="flex flex-col space-y-3 ml-4">
                          {serviceItems.map((service, index) => (
                            <Link
                              key={index}
                              to={service.path}
                              className="text-foreground hover:text-[#169AFF] transition-colors font-medium text-base"
                              onClick={() => setIsOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Phone Button - Hidden on mobile, visible on larger screens */}
          <div className="hidden xl:block">
            <a href="tel:+14329994694">
              <Button 
                variant="default" 
                className="bg-[#169AFF] hover:bg-[#0080e6] text-white font-semibold text-sm md:text-base px-3 md:px-4 py-2 md:py-3"
              >
                +1 432-999-4694
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;