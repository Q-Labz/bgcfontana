import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/bgclogo.webp" 
                alt="Boys & Girls Club Logo" 
                className="w-12 h-12 object-contain"
              />
              <div className="ml-2">
                <span className="font-heading font-bold text-lg text-white block leading-tight">
                  Boys & Girls Club
                </span>
                <span className="text-sm text-gray-400 block leading-tight">
                  of Fontana
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering young people to reach their full potential as productive, caring, 
              responsible citizens in our community.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 font-heading">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/programs" className="text-gray-400 hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/ways-to-give" className="text-gray-400 hover:text-white transition-colors">
                  Ways to Give
                </Link>
              </li>
              <li>
                <a href="https://checkout.square.site/merchant/5BAJDNY82TSXF/checkout/W72FSLSZT73LYS3YCSLYR6KB" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  Donate
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-bold mb-4 font-heading">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 text-primary-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">
                  7723 Almeria Ave<br />
                  Fontana, CA 92336
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-primary-400 flex-shrink-0" size={18} />
                <a href="tel:+19098225466" className="text-gray-400 hover:text-white transition-colors">
                  (909) 822-5466
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-primary-400 flex-shrink-0" size={18} />
                <a href="mailto:info@bgcfontana.org" className="text-gray-400 hover:text-white transition-colors">
                  info@bgcfontana.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Boys & Girls Club of Fontana. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-gray-500">Site built by KodeLabz LLC</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;