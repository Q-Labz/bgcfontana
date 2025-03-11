import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { type Club } from '../../types/club';

interface MapPopupProps {
  club: Club;
  onClose: () => void;
}

export function MapPopup({ club, onClose }: MapPopupProps) {
  return (
    <div className="absolute bottom-4 right-4 w-80 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold">{club.name}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3">
          <p className="text-gray-600">{club.address}</p>
          <p className="text-gray-600">{club.phone}</p>
          
          {club.programs && (
            <div>
              <h4 className="font-medium mb-2">Programs:</h4>
              <div className="flex flex-wrap gap-2">
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
      </div>
    </div>
  );
}