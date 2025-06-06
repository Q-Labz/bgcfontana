import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CalendarClock, MapPin, Users, Gift } from 'lucide-react';
import Button from '../../components/common/Button';

const BackToSchoolDrivePage = () => {
  return (
    <>
      <Helmet>
        <title>Back to School Drive - Boys & Girls Club of Fontana</title>
        <meta name="description" content="Help make a difference in a child's education by participating in our Back to School Drive at the Boys & Girls Club of Fontana." />
      </Helmet>

      <div className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-800/90 z-10"></div>
            <img
              src="https://images.pexels.com/photos/8617752/pexels-photo-8617752.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Back to School Drive"
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
                Back to School Drive
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Help us collect school supplies for children in need as they prepare for the new academic year.
              </p>
              <Button variant="secondary" size="lg">
                Get Involved
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
                  <p className="text-gray-600">August 5, 2025</p>
                  <p className="text-gray-600">10:00 AM - 3:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-primary-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Location</h3>
                  <p className="text-gray-600">Boys & Girls Club of Fontana</p>
                  <p className="text-gray-600">7750 Magnolia Ave, Fontana, CA 92336</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Users className="w-6 h-6 text-primary-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Goal</h3>
                  <p className="text-gray-600">Support 500+ students</p>
                  <p className="text-gray-600">with essential supplies</p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">About the Event</h2>
              <p className="text-gray-600 mb-6">
                Our annual Back to School Drive ensures that every child starts the school year prepared and confident. Your donations of school supplies help remove barriers to education and set students up for success.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Needed Supplies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-bold mb-2">Basic Supplies</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Notebooks and paper</li>
                    <li>Pencils and pens</li>
                    <li>Erasers and sharpeners</li>
                    <li>Folders and binders</li>
                    <li>Rulers and scissors</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Additional Items</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Backpacks</li>
                    <li>Calculators</li>
                    <li>USB drives</li>
                    <li>Art supplies</li>
                    <li>Lunch boxes</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">How to Help</h3>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Gift className="w-6 h-6 text-primary-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-bold mb-1">Donate Supplies</h4>
                    <p className="text-gray-600">Drop off new school supplies at our facility during the event.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Gift className="w-6 h-6 text-primary-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-bold mb-1">Make a Monetary Donation</h4>
                    <p className="text-gray-600">Can't make it to the drive? Make a financial contribution to help us purchase supplies.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Gift className="w-6 h-6 text-primary-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-bold mb-1">Volunteer</h4>
                    <p className="text-gray-600">Help us sort and distribute supplies during the event.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Get Involved</h3>
                <p className="text-gray-600 mb-6">
                  Ready to make a difference? Register to donate supplies, volunteer, or make a monetary contribution.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="https://checkout.square.site/merchant/5BAJDNY82TSXF/checkout/W72FSLSZT73LYS3YCSLYR6KB" variant="primary" size="lg">
                    Donate Now
                  </Button>
                  <Button variant="outline" size="lg">
                    Volunteer Sign-up
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BackToSchoolDrivePage;