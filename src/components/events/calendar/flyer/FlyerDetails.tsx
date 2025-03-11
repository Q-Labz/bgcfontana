import React from 'react';
import { Calendar, Clock, MapPin, Phone } from 'lucide-react';
import type { CalendarEvent } from '../../../../types/events';

interface FlyerDetailsProps {
  event: CalendarEvent;
}

export function FlyerDetails({ event }: FlyerDetailsProps) {
  const details = [
    { icon: Calendar, label: 'Date', value: event.date },
    { icon: Clock, label: 'Time', value: event.time },
    { icon: MapPin, label: 'Location', value: event.location },
    event.contact && { icon: Phone, label: 'Contact', value: event.contact }
  ].filter(Boolean);

  return (
    <div className="space-y-4 mb-6">
      {details.map((detail, index) => detail && (
        <div key={index} className="flex items-start gap-3">
          <detail.icon className="w-5 h-5 text-blue-600 mt-1" />
          <div>
            <p className="font-medium">{detail.label}</p>
            <p className="text-gray-600">{detail.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}