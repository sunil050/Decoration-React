import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Check, ArrowRight } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import ParallaxImage from '../components/ParallaxImage';
import VideoPlayer from '../components/VideoPlayer';

const Weddings: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const packages = [
    {
      name: "Elegant Essentials",
      price: "$1,999",
      features: [
        "Ceremony backdrop decoration",
        "Aisle decorations",
        "Entrance decor",
        "Head table setup",
        "Basic floral arrangements",
        "Consultation and planning"
      ]
    },
    {
      name: "Luxe Romance",
      price: "$3,499",
      featured: true,
      features: [
        "All Elegant Essentials features",
        "Premium floral arrangements",
        "Ceiling installations",
        "Table centerpieces",
        "Lighting design",
        "Chair decorations",
        "Cake table styling"
      ]
    },
    {
      name: "Royal Celebration",
      price: "$5,999",
      features: [
        "All Luxe Romance features",
        "Custom design concept",
        "Premium floral installations",
        "Lounge area setup",
        "Photo booth backdrop",
        "Complete venue transformation",
        "Day-of coordination",
        "Personalized details"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/80 z-10"></div>
        <ParallaxImage 
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Wedding decoration" 
          className="absolute inset-0"
          speed={0.2}
        />
        
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 inline-block"
            >
              <Heart className="h-12 w-12 text-primary-200" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Wedding Decorations
            </h1>
            
            <AnimatedText 
              text="Transform your special day into a magical celebration with our exquisite wedding decorations"
              className="text-xl text-white/90 mb-8"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Creating <span className="text-primary-600">Unforgettable</span> Wedding Experiences
              </h2>
              <p className="text-gray-600 mb-6">
                At Eleganza Events, we understand that your wedding day is one of the most important days of your life. Our expert team of designers and decorators work closely with you to bring your vision to life, creating a stunning atmosphere that reflects your unique love story.
              </p>
              <p className="text-gray-600 mb-8">
                From intimate ceremonies to grand celebrations, we offer comprehensive decoration services tailored to your style, theme, and budget. Our attention to detail ensures that every element of your wedding decor is perfect, creating a cohesive and beautiful environment for your special day.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 mr-2 mt-1" />
                  <span className="text-gray-700">Custom Floral Designs</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 mr-2 mt-1" />
                  <span className="text-gray-700">Elegant Backdrops</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 mr-2 mt-1" />
                  <span className="text-gray-700">Table Centerpieces</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 mr-2 mt-1" />
                  <span className="text-gray-700">Lighting Design</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 mr-2 mt-1" />
                  <span className="text-gray-700">Ceiling Installations</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 mr-2 mt-1" />
                  <span className="text-gray-700">Aisle Decorations</span>
                </div>
              </div>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <ParallaxImage 
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Wedding decoration" 
                className="rounded-lg h-64 md:h-80"
                speed={0.3}
              />
              <ParallaxImage 
                src="https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80" 
                alt="Wedding flowers" 
                className="rounded-lg h-64 md:h-80 mt-8"
                speed={0.5}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span 
              className="text-primary-600 font-medium uppercase tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Work
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mt-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Wedding Decoration Gallery
            </motion.h2>
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Browse through our portfolio of stunning wedding decorations and get inspired for your special day.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
              "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
              "https://images.unsplash.com/photo-1507504031003-b417219a0fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            ].map((src, index) => (
              <motion.div 
                key={index}
                className="overflow-hidden rounded-lg shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={src} 
                    alt={`Wedding decoration ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/gallery" 
              className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
            >
              View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <VideoPlayer 
                src="https://player.vimeo.com/external/328428416.sd.mp4?s=39df9f60fdeaeff0f4620c5394bf583cca4e3c1d&profile_id=164&oauth2_token_id=57447761" 
                poster="https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
                title="Elegant Wedding Decorations"
              />
            </div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                See Our <span className="text-primary-600">Wedding Magic</span> in Action
              </h2>
              <p className="text-gray-600 mb-6">
                Watch our showcase video to experience the beauty and elegance of our wedding decorations. From intimate ceremonies to grand receptions, we create stunning environments that reflect your unique love story.
              </p>
              <p className="text-gray-600 mb-8">
                Our team of experienced designers and decorators work closely with you to bring your vision to life, ensuring that every detail is perfect for your special day.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span 
              className="text-primary-600 font-medium uppercase tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Packages
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mt-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Wedding Decoration Packages
            </motion.h2>
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Choose from our carefully designed packages or contact us for a custom quote tailored to your specific needs.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div 
                key={index}
                className={`rounded-xl overflow-hidden shadow-lg ${
                  pkg.featured ? 'border-2 border-primary-500 relative' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {pkg.featured && (
                  <div className="absolute top-0 left-0 right-0 bg-primary-500 text-white text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className={`p-8 bg-white ${pkg.featured ? 'pt-10' : ''}`}>
                  <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-primary-600 mb-6">{pkg.price}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className={`block text-center py-3 px-6 rounded-full font-medium transition-colors ${
                      pkg.featured 
                        ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Dream Wedding?
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Contact us today to discuss your vision and let us bring it to life with our exceptional decoration services.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-primary-600 hover:bg-white/90 px-8 py-3 rounded-full font-medium transition-colors duration-300 inline-block"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Weddings;