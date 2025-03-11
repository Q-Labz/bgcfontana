import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PrimaryCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-xl p-8 text-white"
    >
      <h3 className="text-2xl font-bold mb-4">Transform a Child's Future Today</h3>
      <p className="text-blue-100 mb-6">
        Your support helps us provide essential programs and services to youth in our community.
        Join us in making a difference that lasts a lifetime.
      </p>
      <Link
        to="/donate"
        className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors group"
      >
        Make Your Impact
        <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}