import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CalendarGrid } from './CalendarGrid';
import { CalendarLegend } from './CalendarLegend';
import { generateCalendarDays } from '../../utils/calendarUtils';
import { exportToICS } from '../../utils/exportUtils';

export function ClubCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const months = Array.from({ length: 3 }, (_, i) => {
    const date = new Date(currentDate);
    date.setMonth(currentDate.getMonth() + i);
    return date;
  });

  const handlePrevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Club Schedule</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            View upcoming closures, holidays, and schedule changes. Plan ahead with our three-month calendar view.
          </p>
        </motion.div>

        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={handlePrevMonth}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h3 className="text-xl font-semibold">
            {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </h3>
          <button
            onClick={handleNextMonth}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {months.map(month => (
            <CalendarGrid
              key={month.toISOString()}
              month={month}
              days={generateCalendarDays(month)}
              onExport={() => exportToICS(generateCalendarDays(month))}
            />
          ))}
        </div>

        <div className="max-w-lg mx-auto">
          <CalendarLegend />
        </div>
      </div>
    </section>
  );
}