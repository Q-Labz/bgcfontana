import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Heart, Trophy } from 'lucide-react';

const impactStats = [
  {
    icon: <Users className="w-8 h-8" />,
    number: "2,500+",
    label: "Youth Served Annually",
    description: "Making a difference in thousands of young lives every year"
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    number: "95%",
    label: "Graduation Rate",
    description: "Of our teens graduate high school on time"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    number: "50,000+",
    label: "Meals Served",
    description: "Nutritious meals provided to youth annually"
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    number: "100+",
    label: "Programs Offered",
    description: "Diverse programs supporting youth development"
  }
];

export function DonationImpact() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Impact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how your support transforms lives and strengthens our community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-600">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}