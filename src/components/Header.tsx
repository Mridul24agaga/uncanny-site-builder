import { Button } from "@/components/ui/button";
import logo from "@/assets/happy-home-roofing-logo.png";

const Header = () => {
  const navItems = [
    "Home",
    "About Us", 
    "Services",
    "Why choose Us",
    "Projects",
    "Testimonial",
    "Blogs"
  ];

  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Happy Home Roofing" 
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Phone Button */}
          <Button 
            variant="default" 
            className="bg-primary hover:bg-roofing-blue-dark text-primary-foreground font-semibold"
          >
            +1 432-999-4694
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;