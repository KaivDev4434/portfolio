"use client"

import React from 'react';
import { motion, Variant } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right';

interface MotionWrapperProps {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
}

const directionVariants: Record<Direction, { hidden: Variant; visible: Variant }> = {
  up: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
};

const MotionWrapper = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: MotionWrapperProps) => {
  const variants = directionVariants[direction];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper; 