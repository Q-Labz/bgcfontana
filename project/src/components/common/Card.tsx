import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = ({ children, className = '', hover = false }: CardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`
        bg-white rounded-lg shadow-md overflow-hidden 
        ${hover ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1' : ''} 
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default Card;