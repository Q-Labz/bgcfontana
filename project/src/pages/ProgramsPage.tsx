import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen, Heart, Users, Palette, Mic, Trophy } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import Card from '../components/common/Card';

const programCategories = [
  {
    icon: <BookOpen size={40} className="text-primary-600" />,
    title: "Academic Success",
    description: "Programs designed to improve academic performance, encourage school attendance, and promote high school graduation.",
    programs: [
      {
        name: "Power Hour",
        description: "Daily homework help and tutoring to ensure academic success.",
        ageGroup: "Ages 6-18"
      },
      {
        name: "STEM Lab",
        description: "Hands-on activities exploring science, technology, engineering, and math concepts.",
        ageGroup: "Ages 8-18"
      },
      {
        name: "Reading Buddies",
        description: "Literacy program pairing younger members with older members or volunteers.",
        ageGroup: "Ages 6-12"
      },
      {
        name: "College Bound",
        description: "College preparation, applications, and scholarship guidance for teens.",
        ageGroup: "Ages 14-18"
      }
    ]
  },
  {
    icon: <Heart size={40} className="text-primary-600" />,
    title: "Healthy Lifestyles",
    description: "Programs promoting physical fitness, good nutrition, and positive decision-making.",
    programs: [
      {
        name: "Triple Play",
        description: "Sports, fitness activities, and nutrition education.",
        ageGroup: "Ages 6-18"
      },
      {
        name: "Cooking Club",
        description: "Learn to prepare healthy meals and snacks.",
        ageGroup: "Ages 8-18"
      },
      {
        name: "Sports Leagues",
        description: "Basketball, soccer, and volleyball leagues teaching teamwork and sportsmanship.",
        ageGroup: "Ages 8-18"
      },
      {
        name: "Wellness Warriors",
        description: "Holistic health program covering physical, emotional, and social wellbeing.",
        ageGroup: "Ages 10-18"
      }
    ]
  },
  {
    icon: <Users size={40} className="text-primary-600" />,
    title: "Character & Leadership",
    description: "Programs fostering leadership skills, community service, and positive character development.",
    programs: [
      {
        name: "Keystone Club",
        description: "Teen leadership group focused on community service and personal growth.",
        ageGroup: "Ages 14-18"
      },
      {
        name: "Torch Club",
        description: "Character development and leadership program for younger members.",
        ageGroup: "Ages 10-13"
      },
      {
        name: "Youth of the Month/Year",
        description: "Recognition program celebrating exemplary club members.",
        ageGroup: "Ages 6-18"
      },
      {
        name: "Community Heroes",
        description: "Service learning projects benefiting the local community.",
        ageGroup: "Ages 8-18"
      }
    ]
  },
  {
    icon: <Palette size={40} className="text-primary-600" />,
    title: "Arts & Creativity",
    description: "Programs encouraging creative expression through visual arts, performing arts, and digital media.",
    programs: [
      {
        name: "Fine Arts Program",
        description: "Drawing, painting, and sculpture classes.",
        ageGroup: "Ages 6-18"
      },
      {
        name: "Digital Arts",
        description: "Photography, graphic design, and digital storytelling.",
        ageGroup: "Ages 10-18"
      },
      {
        name: "Drama Club",
        description: "Theater arts, performance, and production skills.",
        ageGroup: "Ages 8-18"
      },
      {
        name: "Music Makers",
        description: "Instrumental and vocal music instruction and performance opportunities.",
        ageGroup: "Ages 8-18"
      }
    ]
  },
  {
    icon: <Mic size={40} className="text-primary-600" />,
    title: "Teen Programs",
    description: "Specialized programs designed to meet the unique needs and interests of teenagers.",
    programs: [
      {
        name: "Career Launch",
        description: "Career exploration, job readiness, and employment skills.",
        ageGroup: "Ages 13-18"
      },
      {
        name: "Money Matters",
        description: "Financial literacy, budgeting, saving, and investing.",
        ageGroup: "Ages 13-18"
      },
      {
        name: "Teen Center",
        description: "Dedicated space for teens to socialize, study, and participate in age-appropriate activities.",
        ageGroup: "Ages 13-18"
      },
      {
        name: "College Tours",
        description: "Visits to local colleges and universities to explore higher education options.",
        ageGroup: "Ages 14-18"
      }
    ]
  },
  {
    icon: <Trophy size={40} className="text-primary-600" />,
    title: "Summer Programs",
    description: "Full-day summer programs combining fun, learning, and new experiences during school breaks.",
    programs: [
      {
        name: "Summer Brain Gain",
        description: "Academic enrichment to prevent summer learning loss.",
        ageGroup: "Ages 6-18"
      },
      {
        name: "Summer Sports Camp",
        description: "Multi-sport program developing athletic skills and physical fitness.",
        ageGroup: "Ages 8-18"
      },
      {
        name: "Field Trips",
        description: "Weekly excursions to museums, parks, businesses, and other educational destinations.",
        ageGroup: "Ages 6-18"
      },
      {
        name: "Summer Reading Challenge",
        description: "Literacy program encouraging regular reading with incentives and activities.",
        ageGroup: "Ages 6-18"
      }
    ]
  }
];

const ProgramsPage = () => {
  return (
    <>
      <Helmet>
        <title>Programs - Boys & Girls Club of Fontana</title>
        <meta name="description" content="Explore the diverse programs offered by the Boys & Girls Club of Fontana, including academic success, healthy lifestyles, character & leadership, and more." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 min-h-[80vh] flex items-center bg-primary-50">
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-800/90 z-10"></div>
          <img
            src="https://images.pexels.com/photos/8363103/pexels-photo-8363103.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Children at Boys & Girls Club"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Our <span className="text-secondary-400">Programs</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                We offer a wide range of programs designed to inspire and empower young people to reach their full potential as productive, caring, responsible citizens.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Program Areas"
            subtitle="Our programs focus on three priority outcome areas: Academic Success, Healthy Lifestyles, and Character & Leadership."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-primary-50 rounded-lg p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 mb-4">
                <BookOpen size={32} className="text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Academic Success</h3>
              <p className="text-gray-700">
                Programs that help youth graduate from high school with a plan for their future.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-secondary-50 rounded-lg p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary-100 mb-4">
                <Heart size={32} className="text-secondary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Healthy Lifestyles</h3>
              <p className="text-gray-700">
                Programs that develop young people's capacity to live healthfully.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-accent-50 rounded-lg p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent-100 mb-4">
                <Users size={32} className="text-accent-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Character & Leadership</h3>
              <p className="text-gray-700">
                Programs that empower youth to support their community and sustain meaningful relationships.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Detailed Programs */}
      {programCategories.map((category, index) => (
        <section 
          key={index}
          className={`section ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
          id={category.title.toLowerCase().replace(/\s+/g, '-')}
        >
          <div className="container-custom">
            <div className="mb-12 flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 flex-shrink-0">
                {category.icon}
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-center md:text-left">{category.title}</h2>
                <p className="text-lg text-gray-700 max-w-3xl">{category.description}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.programs.map((program, idx) => (
                <Card key={idx} hover className="h-full">
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
                      {program.ageGroup}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{program.name}</h3>
                    <p className="text-gray-600">{program.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ProgramsPage;