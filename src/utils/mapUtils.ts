import type { Club } from '../types/club';

const CLUB_COORDINATES: Record<string, { lat: number; lng: number }> = {
  'Fontana': { lat: 34.0922, lng: -117.4350 },
  'Rialto': { lat: 34.1064, lng: -117.3703 },
  'San Bernardino': { lat: 34.1083, lng: -117.2898 },
  'Redlands': { lat: 34.0556, lng: -117.1825 },
  'Ontario': { lat: 34.0633, lng: -117.6509 },
  'Rancho Cucamonga': { lat: 34.1064, lng: -117.5931 }
};

export function getClubPosition(club: Club) {
  const coordinates = CLUB_COORDINATES[club.city];
  if (!coordinates) {
    console.warn(`No coordinates found for ${club.city}, using Fontana as default`);
    return CLUB_COORDINATES['Fontana'];
  }
  return coordinates;
}