import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { Donor } from '../types';

interface DonorCardProps {
  donor: Donor;
}

export function DonorCard({ donor }: DonorCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h4 className="text-lg font-semibold">{donor.name}</h4>
            {donor.title && (
              <p className="text-gray-600 text-sm">{donor.title}</p>
            )}
          </div>
          {donor.image && (
            <img
              src={donor.image}
              alt={`${donor.name} logo`}
              className="w-16 h-16 object-contain"
            />
          )}
        </div>

        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-500">Support Period</p>
            <p className="text-gray-700">
              {donor.period.start}
              {donor.period.end && ` - ${donor.period.end}`}
            </p>
          </div>

          {donor.recognition && (
            <div>
              <p className="text-sm text-gray-500">Recognition</p>
              <ul className="list-disc list-inside text-gray-700">
                {donor.recognition.map((item, index) => (
                  <li key={index} className="text-sm">{item}</li>
                ))}
              </ul>
            </div>
          )}

          {donor.website && (
            <a
              href={donor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm"
            >
              Visit Website
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}