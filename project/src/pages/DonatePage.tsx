import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { DollarSign, Calendar, Gift, Briefcase, HeartHandshake } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

const amounts = [25, 50, 100, 250, 500, 1000];

const DonationForm = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  
  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };
  
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };
  
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-6">Make Your Donation</h3>
      
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Select Frequency
        </label>
        <div className="flex space-x-4">
          <button
            type="button"
            className={`flex-1 py-3 px-4 rounded-md border ${
              frequency === 'one-time' 
                ? 'bg-primary-50 border-primary-500 text-primary-700' 
                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setFrequency('one-time')}
          >
            One-Time
          </button>
          <button
            type="button"
            className={`flex-1 py-3 px-4 rounded-md border ${
              frequency === 'monthly' 
                ? 'bg-primary-50 border-primary-500 text-primary-700' 
                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setFrequency('monthly')}
          >
            Monthly
          </button>
        </div>
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Donation Amount
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
          {amounts.map((amount) => (
            <button
              key={amount}
              type="button"
              className={`py-3 rounded-md border ${
                selectedAmount === amount 
                  ? 'bg-primary-50 border-primary-500 text-primary-700' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => handleAmountClick(amount)}
            >
              ${amount}
            </button>
          ))}
        </div>
        
        <div>
          <label className="block text-gray-700 text-sm mb-2">
            Or enter a custom amount
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <DollarSign size={16} className="text-gray-500" />
            </div>
            <input
              type="text"
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
              placeholder="Custom Amount"
              value={customAmount}
              onChange={handleCustomAmountChange}
            />
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Personal Information
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
              placeholder="First Name"
            />
          </div>
          <div>
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
              placeholder="Last Name"
            />
          </div>
          <div className="sm:col-span-2">
            <input
              type="email"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
              placeholder="Email Address"
            />
          </div>
        </div>
      </div>
      
      <Button variant="primary" size="lg" fullWidth type="submit">
        {frequency === 'one-time' ? 'Donate Now' : 'Donate Monthly'}
      </Button>
    </div>
  );
};

const DonatePage = () => {
  return (
    <>
      <Helmet>
        <title>Donate - Boys & Girls Club of Fontana</title>
        <meta name="description" content="Support the Boys & Girls Club of Fontana through donations. Your contribution helps provide essential programs and services to the youth in our community." />
      </Helmet>
      
      <div className="pt-24">
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
                  Support Our <span className="text-secondary-400">Mission</span>
                </h1>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                  Your generous donations help us provide vital programs and services to the youth in our community who need it most.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Donation Options Section */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <SectionHeader
                  title="Make a Difference Today"
                  subtitle="Your support helps us provide safe spaces, mentorship, and enriching programs for the youth in our community."
                  centered={false}
                />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-4">Your Impact</h3>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-primary-600">
                        <DollarSign size={20} />
                      </div>
                      <div>
                        <strong className="text-gray-800 font-medium">$25</strong>
                        <p className="text-gray-600">provides a week of after-school programming for one child</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-primary-600">
                        <DollarSign size={20} />
                      </div>
                      <div>
                        <strong className="text-gray-800 font-medium">$100</strong>
                        <p className="text-gray-600">provides a month of academic support and mentoring</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-primary-600">
                        <DollarSign size={20} />
                      </div>
                      <div>
                        <strong className="text-gray-800 font-medium">$500</strong>
                        <p className="text-gray-600">supports a full summer program for one child</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-primary-600">
                        <DollarSign size={20} />
                      </div>
                      <div>
                        <strong className="text-gray-800 font-medium">$1,000</strong>
                        <p className="text-gray-600">funds a year-long scholarship for a child in need</p>
                      </div>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <div>
                <DonationForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* Other Ways to Give */}
        <section className="section bg-white">
          <div className="container-custom">
            <SectionHeader
              title="Other Ways to Give"
              subtitle="There are many ways you can support our mission beyond monetary donations."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="h-full flex flex-col items-center text-center p-6">
                <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="text-secondary-600" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-3">Volunteer Your Time</h3>
                <p className="text-gray-600 mb-5 flex-grow">Share your skills and passion with our youth as a volunteer or mentor.</p>
                <Button to="/contact" variant="outline">Learn More</Button>
              </Card>
              
              <Card className="h-full flex flex-col items-center text-center p-6">
                <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Gift className="text-secondary-600" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-3">In-Kind Donations</h3>
                <p className="text-gray-600 mb-5 flex-grow">Donate supplies, equipment, or services that support our programs.</p>
                <Button to="/contact" variant="outline">Learn More</Button>
              </Card>
              
              <Card className="h-full flex flex-col items-center text-center p-6">
                <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Briefcase className="text-secondary-600" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-3">Corporate Sponsorships</h3>
                <p className="text-gray-600 mb-5 flex-grow">Partner with us as a corporate sponsor to make a significant impact.</p>
                <Button to="/contact" variant="outline">Learn More</Button>
              </Card>
              
              <Card className="h-full flex flex-col items-center text-center p-6">
                <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <HeartHandshake className="text-secondary-600" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-3">Planned Giving</h3>
                <p className="text-gray-600 mb-5 flex-grow">Leave a lasting legacy through estate planning and planned giving.</p>
                <Button to="/contact" variant="outline">Learn More</Button>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DonatePage;