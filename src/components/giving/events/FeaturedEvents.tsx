import React from 'react';
import { motion } from 'framer-motion';
import { EventCard } from './EventCard';

const events = [
  {
    title: "Golf Classic",
    description: "Join us for a day of golf and philanthropy at our annual Golf Classic. Enjoy a scenic course, networking opportunities, and support our mission.",
    date: "September 20, 2024",
    time: "7:00 AM - 2:00 PM",
    location: "Fontana Golf Course",
    capacity: "Limited to 120 players",
    image: "https://images.unsplash.com/photo-1551632652-bbbf417bc632?auto=format&fit=crop&w=1920&q=80",
    registrationUrl: "/events/golf-classic",
    sponsorshipLevels: [
      {
        name: "Hole Sponsor",
        amount: 2500,
        benefits: [
          "Recognition on hole signage",
          "4 player entry",
          "Branded signage at event"
        ]
      },
      {
        name: "Player Entry",
        amount: 500,
        benefits: [
          "18 holes of golf",
          "Lunch included",
          "Tournament swag"
        ]
      }
    ]
  },
  {
    title: "Topgolf Tournament",
    description: "Swing into action for a cause at our Topgolf Tournament! Whether you're a golf enthusiast or just looking for a fun way to give back, this event combines friendly competition with fundraising.",
    date: "October 5, 2024",
    time: "6:00 PM - 9:00 PM",
    location: "Topgolf Ontario",
    capacity: "36 teams of 6 players",
    image: "https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=1920&q=80",
    registrationUrl: "/events/topgolf",
    sponsorshipLevels: [
      {
        name: "Tournament Sponsor",
        amount: 7500,
        benefits: [
          "3 team entries (18 players)",
          "Premium bay locations",
          "Branded event signage",
          "Recognition in all materials"
        ]
      },
      {
        name: "Bay Sponsor",
        amount: 3000,
        benefits: [
          "2 team entries (12 players)",
          "Bay signage",
          "Recognition in program"
        ]
      },
      {
        name: "Team Entry",
        amount: 1000,
        benefits: [
          "1 team entry (6 players)",
          "Food and beverages",
          "Tournament swag"
        ]
      }
    ]
  }
];

export function FeaturedEvents() {
  return (
    <section className="py-16 bg-gray-50">
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
            <EventCard
              key={event.title}
              {...event}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}