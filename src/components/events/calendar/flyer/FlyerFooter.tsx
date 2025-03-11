import React from 'react';
import { Download } from 'lucide-react';

interface FlyerFooterProps {
  cost?: number;
  onDownload: () => void;
}

export function FlyerFooter({ cost, onDownload }: FlyerFooterProps) {
  return (
    <div className="flex justify-between items-center">
      {cost !== undefined && (
        <p className="font-medium text-lg">
          Cost: <span className="text-blue-600">${cost}</span>
        </p>
      )}
      
      <button
        onClick={onDownload}
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
      >
        <Download className="w-4 h-4" />
        Download Flyer
      </button>
    </div>
  );
}