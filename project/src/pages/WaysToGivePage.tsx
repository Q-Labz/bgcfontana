import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Users, Gift, Heart } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

const sponsorshipLevels = [
  {
    name: "Platinum Sponsorship",
    amount: "30,000",
    benefits: [
      "Driving for Great Futures TopGolf Tournament - 4 bays",
      "BGCF Golf Classic - 4 foursomes",
      "Mayor's Gala - 10 tickets"
    ],
    color: "bg-gray-100"
  },
  {
    name: "Gold Sponsorship",
    amount: "20,000",
    benefits: [
      "Driving for Great Futures TopGolf Tournament - 3 bays",
      "BGCF Golf Classic - 3 foursomes",
      "Mayor's Gala - 8 tickets"
    ],
    color: "bg-yellow-50"
  },
  {
    name: "Silver Sponsorship",
    amount: "10,000",
    benefits: [
      "Driving for Great Futures TopGolf Tournament - 2 bays",
      "BGCF Golf Classic - 2 foursomes",
      "Mayor's Gala - 6 tickets"
    ],
    color: "bg-gray-50"
  },
  {
    name: "Bronze Sponsorship",
    amount: "5,000",
    benefits: [
      "Driving for Great Futures TopGolf Tournament - 1 bay",
      "BGCF Golf Classic - 1 foursome",
      "Mayor's Gala - 4 tickets"
    ],
    color: "bg-orange-50"
  },
  {
    name: "President's Club",
    amount: "3,000",
    benefits: [
      "Driving for Great Futures TopGolf Tournament - 1 bay",
      "BGCF Golf Classic - 1 foursome",
      "Mayor's Gala - 2 tickets"
    ],
    color: "bg-blue-50"
  }
];

const events = [
  {
    title: "TopGolf Tournament",
    date: "June 19, 2025",
    location: "TopGolf",
    description: "Join us for a day of fun and competition at TopGolf while supporting our mission.",
    icon: <Trophy className="w-6 h-6" />
  },
  {
    title: "Golf Classic",
    date: "August 25, 2025",
    location: "Golf Course",
    description: "Our annual golf tournament bringing together supporters for a great cause.",
    icon: <Calendar className="w-6 h-6" />
  },
  {
    title: "Mayor's Gala",
    date: "October 25, 2025",
    location: "Spaggi's Event Center",
    address: "16880 Seville Ave., Fontana CA 92335",
    description: "An elegant evening celebrating our impact and raising funds for our programs.",
    icon: <Users className="w-6 h-6" />
  }
];

