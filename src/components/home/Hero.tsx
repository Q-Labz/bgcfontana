import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '../layout/PageHero';

export function Hero() {
  return (
    <PageHero
      title="Great Futures Start Here"
      description="Empowering young people to reach their full potential as productive, caring, responsible citizens."
      image="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=2000&q=80"
      height="full"
    >
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <Link
          to="/donate"
          className="group bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105"
        >
          Donate Now
          <ArrowRight className="inline-block ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          to="/programs"
          className="group bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/10 transition-all transform hover:scale-105"
        >
          Explore Programs
          <ArrowRight className="inline-block ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </PageHero>
  );
}