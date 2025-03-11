import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { 
  createNavigationControl, 
  createGeolocateControl, 
  createAttributionControl 
} from '../config/mapControls';

export function useMapControls(map: mapboxgl.Map | null) {
  useEffect(() => {
    if (!map?.loaded()) return;

    // Add controls
    map.addControl(createNavigationControl(), 'top-right');
    map.addControl(createGeolocateControl(), 'top-right');
    map.addControl(createAttributionControl(), 'bottom-right');

    // No cleanup needed as controls are removed with map
  }, [map]);
}