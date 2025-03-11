import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { AFFILIATED_CLUBS } from '../../constants/clubs';
import { MapLoadingState } from './states/MapLoadingState';
import { MapErrorState } from './states/MapErrorState';
import { MapControls } from './controls/MapControls';
import { MapInfoWindow } from './info/MapInfoWindow';
import { useMapState } from './hooks/useMapState';
import { mapsConfig } from '../../config/maps';

const containerStyle = {
  width: '100%',
  height: '600px'
};

export function ClubMap() {
  const {
    selectedClub,
    setSelectedClub,
    isLoading,
    error,
    handleLoad,
    handleError
  } = useMapState();

  if (error) {
    return <MapErrorState error={error} />;
  }

  if (isLoading) {
    return <MapLoadingState />;
  }

  return (
    <div className="relative h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
      <LoadScript 
        googleMapsApiKey={mapsConfig.apiKey}
        onError={handleError}
        onLoad={handleLoad}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mapsConfig.defaultCenter}
          zoom={mapsConfig.defaultZoom}
          options={{
            styles: mapsConfig.styles,
            disableDefaultUI: true,
            zoomControl: true,
            streetViewControl: true,
            fullscreenControl: true
          }}
        >
          <MapControls />
          
          {AFFILIATED_CLUBS.map(club => (
            <Marker
              key={club.id}
              position={getClubPosition(club)}
              icon={{
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: mapsConfig.markerColors[club.type],
                fillOpacity: 1,
                strokeWeight: 2,
                strokeColor: '#FFFFFF',
                scale: 10
              }}
              onClick={() => setSelectedClub(club)}
            />
          ))}

          {selectedClub && (
            <InfoWindow
              position={getClubPosition(selectedClub)}
              onCloseClick={() => setSelectedClub(null)}
            >
              <MapInfoWindow club={selectedClub} />
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}