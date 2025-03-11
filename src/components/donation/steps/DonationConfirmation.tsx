import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DonationConfirmationProps {
  data: {
    amount: number;
    frequency: string;
    firstName: string;
    lastName: string;
    email: string;
  };
}

export function DonationConfirmation({ data }: DonationConfirmationProps) {
  return (
    <div className="text-center space-y-6">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center"
      >
        <CheckCircle2 className="w-8 h-8 text-green-600" />
      </motion.div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Thank You for Your Donation!
        </h2>
        <p className="text-gray-600">
          Your generous contribution of ${data.amount} {data.frequency === 'monthly' ? 'per month ' : ''}
          will help create great futures for youth in our community.
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="font-semibold mb-4">Donation Details</h3>
        <dl className="space-y-2 text-sm">
          <div className="flex justify-between">
            <dt>Amount:</dt>
            <dd className="font-medium">${data.amount}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Frequency:</dt>
            <dd className="font-medium capitalize">{data.frequency}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Donor Name:</dt>
            <dd className="font-medium">{data.firstName} {data.lastName}</dd>
          </div>
        </dl>
      </div>

      <div className="space-y-4">
        <button className="flex items-center justify-center w-full bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
          <Download className="w-4 h-4 mr-2" />
          Download Receipt
        </button>

        <Link
          to="/"
          className="inline-block text-blue-600 hover:text-blue-700"
        >
          Return to Homepage
        </Link>
      </div>

      <div className="text-sm text-gray-500">
        <p>
          A confirmation email has been sent to {data.email}. Please check your inbox
          for your donation receipt and additional information.
        </p>
      </div>
    </div>
  );
}