export const mapsConfig = {
  apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  defaultCenter: { lat: 34.0922, lng: -117.4350 }, // Fontana, CA
  defaultZoom: 12,
  styles: [
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [{ color: "#333333" }]
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [{ color: "#f5f5f5" }]
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [{ saturation: -100 }, { lightness: 45 }]
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [{ visibility: "simplified" }]
    }
  ],
  markerColors: {
    main: '#4A90E2',
    satellite: '#50C878',
    partner: '#FFB547'
  }
} as const;