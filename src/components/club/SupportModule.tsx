import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Gift, Building2, Heart } from 'lucide-react';
import { DonateButton } from '../shared/DonateButton';

const supportOptions = [
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Monthly Giving",
    description: "Join our sustaining donor program",
    amount: "25/month"
  },
  {
    icon: <Gift className="w-6 h-6" />,
    title: "One-Time Gift",
    description: "Make an immediate impact",
    amount: "100"
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Corporate Support",
    description: "Partner with our mission",
    amount: "1000+"
  }
];

export function SupportModule() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Our Mission</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your support helps us continue providing life-changing programs for youth in our community
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {supportOptions.map((option, index) => (
          <motion.div
            key={option.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
              {option.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{option.title}</h3>
            <p className="text-gray-600 mb-4">{option.description}</p>
            <p className="text-2xl font-bold text-blue-600 mb-4">${option.amount}</p>
            <DonateButton size="sm" icon={<Heart className="w-4 h-4" />} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}