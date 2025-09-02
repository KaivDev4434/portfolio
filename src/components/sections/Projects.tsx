"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'RL Vacuum Cleaner',
    description: 'A reinforcement learning project implementing various vacuum cleaner agents with different capabilities including basic coverage, dynamic environment navigation, prioritized cleaning, and vision-based navigation.',
    image: '/projects/rl-vacuum.png',
    technologies: ['Python', 'Reinforcement Learning', 'Computer Vision', 'Robotics', 'AI'],
    github: 'https://github.com/RL-cleaning-rob-cont-action-space/rl_vaccuum_cleaner',
  },
  {
    title: 'Traffic Flow Forecasting (TFF)',
    description: 'A hybrid spatiotemporal graph network model combining GNN, ARIMA, and LSTM for traffic flow forecasting. Features transfer learning across different cities and theoretical error bounds.',
    image: '/projects/traffic-flow.png',
    technologies: ['Python', 'Deep Learning', 'GNN', 'LSTM', 'ARIMA', 'Transfer Learning'],
    github: 'https://github.com/Traffic-flow-forcasting/TFF',
  },
  {
    title: 'Custom Distributed ML Framework',
    description: 'A custom distributed machine learning framework implementing various distributed algorithms and optimization techniques for large-scale model training.',
    image: '/projects/distributed-ml.jpg',
    technologies: ['Python', 'Distributed Systems', 'Machine Learning', 'Parallel Computing', 'Optimization'],
    github: 'https://github.com/KaivDev4434/Custom-Distributed-Machine-Learning-Framework',
  },
  // {
  //   title: 'Neovim Configuration',
  //   description: 'A modern Neovim configuration optimized for Python, JavaScript, and Markdown development. Features LSP support, advanced linting, formatting, and a beautiful UI with custom keybindings.',
  //   image: '/projects/nvim-config.jpg',
  //   technologies: ['Lua', 'Neovim', 'LSP', 'Python', 'JavaScript'],
  //   github: 'https://github.com/KaivDev4434/NvimConfig',
  //   demo: 'https://github.com/KaivDev4434/NvimConfig',
  // },
  // {
  //   title: 'LeetCode Solutions',
  //   description: 'A comprehensive collection of LeetCode problem solutions in Python, featuring detailed explanations, time complexity analysis, and multiple approaches for each problem.',
  //   image: '/projects/leetcode.jpg',
  //   technologies: ['Python', 'Algorithms', 'Data Structures', 'Problem Solving'],
  //   github: 'https://github.com/KaivDev4434/LeetCode',
  //   demo: 'https://github.com/KaivDev4434/LeetCode',
  // },
  // {
  //   title: 'Portfolio Website',
  //   description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features smooth animations, dark mode, and a blog system.',
  //   image: '/projects/portfolio.jpg',
  //   technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  //   github: 'https://github.com/KaivDev4434/portfolio',
  //   demo: 'https://kaivalyadixit.com',
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 relative text-primary"
        >
          Featured Projects
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-accent-coral"></span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer block"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={400}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FiGithub className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary group-hover:text-accent-coral transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary text-white rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 