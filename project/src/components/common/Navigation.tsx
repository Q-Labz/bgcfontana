import { NavLink } from 'react-router-dom';

interface NavigationProps {
  isScrolled: boolean;
  className?: string;
}

const Navigation = ({ isScrolled, className = '' }: NavigationProps) => {
  return (
    <nav className={`hidden lg:flex items-center space-x-8 ${className}`}>
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          `font-medium transition-colors ${
            isScrolled
              ? isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              : isActive ? 'text-white' : 'text-white/80 hover:text-white'
          }`
        }
      >
        Home
      </NavLink>
      <NavLink 
        to="/programs" 
        className={({ isActive }) => 
          `font-medium transition-colors ${
            isScrolled
              ? isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              : isActive ? 'text-white' : 'text-white/80 hover:text-white'
          }`
        }
      >
        Programs
      </NavLink>
      <NavLink 
        to="/ways-to-give" 
        className={({ isActive }) => 
          `font-medium transition-colors ${
            isScrolled
              ? isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              : isActive ? 'text-white' : 'text-white/80 hover:text-white'
          }`
        }
      >
        Ways to Give
      </NavLink>
      <a 
        href="https://checkout.square.site/merchant/5BAJDNY82TSXF/checkout/W72FSLSZT73LYS3YCSLYR6KB" 
        className={`btn-primary ${!isScrolled ? 'bg-white text-primary-600 hover:bg-white/90' : ''}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Donate
      </a>
    </nav>
  );
};

export default Navigation;