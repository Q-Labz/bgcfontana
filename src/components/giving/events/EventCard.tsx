import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  capacity: string;
  image: string;
  registrationUrl: string;
  sponsorshipLevels: {
    name: string;
    amount: number;
    benefits: string[];
  }[];
  index: number;
}

export function EventCard({
  title,
  description,
  date,
  time,
  location,
  capacity,
  image,
  registrationUrl,
  sponsorshipLevels,
  index
}: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-5 h-5 mr-2" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-5 h-5 mr-2" />
            <span>{capacity}</span>
          </div>
        </div>

        <div className="border-t pt-6 mb-6">
          <h4 className="text-lg font-semibold mb-4">Sponsorship Levels</h4>
          <div className="space-y-4">
            {sponsorshipLevels.map((level) => (
              <div key={level.name} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{level.name}</span>
                  <span className="text-blue-600">${level.amount.toLocaleString()}</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  {level.benefits.map((benefit, idx) => (
                    <li key={idx}>• {benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Link
          to={registrationUrl}
          className="block w-full bg-blue-600 text-white text-center py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
        >
          Register Now
        </Link>
      </div>
    </motion.div>
  );
}