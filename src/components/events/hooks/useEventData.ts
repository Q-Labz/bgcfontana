import { useState, useEffect } from 'react';
import { format } from '../../../utils/dateUtils';
import type { CalendarEvent } from '../../../types/events';

export function useEventData(month: Date) {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulated API call - replace with actual data fetching
    setIsLoading(true);
    setTimeout(() => {
      setEvents([
        {
          id: 1,
          name: "Christmas with Santa",
          date: "2023-12-21",
          time: "3:00 PM - 7:00 PM",
          location: "Main Club Center",
          description: "Join us for a magical evening with Santa! Take photos, enjoy holiday treats, and participate in festive activities.",
          image: "https://images.unsplash.com/photo-1543945528-5a210c5985e1?auto=format&fit=crop&w=1920&q=80",
          cost: 5,
          requirements: [
            "Children must be accompanied by an adult",
            "Pre-registration required",
            "Bring a new, unwrapped toy for donation (optional)"
          ],
          contact: "Jane Smith (909) 555-0123",
          rsvpDeadline: "2023-12-18"
        },
        // Add more events as needed
      ]);
      setIsLoading(false);
    }, 1000);
  }, [month]);

  return { events, isLoading };
}