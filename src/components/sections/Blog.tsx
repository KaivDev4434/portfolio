"use client"

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import BlogCard from '../BlogCard';
import { BlogPost } from '@/lib/blog';

type BlogProps = {
  blogPosts: BlogPost[];
};

const Blog = ({ blogPosts }: BlogProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="blog" className="py-20 bg-primary text-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light opacity-90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-4 relative"
        >
          Blog
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-accent-coral animate-draw-line"></span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Insights and thoughts on data science, machine learning, and AI
        </motion.p>

        <div className="relative">
          {/* Scroll buttons */}
          <div className="flex justify-between absolute top-1/2 left-0 right-0 -mt-6 px-4 md:px-10 pointer-events-none z-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full bg-primary-light shadow-lg flex items-center justify-center text-white hover:bg-accent-teal transition-colors pointer-events-auto focus:outline-none"
              aria-label="Scroll left"
            >
              <FiArrowLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-primary-light shadow-lg flex items-center justify-center text-white hover:bg-accent-teal transition-colors pointer-events-auto focus:outline-none"
              aria-label="Scroll right"
            >
              <FiArrowRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Blog cards container with horizontal scroll */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Left padding for visual balance */}
            <div className="pl-8 sm:pl-10 md:pl-12 lg:pl-20 shrink-0" />
            
            {/* Blog cards */}
            <div className="flex gap-6">
              {blogPosts.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
            
            {/* Right padding for visual balance */}
            <div className="pr-8 sm:pr-10 md:pr-12 lg:pr-20 shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog; 