import React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import '../../../styles/map.css';
import { MapLoadingState } from './MapLoadingState';
import { MapErrorBoundary } from './MapErrorBoundary';
import { MapControls } from './controls/MapControls';
import { MapMarkers } from './markers/MapMarkers';
import { useMapInitialization } from './hooks/useMapInitialization';
import { type Club } from '../../types/club';

interface MapContainerProps {
  clubs: Club[];
  onMarkerClick: (club: Club) => void;
}

export function MapContainer({ clubs, onMarkerClick }: MapContainerProps) {
  const mapContainer = React.useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const map = useMapInitialization({
    mapContainer,
    onMarkerClick,
    clubs,
    onError: setError,
    onLoad: () => setIsLoading(false)
  });

  if (error) {
    return <MapErrorBoundary error={error} />;
  }

  return (
    <div className="relative h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
      {isLoading && <MapLoadingState />}
      {!isLoading && (
        <>
          <MapControls map={map.current} />
          <MapMarkers map={map.current} clubs={clubs} onMarkerClick={onMarkerClick} />
        </>
      )}
    </div>
  );
}