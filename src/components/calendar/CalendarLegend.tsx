import React from 'react';
import { Calendar, Clock, X } from 'lucide-react';

const legendItems = [
  {
    icon: <X className="w-4 h-4 text-red-500" />,
    label: 'Club Closed',
    description: 'Facility completely closed'
  },
  {
    icon: <Calendar className="w-4 h-4 text-blue-500" />,
    label: 'Holiday',
    description: 'Federal or local holiday'
  },
  {
    icon: <Clock className="w-4 h-4 text-yellow-500" />,
    label: 'Special Hours',
    description: 'Modified operating hours'
  }
];

export function CalendarLegend() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4">Calendar Legend</h3>
      <div className="space-y-3">
        {legendItems.map(item => (
          <div key={item.label} className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              {item.icon}
            </div>
            <div>
              <div className="font-medium">{item.label}</div>
              <div className="text-sm text-gray-600">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}