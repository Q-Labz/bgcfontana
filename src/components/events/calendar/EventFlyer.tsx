import React from 'react';
import { motion } from 'framer-motion';
import type { CalendarEvent } from '../../../types/events';
import { FlyerHeader } from './flyer/FlyerHeader';
import { FlyerDetails } from './flyer/FlyerDetails';
import { FlyerFooter } from './flyer/FlyerFooter';

interface EventFlyerProps {
  event: CalendarEvent;
  onClose: () => void;
}

export function EventFlyer({ event, onClose }: EventFlyerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
    >
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <FlyerHeader
          image={event.image}
          title={event.name}
          onClose={onClose}
        />

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4">{event.name}</h3>
          
          <FlyerDetails event={event} />

          <div className="prose max-w-none mb-6">
            <p className="text-gray-600">{event.description}</p>
          </div>

          {event.requirements && (
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h4 className="font-medium mb-2">Requirements</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {event.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          )}

          <FlyerFooter
            cost={event.cost}
            onDownload={() => window.print()}
          />
        </div>
      </div>
    </motion.div>
  );
}