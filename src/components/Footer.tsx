import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import msipLogo from "@/assets/msip-logo.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-msip-black text-background border-t border-msip-gray/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={msipLogo} alt="Msip Global Services" className="h-12 w-12 object-contain" />
              <div>
                <div className="font-heading text-lg font-bold text-background">Msip Global Services</div>
                <div className="text-xs text-background/70">Premier Car Rental</div>
              </div>
            </div>
            <p className="text-background/80 text-sm mb-4">
              Your trusted partner for reliable and affordable car rentals across Nigeria. Drive with confidence.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 text-primary hover:text-primary-foreground" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-primary hover:text-primary-foreground" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 text-primary hover:text-primary-foreground" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-primary hover:text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-background">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-background/80 hover:text-primary transition-smooth text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="text-background/80 hover:text-primary transition-smooth text-sm">
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-background/80 hover:text-primary transition-smooth text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-background/80 hover:text-primary transition-smooth text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/80 hover:text-primary transition-smooth text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-background/80 hover:text-primary transition-smooth text-sm">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-background">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-background/80 text-sm">Chauffeur Service</li>
              <li className="text-background/80 text-sm">Airport Pickup</li>
              <li className="text-background/80 text-sm">Corporate Leasing</li>
              <li className="text-background/80 text-sm">Luxury Car Rental</li>
              <li className="text-background/80 text-sm">Long-term Rentals</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-background">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <a href="tel:+2348062237960" className="text-background/80 hover:text-primary transition-smooth text-sm">
                  +234 806 223 7960
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <a href="mailto:info@msipglobal.com" className="text-background/80 hover:text-primary transition-smooth text-sm">
                  info@msipglobal.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span className="text-background/80 text-sm">
                  Lagos, Abuja, Port Harcourt<br />
                  Kano, Ibadan
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {currentYear} Msip Global Services Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
