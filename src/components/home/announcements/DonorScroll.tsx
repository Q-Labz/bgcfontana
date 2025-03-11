import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Donor {
  id: number;
  name: string;
  logo: string;
  website: string;
  level: 'Platinum' | 'Gold' | 'Silver' | 'Bronze';
}

const donors: Donor[] = [
  {
    id: 1,
    name: "Microsoft",
    logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&w=150&h=150&q=80",
    website: "https://microsoft.com",
    level: "Platinum"
  },
  {
    id: 2,
    name: "Walmart Foundation",
    logo: "https://images.unsplash.com/photo-1633418038405-8dbc6f1dc845?auto=format&fit=crop&w=150&h=150&q=80",
    website: "https://walmart.org",
    level: "Gold"
  },
  {
    id: 3,
    name: "Local Community Bank",
    logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=150&h=150&q=80",
    website: "https://example.com",
    level: "Silver"
  },
  {
    id: 4,
    name: "Regional Healthcare",
    logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&w=150&h=150&q=80",
    website: "https://example.com",
    level: "Gold"
  }
];

const SCROLL_INTERVAL = 5000;

export function DonorScroll() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % donors.length);
    }, SCROLL_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">
          Our Generous Supporters
        </h3>
        
        <div className="relative h-48 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {donors.map((donor, index) => (
              index === activeIndex && (
                <motion.a
                  key={donor.id}
                  href={donor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative group">
                    <img
                      src={donor.logo}
                      alt={`${donor.name} logo`}
                      className="w-32 h-32 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-black bg-opacity-75 text-white p-2 rounded text-sm">
                        <p className="font-semibold">{donor.name}</p>
                        <p className="text-xs">{donor.level} Sponsor</p>
                      </div>
                    </div>
                  </div>
                </motion.a>
              )
            ))}
          </AnimatePresence>
          
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {donors.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}