export function getDaysInMonth(date: Date): Date[] {
  const year = date.getFullYear();
  const month = date.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  return Array.from({ length: daysInMonth }, (_, i) => 
    new Date(year, month, i + 1)
  );
}

export function startOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

export function format(date: Date, formatStr: string): string {
  const options: Intl.DateTimeFormatOptions = {};
  
  if (formatStr.includes('MMMM')) options.month = 'long';
  if (formatStr.includes('MM')) options.month = '2-digit';
  if (formatStr.includes('yyyy')) options.year = 'numeric';
  if (formatStr.includes('d')) options.day = 'numeric';
  
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

export function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}