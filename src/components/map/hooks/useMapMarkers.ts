import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { type Club } from '../../../types/club';
import { getClubColor, getClubCoordinates } from '../../../utils/mapUtils';

export function useMapMarkers(
  map: mapboxgl.Map | null,
  clubs: Club[],
  onMarkerClick: (club: Club) => void
) {
  useEffect(() => {
    if (!map) return;

    // Wait for map to be loaded
    if (!map.loaded()) {
      map.on('load', () => addMarkers());
      return;
    }

    function addMarkers() {
      const markers = clubs.map(club => {
        const coordinates = getClubCoordinates(club);
        
        const el = document.createElement('div');
        el.className = 'club-marker';
        el.style.backgroundColor = getClubColor(club);
        el.style.border = '2px solid white';
        el.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        
        const marker = new mapboxgl.Marker(el)
          .setLngLat(coordinates)
          .addTo(map);

        marker.getElement().addEventListener('click', () => {
          onMarkerClick(club);
        });

        return marker;
      });

      return () => {
        markers.forEach(marker => marker.remove());
      };
    }

    const cleanup = addMarkers();
    return () => {
      if (cleanup) cleanup();
    };
  }, [map, clubs, onMarkerClick]);
}