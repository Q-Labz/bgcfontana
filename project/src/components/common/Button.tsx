import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  fullWidth = false,
  onClick,
  type = 'button',
}: ButtonProps) => {
  // Base classes
  const baseClasses = 'inline-block rounded-md font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-3 text-base',
    lg: 'px-6 py-4 text-lg',
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'bg-secondary-400 text-gray-900 hover:bg-secondary-500 focus:ring-secondary-300',
    accent: 'bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-400',
    outline: 'bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
  };
  
  // Combine all classes
  const classes = `
    ${baseClasses} 
    ${sizeClasses[size]} 
    ${variantClasses[variant]}
    ${fullWidth ? 'w-full text-center' : ''}
    ${className}
  `;

  // Render as Link if 'to' prop is provided (internal link)
  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }
  
  // Render as anchor if 'href' prop is provided (external link)
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  
  // Render as button
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;