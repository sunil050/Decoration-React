import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-primary-400 mr-2" />
              <span className="font-cursive text-xl font-bold text-white">Eleganza Events</span>
            </div>
            <p className="text-gray-400 mb-6">
              Creating magical moments and unforgettable celebrations for your special occasions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/weddings" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Wedding Decorations
                </Link>
              </li>
              <li>
                <Link to="/birthdays" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Birthday Celebrations
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Wedding Decorations</li>
              <li className="text-gray-400">Birthday Parties</li>
              <li className="text-gray-400">Corporate Events</li>
              <li className="text-gray-400">Floral Arrangements</li>
              <li className="text-gray-400">Custom Themes</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-primary-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Celebration Ave, Dream City, DC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-primary-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">info@eleganzaevents.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Eleganza Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;