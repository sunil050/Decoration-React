import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Heart, Calendar, Star, ArrowRight, Sparkles } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import VideoPlayer from '../components/VideoPlayer';
import ParallaxImage from '../components/ParallaxImage';
import FloatingElements from '../components/FloatingElements';

const Home: React.FC = () => {
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        
        <FloatingElements count={15}>
          <Heart className="text-primary-400/30 w-8 h-8" />
        </FloatingElements>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
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
              <Sparkles className="h-12 w-12 text-primary-400 mx-auto" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="font-cursive text-primary-400">Eleganza</span> Events
            </h1>
            
            <AnimatedText 
              text="Creating Magical Moments for Your Special Celebrations"
              className="text-xl md:text-2xl text-white/90 mb-8"
            />
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                to="/weddings" 
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
              >
                Wedding Decorations
              </Link>
              <Link 
                to="/birthdays" 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
              >
                Birthday Celebrations
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
        >
          <ArrowRight className="h-8 w-8 text-white transform rotate-90" />
        </motion.div>
      </section>

      {/* About Section */}
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
                Turning Dreams into <span className="text-primary-600">Unforgettable</span> Celebrations
              </h2>
              <p className="text-gray-600 mb-6">
                At Eleganza Events, we specialize in creating breathtaking decorations for weddings, birthdays, and special events. Our team of creative designers transforms ordinary spaces into extraordinary experiences, tailored to your unique vision and style.
              </p>
              <p className="text-gray-600 mb-8">
                With meticulous attention to detail and a passion for perfection, we craft magical environments that captivate your guests and create lasting memories. From elegant weddings to vibrant birthday celebrations, we bring your dreams to life.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <ParallaxImage 
                src="https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80" 
                alt="Wedding decoration" 
                className="rounded-lg h-64 md:h-80"
                speed={0.3}
              />
              <ParallaxImage 
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Birthday celebration" 
                className="rounded-lg h-64 md:h-80 mt-8"
                speed={0.5}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={servicesRef}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span 
              className="text-primary-600 font-medium uppercase tracking-wider"
              initial={{ opacity: 0 }}
              animate={servicesInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Services
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mt-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Exceptional Decoration Services
            </motion.h2>
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              From intimate gatherings to grand celebrations, we offer a range of decoration services to make your event truly special.
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              variants={fadeInUp}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" 
                  alt="Wedding Decoration" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Heart className="h-5 w-5 text-primary-500 mr-2" />
                  <h3 className="font-bold text-lg">Wedding Decorations</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Transform your wedding venue into a romantic paradise with our elegant and customized decoration services.
                </p>
                <Link 
                  to="/weddings" 
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              variants={fadeInUp}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Birthday Celebration" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-5 w-5 text-primary-500 mr-2" />
                  <h3 className="font-bold text-lg">Birthday Celebrations</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Create unforgettable birthday memories with our vibrant and personalized decoration themes for all ages.
                </p>
                <Link 
                  to="/birthdays" 
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              variants={fadeInUp}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Special Events" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-primary-500 mr-2" />
                  <h3 className="font-bold text-lg">Special Events</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  From corporate gatherings to anniversary celebrations, we create stunning decorations for every special occasion.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-20 bg-white">
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
              See Our Magic in Action
            </motion.h2>
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Watch our showcase videos to experience the beauty and creativity of our decoration services.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <VideoPlayer 
              src="https://player.vimeo.com/external/328428416.sd.mp4?s=39df9f60fdeaeff0f4620c5394bf583cca4e3c1d&profile_id=164&oauth2_token_id=57447761" 
              poster="https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
              title="Elegant Wedding Decorations"
            />
            <VideoPlayer 
              src="https://player.vimeo.com/external/370467553.sd.mp4?s=32ef1f185aadf64ecbca64a7129c7d5a5c233910&profile_id=164&oauth2_token_id=57447761" 
              poster="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              title="Vibrant Birthday Celebrations"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        ref={testimonialsRef}
        className="py-20 bg-texture bg-cover bg-fixed"
      >
        {/* <div className="bg-black/60 absolute inset-0"></div> */}
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span 
              className="text-primary-400 font-medium uppercase tracking-wider"
              initial={{ opacity: 0 }}
              animate={testimonialsInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              Testimonials
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              What Our Clients Say
            </motion.h2>
            <motion.p 
              className="text-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Hear from our satisfied clients about their experience with our decoration services.
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent-400 mr-1" fill="#fbbf24" />
                ))}
              </div>
              <p className="text-white/90 mb-6 italic">
                "Eleganza Events transformed our wedding venue into a magical paradise. Every detail was perfect, and our guests couldn't stop talking about the beautiful decorations."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" 
                    alt="Sarah Johnson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-white">Sarah Johnson</h4>
                  <p className="text-white/60 text-sm">Wedding Client</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent-400 mr-1" fill="#fbbf24" />
                ))}
              </div>
              <p className="text-white/90 mb-6 italic">
                "The birthday party decorations were absolutely stunning! My daughter was thrilled with the princess theme, and everything was executed perfectly. Highly recommend!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" 
                    alt="Michael Rodriguez" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-white">Michael Rodriguez</h4>
                  <p className="text-white/60 text-sm">Birthday Party Client</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent-400 mr-1" fill="#fbbf24" />
                ))}
              </div>
              <p className="text-white/90 mb-6 italic">
                "Working with Eleganza Events was a dream. They took our vision and elevated it beyond our expectations. The attention to detail and creativity was outstanding."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80" 
                    alt="Emily Chen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-white">Emily Chen</h4>
                  <p className="text-white/60 text-sm">Corporate Event Client</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
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
              Ready to Create Your Dream Celebration?
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Contact us today to discuss your vision and let us bring it to life with our exceptional decoration services.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-primary-600 hover:bg-white/90 px-8 py-3 rounded-full font-medium transition-colors duration-300 inline-block"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;