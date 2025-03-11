import React from 'react';
import { motion } from 'framer-motion';
import { LogoCarousel } from '../carousel/LogoCarousel';
import { logos } from '../carousel/data/logos';

export function DonorBanner() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Generous Supporters</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are grateful to our partners who help make our mission possible
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <LogoCarousel logos={logos} autoPlayInterval={5000} />
        </div>
      </div>
    </section>
  );
}