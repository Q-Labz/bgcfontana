import React from 'react';
import { motion } from 'framer-motion';

export function HeroOverlay() {
  return (
    <>
      {/* Color Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/75 to-blue-900/95 z-10" />
      
      {/* Decorative Pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />
    </>
  );
}