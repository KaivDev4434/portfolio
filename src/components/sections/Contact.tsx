"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiMapPin } from 'react-icons/fi';

// Animation variants for consistent animations
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5,
      delay: custom * 0.1
    }
  })
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);

  // Contact information
  const contactInfo = [
    {
      icon: <FiMail className="w-6 h-6" />,
      title: 'Email',
      value: 'kaivalya.dixit@njit.edu',
      link: 'mailto:kaivalya.dixit@njit.edu'
    },
    {
      icon: <FiGithub className="w-6 h-6" />,
      title: 'GitHub',
      value: 'KaivDev4434',
      link: 'https://github.com/KaivDev4434'
    },
    {
      icon: <FiLinkedin className="w-6 h-6" />,
      title: 'LinkedIn',
      value: 'Kaivalya Dixit',
      link: 'https://linkedin.com/in/kaivalya-dixit'
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Newark, NJ',
      link: '#'
    }
  ];

  // Set mounted state after component mounts to prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);
    
    try {
      const response = await fetch('https://formspree.io/f/mkgjeeyr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Background and section content that doesn't have hydration issues
  const sectionBackground = (
    <>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#5F9EA0_12%,transparent_12.5%,transparent_87%,#5F9EA0_87.5%,#5F9EA0_100%)] bg-[length:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <motion.h2
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 relative text-primary"
        >
          Get In Touch
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent-coral animate-draw-line"></span>
        </motion.h2>
      </div>
    </>
  );

  if (!isMounted) {
    // Return just the background and section title during SSR
    return (
      <section id="contact" className="py-24 bg-background relative">
        {sectionBackground}
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Empty placeholder spaces to maintain layout */}
            <div className="h-96"></div>
            <div className="h-96"></div>
          </div>
        </div>
      </section>
    );
  }

  // Form succeeded state display
  if (formStatus === 'success') {
    return (
      <section id="contact" className="py-24 bg-background relative">
        {sectionBackground}
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <motion.div
                variants={cardVariants}
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                  <span className="gradient-text">Contact Information</span>
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div 
                      key={index}
                      variants={cardVariants}
                      custom={index + 1}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-accent-teal/10 flex items-center justify-center group-hover:bg-accent-teal/20 transition-colors duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">{info.title}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary font-medium hover:text-accent-teal transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-primary font-medium">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Success message */}
            <motion.div
              variants={cardVariants}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Message Sent!</h3>
                <p className="text-gray-600 mb-8">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="px-6 py-3 bg-accent-clay text-white rounded-lg hover:bg-accent-clay/90 transition-all duration-300"
                >
                  Send Another Message
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-background relative">
      {sectionBackground}

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              variants={cardVariants}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <span className="gradient-text">Contact Information</span>
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    variants={cardVariants}
                    custom={index + 1}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent-teal/10 flex items-center justify-center group-hover:bg-accent-teal/20 transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{info.title}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary font-medium hover:text-accent-teal transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-primary font-medium">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            variants={cardVariants}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-teal focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-teal focus:border-transparent outline-none transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-teal focus:border-transparent outline-none transition-all duration-300"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-teal focus:border-transparent outline-none transition-all duration-300 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {formStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-100 text-red-800 rounded-lg"
                >
                  There was an error sending your message. Please check the form and try again.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-8 rounded-lg font-medium inline-flex items-center justify-center gap-2 transition-all duration-300 mt-8 ${
                  isSubmitting 
                    ? 'bg-gray-400 text-white cursor-not-allowed' 
                    : 'bg-accent-clay text-white hover:bg-accent-clay/90'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FiSend className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1280px) {
          .container {
            padding: 0 2rem;
          }
        }
        
        @media (max-width: 768px) {
          .text-4xl {
            font-size: 2.5rem;
          }
          .p-8 {
            padding: 1.5rem;
          }
        }
        
        @media (max-width: 640px) {
          .container {
            padding: 0 1rem;
          }
          .gap-6 {
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact; 