"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMenu, FiX, FiDownload, FiMail } from 'react-icons/fi';
import ThemeToggle from '../ThemeToggle';

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Services', path: '#services' },
    { name: 'Education', path: '#education' },
    { name: 'Contact', path: '#contact' },
  ];

  const socialLinks = [
    { icon: FiGithub, url: 'https://github.com/yourusername', name: 'GitHub' },
    { icon: FiLinkedin, url: 'https://linkedin.com/in/yourusername', name: 'LinkedIn' },
    { icon: FiMail, url: 'mailto:your.email@example.com', name: 'Email' }
  ];

  if (!isMounted) {
    return null; // Prevent hydration issues by not rendering anything on the server
  }

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-primary/90 backdrop-blur-md py-3 shadow-lg' 
            : 'bg-primary py-6'
        }`}
      >
        <div className="container mx-auto px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-2xl font-bold text-white hover:text-accent-coral transition-colors relative group z-10"
            >
              <span className="relative z-10">Portfolio</span>
              <motion.span 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-coral z-0"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              ></motion.span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <motion.div 
                className="flex items-center space-x-8"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    custom={index}
                    variants={navItemVariants}
                  >
                    <Link
                      href={item.path}
                      className={`relative px-2 py-1 text-base font-medium transition-all duration-300 ${
                        activeSection === item.path.replace('#', '')
                          ? 'text-accent-coral'
                          : 'text-white hover:text-accent-teal'
                      }`}
                    >
                      {item.name}
                      {activeSection === item.path.replace('#', '') && (
                        <motion.span
                          layoutId="activeSection"
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-coral"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.a
                href="/resume.pdf"
                download
                custom={navItems.length}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent-coral text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
              >
                Resume
                <FiDownload className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Social Links & Mobile Menu Button */}
            <div className="flex items-center space-x-6">
              <div className="hidden lg:flex items-center space-x-5">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={index}
                      custom={index}
                      variants={navItemVariants}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-accent-teal transition-all duration-300 transform hover:scale-110"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
              <ThemeToggle />
              <button 
                className="lg:hidden text-white hover:text-accent-coral transition-colors focus:outline-none z-50"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
              >
                <FiMenu className="w-7 h-7" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-primary shadow-xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full overflow-y-auto">
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <span className="text-xl font-bold text-white">Menu</span>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white hover:text-accent-coral transition-colors"
                    aria-label="Close menu"
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>
                
                <nav className="flex-1 p-6">
                  <div className="space-y-6">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block text-lg font-medium transition-colors ${
                          activeSection === item.path.replace('#', '')
                            ? 'text-accent-coral'
                            : 'text-white hover:text-accent-teal'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                    
                    <a
                      href="/resume.pdf"
                      download
                      className="btn btn-primary w-full mt-8"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Download Resume
                      <FiDownload className="w-5 h-5" />
                    </a>
                  </div>
                </nav>

                <div className="p-6 border-t border-white/10">
                  <div className="flex justify-center space-x-8">
                    {socialLinks.map((link, index) => {
                      const Icon = link.icon;
                      return (
                        <motion.a
                          key={index}
                          custom={index}
                          variants={navItemVariants}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-accent-teal transition-colors"
                        >
                          <Icon className="w-6 h-6" />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header; 