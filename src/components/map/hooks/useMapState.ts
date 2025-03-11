import { useState } from 'react';
import type { Club } from '../../../types/club';

export function useMapState() {
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = (error: Error) => {
    console.error('Map loading error:', error);
    setError('Unable to load the map. Please check your internet connection.');
    setIsLoading(false);
  };

  return {
    selectedClub,
    setSelectedClub,
    isLoading,
    error,
    handleLoad,
    handleError
  };
}