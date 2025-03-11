import { useState, useEffect } from 'react';

export function useHolidayClosure() {
  const [isClosurePeriod, setIsClosurePeriod] = useState(false);
  
  useEffect(() => {
    const checkClosurePeriod = () => {
      const now = new Date();
      const closureStart = new Date('2023-12-23');
      const closureEnd = new Date('2024-01-06');
      
      setIsClosurePeriod(now >= closureStart && now <= closureEnd);
    };
    
    checkClosurePeriod();
    // Check daily
    const interval = setInterval(checkClosurePeriod, 86400000);
    
    return () => clearInterval(interval);
  }, []);
  
  return isClosurePeriod;
}