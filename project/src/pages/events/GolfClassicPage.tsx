import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CalendarClock, MapPin, Users, Trophy } from 'lucide-react';
import Button from '../../components/common/Button';

const GolfClassicPage = () => {
  return (
    <>
      <Helmet>
        <title>Golf Classic - Boys & Girls Club of Fontana</title>
        <meta name="description" content="Join us for the annual BGCF Golf Classic, bringing together supporters for a great cause." />
      </Helmet>

      <div className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-800/90 z-10"></div>
            <img
              src="https://images.pexels.com/photos/424725/pexels-photo-424725.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Golf Classic"
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
                BGCF Golf Classic
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Our annual golf tournament bringing together supporters for a great cause.
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
                  <p className="text-gray-600">August 25, 2025</p>
                  <p className="text-gray-600">8:00 AM - 5:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-primary-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Location</h3>
                  <p className="text-gray-600">Sierra Lakes Golf Club</p>
                  <p className="text-gray-600">16600 Clubhouse Dr, Fontana, CA 92336</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Trophy className="w-6 h-6 text-primary-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Format</h3>
                  <p className="text-gray-600">4-Person Scramble</p>
                  <p className="text-gray-600">Shotgun Start</p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">About the Event</h2>
              <p className="text-gray-600 mb-6">
                The BGCF Golf Classic is our signature golf event, featuring a day of friendly competition, networking, and fundraising to support our youth programs. Join us for 18 holes of golf, contests, prizes, and more.
              </p>

              <h3 className="text-xl font-bold mb-4">Event Schedule</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="font-bold w-24">7:00 AM</span>
                  <span className="text-gray-600">Registration & Breakfast</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold w-24">8:00 AM</span>
                  <span className="text-gray-600">Shotgun Start</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold w-24">1:00 PM</span>
                  <span className="text-gray-600">Lunch & Awards</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold w-24">2:30 PM</span>
                  <span className="text-gray-600">Silent Auction</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold mb-4">What's Included</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
                <li>18 holes of golf with cart</li>
                <li>Breakfast and lunch</li>
                <li>Tournament gift package</li>
                <li>On-course contests</li>
                <li>Awards ceremony</li>
                <li>Silent auction access</li>
              </ul>

              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Registration</h3>
                <p className="text-gray-600 mb-6">
                  Register your foursome today. Early bird pricing available until July 25, 2025.
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

export default GolfClassicPage;