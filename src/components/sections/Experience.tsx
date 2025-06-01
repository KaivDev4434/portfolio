"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    company: 'High Performance Computing',
    role: 'HPC User Support Specialist, Student Intern',
    period: 'Mar 2025 - May 2025',
    location: 'Remote',
    description: [
      'Support 400+ researchers with GPU/CPU performance tuning, containerization, and environment troubleshooting',
      'Developed an automated benchmark suite for node health using Slurm, Bash, and Python',
      'Provisioned 6 NVIDIA Grace Hopper nodes with InfiniBand, managing hardware setup and driver configurations'
    ],
    tools: ['Slurm', 'Bash', 'Python', 'GPU', 'InfiniBand', 'Containerization'],
  },
  {
    company: 'Dassault Systems',
    role: 'Data Analyst Intern',
    period: 'Jan 2023 - Jul 2023',
    location: 'Remote',
    description: [
      'Engineered Java-based ETL pipeline for Conversion Admin Service, processing enterprise-scale customer lifecycle data',
      'Designed interactive dashboard for license conversion tracking using internal visualization frameworks',
      'Automated data quality checks streams using SQL window functions and constraint validation'
    ],
    tools: ['Java', 'ETL', 'SQL', 'Data Visualization', 'Data Quality'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-primary text-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light opacity-90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 relative"
        >
          Experience
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-accent-coral animate-draw-line"></span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-accent-teal opacity-20"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 ${index % 2 === 0 ? 'md:ml-auto md:mr-1/2' : 'md:mr-auto md:ml-1/2'} md:w-1/2`}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent-coral shadow-lg shadow-accent-coral/50"></div>
              <div className={`p-6 rounded-lg ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'} bg-primary-light backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 group`}>
                <div className="flex items-center gap-4 mb-4">
                  <FiCalendar className="text-accent-teal" />
                  <span className="font-bold text-accent-coral">{exp.period}</span>
                  <FiMapPin className="text-accent-teal ml-4" />
                  <span className="text-gray-300">{exp.location}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent-coral transition-colors">
                  {exp.company}
                </h3>
                <h4 className="text-accent-teal mb-4">{exp.role}</h4>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-coral mt-2 flex-shrink-0"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary rounded-lg text-sm text-gray-300 hover:text-white hover:bg-accent-teal transition-colors duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 