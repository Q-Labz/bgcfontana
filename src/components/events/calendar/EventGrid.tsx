import React from 'react';
import { getDaysInMonth, startOfMonth } from '../../../utils/dateUtils';
import { CalendarHeader } from './grid/CalendarHeader';
import { CalendarDay } from './grid/CalendarDay';
import type { CalendarEvent } from '../../../types/events';

interface EventGridProps {
  month: Date;
  events: CalendarEvent[];
  isLoading: boolean;
  onEventSelect: (event: CalendarEvent) => void;
}

export function EventGrid({ month, events, isLoading, onEventSelect }: EventGridProps) {
  const days = getDaysInMonth(month);
  const startDay = startOfMonth(month).getDay();

  return (
    <div className="grid grid-cols-7 gap-1">
      <CalendarHeader />

      {/* Empty cells for days before start of month */}
      {Array.from({ length: startDay }).map((_, i) => (
        <div key={`empty-${i}`} className="aspect-square bg-gray-50" />
      ))}

      {/* Calendar days */}
      {days.map((day, index) => (
        <CalendarDay
          key={day.toISOString()}
          day={day}
          events={events}
          index={index}
          onSelect={onEventSelect}
        />
      ))}
    </div>
  );
}