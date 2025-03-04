import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElementsProps {
  count?: number;
  children: React.ReactNode;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ count = 10, children }) => {
  const elements = Array.from({ length: count }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((i) => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const randomDelay = Math.random() * 2;
        const randomDuration = 3 + Math.random() * 6;
        const randomScale = 0.5 + Math.random() * 0.5;

        return (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: `${randomX}%`, 
              y: `${randomY}%`, 
              scale: randomScale,
              opacity: 0 
            }}
            animate={{ 
              y: [`${randomY}%`, `${randomY - 20}%`, `${randomY}%`],
              rotate: [0, 10, -10, 0],
              opacity: [0, 1, 1, 0] 
            }}
            transition={{ 
              duration: randomDuration, 
              delay: randomDelay,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut'
            }}
          >
            {children}
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingElements;