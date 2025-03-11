import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface MapErrorBoundaryProps {
  error: string | null;
}

export function MapErrorBoundary({ error }: MapErrorBoundaryProps) {
  if (!error) return null;

  return (
    <div className="h-[600px] bg-white rounded-lg shadow-lg flex items-center justify-center">
      <div className="text-center p-8">
        <AlertTriangle className="w-8 h-8 text-red-500 mx-auto mb-4" />
        <p className="text-gray-600 mb-4">{error}</p>
        <p className="text-sm text-gray-500">
          Please try refreshing the page or contact support if the issue persists.
        </p>
      </div>
    </div>
  );
}