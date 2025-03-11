import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { Club } from '../../../types/club';

interface MapInfoWindowProps {
  club: Club;
}

export function MapInfoWindow({ club }: MapInfoWindowProps) {
  return (
    <div className="p-4 max-w-xs">
      <h3 className="text-lg font-bold mb-2">{club.name}</h3>
      
      <div className="space-y-2 mb-4">
        <p className="text-gray-600">{club.address}</p>
        <p className="text-gray-600">{club.phone}</p>
      </div>
      
      {club.programs && (
        <div className="mb-4">
          <h4 className="font-medium mb-2">Programs:</h4>
          <div className="flex flex-wrap gap-1">
            {club.programs.map(program => (
              <span
                key={program}
                className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
              >
                {program}
              </span>
            ))}
          </div>
        </div>
      )}

      <a
        href={`https://maps.google.com/?q=${encodeURIComponent(club.address)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-600 hover:text-blue-700"
      >
        Get Directions
        <ExternalLink className="w-4 h-4 ml-1" />
      </a>
    </div>
  );
}