const WaysToGivePage = () => {
  return (
    <>
      <Helmet>
        <title>Ways to Give - Boys & Girls Club of Fontana</title>
        <meta name="description" content="Discover the various ways you can support the Boys & Girls Club of Fontana through sponsorships, events, and donations." />
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
                Great Futures <span className="text-secondary-400">Sponsorship Package</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                Join us in building great futures for the youth of Fontana through our comprehensive sponsorship packages.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donation CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-primary-50 rounded-lg p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4">
                <Gift className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">One-Time Gift</h3>
              <p className="text-gray-600 mb-6">Make an immediate impact with a one-time donation to support our programs.</p>
              <Button href="https://checkout.square.site/merchant/5BAJDNY82TSXF/checkout/W72FSLSZT73LYS3YCSLYR6KB" variant="primary">Donate Now</Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-secondary-50 rounded-lg p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-100 mb-4">
                <Calendar className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Monthly Giving</h3>
              <p className="text-gray-600 mb-6">Provide sustained support through monthly donations to help us plan for the future.</p>
              <Button href="https://checkout.square.site/merchant/5BAJDNY82TSXF/checkout/W72FSLSZT73LYS3YCSLYR6KB" variant="secondary">Give Monthly</Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-accent-50 rounded-lg p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 mb-4">
                <Heart className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Legacy Giving</h3>
              <p className="text-gray-600 mb-6">Create a lasting impact through planned giving and estate donations.</p>
              <Button to="/contact" variant="accent">Learn More</Button>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Valued Sponsors Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-primary-700">To Our Valued Sponsors,</h2>
              <p className="text-gray-700 mb-4">
                Thank you for being a vital part of our journey to build Great Futures. Your continued support helps uplift, empower, and create lasting opportunities for the youth in our community.
              </p>
              <p className="text-gray-700 mb-4">
                As we launch our exciting trio of 2025 fundraising events, we’re reminded that none of this would be possible without the generosity and commitment of sponsors like you. These events are more than just gatherings — they are celebrations of progress, possibility, and our shared dedication to brighter tomorrows.
              </p>
              <p className="text-gray-700">
                We are thrilled to invite you to be part of something truly meaningful in the year ahead. Your sponsorship enables the Boys & Girls Club of Fontana to continue offering life-changing programs, safe spaces, and caring mentors to hundreds of young people. As a valued community leader, we hope you’ll join us in supporting our 2025 signature events:
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-primary-50 p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary-800">Our 2025 Signature Events:</h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong className="text-primary-700">Driving for Great Futures – TOPGolf Fundraiser</strong><br />
                  Thursday, June 19, 2025 – TOPGolf Ontario<br />
                  <em className="text-sm">A fun and energetic evening of golf, networking, and giving back to local youth programs.</em>
                </li>
                <li>
                  <strong className="text-primary-700">Boys & Girls Club Golf Classic</strong><br />
                  Monday, August 25, 2025 – Sierra Lakes Golf Club<br />
                  <em className="text-sm">Our tournament, bringing together business and civic leaders for a day of golf and philanthropy.</em>
                </li>
                <li>
                  <strong className="text-primary-700">The Mayor’s Great Futures Gala</strong><br />
                  Saturday, October 25, 2025 – Spaggi’s Event Center, Fontana<br />
                  <em className="text-sm">A memorable evening of entertainment, and inspiring stories of youth success.</em>
                </li>
              </ul>
              <p className="mt-6 text-gray-700">
                Your sponsorship will support all three events and includes promotional visibility through event signage, digital media, and printed materials. We offer tiered sponsorship packages with exclusive benefits, each designed to help your brand shine while making a lasting impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sponsorship Levels */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Sponsorship Opportunities"
            subtitle="Choose the level of impact you want to make in our community"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsorshipLevels.map((level, index) => (
              <motion.div
                key={level.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full ${level.color}`}>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">{level.name}</h3>
                    <div className="text-3xl font-bold text-primary-600 mb-6">
                      ${level.amount}
                    </div>
                    <ul className="space-y-3 mb-6">
                      {level.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <Gift className="w-5 h-5 text-primary-600 mr-2 mt-1" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    {level.name === "President's Club" ? (
                      <Button href="https://square.link/u/a1EkcTJp" variant="primary" fullWidth>
                        Become a Sponsor
                      </Button>
                    ) : level.name === "Platinum Sponsorship" ? (
                      <Button href="https://square.link/u/JDogZB9t" variant="primary" fullWidth>
                        Become a Sponsor
                      </Button>
                    ) : level.name === "Gold Sponsorship" ? (
                      <Button href="https://square.link/u/lhmTL12v" variant="primary" fullWidth>
                        Become a Sponsor
                      </Button>
                    ) : level.name === "Bronze Sponsorship" ? (
                      <Button href="https://square.link/u/vsGWUlTW" variant="primary" fullWidth>
                        Become a Sponsor
                      </Button>
                    ) : level.name === "Silver Sponsorship" ? (
                      <Button href="https://square.link/u/paU2zh9z" variant="primary" fullWidth>
                        Become a Sponsor
                      </Button>
                    ) : null}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Featured Events"
            subtitle="Join us at these upcoming fundraising events"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="p-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                      <div className="text-primary-600">
                        {event.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-2">{event.date}</p>
                    <p className="text-gray-600 mb-2">{event.location}</p>
                    {event.address && (
                      <p className="text-gray-600 mb-2">{event.address}</p>
                    )}
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us to learn more about our sponsorship opportunities and how you can support our mission.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4">
              <Button href="https://checkout.square.site/merchant/5BAJDNY82TSXF/checkout/W72FSLSZT73LYS3YCSLYR6KB" variant="outline" size="lg">
                Make a Donation
              </Button>
            </div>
            <div className="mt-8 text-gray-600">
              <p>For more information:</p>
              <p className="font-medium">Phone: 909-822-4988 #7</p>
              <p className="font-medium">Email: BGCFNTNA@CS.COM or CEOBGCF@GMAIL.COM</p>
              <p className="mt-4 text-sm">All donations are tax deductible, and we welcome donations in any amount.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WaysToGivePage;