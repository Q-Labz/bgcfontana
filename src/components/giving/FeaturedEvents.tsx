import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Mail, Phone } from 'lucide-react';

const events = [
  {
    title: "Topgolf Tournament",
    date: "October 5, 2024",
    time: "1:00 PM - 5:00 PM",
    location: "Topgolf Ontario",
    description: "Join us for an afternoon of friendly competition and fundraising at Topgolf! Your participation helps support our youth programs while enjoying a fun-filled day of golf, food, and prizes.",
    image: "https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=1920&q=80"
  },
  {
    title: "Mayor's Gala",
    date: "September 15, 2024",
    time: "6:00 PM - 10:00 PM",
    location: "Grand Ballroom, Fontana",
    description: "An elegant evening celebrating our community's commitment to youth development. Enjoy fine dining, live entertainment, and inspiring stories of impact while supporting our mission.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1920&q=80"
  }
];

export function FeaturedEvents() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Fundraising Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us at our signature events and help make a difference in the lives of our youth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                <p className="text-gray-600 mb-6">{event.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-4">Coming Soon!</h4>
                    <p className="text-gray-600 mb-4">
                      Sponsorship opportunities will be available soon. For more information about this event and sponsorship details, please contact us:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-600">
                        <Phone className="w-5 h-5 mr-2" />
                        <a href="tel:(909) 822-5466" className="hover:text-blue-600">(909) 822-5466</a>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Mail className="w-5 h-5 mr-2" />
                        <a href="mailto:events@bgcfontana.org" className="hover:text-blue-600">events@bgcfontana.org</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}