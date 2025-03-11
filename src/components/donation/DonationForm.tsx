import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Heart, ArrowRight, ArrowLeft, CreditCard } from 'lucide-react';
import { DonationAmount } from './steps/DonationAmount';
import { PersonalInfo } from './steps/PersonalInfo';
import { PaymentDetails } from './steps/PaymentDetails';
import { DonationConfirmation } from './steps/DonationConfirmation';

const donationSchema = z.object({
  amount: z.number().min(5, 'Minimum donation amount is $5'),
  frequency: z.enum(['one-time', 'monthly']),
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  address: z.string().min(5, 'Address is required'),
  city: z.string().min(2, 'City is required'),
  state: z.string().length(2, 'Please select a state'),
  zipCode: z.string().length(5, 'Valid ZIP code required'),
  paymentMethod: z.object({
    nonce: z.string(),
    card: z.object({
      brand: z.string(),
      last4: z.string()
    })
  }).optional()
});

type DonationFormData = z.infer<typeof donationSchema>;

const steps = ['Amount', 'Personal Info', 'Payment', 'Confirmation'];

export function DonationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const form = useForm<DonationFormData>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      frequency: 'one-time',
      amount: 50
    }
  });

  const onSubmit = async (data: DonationFormData) => {
    setIsProcessing(true);
    try {
      // Here we would integrate with Square's payment API
      console.log('Processing donation:', data);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setCurrentStep(3); // Move to confirmation step
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="flex items-center justify-center mb-8">
        <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center">
          <Heart className="w-6 h-6 text-white" />
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          {steps.map((step, index) => (
            <React.Fragment key={step}>
              <div className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    index <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {index + 1}
                </div>
                <span className="ml-2 hidden md:inline text-sm font-medium">
                  {step}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 h-px bg-gray-200 mx-4" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            {currentStep === 0 && <DonationAmount form={form} />}
            {currentStep === 1 && <PersonalInfo form={form} />}
            {currentStep === 2 && <PaymentDetails form={form} />}
            {currentStep === 3 && <DonationConfirmation data={form.getValues()} />}
          </motion.div>
        </AnimatePresence>

        {currentStep < 3 && (
          <div className="flex justify-between mt-8 pt-6 border-t">
            {currentStep > 0 ? (
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center text-gray-600 hover:text-gray-800"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </button>
            ) : (
              <div />
            )}
            
            <button
              type={currentStep === 2 ? 'submit' : 'button'}
              onClick={currentStep < 2 ? nextStep : undefined}
              disabled={isProcessing}
              className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 disabled:opacity-50"
            >
              {isProcessing ? (
                'Processing...'
              ) : currentStep === 2 ? (
                <>
                  Complete Donation
                  <CreditCard className="w-4 h-4 ml-2" />
                </>
              ) : (
                <>
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </button>
          </div>
        )}
      </form>
    </div>
  );
}