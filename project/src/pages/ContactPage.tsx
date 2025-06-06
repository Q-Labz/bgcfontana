import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Button from '../components/common/Button';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Boys & Girls Club of Fontana</title>
        <meta name="description" content="Contact the Boys & Girls Club of Fontana. We're here to answer your questions about our programs, volunteering opportunities, and how you can support our mission." />
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
                Contact <span className="text-secondary-400">Us</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                We'd love to hear from you. Reach out with questions about our programs, volunteering opportunities, or how you can support our mission.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Information & Form */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <select
                    id="subject"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                    required
                  >
                    <option value="">Please select...</option>
                    <option value="programs">Programs Information</option>
                    <option value="volunteering">Volunteering</option>
                    <option value="donation">Donations</option>
                    <option value="events">Events</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" variant="primary" size="lg">
                  Send Message
                </Button>
              </form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-3 mr-4">
                      <MapPin className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Address</h3>
                      <p className="text-gray-700">
                        7750 Magnolia Ave<br />
                        Fontana, CA 92336
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-3 mr-4">
                      <Phone className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Phone</h3>
                      <p className="text-gray-700">
                        <a href="tel:+19095551234" className="hover:text-primary-600 transition-colors">
                          (909) 555-1234
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-3 mr-4">
                      <Mail className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <p className="text-gray-700">
                        <a href="mailto:info@bgcfontana.org" className="hover:text-primary-600 transition-colors">
                          info@bgcfontana.org
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-3 mr-4">
                      <Clock className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Hours of Operation</h3>
                      <p className="text-gray-700">
                        Monday - Friday: 2:00 PM - 7:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        *Extended hours during school breaks and summer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden h-96">
                <iframe
                  title="Boys & Girls Club of Fontana Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26525.12923980369!2d-117.45643389877636!3d34.09813336435022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c34b0f4d0684a1%3A0xace229be315dd3f3!2sFontana%2C%20CA!5e0!3m2!1sen!2sus!4v1695753383881!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How can I register my child for programs?",
                  answer: "You can register your child by visiting our facility during operating hours, or by downloading the registration form from our website and bringing it in completed. A one-time membership fee applies, but financial assistance is available."
                },
                {
                  question: "What ages do you serve?",
                  answer: "Our programs are designed for youth ages 6-18. We have specific programs tailored to different age groups: 6-9, 10-12, and 13-18."
                },
                {
                  question: "Do you provide transportation?",
                  answer: "We offer limited transportation from select local schools to our facility. Please contact us for more information about transportation availability from your child's school."
                },
                {
                  question: "How can I volunteer?",
                  answer: "We welcome volunteers! Please fill out our volunteer application form online or in person. All volunteers must pass a background check and attend an orientation session."
                },
                {
                  question: "What is the cost to attend?",
                  answer: "Our annual membership fee is $30 per child, with discounts available for multiple children from the same family. Financial assistance is available to ensure no child is turned away due to inability to pay."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold mb-3">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;