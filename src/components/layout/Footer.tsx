"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import Link from 'next/link';

const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-dark z-0"></div>
      
      {/* Scroll to Top Button */}
      <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 z-10">
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-full bg-accent-clay text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <FiArrowUp className="w-6 h-6" />
        </motion.button>
      </div>
      
      {/* Wave Separator */}
      <div className="absolute -top-1 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 text-primary-dark">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-primary-dark"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              <span className="text-accent-clay">Portfolio</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              A showcase of my work, skills, and experience in data science and machine learning.
              Building intelligent solutions for real-world problems.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/KaivDev4434"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-accent-sage transition-all duration-300 transform hover:scale-110"
              >
                <FiGithub className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/kaivalya-dixit-2a25851b9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-accent-sage transition-all duration-300 transform hover:scale-110"
              >
                <FiLinkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="mailto:kaivalyawork@gmail.com"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-accent-sage transition-all duration-300 transform hover:scale-110"
              >
                <FiMail className="w-5 h-5 text-white" />
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              <span className="text-accent-clay">Quick Links</span>
            </h3>
            <ul className="space-y-3">
              {["Home", "About", "Experience", "Projects", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-accent-clay flex items-center gap-2 hover-underline w-fit transition-colors duration-300"
                  >
                    <span className="w-2 h-2 bg-accent-clay rounded-full"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              <span className="text-accent-clay">Services</span>
            </h3>
            <ul className="space-y-3">
              {["Data Analysis", "Machine Learning", "Deep Learning", "Data Visualization", "Statistical Modeling", "Web Development", "System Administration", "Data Engineering"].map((service) => (
                <li key={service}>
                  <span className="text-gray-300 flex items-center gap-2 group">
                    <span className="w-2 h-2 bg-accent-sage rounded-full group-hover:bg-accent-clay transition-colors duration-300"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              <span className="text-accent-clay">Contact Info</span>
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <FiMail className="text-accent-clay w-5 h-5 flex-shrink-0" />
                <span>kaivalyawork@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent-clay text-xl flex-shrink-0">📱</span>
                <span>+1 862-215-1490</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent-clay text-xl flex-shrink-0">📍</span>
                <span>Newark, NJ</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-gray-700/50 text-center text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p>© {currentYear} Kaivalya Dixit. All rights reserved.</p>
          <p>Made with ❤️ using Next.js & Tailwind CSS</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 