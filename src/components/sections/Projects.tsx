"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'T-shirt Store LLM Chatbot',
    description: 'A web-based LLM chatbot that connects to a t-shirt store database and answers questions while referring to the database.',
    image: '/projects/tshirt-chatbot.jpg',
    technologies: ['Python', 'LLM', 'Web Development', 'Database'],
    github: 'https://github.com/KaivDev4434/tshirtDBLLM',
    demo: 'https://github.com/KaivDev4434/tshirtDBLLM',
  },
  {
    title: 'Neovim Configuration',
    description: 'Custom Neovim configuration with LSP, Linting, and Formatting support for Python, JavaScript, and Markdown.',
    image: '/projects/nvim-config.jpg',
    technologies: ['Lua', 'Neovim', 'LSP', 'Python'],
    github: 'https://github.com/KaivDev4434/NvimConfig',
    demo: 'https://github.com/KaivDev4434/NvimConfig',
  },
  {
    title: 'LeetCode Solutions',
    description: 'Collection of LeetCode problem solutions and explanations in Python.',
    image: '/projects/leetcode.jpg',
    technologies: ['Python', 'Algorithms', 'Data Structures'],
    github: 'https://github.com/KaivDev4434/LeetCode',
    demo: 'https://github.com/KaivDev4434/LeetCode',
  },
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
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
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary group-hover:text-accent-coral transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary text-white rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent-teal hover:text-accent-coral transition-colors group"
                  >
                    <FiGithub className="transform group-hover:rotate-12 transition-transform" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent-teal hover:text-accent-coral transition-colors group"
                  >
                    <FiExternalLink className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 