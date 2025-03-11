import React from 'react';
import { X } from 'lucide-react';

interface FlyerHeaderProps {
  image?: string;
  title: string;
  onClose: () => void;
}

export function FlyerHeader({ image, title, onClose }: FlyerHeaderProps) {
  return (
    <div className="relative">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      )}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}