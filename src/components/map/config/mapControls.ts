import mapboxgl from 'mapbox-gl';

export function createNavigationControl() {
  return new mapboxgl.NavigationControl({ 
    showCompass: false 
  });
}

export function createGeolocateControl() {
  return new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserHeading: true
  });
}

export function createAttributionControl() {
  return new mapboxgl.AttributionControl({
    compact: true
  });
}