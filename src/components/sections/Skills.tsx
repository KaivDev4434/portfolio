"use client"

import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Programming',
    items: [
      { name: 'Python', level: 90 },
      { name: 'R', level: 85 },
      { name: 'SQL', level: 95 },
      { name: 'JavaScript', level: 80 },
    ],
  },
  {
    category: 'Machine Learning',
    items: [
      { name: 'TensorFlow', level: 85 },
      { name: 'PyTorch', level: 80 },
      { name: 'Scikit-learn', level: 90 },
      { name: 'Keras', level: 75 },
    ],
  },
  {
    category: 'Data Visualization',
    items: [
      { name: 'Tableau', level: 90 },
      { name: 'Matplotlib', level: 85 },
      { name: 'Seaborn', level: 80 },
      { name: 'Plotly', level: 75 },
    ],
  },
  {
    category: 'Cloud & Tools',
    items: [
      { name: 'AWS', level: 80 },
      { name: 'Docker', level: 75 },
      { name: 'Git', level: 90 },
      { name: 'Jupyter', level: 95 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-primary text-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light opacity-90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 relative"
        >
          Skills & Tools
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-accent-coral animate-draw-line"></span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-primary-light rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-accent-teal mb-6 flex items-center">
                <span className="w-2 h-2 bg-accent-coral rounded-full mr-3"></span>
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-accent-coral">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-primary/50 rounded-full overflow-hidden backdrop-blur-sm">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-accent-coral to-accent-teal rounded-full shadow-lg"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 