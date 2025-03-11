import { useEffect, useRef, MutableRefObject } from 'react';
import mapboxgl from 'mapbox-gl';
import { type Club } from '../../../types/club';
import { defaultMapOptions } from '../config/mapOptions';
import { useMapControls } from './useMapControls';
import { useMapEvents } from './useMapEvents';

interface UseMapInitializationProps {
  mapContainer: MutableRefObject<HTMLDivElement | null>;
  onMarkerClick: (club: Club) => void;
  clubs: Club[];
  onError: (error: string) => void;
  onLoad: () => void;
}

export function useMapInitialization({ 
  mapContainer, 
  onError,
  onLoad
}: UseMapInitializationProps) {
  const map = useRef<mapboxgl.Map | null>(null);

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current) return;

    try {
      if (map.current) return;

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        ...defaultMapOptions
      });
    } catch (error) {
      console.error('Map initialization error:', error);
      onError('Unable to initialize the map. Please try again later.');
    }

    return () => {
      if (map.current?.loaded()) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [mapContainer, onError]);

  // Add controls
  useMapControls(map.current);

  // Setup event handlers
  useMapEvents({ 
    map: map.current, 
    onError, 
    onLoad 
  });

  return map;
}