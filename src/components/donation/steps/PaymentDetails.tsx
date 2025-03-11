import React, { useEffect } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { CreditCard, Lock } from 'lucide-react';

interface PaymentDetailsProps {
  form: UseFormReturn<any>;
}

export function PaymentDetails({ form }: PaymentDetailsProps) {
  const { watch } = form;
  const amount = watch('amount');
  const frequency = watch('frequency');

  useEffect(() => {
    // Initialize Square payment form
    const initializeSquare = async () => {
      try {
        const payments = window.Square.payments('YOUR_SQUARE_APP_ID', 'YOUR_LOCATION_ID');
        const card = await payments.card();
        await card.attach('#card-container');
      } catch (error) {
        console.error('Failed to initialize Square:', error);
      }
    };

    // Load Square Web Payments SDK
    const script = document.createElement('script');
    script.src = 'https://sandbox.web.squarecdn.com/v1/square.js';
    script.onload = initializeSquare;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Payment Details
        </h2>
        <p className="text-gray-600">
          Your payment is secure and encrypted.
        </p>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="font-medium">Total Amount:</span>
          <span className="text-xl font-bold">
            ${amount} {frequency === 'monthly' ? '/month' : ''}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Lock className="w-4 h-4" />
          <span>Secure payment powered by Square</span>
        </div>

        <div className="p-4 border border-gray-200 rounded-lg">
          <div className="flex items-center mb-4">
            <CreditCard className="w-5 h-5 text-gray-400 mr-2" />
            <span className="font-medium">Card Information</span>
          </div>
          <div id="card-container" className="min-h-[100px]"></div>
        </div>
      </div>

      <div className="text-sm text-gray-500">
        <p>
          By proceeding with your donation, you agree to our terms of service and privacy policy.
          Your card will be charged {frequency === 'monthly' ? 'monthly' : 'once'} for the amount
          specified above.
        </p>
      </div>
    </div>
  );
}