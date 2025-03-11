import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarGrid } from './calendar/CalendarGrid';
import { EventDetails } from './calendar/EventDetails';
import { MonthNavigation } from './calendar/MonthNavigation';
import { useMonthNavigation } from './hooks/useMonthNavigation';
import { useEventData } from './hooks/useEventData';
import type { CalendarEvent } from '../../types/events';

export function InteractiveCalendar() {
  const [hoveredEvent, setHoveredEvent] = useState<CalendarEvent | null>(null);
  const { currentMonth, navigateMonth } = useMonthNavigation();
  const { events, isLoading } = useEventData(currentMonth);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <MonthNavigation 
            currentMonth={currentMonth}
            onNavigate={navigateMonth}
          />
          
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CalendarGrid
                month={currentMonth}
                events={events}
                isLoading={isLoading}
                onEventHover={setHoveredEvent}
              />
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                {hoveredEvent ? (
                  <EventDetails
                    key={hoveredEvent.id}
                    event={hoveredEvent}
                  />
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex items-center justify-center text-gray-500 text-center p-8 border rounded-lg"
                  >
                    <p>Hover over a date with an event to see details</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}