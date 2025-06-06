import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  children?: ReactNode;
}

const SectionHeader = ({ title, subtitle, centered = true, children }: SectionHeaderProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-heading font-bold text-3xl md:text-4xl text-gray-800 mb-4"
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
      
      {children}
    </div>
  );
};

export default SectionHeader;