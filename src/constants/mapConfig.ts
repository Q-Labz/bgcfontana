// Replace with your actual Mapbox access token
export const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiYmdjZm9udGFuYSIsImEiOiJjbHM5N2F1Y2gwMXZpMmpxdDRqZWt0Y2NqIn0.7J9yqz8LX5RN1nk1Q5Z0Yw';

// Use a more reliable style URL
export const MAP_STYLE = 'mapbox://styles/mapbox/streets-v12';

// Center on Fontana
export const DEFAULT_CENTER: [number, number] = [-117.4350, 34.0922];
export const DEFAULT_ZOOM = 10;

// Marker colors
export const MARKER_COLORS = {
  main: '#4A90E2',
  satellite: '#50C878',
  partner: '#FFB547'
} as const;