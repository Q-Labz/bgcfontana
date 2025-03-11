import React from 'react';
import { motion } from 'framer-motion';
import { DonorTierSection } from './sections/DonorTierSection';
import { DonorLegend } from './sections/DonorLegend';
import { donors } from './data/donors';
import { donorTiers } from './data/tiers';

export function DonorRecognition() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Valued Supporters
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are grateful for the generous support of our donors who make our mission possible.
            Their commitment helps us create great futures for the youth in our community.
          </p>
        </motion.div>

        <DonorLegend tiers={donorTiers} />

        <div className="space-y-12 mt-12">
          {donorTiers.map((tier) => {
            const tierDonors = donors.filter(donor => donor.tier === tier.name.toLowerCase());
            return (
              <DonorTierSection
                key={tier.name}
                tier={tier}
                donors={tierDonors}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}