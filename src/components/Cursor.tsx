import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Cursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    const handleMouseOver = () => setCursorVariant('hover');
    const handleMouseOut = () => setCursorVariant('default');

    const links = document.querySelectorAll('a, button');
    links.forEach((link) => {
      link.addEventListener('mouseover', handleMouseOver);
      link.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      links.forEach((link) => {
        link.removeEventListener('mouseover', handleMouseOver);
        link.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: 'rgba(236, 72, 153, 0.2)',
      mixBlendMode: 'difference' as const,
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: 'rgba(236, 72, 153, 0.4)',
      mixBlendMode: 'difference' as const,
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50 hidden md:block"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    />
  );
};

export default Cursor;