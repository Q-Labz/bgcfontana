import React from 'react';
import { PageHero } from '../components/layout/PageHero';
import { ClubStats } from '../components/club/ClubStats';
import { MissionValues } from '../components/club/MissionValues';
import { SupportModule } from '../components/club/SupportModule';
import { ContactSection } from '../components/club/ContactSection';

export function ClubInfo() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="About Our Club"
        description="Building great futures through youth development, healthy living, and social responsibility"
        image="https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?auto=format&fit=crop&w=2000&q=80"
      />
      
      <div className="container mx-auto px-4 py-12 space-y-16">
        <ClubStats />
        <MissionValues />
        <SupportModule />
        <ContactSection />
      </div>
    </div>
  );
}