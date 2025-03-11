import { mapConfig } from '../../../config/mapbox';

export const defaultMapOptions = {
  style: mapConfig.styleUrl,
  center: mapConfig.defaultCenter,
  zoom: mapConfig.defaultZoom,
  maxBounds: mapConfig.maxBounds,
  failIfMajorPerformanceCaveat: true,
  attributionControl: false,
  preserveDrawingBuffer: true
} as const;