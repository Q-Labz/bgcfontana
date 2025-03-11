import React from 'react';
import { motion } from 'framer-motion';

interface HeroContentProps {
  children: React.ReactNode;
}

export function HeroContent({ children }: HeroContentProps) {
  return (
    <div className="container mx-auto px-4 z-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        {children}
      </motion.div>
    </div>
  );
}