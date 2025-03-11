import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { formatDate } from '../../../../utils/dateUtils';
import type { CalendarEvent } from '../../../../types/events';

interface CalendarDayProps {
  day: Date;
  events: CalendarEvent[];
  index: number;
  onHover: (event: CalendarEvent | null) => void;
}

export function CalendarDay({ day, events, index, onHover }: CalendarDayProps) {
  const dateStr = formatDate(day);
  const dayEvents = events.filter(event => event.date === dateStr);
  const hasEvents = dayEvents.length > 0;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.01 }}
      className={`
        aspect-square p-2 rounded-lg relative group cursor-pointer
        ${hasEvents ? 'hover:bg-blue-100' : 'hover:bg-gray-50'}
        transition-colors
      `}
      onMouseEnter={() => hasEvents && onHover(dayEvents[0])}
      onMouseLeave={() => onHover(null)}
    >
      <div className="text-sm font-medium">{day.getDate()}</div>
      
      {hasEvents && (
        <>
          <div className="absolute bottom-2 right-2">
            <Calendar className="w-4 h-4 text-blue-600" />
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-white/90 px-2 py-1 rounded text-sm font-medium text-blue-600">
              {dayEvents[0].name}
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}