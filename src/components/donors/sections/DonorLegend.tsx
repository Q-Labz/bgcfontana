import React from 'react';
import { Info } from 'lucide-react';
import type { DonorTier } from '../types';

interface DonorLegendProps {
  tiers: DonorTier[];
}

export function DonorLegend({ tiers }: DonorLegendProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <Info className="w-5 h-5 text-blue-600" />
        <h3 className="font-semibold">Donor Recognition Levels</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tiers.map((tier) => (
          <div key={tier.name} className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full flex-shrink-0"
              style={{ backgroundColor: tier.color }}
            />
            <div>
              <p className="font-medium">{tier.name} Circle</p>
              <p className="text-sm text-gray-600">{tier.range}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}