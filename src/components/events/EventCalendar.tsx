import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { EventGrid } from './calendar/EventGrid';
import { EventFlyer } from './calendar/EventFlyer';
import { MonthNavigation } from './calendar/MonthNavigation';
import { useMonthNavigation } from './hooks/useMonthNavigation';
import { useEventData } from './hooks/useEventData';
import type { CalendarEvent } from '../../types/events';

export function EventCalendar() {
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const { currentMonth, navigateMonth } = useMonthNavigation();
  const { events, isLoading } = useEventData(currentMonth);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <MonthNavigation 
            currentMonth={currentMonth}
            onNavigate={navigateMonth}
          />
          
          <div className="mt-8 relative">
            <EventGrid
              month={currentMonth}
              events={events}
              isLoading={isLoading}
              onEventSelect={setSelectedEvent}
            />

            {selectedEvent && (
              <EventFlyer
                event={selectedEvent}
                onClose={() => setSelectedEvent(null)}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}