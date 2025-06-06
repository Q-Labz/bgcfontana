import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Boys & Girls Club of Fontana</title>
        <meta name="description" content="Learn about the Boys & Girls Club of Fontana's mission, history, team, and impact in our community." />
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
                About <span className="text-secondary-400">Us</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                For over 25 years, the Boys & Girls Club of Fontana has been a cornerstone in our community, providing a safe place for young people to learn and grow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                The mission of the Boys & Girls Club of Fontana is to enable all young people, especially those who need us most, to reach their full potential as productive, caring, responsible citizens.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We provide a safe place to learn and grow, ongoing relationships with caring adult professionals, life-enhancing programs, character development experiences, hope, and opportunity.
              </p>
              <p className="text-lg text-gray-700">
                Our programs are designed to foster a sense of belonging, usefulness, influence, and competence in every child who walks through our doors.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.pexels.com/photos/8363075/pexels-photo-8363075.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Children at the Boys & Girls Club" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our History */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Our History"
            subtitle="A legacy of serving youth in our community for over 25 years."
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex flex-col md:flex-row md:items-center mb-4">
                  <span className="inline-block bg-primary-600 text-white text-xl font-bold rounded-lg px-4 py-2 mb-4 md:mb-0 md:mr-4">1995</span>
                  <h3 className="text-xl font-bold">Our Founding</h3>
                </div>
                <p className="text-gray-700">
                  The Boys & Girls Club of Fontana was founded by a group of dedicated community leaders who recognized the need for safe, supervised after-school programs for youth in Fontana.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex flex-col md:flex-row md:items-center mb-4">
                  <span className="inline-block bg-primary-600 text-white text-xl font-bold rounded-lg px-4 py-2 mb-4 md:mb-0 md:mr-4">2005</span>
                  <h3 className="text-xl font-bold">Expansion of Programs</h3>
                </div>
                <p className="text-gray-700">
                  We expanded our programs to include STEM education, arts, and leadership development, serving over 1,000 youth annually throughout Fontana.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex flex-col md:flex-row md:items-center mb-4">
                  <span className="inline-block bg-primary-600 text-white text-xl font-bold rounded-lg px-4 py-2 mb-4 md:mb-0 md:mr-4">2015</span>
                  <h3 className="text-xl font-bold">New Facility Opening</h3>
                </div>
                <p className="text-gray-700">
                  Our current state-of-the-art facility opened, featuring a computer lab, art studio, gymnasium, and dedicated teen center to better serve the growing needs of our community.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex flex-col md:flex-row md:items-center mb-4">
                  <span className="inline-block bg-primary-600 text-white text-xl font-bold rounded-lg px-4 py-2 mb-4 md:mb-0 md:mr-4">Today</span>
                  <h3 className="text-xl font-bold">Current Impact</h3>
                </div>
                <p className="text-gray-700">
                  Today, we serve over 2,500 youth annually through our various programs, with a focus on academic success, healthy lifestyles, and character & leadership development.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Our Leadership Team"
            subtitle="Meet the dedicated professionals who guide our organization."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Rodriguez",
                title: "Executive Director",
                image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600",
                bio: "Michael has over 15 years of experience in youth development and non-profit leadership."
              },
              {
                name: "Sarah Johnson",
                title: "Program Director",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
                bio: "Sarah oversees all educational and recreational programs, ensuring they meet the needs of our youth."
              },
              {
                name: "David Chen",
                title: "Development Director",
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
                bio: "David leads our fundraising efforts and community partnerships to support our mission."
              },
              {
                name: "Maria Gonzalez",
                title: "Volunteer Coordinator",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600",
                bio: "Maria manages our volunteer program, connecting community members with meaningful service opportunities."
              },
              {
                name: "James Taylor",
                title: "Education Specialist",
                image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1600",
                bio: "James develops our academic success programs and tutoring initiatives."
              },
              {
                name: "Alisha Patel",
                title: "Community Outreach Manager",
                image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
                bio: "Alisha builds relationships with community partners and promotes our programs throughout Fontana."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-4">{member.title}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;