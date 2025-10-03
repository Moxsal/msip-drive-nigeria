import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import msipLogo from "@/assets/msip-logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const phoneNumber = "+2348062237960";
  const whatsappNumber = "2348062237960";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={msipLogo} alt="Msip Global Services" className="h-12 w-12 object-contain" />
            <div className="hidden sm:block">
              <div className="font-heading text-xl font-bold text-foreground">Msip Global Services</div>
              <div className="text-xs text-muted-foreground">Premier Car Rental</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary font-medium transition-smooth">
              Home
            </Link>
            <Link to="/fleet" className="text-foreground hover:text-primary font-medium transition-smooth">
              Fleet
            </Link>
            <Link to="/booking" className="text-foreground hover:text-primary font-medium transition-smooth">
              Book Now
            </Link>
            <Link to="/services" className="text-foreground hover:text-primary font-medium transition-smooth">
              Services
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary font-medium transition-smooth">
              About
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary font-medium transition-smooth">
              Contact
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <a href={`tel:${phoneNumber}`} className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                Call Us
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/booking">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-foreground hover:text-primary font-medium transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/fleet"
                className="text-foreground hover:text-primary font-medium transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Fleet
              </Link>
              <Link
                to="/booking"
                className="text-foreground hover:text-primary font-medium transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
              <Link
                to="/services"
                className="text-foreground hover:text-primary font-medium transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/about"
                className="text-foreground hover:text-primary font-medium transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-foreground hover:text-primary font-medium transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm" asChild>
                  <a href={`tel:${phoneNumber}`} className="flex items-center justify-center">
                    <Phone className="h-4 w-4 mr-2" />
                    {phoneNumber}
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
                <Button variant="hero" size="sm" asChild>
                  <Link to="/booking">Book Now</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
