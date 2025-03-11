import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Users, Star } from 'lucide-react';

const values = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Character & Leadership",
    description: "Empowering youth to make positive life choices and become responsible leaders"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Inclusivity",
    description: "Creating a welcoming environment where every child can thrive"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Excellence",
    description: "Striving for the highest quality in all our programs and services"
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Innovation",
    description: "Continuously improving and adapting to meet evolving youth needs"
  }
];

export function MissionValues() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Mission & Values</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          To enable all young people, especially those who need us most, to reach their full potential
          as productive, caring, responsible citizens.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold">{value.title}</h3>
            </div>
            <p className="text-gray-700">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}