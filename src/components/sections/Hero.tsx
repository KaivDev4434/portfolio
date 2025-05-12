"use client"

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { navigateToSection } from '@/lib/utils/animation';

// Define fixed particles instead of random values to avoid hydration mismatch
const particles = [
  { id: 1, size: 15, left: "5%", top: "10%", yMove: 30, xMove: 20, duration: 12 },
  { id: 2, size: 20, left: "15%", top: "30%", yMove: -40, xMove: 30, duration: 15 },
  { id: 3, size: 10, left: "25%", top: "70%", yMove: 20, xMove: -20, duration: 18 },
  { id: 4, size: 18, left: "40%", top: "20%", yMove: -30, xMove: -30, duration: 14 },
  { id: 5, size: 12, left: "55%", top: "65%", yMove: 40, xMove: 20, duration: 16 },
  { id: 6, size: 16, left: "70%", top: "40%", yMove: -20, xMove: -40, duration: 13 },
  { id: 7, size: 14, left: "80%", top: "10%", yMove: 30, xMove: 30, duration: 17 },
  { id: 8, size: 22, left: "85%", top: "70%", yMove: -40, xMove: -20, duration: 19 },
  { id: 9, size: 11, left: "10%", top: "50%", yMove: 25, xMove: 25, duration: 14 },
  { id: 10, size: 19, left: "60%", top: "30%", yMove: -35, xMove: 35, duration: 16 },
];

const Hero = () => {
  // Use client-side rendering for the particles to avoid hydration mismatch
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-primary pt-28 pb-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#5F9EA0_12%,transparent_12.5%,transparent_87%,#5F9EA0_87.5%,#5F9EA0_100%)] bg-[length:24px_24px]"></div>
      </div>
      
      {/* Floating Particles - Only rendered client-side */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-accent-teal/30"
              style={{
                width: particle.size,
                height: particle.size,
                left: particle.left,
                top: particle.top,
              }}
              animate={{
                y: [0, particle.yMove, 0],
                x: [0, particle.xMove, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      )}

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
                className="inline-block px-4 py-1 bg-accent-teal/20 text-accent-teal rounded-full text-sm font-medium mb-2"
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
                <span className="text-accent-coral relative inline-block">
                  Kaivalya Dixit
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent-coral/50 rounded-full"></span>
                </span>
              </motion.h1>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-2xl md:text-3xl text-accent-teal font-semibold"
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
              {/* Background Elements */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-accent-coral/20 to-accent-teal/20 blur-2xl"></div>
              <motion.div 
                animate={{ 
                  rotate: [0, 360],
                }} 
                transition={{ 
                  duration: 200, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-2 rounded-full border-2 border-dashed border-accent-teal/20 z-0"
              ></motion.div>
              
              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl z-10">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-coral/20 to-accent-teal/20 z-10 mix-blend-overlay"></div>
                
                {/* Profile Image */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full relative"
                >
                  <Image
                    src="/profile.jpg"
                    alt="Profile"
                    width={600}
                    height={600}
                    className="object-cover w-full h-full"
                    priority
                  />
                </motion.div>
              </div>
              
              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-coral rounded-full blur-xl opacity-30 z-0"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute -top-8 -left-8 w-32 h-32 bg-accent-teal rounded-full blur-xl opacity-30 z-0"
              ></motion.div>
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