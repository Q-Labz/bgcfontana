import React from 'react';
import { motion } from 'framer-motion';
import { Header } from './Header';
import { HeroImage } from '../hero/HeroImage';

interface PageHeroProps {
  title: string;
  description?: string;
  image: string;
  children?: React.ReactNode;
  className?: string;
  height?: 'full' | 'half';
}

export function PageHero({ 
  title, 
  description, 
  image, 
  children, 
  className,
  height = 'half' 
}: PageHeroProps) {
  return (
    <div className="relative">
      <Header />
      <HeroImage
        image={image}
        height={height}
        className={className}
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-blue-50"
          >
            {description}
          </motion.p>
        )}

        {children && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {children}
          </motion.div>
        )}
      </HeroImage>
    </div>
  );
}