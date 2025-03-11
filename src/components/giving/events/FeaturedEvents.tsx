import React from 'react';
import { motion } from 'framer-motion';
import { EventCard } from './EventCard';

const events = [
  {
    title: "Mayor's Gala",
    description: "Join us for an elegant evening of philanthropy at our annual Mayor's Gala, where your attendance directly supports our mission. Enjoy fine dining, entertainment, and networking while making a meaningful impact.",
    date: "September 15, 2024",
    time: "6:00 PM - 10:00 PM",
    location: "Grand Ballroom, Fontana",
    capacity: "Limited to 300 guests",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1920&q=80",
    registrationUrl: "/events/mayors-gala",
    sponsorshipLevels: [
      {
        name: "Platinum Sponsor",
        amount: 10000,
        benefits: [
          "Premium table for 10 guests",
          "Recognition in all event materials",
          "VIP reception access",
          "Featured in annual report"
        ]
      },
      {
        name: "Gold Sponsor",
        amount: 5000,
        benefits: [
          "Premium table for 8 guests",
          "Recognition in event program",
          "VIP reception access"
        ]
      },
      {
        name: "Silver Sponsor",
        amount: 2500,
        benefits: [
          "Table for 6 guests",
          "Recognition in event program"
        ]
      }
    ]
  },
  {
    title: "Topgolf Tournament",
    description: "Swing into action for a cause at our Topgolf Tournament! Whether you're a golf enthusiast or just looking for a fun way to give back, this event combines friendly competition with fundraising.",
    date: "October 5, 2024",
    time: "1:00 PM - 5:00 PM",
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