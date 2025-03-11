import React from 'react';
import { getDaysInMonth, startOfMonth } from '../../../utils/dateUtils';
import { CalendarHeader } from './grid/CalendarHeader';
import { CalendarDay } from './grid/CalendarDay';
import type { CalendarEvent } from '../../../types/events';

interface CalendarGridProps {
  month: Date;
  events: CalendarEvent[];
  isLoading: boolean;
  onEventHover: (event: CalendarEvent | null) => void;
}

export function CalendarGrid({ month, events, isLoading, onEventHover }: CalendarGridProps) {
  const days = getDaysInMonth(month);
  const startDay = startOfMonth(month).getDay();

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="grid grid-cols-7 gap-1">
        <CalendarHeader />

        {Array.from({ length: startDay }).map((_, i) => (
          <div key={`empty-${i}`} className="aspect-square bg-gray-50 rounded-lg" />
        ))}

        {days.map((day, index) => (
          <CalendarDay
            key={day.toISOString()}
            day={day}
            events={events}
            index={index}
            onHover={onEventHover}
          />
        ))}
      </div>
    </div>
  );
}