import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { motion } from 'framer-motion';

const suggestedAmounts = [25, 50, 100, 250, 500];

interface DonationAmountProps {
  form: UseFormReturn<any>;
}

export function DonationAmount({ form }: DonationAmountProps) {
  const { register, watch, setValue } = form;
  const currentAmount = watch('amount');
  const frequency = watch('frequency');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Choose Your Donation Amount
        </h2>
        <p className="text-gray-600">
          Your generous donation helps us create great futures for young people in our community.
        </p>
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          Donation Frequency
        </label>
        <div className="flex gap-4">
          <label className="flex-1">
            <input
              type="radio"
              {...register('frequency')}
              value="one-time"
              className="sr-only"
            />
            <div
              className={`text-center p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                frequency === 'one-time'
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-200'
              }`}
            >
              One-time Gift
            </div>
          </label>
          <label className="flex-1">
            <input
              type="radio"
              {...register('frequency')}
              value="monthly"
              className="sr-only"
            />
            <div
              className={`text-center p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                frequency === 'monthly'
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-200'
              }`}
            >
              Monthly Giving
            </div>
          </label>
        </div>
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          Select Amount
        </label>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {suggestedAmounts.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => setValue('amount', amount)}
              className={`p-4 rounded-lg border-2 text-center transition-colors ${
                currentAmount === amount
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-200'
              }`}
            >
              ${amount}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Custom Amount
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500">$</span>
          </div>
          <input
            type="number"
            {...register('amount', { valueAsNumber: true })}
            className="pl-8 pr-4 py-2 w-full rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter amount"
            min="5"
          />
        </div>
      </div>

      {frequency === 'monthly' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 p-4 rounded-lg"
        >
          <p className="text-blue-800 text-sm">
            Your monthly donation will automatically renew each month. You can cancel at any time.
          </p>
        </motion.div>
      )}
    </div>
  );
}