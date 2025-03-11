import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Star, Award } from 'lucide-react';

const trustIndicators = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure Donations",
    description: "256-bit SSL encryption protects your payment information"
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Top-Rated Charity",
    description: "Platinum rating on GuideStar for transparency"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Tax Deductible",
    description: "501(c)(3) nonprofit organization (EIN: XX-XXXXXXX)"
  }
];

export function DonationTrust() {
  return (
    <div className="mt-12 pt-12 border-t">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {trustIndicators.map((indicator, index) => (
          <motion.div
            key={indicator.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-4"
          >
            <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
              {indicator.icon}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                {indicator.title}
              </h3>
              <p className="text-sm text-gray-600">
                {indicator.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>
          Your donation is secure and encrypted. You can also mail checks to:<br />
          Boys & Girls Club of Fontana, 7723 Almeria Ave, Fontana, CA 92336
        </p>
      </div>
    </div>
  );
}