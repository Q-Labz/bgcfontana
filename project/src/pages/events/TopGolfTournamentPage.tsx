import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CalendarClock, MapPin, Users, Trophy } from 'lucide-react';
import Button from '../../components/common/Button';

const TopGolfTournamentPage = () => {
  return (
    <>
      <Helmet>
        <title>TopGolf Tournament - Boys & Girls Club of Fontana</title>
        <meta name="description" content="Join us for a day of fun and competition at TopGolf while supporting the Boys & Girls Club of Fontana." />
      </Helmet>

      <div className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-800/90 z-10"></div>
            <img
              src="https://images.pexels.com/photos/6646067/pexels-photo-6646067.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="TopGolf Tournament"
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
                Driving for Great Futures TopGolf Tournament
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Join us for a day of fun and competition at TopGolf while supporting our mission.
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
                  <p className="text-gray-600">June 19, 2025</p>
                  <p className="text-gray-600">1:00 PM - 5:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-primary-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Location</h3>
                  <p className="text-gray-600">TopGolf Ontario</p>
                  <p className="text-gray-600">123 Golf Center Dr, Ontario, CA 91764</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Trophy className="w-6 h-6 text-primary-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Format</h3>
                  <p className="text-gray-600">Team Competition</p>
                  <p className="text-gray-600">6 Players per Bay</p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">About the Event</h2>
              <p className="text-gray-600 mb-6">
                The Driving for Great Futures TopGolf Tournament is a unique fundraising event that combines friendly competition with networking and fun. No golf experience necessary - TopGolf's scoring system makes it enjoyable for players of all skill levels.
              </p>

              <h3 className="text-xl font-bold mb-4">Event Schedule</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="font-bold w-24">1:00 PM</span>
                  <span className="text-gray-600">Check-in & Welcome</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold w-24">1:30 PM</span>
                  <span className="text-gray-600">Tournament Begins</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold w-24">3:30 PM</span>
                  <span className="text-gray-600">Awards & Reception</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold w-24">5:00 PM</span>
                  <span className="text-gray-600">Event Concludes</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold mb-4">What's Included</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
                <li>3 hours of TopGolf play</li>
                <li>Lunch and beverages</li>
                <li>Tournament prizes</li>
                <li>Event swag bag</li>
                <li>Networking opportunities</li>
              </ul>

              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Registration</h3>
                <p className="text-gray-600 mb-6">
                  Secure your spot at this year's tournament. Early bird pricing available until May 19, 2025.
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

export default TopGolfTournamentPage;