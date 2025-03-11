import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, AlertCircle, DollarSign } from 'lucide-react';
import type { CalendarEvent } from '../../../types/events';

interface EventDetailsProps {
  event: CalendarEvent;
}

export function EventDetails({ event }: EventDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="sticky top-4 bg-white rounded-lg shadow-lg overflow-hidden"
    >
      {event.image && (
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">{event.name}</h3>

        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span>{event.date}</span>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-blue-600" />
            <span>{event.time}</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-blue-600" />
            <span>{event.location}</span>
          </div>

          {event.cost !== undefined && (
            <div className="flex items-center gap-3">
              <DollarSign className="w-5 h-5 text-blue-600" />
              <span>${event.cost}</span>
            </div>
          )}
        </div>

        <p className="text-gray-600 mb-6">{event.description}</p>

        {event.requirements && (
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5 text-blue-600" />
              <h4 className="font-medium">Requirements</h4>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              {event.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
}