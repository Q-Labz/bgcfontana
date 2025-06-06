import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CalendarClock, MapPin, Users, Filter, Search } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

// Sample events data
const eventsData = [
  {
    id: 1,
    title: 'Annual Charity Gala',
    category: 'fundraiser',
    date: 'June 15, 2025',
    time: '6:30 PM - 10:00 PM',
    location: 'Grand Ballroom, Fontana',
    description: 'Join us for an elegant evening of dinner, dancing, and fundraising to support our youth programs.',
    image: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    attendees: 250,
    featured: true
  },
  {
    id: 2,
    title: 'Summer Fun Run',
    category: 'community',
    date: 'July 22, 2025',
    time: '8:00 AM - 11:00 AM',
    location: 'Fontana City Park',
    description: 'A family-friendly 5K run/walk to raise funds for our summer programs.',
    image: 'https://images.pexels.com/photos/2403303/pexels-photo-2403303.jpeg?auto=compress&cs=tinysrgb&w=1600',
    attendees: 150,
    featured: true
  },
  {
    id: 3,
    title: 'Back to School Drive',
    category: 'community',
    date: 'August 5, 2025',
    time: '10:00 AM - 3:00 PM',
    location: 'Boys & Girls Club Fontana',
    description: 'Help us collect school supplies for children in need as they prepare for the new academic year.',
    image: 'https://images.pexels.com/photos/8617752/pexels-photo-8617752.jpeg?auto=compress&cs=tinysrgb&w=1600',
    attendees: 100,
    featured: true
  },
  {
    id: 4,
    title: 'Teen Career Workshop',
    category: 'education',
    date: 'September 12, 2025',
    time: '3:30 PM - 6:00 PM',
    location: 'Boys & Girls Club Fontana',
    description: 'A workshop for teens to explore career options, practice interview skills, and learn about college applications.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1600',
    attendees: 75,
    featured: false
  },
  {
    id: 5,
    title: 'Holiday Toy Drive',
    category: 'fundraiser',
    date: 'December 1-15, 2025',
    time: '9:00 AM - 5:00 PM (Daily)',
    location: 'Boys & Girls Club Fontana',
    description: 'Help make the holidays special for children in need by donating new, unwrapped toys.',
    image: 'https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&w=1600',
    attendees: 200,
    featured: false
  },
  {
    id: 6,
    title: 'Parent Information Night',
    category: 'education',
    date: 'October 8, 2025',
    time: '6:00 PM - 8:00 PM',
    location: 'Boys & Girls Club Fontana',
    description: 'Learn about our programs, meet our staff, and discover how we can support your child\'s development.',
    image: 'https://images.pexels.com/photos/7946426/pexels-photo-7946426.jpeg?auto=compress&cs=tinysrgb&w=1600',
    attendees: 50,
    featured: false
  }
];

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'All Events' },
    { value: 'fundraiser', label: 'Fundraisers' },
    { value: 'community', label: 'Community Events' },
    { value: 'education', label: 'Educational Events' }
  ];

  const filteredEvents = eventsData.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Get featured events
  const featuredEvents = eventsData.filter(event => event.featured);

  return (
    <>
      <Helmet>
        <title>Events - Boys & Girls Club of Fontana</title>
        <meta name="description" content="Join us at our upcoming events to support the Boys & Girls Club of Fontana. Find fundraisers, community events, and educational opportunities." />
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
                  Events & <span className="text-secondary-400">Opportunities</span>
                </h1>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                  Join us at our upcoming events to support our mission, connect with our community, and make a difference in the lives of youth in Fontana.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Featured Events */}
        {featuredEvents.length > 0 && (
          <section className="section bg-white">
            <div className="container-custom">
              <SectionHeader
                title="Featured Events"
                subtitle="Don't miss these upcoming special events!"
              />
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {featuredEvents.map((event) => (
                  <Card key={event.id} hover>
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="inline-block px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm font-medium mb-4">
                        {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                      
                      <div className="flex items-center text-gray-600 mb-2">
                        <CalendarClock size={16} className="mr-2" />
                        <span>{event.date} • {event.time}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin size={16} className="mr-2" />
                        <span>{event.location}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-4">
                        <Users size={16} className="mr-2" />
                        <span>Expected attendees: {event.attendees}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-6">{event.description}</p>
                      
                      <Button to={`/events/${event.id}`} variant="primary" fullWidth>
                        Register Now
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Events List */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <SectionHeader
              title="All Events"
              subtitle="Browse our calendar of upcoming events and find ways to get involved."
            />
            
            {/* Filters */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4 w-full md:w-auto">
                <Filter size={20} className="text-gray-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="p-2 rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="relative w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 p-2 w-full md:w-64 rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                />
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            {/* Events Grid */}
            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event) => (
                  <Card key={event.id} hover className="h-full flex flex-col">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="inline-block px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm font-medium mb-4">
                        {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                      
                      <div className="flex items-center text-gray-600 mb-2">
                        <CalendarClock size={16} className="mr-2" />
                        <span>{event.date} • {event.time}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-4">
                        <MapPin size={16} className="mr-2" />
                        <span>{event.location}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-6 flex-grow">{event.description}</p>
                      
                      <Button to={`/events/${event.id}`} variant="primary" fullWidth>
                        Register Now
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No events found matching your criteria.</p>
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  variant="outline"
                  className="mt-4"
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* Host Your Own Event */}
        <section className="section bg-primary-50">
          <div className="container-custom">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    alt="Group of volunteers" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-4">Host Your Own Fundraiser</h2>
                  <p className="text-gray-600 mb-6">
                    Want to make a bigger impact? Consider hosting your own fundraising event to benefit the Boys & Girls Club of Fontana. We'll provide the support and resources you need to make it a success.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-primary-600">
                        <Users size={18} />
                      </div>
                      <span className="text-gray-700">Birthday fundraisers</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-primary-600">
                        <Users size={18} />
                      </div>
                      <span className="text-gray-700">School or community drives</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-primary-600">
                        <Users size={18} />
                      </div>
                      <span className="text-gray-700">Sports tournaments</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-primary-600">
                        <Users size={18} />
                      </div>
                      <span className="text-gray-700">Virtual fundraisers</span>
                    </li>
                  </ul>
                  <Button to="/contact" variant="primary">
                    Get Started
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

export default EventsPage;