import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavClick = (path: string) => {
    setIsOpen(false); // Close mobile menu when navigating
    if (path.startsWith('/#')) {
      const sectionId = path.substring(2); // Remove the /#
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (path === '/midland-odessa') {
      window.location.href = path;
    } else {
      // For home, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/#about" }, 
    { name: "Services", path: "/#services" },
    { name: "Why choose Us", path: "/#why-choose" },
    { name: "Projects", path: "/#projects" },
    { name: "Testimonial", path: "/#testimonials" },
    { name: "Midland Odessa", path: "/midland-odessa" }
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
          </nav>

          {/* Mobile Menu */}
          <div className="xl:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="xl:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-6 mt-6">
                  {navItems.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleNavClick(item.path)}
                      className="text-foreground hover:text-[#169AFF] transition-colors font-medium text-lg cursor-pointer text-left"
                    >
                      {item.name}
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
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