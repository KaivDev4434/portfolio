"use client"

import React from 'react';
import { motion } from 'framer-motion';

type SectionTitleProps = {
  title: string;
  className?: string;
};

const SectionTitle = ({ title, className = '' }: SectionTitleProps) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`text-3xl font-bold text-center mb-12 relative ${className}`}
    >
      {title}
      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-accent-clay"></span>
    </motion.h2>
  );
};

export default SectionTitle; 