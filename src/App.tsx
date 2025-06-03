import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { Announcements } from './components/home/Announcements';
import { AffiliatedClubs } from './components/clubs/AffiliatedClubs';
import { Programs } from './pages/Programs';
import { WaysToGive } from './pages/WaysToGive';
import { Donate } from './pages/Donate';
import { ClubInfo } from './pages/ClubInfo';
import FundraisingEvents from './pages/FundraisingEvents';
import { HolidayBanner } from './components/announcements/HolidayBanner';
import { useHolidayClosure } from './hooks/useHolidayClosure';
import { DonorBanner } from './components/home/DonorBanner';

function HomePage() {
  return (
    <div>
      <Hero />
      <Announcements />
      <DonorBanner />
      <AffiliatedClubs />
    </div>
  );
}

export default function App() {
  const [showBanner, setShowBanner] = useState(true);
  const isClosurePeriod = useHolidayClosure();

  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <AnimatePresence>
            {showBanner && isClosurePeriod && (
              <HolidayBanner onClose={() => setShowBanner(false)} />
            )}
          </AnimatePresence>
          <Header isClosurePeriod={isClosurePeriod} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/programs" element={<Programs isClosurePeriod={isClosurePeriod} />} />
              <Route path="/give" element={<WaysToGive />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/fundraising-events" element={<FundraisingEvents />} />
              <Route path="/club-info" element={<ClubInfo />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}