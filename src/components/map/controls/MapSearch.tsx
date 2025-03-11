import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { AFFILIATED_CLUBS } from '../../../constants/clubs';

export function MapSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    const club = AFFILIATED_CLUBS.find(club =>
      club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      club.city.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (club) {
      // Handle club selection
      console.log('Found club:', club);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search clubs by name or city..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </form>
  );
}