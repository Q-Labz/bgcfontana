import React from 'react';
import { motion } from 'framer-motion';

interface CarouselProgressProps {
  currentSlide: number;
  totalSlides: number;
}

export function CarouselProgress({
  currentSlide,
  totalSlides
}: CarouselProgressProps) {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <motion.div
          key={index}
          className={`w-2 h-2 rounded-full ${
            index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
          }`}
          initial={false}
          animate={{
            scale: index === currentSlide ? 1.2 : 1
          }}
        />
      ))}
    </div>
  );
}