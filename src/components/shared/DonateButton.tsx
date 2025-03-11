import React from 'react';
import { cn } from '../../lib/utils';

interface DonateButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  href?: string;
}

export function DonateButton({ 
  className,
  variant = 'primary',
  size = 'md',
  icon,
  href = '/donate'
}: DonateButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-colors rounded-full";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
    >
      {icon && <span className="mr-2">{icon}</span>}
      Donate Today
    </a>
  );
}