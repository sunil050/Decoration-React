import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Weddings', path: '/weddings' },
    { name: 'Birthdays', path: '/birthdays' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Heart className="h-8 w-8 text-primary-600 mr-2" />
            <span className="font-cursive text-2xl font-bold text-primary-700">Eleganza Events</span>
          </Link>

          {/* Desktop Navigation */}
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={navVariants}
            className="hidden md:flex space-x-8"
          >
            {navLinks.map((link) => (
              <motion.li key={link.name} variants={itemVariants}>
                <Link
                  to={link.path}
                  className={`font-medium text-sm uppercase tracking-wider hover:text-primary-600 transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary-600 border-b-2 border-primary-600 pb-1'
                      : 'text-gray-700'
                  }`}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white"
      >
        <div className="container mx-auto px-4 py-4">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`block py-2 font-medium text-sm uppercase tracking-wider hover:text-primary-600 transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary-600'
                      : 'text-gray-700'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;