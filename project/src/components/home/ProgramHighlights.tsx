import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Palette, BookOpen, Users, Mic, Heart } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';

const programs = [
  {
    icon: <BookOpen size={36} className="text-primary-600" />,
    title: "Academic Success",
    description: "After-school learning programs that improve academic performance through homework help, tutoring, and STEM activities.",
    delay: 0
  },
  {
    icon: <Heart size={36} className="text-primary-600" />,
    title: "Healthy Lifestyles",
    description: "Sports, nutrition education, and wellness programs that promote healthy habits and physical fitness.",
    delay: 0.1
  },
  {
    icon: <Users size={36} className="text-primary-600" />,
    title: "Character & Leadership",
    description: "Programs that foster leadership skills, community service, and positive character development.",
    delay: 0.2
  },
  {
    icon: <Palette size={36} className="text-primary-600" />,
    title: "Arts & Creativity",
    description: "Visual arts, performing arts, and creative writing programs that inspire self-expression and imagination.",
    delay: 0.3
  },
  {
    icon: <Mic size={36} className="text-primary-600" />,
    title: "Teen Programs",
    description: "Career development, college preparation, and civic engagement programs designed specifically for teens.",
    delay: 0.4
  }
];

const ProgramHighlights = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="section bg-gray-50\" ref={containerRef}>
      <div className="container-custom">
        <SectionHeader
          title="Our Programs"
          subtitle="We offer diverse programs designed to inspire and empower young people to reach their full potential."
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6"
          >
            <Button to="/programs" variant="outline">
              View All Programs
            </Button>
          </motion.div>
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: program.delay }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;