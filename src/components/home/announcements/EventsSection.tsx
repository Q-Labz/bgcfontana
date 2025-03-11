import React from 'react';
import { EventCard, type Event } from './EventCard';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Summer Program Registration",
    date: "June 1, 2024",
    time: "9:00 AM",
    location: "Main Center",
    description: "Register your child for our exciting summer program filled with activities, learning, and fun!",
    registrationUrl: "/programs/summer-registration",
    isRegistrationOpen: true
  },
  {
    id: 2,
    title: "Annual Charity Golf Tournament",
    date: "May 15, 2024",
    time: "8:00 AM",
    location: "Sierra Lakes Golf Club",
    description: "Join us for a day of golf supporting our youth programs. Includes lunch and awards ceremony.",
    registrationUrl: "/events/golf-tournament",
    isRegistrationOpen: true
  },
  {
    id: 3,
    title: "Youth Leadership Workshop",
    date: "April 20, 2024",
    time: "2:00 PM",
    location: "Teen Center",
    description: "Special workshop focusing on leadership skills and personal development for teens.",
    registrationUrl: "/programs/leadership-workshop",
    isRegistrationOpen: false
  }
];

export function EventsSection() {
  return (
    <section className="py-16">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {upcomingEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/events"
            className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}