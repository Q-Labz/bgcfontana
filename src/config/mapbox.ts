import mapboxgl from 'mapbox-gl';

// Initialize Mapbox with access token from environment variables
const accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
const styleUrl = import.meta.env.VITE_MAPBOX_STYLE_URL;

if (!accessToken) {
  throw new Error('Mapbox access token is required. Please check your environment variables.');
}

if (!styleUrl) {
  throw new Error('Mapbox style URL is required. Please check your environment variables.');
}

mapboxgl.accessToken = accessToken;

export const mapConfig = {
  styleUrl,
  defaultCenter: [-117.4350, 34.0922] as [number, number], // Fontana, CA
  defaultZoom: 12,
  maxBounds: [
    [-118.5, 33.5], // Southwest coordinates
    [-116.5, 34.5]  // Northeast coordinates
  ] as [[number, number], [number, number]],
  markerColors: {
    main: '#4A90E2',
    satellite: '#50C878',
    partner: '#FFB547'
  } as const
} as const;