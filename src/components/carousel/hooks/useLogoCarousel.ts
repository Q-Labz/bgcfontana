import { useState, useEffect, useCallback } from 'react';
import { type Logo } from '../types';

export function useLogoCarousel(logos: Logo[], interval: number) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  const totalSlides = Math.ceil(logos.length / 5);

  const handleNext = useCallback(() => {
    setCurrentSlide(current => (current + 1) % totalSlides);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentSlide(current => 
      current === 0 ? totalSlides - 1 : current - 1
    );
  }, [totalSlides]);

  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(true);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(handleNext, interval);
    return () => clearInterval(timer);
  }, [handleNext, interval, isPlaying]);

  return {
    currentSlide,
    totalSlides,
    isPlaying,
    handleNext,
    handlePrev,
    handleMouseEnter,
    handleMouseLeave
  };
}