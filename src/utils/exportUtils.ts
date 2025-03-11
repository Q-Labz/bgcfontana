import { type CalendarDay } from '../types/calendar';
import { formatDate } from './dateUtils';

export function exportToICS(days: CalendarDay[]): void {
  const events = days
    .filter(day => day.isClosed || day.isHoliday || day.isSpecialHours)
    .map(day => {
      const date = formatDate(day.date);
      const summary = day.isClosed ? 'Club Closed' :
                     day.isHoliday ? `Holiday: ${day.label}` :
                     'Special Hours';
      
      return `BEGIN:VEVENT
DTSTART;VALUE=DATE:${date.replace(/-/g, '')}
DTEND;VALUE=DATE:${date.replace(/-/g, '')}
SUMMARY:${summary}
END:VEVENT`;
    })
    .join('\n');

  const calendar = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Boys & Girls Club of Fontana//Calendar//EN
${events}
END:VCALENDAR`;

  const blob = new Blob([calendar], { type: 'text/calendar' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'club-schedule.ics';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}