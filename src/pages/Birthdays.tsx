import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cake, Check, ArrowRight, Star } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import ParallaxImage from '../components/ParallaxImage';
import VideoPlayer from '../components/VideoPlayer';
import FloatingElements from '../components/FloatingElements';

const Birthdays: React.FC = () => {
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
      name: "Kids Party",
      price: "$499",
      features: [
        "Theme-based decorations",
        "Balloon arrangements",
        "Party backdrop",
        "Table settings",
        "Basic lighting",
        "Setup and cleanup"
      ]
    },
    {
      name: "Teen Celebration",
      price: "$799",
      featured: true,
      features: [
        "All Kids Party features",
        "Custom backdrop design",
        "Premium balloons",
        "LED lighting effects",
        "Photo booth area",
        "Social media corner",
        "Party props"
      ]
    },
    {
      name: "Milestone Events",
      price: "$1,299",
      features: [
        "All Teen Celebration features",
        "Luxury decorations",
        "Floral arrangements",
        "Custom signage",
        "Lounge area setup",
        "Premium lighting",
        "Full venue styling",
        "Event coordination"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 to-secondary-800/80 z-10"></div>
        <ParallaxImage 
          src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
          alt="Birthday celebration" 
          className="absolute inset-0"
          speed={0.2}
        />
        
        <FloatingElements count={15}>
          <Star className="text-secondary-400/30 w-8 h-8" />
        </FloatingElements>
        
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
              <Cake className="h-12 w-12 text-secondary-200" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Birthday Celebrations
            </h1>
            
            <AnimatedText 
              text="Create unforgettable birthday memories with our magical decorations and themes"
              className="text-xl text-white/90 mb-8"
            />
            
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-secondary-600 hover:bg-secondary-700 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Book Your Celebration <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
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
                Making Every Birthday <span className="text-secondary-600">Special</span>
              </h2>
              <p className="text-gray-600 mb-6">
                From children's themed parties to milestone celebrations, we create stunning decorations that bring joy and excitement to every birthday. Our expert team works with you to design the perfect setting that matches your vision and exceeds expectations.
              </p>
              <p className="text-gray-600 mb-8">
                We handle everything from concept to execution, ensuring every detail is perfect for your special day. Whether it's a kid's fantasy theme or an elegant adult celebration, we make it memorable.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary-600 mr-2 mt-1" />
                  <span className="text-gray-700">Custom Themes</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary-600 mr-2 mt-1" />
                  <span className="text-gray-700">Balloon Art</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary-600 mr-2 mt-1" />
                  <span className="text-gray-700">Party Backdrops</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary-600 mr-2 mt-1" />
                  <span className="text-gray-700">Table Decorations</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary-600 mr-2 mt-1" />
                  <span className="text-gray-700">Lighting Design</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-secondary-600 mr-2 mt-1" />
                  <span className="text-gray-700">Photo Areas</span>
                </div>
              </div>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                Start Planning <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <ParallaxImage 
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Kids birthday" 
                className="rounded-lg h-64 md:h-80"
                speed={0.3}
              />
              <ParallaxImage 
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Adult birthday" 
                className="rounded-lg h-64 md:h-80 mt-8"
                speed={0.5}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span 
              className="text-secondary-600 font-medium uppercase tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Expertise
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mt-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Birthday Themes & Services
            </motion.h2>
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Discover our range of birthday decoration services tailored for every age and style.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Kids Birthday" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Kids Celebrations</h3>
                <p className="text-gray-600 mb-4">
                  Magical themes and colorful decorations for children's birthday parties that bring their dreams to life.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary-500 mr-2 mt-1" />
                    <span className="text-gray-700 text-sm">Character Themes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary-500 mr-2 mt-1" />
                    <span className="text-gray-700 text-sm">Interactive Elements</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary-500 mr-2 mt-1" />
                    <span className="text-gray-700 text-sm">Fun Activities</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1533294455009-a77b7557d2d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" 
                  alt="Teen Birthday" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Teen Celebrations</h3>
                <p className="text-gray-600 mb-4">
                  Trendy and stylish decorations for teen birthdays, including sweet sixteen celebrations and graduation parties.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary-500 mr-2 mt-1" />
                    <span className="text-gray-700 text-sm">Modern Aesthetics</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary-500 mr-2 mt-1" />
                    <span className="text-gray-700 text-sm">Photo-worthy Backdrops</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary-500 mr-2 mt-1" />
                    <span className="text-gray-700 text-sm">Custom Color Schemes</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Adult Birthday" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Adult Milestones</h3>
                <p className="text-gray-600 mb-4">
                  Elegant and sophisticated decorations for milestone adult birthdays and special celebrations.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary-500 mr-2 mt-1" />
                    <span className="text-gray-700 text-sm">Elegant Designs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary-500 mr-2 mt-1" />
                    <span className="text-gray-700 text-sm">Sophisticated Themes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-secondary-500 mr-2 mt-1" />
                    <span className="text-gray-700 text-sm">Personalized Touches</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <VideoPlayer 
                src="https://player.vimeo.com/external/370467553.sd.mp4?s=32ef1f185aadf64ecbca64a7129c7d5a5c233910&profile_id=164&oauth2_token_id=57447761" 
                poster="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                title="Birthday Celebration Magic"
              />
            </div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                See Our Birthday <span className="text-secondary-600">Magic</span> in Action
              </h2>
              <p className="text-gray-600 mb-6">
                Watch our showcase video to experience the joy and excitement we bring to birthday celebrations. From kids' parties to adult milestones, we create unforgettable moments.
              </p>
              <p className="text-gray-600 mb-8">
                Our team of creative designers and decorators work closely with you to bring your vision to life, ensuring every birthday is a magical celebration.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                Plan Your Party <ArrowRight className="ml-2 h-4 w-4" />
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
              className="text-secondary-600 font-medium uppercase tracking-wider"
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
              Birthday Decoration Packages
            </motion.h2>
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Choose from our carefully designed packages or contact us for a custom quote tailored to your celebration.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div 
                key={index}
                className={`rounded-xl overflow-hidden shadow-lg ${
                  pkg.featured ? 'border-2 border-secondary-500 relative' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {pkg.featured && (
                  <div className="absolute top-0 left-0 right-0 bg-secondary-500 text-white text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className={`p-8 bg-white ${pkg.featured ? 'pt-10' : ''}`}>
                  <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-secondary-600 mb-6">{pkg.price}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-secondary-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className={`block text-center py-3 px-6 rounded-full font-medium transition-colors ${
                      pkg.featured 
                        ? 'bg-secondary-600 hover:bg-secondary-700 text-white' 
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
      <section className="py-20 bg-secondary-600">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Plan Your Perfect Birthday Celebration?
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Contact us today to discuss your vision and let us create a magical birthday experience with our exceptional decoration services.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-secondary-600 hover:bg-white/90 px-8 py-3 rounded-full font-medium transition-colors duration-300 inline-block"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Birthdays;