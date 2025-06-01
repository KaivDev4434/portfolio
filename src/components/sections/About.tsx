"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiBarChart2, FiAward, FiBookOpen } from 'react-icons/fi';

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const skillItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.3,
      delay: custom * 0.03
    }
  })
};

const skills = [
  // Programming
  'Python', 'JavaScript', 'SQL', 'Java', 'C', 'C++', 'Shell Scripting', 'HTML', 'CSS',
  
  // Machine Learning
  'TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'LangChain', 'LlamaIndex',
  
  // Data Visualization
  'Tableau', 'Matplotlib', 'Seaborn', 'Plotly', 'Pandas',
  
  // Cloud & Tools
  'AWS', 'Docker', 'Git', 'Jupyter', 'Linux', 'SLURM',
  
  // Additional Skills
  'Machine Learning', 'Deep Learning', 'Data Analysis', 'Statistical Analysis',
  'NLP', 'Computer Vision', 'Time Series Analysis', 'Big Data', 'Neural Networks',
  'ETL', 'Data Quality', 'GPU Computing', 'InfiniBand', 'Containerization'
];

const funFacts = [
  {
    icon: <FiAward className="w-8 h-8" />,
    text: 'HPC Expertise',
    description: 'Specialized in GPU computing and high-performance computing infrastructure'
  },
  {
    icon: <FiDatabase className="w-8 h-8" />,
    text: 'Data Engineering',
    description: 'Built enterprise-scale ETL pipelines and data quality systems'
  },
  {
    icon: <FiBookOpen className="w-8 h-8" />,
    text: 'Research & Development',
    description: 'Contributing to cutting-edge ML and distributed computing projects'
  },
  // {
  //   icon: <FiCode className="w-8 h-8" />,
  //   text: 'Open Source',
  //   description: 'Active contributor to ML frameworks and distributed systems'
  // }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 animated-bg opacity-5"></div>

      <div className="container mx-auto px-8 relative z-10 max-w-7xl">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About Me
          </motion.h2>

          <div className="grid grid-cols-12 gap-8 lg:gap-12">
            {/* Bio Section */}
            <motion.div
              variants={itemVariants}
              className="col-span-12 lg:col-span-5 space-y-8"
            >
              <motion.div 
                variants={itemVariants}
                className="card p-8"
              >
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                  <span className="gradient-text">Who I Am</span>
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  I am a Data Science graduate student at New Jersey Institute of Technology (NJIT) with a strong focus on high-performance computing, distributed systems, and machine learning. My experience spans from developing enterprise-scale ETL pipelines to managing HPC infrastructure and GPU computing environments.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg mt-4">
                  Currently working as an HPC User Support Specialist, I help researchers optimize their computational workflows and manage advanced GPU clusters. My technical expertise includes distributed machine learning, data engineering, and system administration, with a particular interest in building scalable AI solutions and high-performance computing infrastructure.
                </p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="card p-8"
              >
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                  <span className="gradient-text">Fun Facts</span>
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  {funFacts.map((fact, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="icon-box"
                    >
                      <span className="text-accent-teal flex-shrink-0 w-12 h-12 rounded-full bg-accent-teal/10 flex items-center justify-center transition-colors duration-300">
                        {fact.icon}
                      </span>
                      <div>
                        <h4 className="font-semibold text-lg text-primary group-hover:text-accent-coral transition-colors duration-300">
                          {fact.text}
                        </h4>
                        <p className="text-gray-600 mt-1">
                          {fact.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              variants={itemVariants}
              className="col-span-12 lg:col-span-7"
            >
              <motion.div 
                variants={itemVariants}
                className="card p-8 h-full"
              >
                <h3 className="text-2xl font-bold text-primary mb-8 flex items-center">
                  <span className="gradient-text">Technical Skills</span>
                </h3>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      custom={index}
                      variants={skillItemVariants}
                      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                      className="group"
                    >
                      <span className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-accent-teal transition-all duration-300 cursor-default inline-block shadow-sm">
                        {skill}
                      </span>
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-coral to-accent-teal opacity-0 group-hover:opacity-20 rounded-full blur transition duration-300"></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1280px) {
          .container {
            padding: 0 2rem;
          }
          .gap-12 {
            gap: 2rem;
          }
        }
        
        @media (max-width: 1024px) {
          .grid-cols-12 {
            grid-template-columns: 1fr;
          }
          .col-span-5,
          .col-span-7 {
            grid-column: span 12;
          }
        }
        
        @media (max-width: 768px) {
          .text-4xl {
            font-size: 2.5rem;
          }
          .text-2xl {
            font-size: 1.5rem;
          }
          .p-8 {
            padding: 1.5rem;
          }
        }
        
        @media (max-width: 640px) {
          .container {
            padding: 0 1rem;
          }
          .gap-6 {
            gap: 1rem;
          }
          .px-6 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About; 