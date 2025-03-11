import React from 'react';
import { MapSearch } from './MapSearch';
import { MapLegend } from './MapLegend';

export function MapControls() {
  return (
    <div className="absolute top-4 left-4 right-4 z-10 flex gap-4">
      <MapSearch />
      <MapLegend />
    </div>
  );
}