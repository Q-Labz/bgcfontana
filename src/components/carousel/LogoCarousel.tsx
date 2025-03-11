import React from 'react';
import { motion } from 'framer-motion';
import { useLogoCarousel } from './hooks/useLogoCarousel';
import { CarouselControls } from './controls/CarouselControls';
import { CarouselSlide } from './slides/CarouselSlide';
import { CarouselProgress } from './progress/CarouselProgress';
import { type Logo } from './types';

interface LogoCarouselProps {
  logos: Logo[];
  autoPlayInterval?: number;
}

export function LogoCarousel({ 
  logos,
  autoPlayInterval = 5000 
}: LogoCarouselProps) {
  const {
    currentSlide,
    totalSlides,
    isPlaying,
    handleNext,
    handlePrev,
    handleMouseEnter,
    handleMouseLeave
  } = useLogoCarousel(logos, autoPlayInterval);

  const slideWidth = 100; // percentage
  const transform = `translateX(-${currentSlide * slideWidth}%)`;

  return (
    <div 
      className="relative overflow-hidden bg-white rounded-lg shadow-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform }}
      >
        {Array.from({ length: totalSlides }).map((_, index) => (
          <CarouselSlide
            key={index}
            logos={logos.slice(index * 4, (index + 1) * 4)}
          />
        ))}
      </motion.div>

      <CarouselControls
        onPrev={handlePrev}
        onNext={handleNext}
        isPlaying={isPlaying}
      />

      <CarouselProgress
        currentSlide={currentSlide}
        totalSlides={totalSlides}
      />
    </div>
  );
}