export interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isClosed: boolean;
  isHoliday: boolean;
  isSpecialHours: boolean;
  label?: string;
}