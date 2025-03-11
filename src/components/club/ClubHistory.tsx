import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Users, Building } from 'lucide-react';

const milestones = [
  {
    year: 1990,
    icon: <Building className="w-6 h-6" />,
    title: "Club Founding",
    description: "Established to serve Fontana's youth"
  },
  {
    year: 2000,
    icon: <Users className="w-6 h-6" />,
    title: "1,000th Member",
    description: "Reaching more youth than ever"
  },
  {
    year: 2010,
    icon: <Award className="w-6 h-6" />,
    title: "National Recognition",
    description: "Excellence in youth development"
  },
  {
    year: 2020,
    icon: <Calendar className="w-6 h-6" />,
    title: "30th Anniversary",
    description: "Three decades of impact"
  }
];

export function ClubHistory() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Three decades of transforming young lives in our community
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200" />
        
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
            >
              <div className="w-1/2 p-4">
                <div className={`bg-white p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                      {milestone.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.year}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </div>
              <div className="w-4 h-4 bg-blue-600 rounded-full absolute left-1/2 transform -translate-x-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}