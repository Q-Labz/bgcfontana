import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { DonateButton } from '../shared/DonateButton';

// ... rest of the imports remain the same ...

export function SimpleProgramCard({ id, title, description, image, category, index }: SimpleProgramProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden h-full group hover:shadow-xl transition-shadow"
    >
      {/* ... rest of the JSX remains the same until the button ... */}

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <DonateButton 
          size="sm"
          icon={<Heart className="w-4 h-4" />}
        />
      </div>
    </motion.div>
  );
}