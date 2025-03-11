interface Holiday {
  name: string;
  date: Date;
}

const HOLIDAYS_2024: Holiday[] = [
  { name: 'New Year\'s Day', date: new Date(2024, 0, 1) },
  { name: 'Martin Luther King Jr. Day', date: new Date(2024, 0, 15) },
  { name: 'Presidents\' Day', date: new Date(2024, 1, 19) },
  { name: 'Memorial Day', date: new Date(2024, 4, 27) },
  { name: 'Independence Day', date: new Date(2024, 6, 4) },
  { name: 'Labor Day', date: new Date(2024, 8, 2) },
  { name: 'Veterans Day', date: new Date(2024, 10, 11) },
  { name: 'Thanksgiving', date: new Date(2024, 10, 28) },
  { name: 'Christmas Day', date: new Date(2024, 11, 25) }
];

export function isHoliday(date: Date): Holiday | undefined {
  return HOLIDAYS_2024.find(holiday => 
    holiday.date.getFullYear() === date.getFullYear() &&
    holiday.date.getMonth() === date.getMonth() &&
    holiday.date.getDate() === date.getDate()
  );
}