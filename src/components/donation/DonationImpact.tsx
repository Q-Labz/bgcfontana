import React from 'react';
import { motion } from 'framer-motion';
import { Heart, GraduationCap, Users, Trophy } from 'lucide-react';

const impactStats = [
  {
    icon: <Heart className="w-6 h-6" />,
    amount: "$50",
    description: "Provides a week of after-school programs for one child"
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    amount: "$100",
    description: "Supplies educational materials for STEM activities"
  },
  {
    icon: <Users className="w-6 h-6" />,
    amount: "$250",
    description: "Sponsors a month of leadership development programs"
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    amount: "$500",
    description: "Funds sports equipment and uniforms for an entire team"
  }
];

export function DonationImpact() {
  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Impact</h2>
        <p className="text-gray-600">See how your donation makes a difference</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {impactStats.map((stat, index) => (
          <motion.div
            key={stat.amount}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
              {stat.icon}
            </div>
            <div className="text-2xl font-bold text-blue-600 mb-2">
              {stat.amount}
            </div>
            <p className="text-gray-600 text-sm">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}