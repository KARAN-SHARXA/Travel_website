import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.jpg';
import { CONTACT } from '@/lib/contact';
import OptimizedImage from '@/components/OptimizedImage';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Explore Himachal', path: '/explore-himachal' },
    { name: 'Our Packages', path: '/destinations' },
    { name: 'Local Rides ', path: '/local-rides' },
    { name: 'Book Now', path: '/book' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-charcoal text-cream py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <a href={`tel:${CONTACT.phoneE164}`} className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={14} />
              <span className="whitespace-nowrap">{CONTACT.phoneDisplay}</span>
            </a>
            <a href={`mailto:${CONTACT.email}`} className="hidden md:flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={14} />
              <span>{CONTACT.email}</span>
            </a>
          </div>
          <span className="text-primary font-medium hidden sm:inline">24/7 Customer Support</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background/95 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <OptimizedImage
                src={logo}
                alt="Kuldeep Tour & Travel"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain rounded-lg"
                priority
                sizes="64px"
              />
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-foreground font-display">Kuldeep Tour & Travel</h1>
                <p className="text-xs text-muted-foreground hidden sm:block">Your Travel Partner</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-amber-dark">
                <Link to="/book/custom">Book A Taxi</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 animate-slide-down">
              <div className="flex flex-col gap-3">
                <a 
                  href={`https://wa.me/${CONTACT.whatsappE164}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors text-sm"
                >
                  <MessageCircle size={16} className="text-primary" />
                  WhatsApp Us
                </a>
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                      isActive(link.path)
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex gap-3 mt-4">
                  <Button asChild className="flex-1 bg-primary text-primary-foreground">
                    <Link to="/book/custom">Book A Taxi</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
