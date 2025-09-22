"use client"

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const menuVariants = {
    hidden: {
      x: '100%',
    },
    visible: {
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.3,
      },
    },
    exit: {
      x: '100%',
      transition: {
        type: 'tween',
        duration: 0.3,
      },
    },
  };

  const navItems = [
    'Home',
    'About',
    'Experience',
    'Projects',
    'Blog',
    'Contact',
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 h-full w-64 bg-[#2A2D34] text-white z-50 p-6"
          >
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="text-white p-2 hover:text-[#FF6B6B] transition-colors"
              >
                <FiX size={24} />
              </button>
            </div>
            <nav className="mt-8">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="block py-2 hover:text-[#5F9EA0] transition-colors text-lg"
                      onClick={onClose}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu; 