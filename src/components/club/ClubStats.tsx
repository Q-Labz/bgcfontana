import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Trophy, Heart } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    value: "2,500+",
    label: "Youth Served",
    description: "Active members annually"
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    value: "95%",
    label: "Graduation Rate",
    description: "High school completion"
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    value: "50+",
    label: "Awards",
    description: "Regional & national recognition"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    value: "100K+",
    label: "Volunteer Hours",
    description: "Community service annually"
  }
];

export function ClubStats() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Club Impact</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Making a measurable difference in the lives of young people
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
              {stat.icon}
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {stat.value}
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
    </section>
  );
}