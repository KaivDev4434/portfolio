"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { FiDatabase, FiAward, FiBookOpen, FiTerminal, FiLayers, FiTrendingUp, FiActivity, FiSettings, FiServer, FiSearch, FiRefreshCw, FiUpload, FiArchive, FiPackage, FiTool, FiMessageCircle, FiLink } from 'react-icons/fi';
import { 
  SiPython, SiJavascript, SiTypescript, SiCplusplus, SiHtml5, SiLatex,
  SiPytorch, SiTensorflow, SiScikitlearn, SiKeras, SiNumpy, SiPandas, SiNvidia,
  SiAmazons3 as SiAws, SiDocker, SiGithub, SiReact, SiNextdotjs, SiNodedotjs, 
  SiFlask, SiSpringboot, SiStreamlit, SiPostgresql, SiMysql, SiMongodb, SiRedis,
  SiApachespark, SiApachehadoop, SiApachehive, SiDatabricks, SiTableau, SiPlotly,
  SiTailwindcss, SiBootstrap, SiOpenai
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { 
  TbDatabase, TbChartBar, TbCpu, TbBrain, TbRobot, TbEye, TbNetwork,
  TbMath, TbChartLine, TbBrandDocker, TbApi, TbChartDots3
} from 'react-icons/tb';

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
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 20,
    rotateY: 90
  },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    rotateY: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 400,
      delay: custom * 0.05,
      duration: 0.6
    }
  }),
  hover: {
    scale: 1.1,
    y: -5,
    rotateY: 10,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 300,
      duration: 0.3
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1
    }
  }
};

