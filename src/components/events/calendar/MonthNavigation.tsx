import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { format } from '../../../utils/dateUtils';

interface MonthNavigationProps {
  currentMonth: Date;
  onNavigate: (direction: 'prev' | 'next') => void;
}

export function MonthNavigation({ currentMonth, onNavigate }: MonthNavigationProps) {
  return (
    <div className="flex items-center justify-between">
      <button
        onClick={() => onNavigate('prev')}
        className="p-2 hover:bg-gray-100 rounded-full"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <h2 className="text-2xl font-bold">
        {format(currentMonth, 'MMMM yyyy')}
      </h2>

      <button
        onClick={() => onNavigate('next')}
        className="p-2 hover:bg-gray-100 rounded-full"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}