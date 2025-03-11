import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../../lib/utils';

const programCategories = [
  { id: 'education', name: 'Education', path: '/programs/education' },
  { id: 'arts', name: 'Arts', path: '/programs/arts' },
  { id: 'sports', name: 'Sports', path: '/programs/sports' },
  { id: 'leadership', name: 'Leadership', path: '/programs/leadership' },
  { id: 'life-skills', name: 'Life Skills', path: '/programs/life-skills' }
];

export function ProgramsNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-[72px] z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {programCategories.map((category) => (
              <Link
                key={category.id}
                to={category.path}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden w-full">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <span className="font-medium">Program Categories</span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 transition-transform",
                  isOpen && "transform rotate-180"
                )}
              />
            </button>

            {/* Mobile Menu Dropdown */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: isOpen ? 'auto' : 0,
                opacity: isOpen ? 1 : 0
              }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="py-2 space-y-1">
                {programCategories.map((category) => (
                  <Link
                    key={category.id}
                    to={category.path}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Compare Programs
            </button>
            <Link
              to="/programs/apply"
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Donate Today
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}