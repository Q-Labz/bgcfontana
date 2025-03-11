import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { DonateButton } from '../shared/DonateButton';

// ... rest of the imports and interfaces remain the same ...

export function ProgramCard({ program, index }: ProgramCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [activeTestimonial, setActiveTestimonial] = React.useState(0);

  // ... rest of the component logic remains the same ...

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      {/* ... rest of the JSX remains the same until the button ... */}

      <div className="p-6 md:p-8">
        {/* ... existing content ... */}

        <DonateButton 
          className="w-full"
          icon={<Heart className="w-5 h-5" />}
        />
      </div>
    </motion.div>
  );
}