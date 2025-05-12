"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BlogPost } from '@/lib/blog';

interface BlogCardProps {
  blog: BlogPost;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-w-[300px] w-[350px] bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-[420px] snap-center"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <span className="text-xs text-gray-500">{blog.date}</span>
            <div className="flex ml-auto space-x-1">
              {blog.tags.slice(0, 2).map((tag, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 text-xs rounded-full bg-accent-sage/10 text-accent-sage"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-primary mb-2 line-clamp-2">
            {blog.title}
          </h3>
          
          <p className="text-gray-600 text-sm line-clamp-3 mb-4">
            {blog.excerpt}
          </p>
        </div>
        
        <Link href={`/blogs/${blog.slug}`}>
          <motion.div 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-2 text-center text-sm font-medium bg-accent-clay/10 text-accent-clay rounded-lg hover:bg-accent-clay/20 transition-all duration-300"
          >
            Read Article
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard; 