import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Logo } from './Logo';

interface HeaderProps {
  isClosurePeriod: boolean;
}

export function Header({ isClosurePeriod }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "transition-colors duration-200",
        isScrolled ? "bg-blue-600/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white/90 hover:text-white transition-colors flex items-center gap-2">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link to="/programs" className="text-white/90 hover:text-white transition-colors">
              Programs
            </Link>
            <Link to="/club-info" className="text-white/90 hover:text-white transition-colors">
              Club Info
            </Link>
            <Link to="/give" className="text-white/90 hover:text-white transition-colors">
              Ways to Give
            </Link>
            {!isClosurePeriod && (
              <Link 
                to="/donate" 
                className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors font-semibold"
              >
                Donate Now
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-blue-700/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-blue-600/95 backdrop-blur-sm border-t border-white/10">
            <div className="flex flex-col space-y-4 p-6">
              <Link 
                to="/" 
                className="text-white/90 hover:text-white transition-colors flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <Link 
                to="/programs" 
                className="text-white/90 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Programs
              </Link>
              <Link 
                to="/club-info" 
                className="text-white/90 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Club Info
              </Link>
              <Link 
                to="/give" 
                className="text-white/90 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Ways to Give
              </Link>
              {!isClosurePeriod && (
                <Link 
                  to="/donate" 
                  className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors text-center font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Donate Now
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}