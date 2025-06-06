import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Navigation from '../common/Navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <img 
            src="/bgclogo.webp" 
            alt="Boys & Girls Club Logo" 
            className={`w-12 h-12 object-contain ${!isScrolled ? 'brightness-0 invert' : ''}`}
          />
          <div className="ml-2">
            <span className={`font-heading font-bold text-lg md:text-xl block leading-tight ${
              isScrolled ? 'text-primary-700' : 'text-white'
            }`}>
              Boys & Girls Club
            </span>
            <span className={`text-xs md:text-sm font-medium block leading-tight ${
              isScrolled ? 'text-gray-600' : 'text-white/80'
            }`}>
              of Fontana
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <Navigation isScrolled={isScrolled} />

        {/* Mobile menu button */}
        <button 
          className={`lg:hidden transition-colors ${
            isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-white/80'
          }`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute top-full left-0 w-full shadow-md animate-fade-in">
          <div className="container-custom py-5 flex flex-col space-y-4">
            <Navigation isScrolled={true} className="!flex !flex-col !items-start !space-y-4 !space-x-0" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;