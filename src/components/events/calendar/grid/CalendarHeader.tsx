import React from 'react';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function CalendarHeader() {
  return (
    <>
      {WEEKDAYS.map(day => (
        <div key={day} className="p-2 text-center font-medium text-gray-600">
          {day}
        </div>
      ))}
    </>
  );
}