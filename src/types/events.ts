export interface CalendarEvent {
  id: number;
  name: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
  cost?: number;
  requirements?: string[];
  contact?: string;
  rsvpDeadline?: string;
}