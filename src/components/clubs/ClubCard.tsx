import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import type { Club } from '../../types/club';

interface ClubCardProps {
  club: Club;
  index: number;
}

export function ClubCard({ club, index }: ClubCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {club.name}
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-gray-900">{club.city}</p>
              <p className="text-gray-600">{club.address}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-blue-600" />
            <a 
              href={`tel:${club.phone}`}
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              {club.phone}
            </a>
          </div>
        </div>

        {club.programs && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">
              Featured Programs:
            </h4>
            <div className="flex flex-wrap gap-2">
              {club.programs.map(program => (
                <span
                  key={program}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                >
                  {program}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}