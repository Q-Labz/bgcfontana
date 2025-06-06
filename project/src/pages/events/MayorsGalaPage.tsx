import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CalendarClock, MapPin, Users, Gift } from 'lucide-react';
import Button from '../../components/common/Button';

const MayorsGalaPage = () => {
  return (
    <>
      <Helmet>
        <title>Mayor's Gala - Boys & Girls Club of Fontana</title>
        <meta name="description" content="Join us for an elegant evening celebrating our impact and raising funds for our programs at the Boys & Girls Club of Fontana Mayor's Gala." />
      </Helmet>

      <div className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-800/90 z-10"></div>
            <img
              src="https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Mayor's Gala"
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
                Mayor's Gala
              </h1>
              <p className="text-xl text-white/90 mb-8">
                An elegant evening celebrating our impact and raising funds for our programs.
              </p>
              <Button variant="secondary" size="lg">
                Purchase Tickets
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
                  <p className="text-gray-600">October 25, 2025</p>
                  <p className="text-gray-600">6:00 PM - 10:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-primary-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Location</h3>
                  <p className="text-gray-600">Spaggi's Event Center</p>
                  <p className="text-gray-600">16880 Seville Ave., Fontana CA 92335</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Gift className="w-6 h-6 text-primary-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Attire</h3>
                  <p className="text-gray-600">Black Tie Optional</p>
                  <p className="text-gray-600">Formal Evening Attire</p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">About the Event</h2>
              <p className="text-gray-600 mb-6">
                The Mayor's Gala is our most prestigious annual fundraising event, bringing together community leaders, supporters, and friends for an elegant evening of celebration and giving. Join us as we honor those who have made significant contributions to our mission and raise vital funds for our programs.
              </p>

              <h3 className="text-xl font-bold mb-4">Evening Schedule</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="font-bold w-24">6:00 PM</span>
                  <span className="text-gray-600">Cocktail Reception & Silent Auction</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold w-24">7:00 PM</span>
                  <span className="text-gray-600">Welcome & Dinner Service</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold w-24">8:00 PM</span>
                  <span className="text-gray-600">Program & Awards</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold w-24">9:00 PM</span>
                  <span className="text-gray-600">Dancing & Entertainment</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold mb-4">Ticket Information</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
                <li>Individual Ticket: $200</li>
                <li>Table of 10: $1,800</li>
                <li>VIP Table of 10: $2,500 (Premium seating & recognition)</li>
              </ul>

              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Purchase Tickets</h3>
                <p className="text-gray-600 mb-6">
                  Secure your place at this year's Mayor's Gala. Early bird pricing available until September 25, 2025.
                </p>
                <Button variant="primary" size="lg">
                  Purchase Tickets
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MayorsGalaPage;