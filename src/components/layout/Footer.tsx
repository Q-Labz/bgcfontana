import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { SITE_INFO } from '../../constants/siteInfo';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{SITE_INFO.name}</h3>
            <div className="flex flex-col space-y-2">
              <a href={`tel:${SITE_INFO.contact.phone}`} className="flex items-center space-x-2 hover:text-blue-400">
                <Phone size={16} />
                <span>{SITE_INFO.contact.phone}</span>
              </a>
              <a href={`mailto:${SITE_INFO.contact.email}`} className="flex items-center space-x-2 hover:text-blue-400">
                <Mail size={16} />
                <span>{SITE_INFO.contact.email}</span>
              </a>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>{SITE_INFO.contact.address}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/programs" className="hover:text-blue-400">Programs</Link></li>
              <li><Link to="/give" className="hover:text-blue-400">Ways to Give</Link></li>
              <li><Link to="/club-info" className="hover:text-blue-400">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href={SITE_INFO.social.facebook} className="hover:text-blue-400" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href={SITE_INFO.social.twitter} className="hover:text-blue-400" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href={SITE_INFO.social.instagram} className="hover:text-blue-400" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {SITE_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}