import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
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
              <Link
                key={index}
                to={item.path}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Phone Button */}
          <Button 
            variant="default" 
            className="bg-primary hover:bg-roofing-blue-dark text-primary-foreground font-semibold text-sm md:text-base px-3 md:px-4 py-2 md:py-3"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="hidden sm:inline">+1 432-999-4694</span>
            <span className="sm:hidden">Call Now</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;