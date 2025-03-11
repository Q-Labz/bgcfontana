import React from 'react';
import { Heart } from 'lucide-react';
import { PageHero } from '../layout/PageHero';

export function GivingHero() {
  return (
    <PageHero
      title="Make a Difference Today"
      description="Your support helps us create life-changing opportunities for youth in our community. Every contribution, no matter the size, makes a lasting impact."
      image="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1920&q=80"
    >
      <div className="flex justify-center">
        <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center">
          <Heart className="w-10 h-10 text-white" />
        </div>
      </div>
    </PageHero>
  );
}