const skills = [
  // Programming Languages
  { name: 'Python', icon: SiPython, color: 'text-blue-500', bgColor: 'bg-blue-50' },
  { name: 'Java', icon: DiJava, color: 'text-red-600', bgColor: 'bg-red-50' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500', bgColor: 'bg-yellow-50' },
  { name: 'C/C++', icon: SiCplusplus, color: 'text-blue-700', bgColor: 'bg-blue-50' },
  { name: 'HTML/CSS', icon: SiHtml5, color: 'text-orange-500', bgColor: 'bg-orange-50' },
  { name: 'Shell Scripting', icon: FiTerminal, color: 'text-green-600', bgColor: 'bg-green-50' },
  { name: 'LaTeX', icon: SiLatex, color: 'text-gray-600', bgColor: 'bg-gray-50' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600', bgColor: 'bg-blue-50' },
  
  // Machine Learning & AI
  { name: 'PyTorch', icon: SiPytorch, color: 'text-red-500', bgColor: 'bg-red-50' },
  { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-500', bgColor: 'bg-orange-50' },
  { name: 'Scikit-learn', icon: SiScikitlearn, color: 'text-orange-600', bgColor: 'bg-orange-50' },
  { name: 'Keras', icon: SiKeras, color: 'text-red-600', bgColor: 'bg-red-50' },
  { name: 'XGBoost', icon: TbChartLine, color: 'text-green-600', bgColor: 'bg-green-50' },
  { name: 'OpenMP', icon: TbCpu, color: 'text-blue-600', bgColor: 'bg-blue-50' },
  { name: 'MPI', icon: TbNetwork, color: 'text-purple-600', bgColor: 'bg-purple-50' },
  { name: 'CUDA', icon: SiNvidia, color: 'text-green-500', bgColor: 'bg-green-50' },
  { name: 'LangChain', icon: FiLink, color: 'text-blue-500', bgColor: 'bg-blue-50' },
  { name: 'LlamaIndex', icon: FiSearch, color: 'text-purple-500', bgColor: 'bg-purple-50' },
  { name: 'OpenAI Gym', icon: SiOpenai, color: 'text-indigo-600', bgColor: 'bg-indigo-50' },
  { name: 'NLP', icon: FiMessageCircle, color: 'text-green-600', bgColor: 'bg-green-50' },
  { name: 'Deep Learning', icon: TbBrain, color: 'text-indigo-600', bgColor: 'bg-indigo-50' },
  { name: 'Neural Networks', icon: TbNetwork, color: 'text-pink-600', bgColor: 'bg-pink-50' },
  { name: 'Transformers', icon: TbRobot, color: 'text-purple-600', bgColor: 'bg-purple-50' },
  { name: 'CNNs', icon: TbEye, color: 'text-blue-600', bgColor: 'bg-blue-50' },
  { name: 'RNNs (LSTM/GRU)', icon: FiActivity, color: 'text-cyan-600', bgColor: 'bg-cyan-50' },
  { name: 'Transfer Learning', icon: FiUpload, color: 'text-emerald-600', bgColor: 'bg-emerald-50' },
  { name: 'Ensembling', icon: FiLayers, color: 'text-orange-600', bgColor: 'bg-orange-50' },
  { name: 'Multimodal Learning', icon: TbEye, color: 'text-violet-600', bgColor: 'bg-violet-50' },
  { name: 'AutoML', icon: TbRobot, color: 'text-teal-600', bgColor: 'bg-teal-50' },
  { name: 'Time Series Analysis', icon: TbChartLine, color: 'text-cyan-600', bgColor: 'bg-cyan-50' },
  { name: 'Reinforcement Learning', icon: TbBrain, color: 'text-rose-600', bgColor: 'bg-rose-50' },
  
  // Data Engineering & Analytics
  { name: 'SQL', icon: TbDatabase, color: 'text-blue-600', bgColor: 'bg-blue-50' },
  { name: 'PySpark', icon: SiApachespark, color: 'text-red-500', bgColor: 'bg-red-50' },
  { name: 'Hadoop', icon: SiApachehadoop, color: 'text-yellow-600', bgColor: 'bg-yellow-50' },
  { name: 'Pandas', icon: SiPandas, color: 'text-blue-500', bgColor: 'bg-blue-50' },
  { name: 'NumPy', icon: SiNumpy, color: 'text-blue-600', bgColor: 'bg-blue-50' },
  { name: 'MapReduce', icon: FiRefreshCw, color: 'text-orange-600', bgColor: 'bg-orange-50' },
  { name: 'Hive', icon: SiApachehive, color: 'text-orange-500', bgColor: 'bg-orange-50' },
  { name: 'ETL/ELT Pipelines', icon: FiSettings, color: 'text-slate-600', bgColor: 'bg-slate-50' },
  { name: 'Data Warehousing', icon: FiArchive, color: 'text-indigo-600', bgColor: 'bg-indigo-50' },
  { name: 'Data Lake', icon: TbDatabase, color: 'text-blue-700', bgColor: 'bg-blue-50' },
  { name: 'Feature Engineering', icon: FiTool, color: 'text-purple-600', bgColor: 'bg-purple-50' },
  { name: 'Statistical Analysis', icon: TbMath, color: 'text-emerald-600', bgColor: 'bg-emerald-50' },
  { name: 'Big Data', icon: TbDatabase, color: 'text-gray-600', bgColor: 'bg-gray-50' },
  
  // Data Visualization
  { name: 'Tableau', icon: SiTableau, color: 'text-orange-500', bgColor: 'bg-orange-50' },
  { name: 'Matplotlib', icon: TbChartBar, color: 'text-blue-500', bgColor: 'bg-blue-50' },
  { name: 'Seaborn', icon: TbChartLine, color: 'text-red-500', bgColor: 'bg-red-50' },
  { name: 'Plotly', icon: SiPlotly, color: 'text-purple-500', bgColor: 'bg-purple-50' },
  
  // Cloud & DevOps
  { name: 'AWS', icon: SiAws, color: 'text-orange-500', bgColor: 'bg-orange-50' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-500', bgColor: 'bg-blue-50' },
  { name: 'Apptainer', icon: FiPackage, color: 'text-blue-600', bgColor: 'bg-blue-50' },
  { name: 'Git/GitHub', icon: SiGithub, color: 'text-gray-700', bgColor: 'bg-gray-50' },
  { name: 'Databricks', icon: SiDatabricks, color: 'text-blue-600', bgColor: 'bg-blue-50' },
  { name: 'MLflow', icon: FiTrendingUp, color: 'text-purple-600', bgColor: 'bg-purple-50' },
  { name: 'Weights & Biases', icon: FiTrendingUp, color: 'text-orange-500', bgColor: 'bg-orange-50' },
  { name: 'CI/CD', icon: FiRefreshCw, color: 'text-green-600', bgColor: 'bg-green-50' },
  { name: 'Containerization', icon: TbBrandDocker, color: 'text-cyan-600', bgColor: 'bg-cyan-50' },
  
  // Frameworks & Tools
  { name: 'React', icon: SiReact, color: 'text-blue-500', bgColor: 'bg-blue-50' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-600', bgColor: 'bg-gray-50' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600', bgColor: 'bg-green-50' },
  { name: 'Flask', icon: SiFlask, color: 'text-gray-500', bgColor: 'bg-gray-50' },
  { name: 'Streamlit', icon: SiStreamlit, color: 'text-red-500', bgColor: 'bg-red-50' },
  { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-500', bgColor: 'bg-green-50' },
  { name: 'REST APIs', icon: TbApi, color: 'text-green-600', bgColor: 'bg-green-50' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500', bgColor: 'bg-cyan-50' },
  { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-500', bgColor: 'bg-purple-50' },
  { name: 'SLURM', icon: FiServer, color: 'text-gray-600', bgColor: 'bg-gray-50' },
  
  // Databases
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-600', bgColor: 'bg-blue-50' },
  { name: 'MySQL', icon: SiMysql, color: 'text-orange-500', bgColor: 'bg-orange-50' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600', bgColor: 'bg-green-50' },
  { name: 'Redis', icon: SiRedis, color: 'text-red-600', bgColor: 'bg-red-50' },
  { name: 'Data Modeling', icon: FiTool, color: 'text-purple-600', bgColor: 'bg-purple-50' },
  { name: 'Database Design', icon: TbDatabase, color: 'text-indigo-600', bgColor: 'bg-indigo-50' },
  { name: 'Query Optimization', icon: TbChartDots3, color: 'text-emerald-600', bgColor: 'bg-emerald-50' }
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
                  {skills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        custom={index}
                        variants={skillItemVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="group relative"
                      >
                        {/* Glow effect background */}
                        <motion.div 
                          className="absolute -inset-1 bg-gradient-to-r from-accent-coral to-accent-teal opacity-0 group-hover:opacity-30 rounded-full blur-sm transition-all duration-500"
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0, 0.3, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3
                          }}
                        />
                        
                        {/* Main skill badge */}
                        <motion.span 
                          className={`relative px-4 py-2 ${skill.bgColor} ${skill.color} rounded-full text-sm font-medium cursor-default inline-flex items-center gap-2 border border-gray-200 group-hover:border-gray-300 group-hover:shadow-lg backdrop-blur-sm`}
                          whileHover={{
                            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                            borderColor: "rgba(156, 163, 175, 0.5)"
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Icon with rotation animation */}
                          <motion.div
                            animate={{
                              rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 4
                            }}
                            whileHover={{
                              rotate: 360,
                              transition: { duration: 0.6 }
                            }}
                          >
                            <IconComponent className="w-4 h-4" />
                          </motion.div>
                          
                          {/* Text with subtle pulse */}
                          <motion.span
                            whileHover={{
                              scale: 1.05,
                              transition: { duration: 0.2 }
                            }}
                          >
                            {skill.name}
                          </motion.span>
                        </motion.span>
                        
                        {/* Floating particles effect */}
                        <motion.div
                          className="absolute top-0 left-0 w-full h-full pointer-events-none"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className={`absolute w-1 h-1 ${skill.color.replace('text-', 'bg-')} rounded-full`}
                              initial={{ 
                                x: 10 + i * 5, 
                                y: 10, 
                                opacity: 0 
                              }}
                              animate={{
                                y: [-5, -15, -5],
                                opacity: [0, 1, 0],
                                x: [10 + i * 5, 15 + i * 5, 10 + i * 5]
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.2
                              }}
                            />
                          ))}
                        </motion.div>
                      </motion.div>
                    );
                  })}
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