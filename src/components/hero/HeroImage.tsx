import React from 'react';
import { cn } from '../../lib/utils';
import { HeroOverlay } from './HeroOverlay';
import { HeroContent } from './HeroContent';

interface HeroImageProps {
  className?: string;
  image: string;
  height?: 'full' | 'half';
  children?: React.ReactNode;
}

export function HeroImage({ 
  className,
  image,
  height = 'half',
  children 
}: HeroImageProps) {
  return (
    <div className={cn(
      "relative flex items-center justify-center overflow-hidden",
      height === 'full' ? 'min-h-screen' : 'h-[500px]',
      className
    )}>
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Gradient Overlay */}
      <HeroOverlay />
      
      {/* Content */}
      <HeroContent>
        {children}
      </HeroContent>
    </div>
  );
}