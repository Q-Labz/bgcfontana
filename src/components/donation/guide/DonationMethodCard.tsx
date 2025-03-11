import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../../lib/utils';

interface DonationMethodProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  minAmount?: string;
  processingTime?: string;
  taxInfo?: string;
  link: string;
  index: number;
}

export function DonationMethodCard({
  title,
  description,
  icon,
  benefits,
  minAmount,
  processingTime,
  taxInfo,
  link,
  index
}: DonationMethodProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>

        <p className="text-gray-600 mb-4">{description}</p>

        <div className="space-y-4 mb-6">
          <div className="space-y-2">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-700">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {(minAmount || processingTime || taxInfo) && (
            <div className="border-t pt-4 space-y-2">
              {minAmount && (
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Minimum Amount:</span> {minAmount}
                </p>
              )}
              {processingTime && (
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Processing Time:</span> {processingTime}
                </p>
              )}
              {taxInfo && (
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Tax Information:</span> {taxInfo}
                </p>
              )}
            </div>
          )}
        </div>

        <Link
          to={link}
          className={cn(
            "inline-flex items-center gap-2 text-blue-600 hover:text-blue-700",
            "font-medium group"
          )}
        >
          Learn More
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}