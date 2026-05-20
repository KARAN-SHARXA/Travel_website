import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';
import logo from '@/assets/logo.jpg';
import { CONTACT } from '@/lib/contact';
import OptimizedImage from '@/components/OptimizedImage';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <OptimizedImage
                src={logo}
                alt="Kuldeep Tour & Travel"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-lg"
                loading="lazy"
                sizes="48px"
              />
              <div>
                <h3 className="font-bold font-display text-lg">Kuldeep Tour & Travel</h3>
                <p className="text-xs text-cream/80">Your Travel Partner</p>
              </div>
            </div>
            <p className="text-cream/80 text-sm mb-4">
              Your trusted partner for pilgrim tours, hill station adventures & outstation travel across Himachal Pradesh and beyond.
            </p>
            <div className="flex gap-3">
              <a
                href={CONTACT.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 font-display">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-cream/80 hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/explore-himachal" className="text-cream/80 hover:text-primary transition-colors text-sm">
                  Explore Himachal
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-cream/80 hover:text-primary transition-colors text-sm">
                  Fixed Packages
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-cream/80 hover:text-primary transition-colors text-sm">
                  Book Now
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="text-cream/80 hover:text-primary transition-colors text-sm">
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cream/80 hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>


          {/* Destinations */}
          <div>
            <h4 className="font-bold text-lg mb-4 font-display">Popular Destinations</h4>
            <ul className="space-y-2">
              {['Chintpurni', 'Jwalaji', 'Dharamshala', 'McLeod Ganj', 'Kangra Valley'].map((dest) => (
                <li key={dest}>
                  <Link
                    to="/destinations"
                    className="text-cream/80 hover:text-primary transition-colors text-sm"
                  >
                    {dest}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 font-display">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${CONTACT.phoneE164}`} className="flex items-center gap-3 text-cream/80 hover:text-primary transition-colors text-sm">
                  <Phone size={16} className="text-primary" />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-cream/80 hover:text-primary transition-colors text-sm">
                  <Mail size={16} className="text-primary" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-cream/80 text-sm">
                <MapPin size={16} className="text-primary mt-0.5" />
                Balaher , Kangra , Himachal Pradesh, India
              </li>
              <li>
                <a
                  href={`https://wa.me/${CONTACT.whatsappE164}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-cream/80 hover:text-primary transition-colors text-sm"
                >
                  <MessageCircle size={16} className="text-primary" />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-cream/80 text-sm">
              © {new Date().getFullYear()} Kuldeep Tour & Travel. All rights reserved.
            </p>
           
          </div>
          <div className="flex gap-6 flex-wrap justify-center">
            <Link to="/rules" className="text-cream/80 hover:text-primary transition-colors text-sm">
              Rules & Policies
            </Link>
            <Link to="/privacy" className="text-cream/80 hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
