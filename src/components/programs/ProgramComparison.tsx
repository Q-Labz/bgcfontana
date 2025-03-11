import React from 'react';
import { X } from 'lucide-react';
import type { Program } from './ProgramCard';

interface ProgramComparisonProps {
  programs: Program[];
  selectedPrograms: Program[];
  onToggleProgram: (program: Program) => void;
}

export function ProgramComparison({
  programs,
  selectedPrograms,
  onToggleProgram,
}: ProgramComparisonProps) {
  if (selectedPrograms.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50 transform transition-transform">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">
            Compare Programs ({selectedPrograms.length}/3)
          </h3>
          <button
            onClick={() => selectedPrograms.forEach(p => onToggleProgram(p))}
            className="text-gray-500 hover:text-gray-700"
          >
            Clear All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {selectedPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-gray-50 rounded-lg p-4 relative"
            >
              <button
                onClick={() => onToggleProgram(program)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
              <h4 className="font-semibold mb-2">{program.title}</h4>
              <p className="text-sm text-gray-600 mb-2">{program.duration}</p>
              <p className="text-blue-600 font-semibold">
                ${program.tuition.amount}/{program.tuition.period}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors">
            Compare Details
          </button>
        </div>
      </div>
    </div>
  );
}