import { type CalendarDay } from '../types/calendar';
import { isHoliday } from './holidayUtils';

export function generateCalendarDays(month: Date): CalendarDay[] {
  const days: CalendarDay[] = [];
  const firstDay = new Date(month.getFullYear(), month.getMonth(), 1);
  const lastDay = new Date(month.getFullYear(), month.getMonth() + 1, 0);
  
  // Add days from previous month
  const firstDayOfWeek = firstDay.getDay();
  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    const date = new Date(firstDay);
    date.setDate(date.getDate() - i - 1);
    days.push(createCalendarDay(date, false));
  }
  
  // Add days from current month
  for (let date = new Date(firstDay); date <= lastDay; date.setDate(date.getDate() + 1)) {
    days.push(createCalendarDay(new Date(date), true));
  }
  
  // Add days from next month
  const remainingDays = 42 - days.length; // Always show 6 weeks
  for (let i = 1; i <= remainingDays; i++) {
    const date = new Date(lastDay);
    date.setDate(date.getDate() + i);
    days.push(createCalendarDay(date, false));
  }
  
  return days;
}

function createCalendarDay(date: Date, isCurrentMonth: boolean): CalendarDay {
  const today = new Date();
  const holiday = isHoliday(date);
  
  return {
    date,
    isCurrentMonth,
    isToday: date.toDateString() === today.toDateString(),
    isClosed: date.getDay() === 0, // Closed on Sundays
    isHoliday: Boolean(holiday),
    isSpecialHours: date.getDay() === 6, // Special hours on Saturdays
    label: holiday?.name
  };
}