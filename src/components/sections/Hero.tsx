"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { navigateToSection } from '@/lib/utils/animation';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-primary pt-28 pb-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#7D9D9C_12%,transparent_12.5%,transparent_87%,#7D9D9C_87.5%,#7D9D9C_100%)] bg-[length:24px_24px]"></div>
      </div>
      
      <div className="container mx-auto px-8 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 space-y-8 text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-1 bg-accent-clay/30 text-white font-medium mb-2 rounded-full text-sm"
              >
                Data Scientist & ML Engineer
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-5xl md:text-6xl font-bold text-white leading-tight"
              >
                Hi, I'm{' '}
                <span className="text-accent-clay relative inline-block">
                  Kaivalya Dixit
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent-clay/50 rounded-full"></span>
                </span>
              </motion.h1>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-2xl md:text-3xl text-white font-semibold"
              >
                MS in Data Science
              </motion.h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
            >
              A passionate Data Scientist and ML Engineer with expertise in Python, Machine Learning, and Data Analysis. Currently pursuing my Master's in Data Science at NJIT.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4"
            >
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary w-full sm:w-auto"
              >
                Download Resume
                <FiDownload className="w-5 h-5" />
              </motion.a>
              
              <motion.button
                onClick={() => navigateToSection('projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline w-full sm:w-auto"
              >
                View Projects
                <FiArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full lg:w-1/2 flex justify-center items-center"
          >
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] xl:w-[500px] xl:h-[500px]">
              {/* Profile Image Container with simple border */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-lg z-10">
                <Image
                  src="/profile.jpeg"
                  alt="Profile"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero; 