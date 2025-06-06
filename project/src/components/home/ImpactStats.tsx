import { motion } from 'framer-motion';
import { Users, BookOpen, Award, Heart } from 'lucide-react';

const stats = [
  { 
    icon: <Users className="w-8 h-8 text-primary-500" />,
    value: '2,500+',
    label: 'Youth Served Annually',
    delay: 0
  },
  { 
    icon: <BookOpen className="w-8 h-8 text-primary-500" />,
    value: '20+',
    label: 'Educational Programs',
    delay: 0.1
  },
  { 
    icon: <Award className="w-8 h-8 text-primary-500" />,
    value: '95%',
    label: 'Graduation Rate',
    delay: 0.2
  },
  { 
    icon: <Heart className="w-8 h-8 text-primary-500" />,
    value: '15,000+',
    label: 'Volunteer Hours',
    delay: 0.3
  }
];

const ImpactStats = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stat.delay }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;