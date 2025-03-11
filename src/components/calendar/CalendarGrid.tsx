import React from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Download } from 'lucide-react';
import { cn } from '../../lib/utils';
import { type CalendarDay } from '../../types/calendar';
import { formatDate } from '../../utils/dateUtils';

interface CalendarGridProps {
  month: Date;
  days: CalendarDay[];
  onExport: () => void;
}

export function CalendarGrid({ month, days, onExport }: CalendarGridProps) {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">
          {month.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </h3>
        <button
          onClick={onExport}
          className="flex items-center text-sm text-blue-600 hover:text-blue-700"
        >
          <Download className="w-4 h-4 mr-1" />
          Export
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {weekDays.map(day => (
          <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
            {day}
          </div>
        ))}
        
        {days.map((day, index) => (
          <motion.div
            key={formatDate(day.date)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.01 }}
            className={cn(
              "aspect-square p-2 relative",
              "border rounded-lg",
              day.isCurrentMonth ? "bg-white" : "bg-gray-50",
              day.isClosed && "bg-red-50 border-red-100",
              day.isHoliday && "bg-blue-50 border-blue-100",
              day.isSpecialHours && "bg-yellow-50 border-yellow-100"
            )}
          >
            <span className={cn(
              "text-sm",
              !day.isCurrentMonth && "text-gray-400",
              day.isToday && "font-bold text-blue-600"
            )}>
              {day.date.getDate()}
            </span>
            
            {(day.isClosed || day.isHoliday || day.isSpecialHours) && (
              <div className="absolute bottom-1 right-1">
                <CalendarIcon className={cn(
                  "w-3 h-3",
                  day.isClosed && "text-red-500",
                  day.isHoliday && "text-blue-500",
                  day.isSpecialHours && "text-yellow-500"
                )} />
              </div>
            )}
            
            {day.label && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/75 text-white text-xs p-1 rounded">
                  {day.label}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}