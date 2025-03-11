import React from 'react';
import { 
  CreditCard, 
  Mail, 
  Phone, 
  Building2, 
  Briefcase,
  Heart,
  Users,
  Calendar
} from 'lucide-react';
import { DonationMethodCard } from './DonationMethodCard';

const donationMethods = [
  {
    title: "Online Giving",
    description: "Make a secure online donation using your credit card or bank account.",
    icon: <CreditCard className="w-6 h-6" />,
    benefits: [
      "Immediate processing",
      "Secure payment gateway",
      "Option for recurring donations",
      "Instant tax receipt"
    ],
    minAmount: "$5",
    processingTime: "Instant",
    taxInfo: "Tax-deductible, receipt provided immediately",
    link: "/donate/online"
  },
  {
    title: "Mail-in Donations",
    description: "Send your contribution by mail using check or money order.",
    icon: <Mail className="w-6 h-6" />,
    benefits: [
      "Traditional giving method",
      "No processing fees",
      "Personal touch",
      "Check or money order accepted"
    ],
    processingTime: "5-7 business days",
    taxInfo: "Tax receipt mailed within 2 weeks",
    link: "/donate/mail"
  },
  {
    title: "Phone/Text Donations",
    description: "Make a donation by phone or text message.",
    icon: <Phone className="w-6 h-6" />,
    benefits: [
      "Convenient giving options",
      "Personal assistance available",
      "Quick and easy process",
      "Support team guidance"
    ],
    minAmount: "$10",
    processingTime: "1-2 business days",
    taxInfo: "Tax receipt sent via email or mail",
    link: "/donate/phone"
  },
  {
    title: "Stock & Securities",
    description: "Donate appreciated securities or stock to maximize your impact.",
    icon: <Briefcase className="w-6 h-6" />,
    benefits: [
      "Tax-efficient giving",
      "Avoid capital gains tax",
      "Professional handling",
      "Maximum charitable impact"
    ],
    minAmount: "Contact for details",
    processingTime: "3-5 business days",
    taxInfo: "Special tax advantages available",
    link: "/donate/securities"
  },
  {
    title: "Monthly Giving Club",
    description: "Join our sustaining donor program with monthly contributions.",
    icon: <Calendar className="w-6 h-6" />,
    benefits: [
      "Exclusive member benefits",
      "Special recognition",
      "Regular impact updates",
      "Simplified giving"
    ],
    minAmount: "$10/month",
    processingTime: "Monthly on chosen date",
    taxInfo: "Annual tax summary provided",
    link: "/donate/monthly"
  },
  {
    title: "Corporate Partnerships",
    description: "Create a meaningful partnership through corporate giving.",
    icon: <Building2 className="w-6 h-6" />,
    benefits: [
      "Customized partnership options",
      "Employee engagement",
      "Marketing opportunities",
      "Community impact"
    ],
    minAmount: "Contact for details",
    processingTime: "Varies by program",
    taxInfo: "Corporate tax benefits available",
    link: "/donate/corporate"
  },
  {
    title: "Memorial Gifts",
    description: "Honor a loved one through a memorial or tribute gift.",
    icon: <Heart className="w-6 h-6" />,
    benefits: [
      "Personalized recognition",
      "Family notification",
      "Lasting tribute",
      "Optional recurring memorial gifts"
    ],
    minAmount: "$25",
    processingTime: "1-2 business days",
    taxInfo: "Fully tax-deductible",
    link: "/donate/memorial"
  },
  {
    title: "Matching Gifts",
    description: "Double your impact through employer matching gift programs.",
    icon: <Users className="w-6 h-6" />,
    benefits: [
      "Double your donation",
      "Employer participation",
      "Easy verification process",
      "Increased impact"
    ],
    processingTime: "Varies by employer",
    taxInfo: "Both gifts are tax-deductible",
    link: "/donate/matching"
  }
];

export function DonationGuide() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {donationMethods.map((method, index) => (
            <DonationMethodCard
              key={method.title}
              {...method}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}