import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CalendarClock, MapPin, Users, DollarSign } from 'lucide-react';
import Button from '../../components/common/Button';

const CharityGalaPage = () => {
  return (
    <>
      <Helmet>
        <title>Annual Charity Gala - Boys & Girls Club of Fontana</title>
        <meta name="description" content="Join us for an elegant evening of dinner, dancing, and fundraising to support our youth programs at the Boys & Girls Club of Fontana Annual Charity Gala." />
      </Helmet>

      <div className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-800/90 z-10"></div>
            <img
              src="https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Charity Gala"
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
                Annual Charity Gala
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Join us for an elegant evening of dinner, dancing, and fundraising to support our youth programs.
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
                  <p className="text-gray-600">June 15, 2025</p>
                  <p className="text-gray-600">6:30 PM - 10:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-primary-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Location</h3>
                  <p className="text-gray-600">Grand Ballroom</p>
                  <p className="text-gray-600">123 Main Street, Fontana, CA 92335</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <DollarSign className="w-6 h-6 text-primary-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Ticket Price</h3>
                  <p className="text-gray-600">Individual: $150</p>
                  <p className="text-gray-600">Table of 10: $1,400</p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">About the Event</h2>
              <p className="text-gray-600 mb-6">
                The Annual Charity Gala is our premier fundraising event of the year, bringing together community leaders, supporters, and friends for an elegant evening of celebration and giving. Your participation helps us continue providing essential programs and services to the youth in our community.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Evening Schedule</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="font-bold w-24">6:30 PM</span>
                  <span className="text-gray-600">Reception & Silent Auction</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold w-24">7:30 PM</span>
                  <span className="text-gray-600">Dinner Service</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold w-24">8:30 PM</span>
                  <span className="text-gray-600">Program & Live Auction</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold w-24">9:30 PM</span>
                  <span className="text-gray-600">Dancing & Entertainment</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold mb-4">Attire</h3>
              <p className="text-gray-600 mb-8">Black Tie Optional</p>

              <h3 className="text-xl font-bold mb-4">Sponsorship Opportunities</h3>
              <p className="text-gray-600 mb-4">
                Various sponsorship levels are available for businesses and individuals who wish to support our mission while gaining visibility at this prestigious event.
              </p>
              <Button to="/ways-to-give" variant="outline" className="mb-8">
                View Sponsorship Packages
              </Button>

              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Registration</h3>
                <p className="text-gray-600 mb-6">
                  Secure your spot at this year's Charity Gala. Early bird pricing available until April 15, 2025.
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

export default CharityGalaPage;