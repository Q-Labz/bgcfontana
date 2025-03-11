import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, X } from 'lucide-react';

interface HolidayBannerProps {
  onClose: () => void;
}

export function HolidayBanner({ onClose }: HolidayBannerProps) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="bg-red-50 border-b border-red-100"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-red-100 p-2 rounded-full">
              <Calendar className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h3 className="font-semibold text-red-900">🎄 Holiday Closure Notice 🎄</h3>
              <p className="text-red-700 mt-1">
                Our club will be closed for the following dates:
              </p>
              <ul className="text-red-700 mt-1 space-y-1 text-sm">
                <li>• Christmas Break: December 23, 2023 - January 1, 2024</li>
                <li>• New Year's Break: January 2 - January 6, 2024</li>
              </ul>
              <p className="text-red-700 mt-2 text-sm font-medium">
                We will reopen on January 7th and look forward to welcoming you back!
              </p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="text-red-500 hover:text-red-700 p-2"
            aria-label="Close announcement"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}