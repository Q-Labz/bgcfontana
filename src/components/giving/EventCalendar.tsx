import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Plus } from 'lucide-react';
import { cn } from '../../lib/utils';

type ViewType = 'month' | 'week' | 'day';
type EventType = 'monetary' | 'volunteer' | 'in-kind';

interface Event {
  id: number;
  title: string;
  date: Date;
  time: string;
  location: string;
  type: EventType;
  description: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Annual Charity Gala",
    date: new Date(2024, 3, 15),
    time: "6:00 PM",
    location: "Grand Ballroom",
    type: "monetary",
    description: "Join us for an evening of celebration and giving."
  },
  {
    id: 2,
    title: "Community Clean-up Day",
    date: new Date(2024, 3, 20),
    time: "9:00 AM",
    location: "City Park",
    type: "volunteer",
    description: "Help us beautify our community spaces."
  },
  {
    id: 3,
    title: "School Supply Drive",
    date: new Date(2024, 3, 25),
    time: "10:00 AM",
    location: "Main Center",
    type: "in-kind",
    description: "Donate essential school supplies for local students."
  }
];

export function EventCalendar() {
  const [view, setView] = useState<ViewType>('month');
  const [selectedType, setSelectedType] = useState<EventType | 'all'>('all');

  const filteredEvents = events.filter(event => 
    selectedType === 'all' || event.type === selectedType
  );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us at our upcoming events and be part of our mission to empower youth
          </p>
        </motion.div>

        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <div className="flex rounded-lg overflow-hidden border border-gray-200">
            {(['month', 'week', 'day'] as ViewType[]).map((viewType) => (
              <button
                key={viewType}
                onClick={() => setView(viewType)}
                className={cn(
                  "px-4 py-2 text-sm font-medium capitalize",
                  view === viewType
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                )}
              >
                {viewType}
              </button>
            ))}
          </div>

          <div className="flex rounded-lg overflow-hidden border border-gray-200">
            {(['all', 'monetary', 'volunteer', 'in-kind'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={cn(
                  "px-4 py-2 text-sm font-medium capitalize",
                  selectedType === type
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                )}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm text-blue-600 font-medium capitalize">
                    {event.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">
                      {event.date.toLocaleDateString()} at {event.time}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{event.description}</p>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                    Register
                  </button>
                  <button
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:border-blue-600 transition-colors"
                    title="Add to calendar"
                  >
                    <Plus className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}