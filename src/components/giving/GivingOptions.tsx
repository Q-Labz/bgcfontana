import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, CreditCard } from 'lucide-react';

interface GivingOption {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const givingOptions: GivingOption[] = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Corporate Sponsorship",
    description: "Partner with us to make a significant impact in our community while enhancing your corporate social responsibility.",
    link: "/donate"
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Online Donations",
    description: "Make a secure online donation to support our programs and create opportunities for local youth.",
    link: "/donate"
  }
];

export function GivingOptions() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ways to Give</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every contribution makes a difference in the lives of our youth. 
            Choose the giving option that works best for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {givingOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white mb-4">
                {option.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
              <p className="text-gray-600 mb-4">{option.description}</p>
              <Link
                to={option.link}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}