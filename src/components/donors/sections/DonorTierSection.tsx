import React from 'react';
import { motion } from 'framer-motion';
import { DonorCard } from '../cards/DonorCard';
import type { Donor, DonorTier } from '../types';

interface DonorTierSectionProps {
  tier: DonorTier;
  donors: Donor[];
}

export function DonorTierSection({ tier, donors }: DonorTierSectionProps) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <div
          className="w-12 h-12 rounded-full"
          style={{ backgroundColor: tier.color }}
        />
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{tier.name} Circle</h3>
          <p className="text-gray-600">{tier.range}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {donors.map((donor, index) => (
          <motion.div
            key={donor.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <DonorCard donor={donor} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}