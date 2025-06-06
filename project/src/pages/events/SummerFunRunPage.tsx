import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CalendarClock, MapPin, Users, DollarSign } from 'lucide-react';
import Button from '../../components/common/Button';

const SummerFunRunPage = () => {
  return (
    <>
      <Helmet>
        <title>Summer Fun Run - Boys & Girls Club of Fontana</title>
        <meta name="description" content="Join us for the Summer Fun Run, a family-friendly 5K run/walk to raise funds for our summer programs at the Boys & Girls Club of Fontana." />
      </Helmet>

      <div className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-800/90 z-10"></div>
            <img
              src="https://images.pexels.com/photos/2403303/pexels-photo-2403303.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Summer Fun Run"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Summer Fun Run
              </h1>
              <p className="text-xl text-white/90 mb-8">
                A family-friendly 5K run/walk to raise funds for our summer programs.
              </p>
              <Button variant="secondary" size="lg">
                Register Now
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-start">
                <CalendarClock className="w-6 h-6 text-primary-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Date & Time</h3>
                  <p className="text-gray-600">July 22, 2025</p>
                  <p className="text-gray-600">8:00 AM - 11:00 AM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-primary-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Location</h3>
                  <p className="text-gray-600">Fontana City Park</p>
                  <p className="text-gray-600">15556 Summit Avenue, Fontana, CA 92336</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <DollarSign className="w-6 h-6 text-primary-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Registration Fee</h3>
                  <p className="text-gray-600">Adults: $30</p>
                  <p className="text-gray-600">Children (12 & under): $15</p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">About the Event</h2>
              <p className="text-gray-600 mb-6">
                Join us for our annual Summer Fun Run, a community event that brings together runners and walkers of all ages to support our summer programs. This family-friendly event includes a 5K run/walk, kids' dash, and post-race celebration.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Event Schedule</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="font-bold w-24">7:00 AM</span>
                  <span className="text-gray-600">Check-in & Registration Opens</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold w-24">8:00 AM</span>
                  <span className="text-gray-600">5K Run/Walk Begins</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold w-24">9:30 AM</span>
                  <span className="text-gray-600">Kids' Dash (Ages 5-12)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold w-24">10:00 AM</span>
                  <span className="text-gray-600">Awards Ceremony & Celebration</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold mb-4">What's Included</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
                <li>Official event t-shirt</li>
                <li>Race bib with timing chip</li>
                <li>Finisher's medal</li>
                <li>Post-race refreshments</li>
                <li>Access to post-race celebration</li>
              </ul>

              <h3 className="text-xl font-bold mb-4">Awards</h3>
              <p className="text-gray-600 mb-8">
                Awards will be presented to the top three male and female finishers in each age group, as well as overall winners.
              </p>

              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Registration</h3>
                <p className="text-gray-600 mb-6">
                  Register early to secure your spot and receive an early bird discount. Price increases by $5 after July 1, 2025.
                </p>
                <Button variant="primary" size="lg">
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SummerFunRunPage;