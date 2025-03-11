import React from 'react';
import { GivingHero } from '../components/giving/GivingHero';
import { GivingOptions } from '../components/giving/GivingOptions';
import { FeaturedEvents } from '../components/giving/FeaturedEvents';
import { DonationImpact } from '../components/giving/DonationImpact';
import { SocialShare } from '../components/giving/SocialShare';

export function WaysToGive() {
  return (
    <div className="min-h-screen bg-gray-50">
      <GivingHero />
      <GivingOptions />
      <FeaturedEvents />
      <DonationImpact />
      <SocialShare />
    </div>
  );
}