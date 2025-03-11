import React from 'react';
import { Loader2 } from 'lucide-react';

export function MapLoadingState() {
  return (
    <div className="h-[600px] bg-white rounded-lg shadow-lg flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin mx-auto mb-4" />
        <p className="text-gray-600">Loading map...</p>
      </div>
    </div>
  );
}