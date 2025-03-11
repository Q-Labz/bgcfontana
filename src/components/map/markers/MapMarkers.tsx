import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { type Club } from '../../../types/club';
import { getClubColor, getClubCoordinates } from '../../../utils/mapUtils';

interface MapMarkersProps {
  map: mapboxgl.Map | null;
  clubs: Club[];
  onMarkerClick: (club: Club) => void;
}

export function MapMarkers({ map, clubs, onMarkerClick }: MapMarkersProps) {
  useEffect(() => {
    if (!map) return;

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
  }, [map, clubs, onMarkerClick]);

  return null;
}