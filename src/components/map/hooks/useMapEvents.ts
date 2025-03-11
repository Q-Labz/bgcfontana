import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

interface MapEventsProps {
  map: mapboxgl.Map | null;
  onError: (error: string) => void;
  onLoad: () => void;
}

export function useMapEvents({ map, onError, onLoad }: MapEventsProps) {
  useEffect(() => {
    if (!map) return;

    const handleLoad = () => {
      if (!map.loaded()) return;
      map.resize();
      onLoad();
    };

    const handleError = (e: any) => {
      console.error('Mapbox error:', e);
      onError('Unable to load the map. Please check your internet connection.');
    };

    map.on('load', handleLoad);
    map.on('error', handleError);

    return () => {
      map.off('load', handleLoad);
      map.off('error', handleError);
    };
  }, [map, onError, onLoad]);
}