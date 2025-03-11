import React from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

interface CarouselControlsProps {
  onPrev: () => void;
  onNext: () => void;
  isPlaying: boolean;
}

export function CarouselControls({
  onPrev,
  onNext,
  isPlaying
}: CarouselControlsProps) {
  return (
    <>
      <button
        onClick={onPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      <div className="absolute bottom-4 right-4">
        {isPlaying ? (
          <Pause className="w-5 h-5 text-gray-400" />
        ) : (
          <Play className="w-5 h-5 text-gray-400" />
        )}
      </div>
    </>
  );
}