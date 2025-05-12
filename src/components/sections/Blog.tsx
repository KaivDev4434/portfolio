"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'Understanding Deep Learning Architectures',
    excerpt: 'A comprehensive guide to different neural network architectures and their applications in real-world problems.',
    date: 'March 15, 2023',
    image: '/blog/deep-learning.jpg',
    slug: 'understanding-deep-learning-architectures',
  },
  {
    title: 'Data Visualization Best Practices',
    excerpt: 'Learn how to create effective and insightful data visualizations that communicate your findings clearly.',
    date: 'February 28, 2023',
    image: '/blog/data-viz.jpg',
    slug: 'data-visualization-best-practices',
  },
  {
    title: 'Machine Learning Model Deployment',
    excerpt: 'A step-by-step guide to deploying machine learning models in production environments.',
    date: 'February 10, 2023',
    image: '/blog/deployment.jpg',
    slug: 'machine-learning-model-deployment',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-[#2A2D34] text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 relative"
        >
          Latest Blog Posts
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#FF6B6B]"></span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#3A3D44] rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="object-cover w-full h-full"
                  priority={index === 0}
                />
              </div>
              <div className="p-6">
                <span className="text-[#5F9EA0] text-sm">{post.date}</span>
                <h3 className="text-xl font-bold mt-2 mb-4 hover:text-[#FF6B6B] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[#FF6B6B] hover:text-[#5F9EA0] transition-colors font-medium"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block bg-[#FF6B6B] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#5F9EA0] transition-colors"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog; 