import { motion } from 'framer-motion';
import { CalendarClock, MapPin, Trophy, Calendar, Users } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import Card from '../common/Card';

// Sample upcoming events
const upcomingEvents = [
  {
    id: 1,
    title: "TopGolf Tournament",
    date: "June 19, 2025",
    time: "1:00 PM - 5:00 PM",
    location: "TopGolf Ontario",
    description: "Join us for a day of fun and competition at TopGolf while supporting our mission.",
    icon: <Trophy className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Golf Classic",
    date: "August 25, 2025",
    time: "8:00 AM - 5:00 PM",
    location: "Sierra Lakes Golf Club",
    description: "Our annual golf tournament bringing together supporters for a great cause.",
    icon: <Calendar className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Mayor's Gala",
    date: "October 25, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "Spaggi's Event Center",
    address: "16880 Seville Ave., Fontana CA 92335",
    description: "An elegant evening celebrating our impact and raising funds for our programs.",
    icon: <Users className="w-6 h-6" />
  }
];

const EventsPreview = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <SectionHeader
          title="Upcoming Events"
          subtitle="Join us at our upcoming events to support our mission and connect with our community."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <Card key={event.id} hover className="h-full flex flex-col">
              <div className="p-6 flex-grow flex flex-col">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <div className="text-primary-600">
                    {event.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                
                <div className="flex items-center text-gray-600 mb-2">
                  <CalendarClock size={16} className="mr-2" />
                  <span>{event.date} • {event.time}</span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin size={16} className="mr-2" />
                  <span>{event.location}</span>
                </div>
                {event.address && (
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin size={16} className="mr-2" />
                    <span>{event.address}</span>
                  </div>
                )}
                
                <p className="text-gray-600 mb-6 flex-grow">{event.description}</p>
                
                <Button to="/ways-to-give" variant="primary" fullWidth>
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsPreview;