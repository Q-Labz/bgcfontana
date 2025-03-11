import React from 'react';
import { Info } from 'lucide-react';

const legendItems = [
  { color: '#4A90E2', label: 'Main Club' },
  { color: '#50C878', label: 'Satellite Location' },
  { color: '#FFB547', label: 'Partner Site' }
];

export function MapLegend() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-3">
        <Info className="w-4 h-4 text-gray-500" />
        <span className="text-sm font-medium">Map Legend</span>
      </div>
      <div className="space-y-2">
        {legendItems.map(item => (
          <div key={item.label} className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-gray-600">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}