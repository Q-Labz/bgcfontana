import React from 'react';
import { motion } from 'framer-motion';
import { type Logo } from '../types';

interface CarouselSlideProps {
  logos: Logo[];
}

export function CarouselSlide({ logos }: CarouselSlideProps) {
  return (
    <div className="flex-none w-full grid grid-cols-2 md:grid-cols-4 gap-8 items-center px-8 py-12">
      {logos.map((logo, index) => (
        <motion.a
          key={logo.id}
          href={logo.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-4 group"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="relative group">
            <img
              src={logo.image}
              alt={`${logo.name} logo`}
              className="w-32 h-32 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-black bg-opacity-75 text-white p-2 rounded text-sm">
                {logo.name}
              </div>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
}