import React from 'react';

export function Logo({ className }: { className?: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-12 h-12 bg-[#0057B8] rounded-lg overflow-hidden">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 15C35.5 15 25 25.5 25 40C25 47.5 28.5 54.5 34.5 58.5C28.5 62.5 25 69.5 25 77C25 91.5 35.5 102 50 102C64.5 102 75 91.5 75 77C75 69.5 71.5 62.5 65.5 58.5C71.5 54.5 75 47.5 75 40C75 25.5 64.5 15 50 15Z"
            fill="url(#bgc-gradient)"
          />
          <defs>
            <linearGradient id="bgc-gradient" x1="25" y1="15" x2="75" y2="102" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0057B8" />
              <stop offset="100%" stopColor="#00338D" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 50 50"
            className="w-8 h-8"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M25 10C22 10 20 12 20 15C20 16.5 21 18 22.5 19C21 20 20 21.5 20 23C20 26 22 28 25 28C28 28 30 26 30 23C30 21.5 29 20 27.5 19C29 18 30 16.5 30 15C30 12 28 10 25 10Z" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold leading-tight text-white">Boys & Girls Club</span>
        <span className="text-lg font-medium leading-tight text-white">of Fontana</span>
      </div>
    </div>
  );
}