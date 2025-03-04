import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  speed = 0.5 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="h-full w-full">
        <img 
          src={src} 
          alt={alt} 
          className="h-full w-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default ParallaxImage;