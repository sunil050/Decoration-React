import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Weddings from './pages/Weddings';
import Birthdays from './pages/Birthdays';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Cursor from './components/Cursor';

function App() {
  return (
    <Router>
      <div className="relative overflow-hidden bg-white">
        <Cursor />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weddings" element={<Weddings />} />
            <Route path="/birthdays" element={<Birthdays />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;