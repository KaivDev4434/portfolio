"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiAward, FiExternalLink, FiBriefcase } from 'react-icons/fi';
import { IoSchoolOutline } from 'react-icons/io5';

// Define types for better type safety
type ExperienceItem = {
  type: 'experience';
  company: string;
  role: string;
  period: string;
  startDate: string;
  location: string;
  description: string[];
  tools: string[];
};

type EducationItem = {
  type: 'education';
  degree: string;
  school: string;
  period: string;
  startDate: string;
  location: string;
  gpa: string;
  description: string[];
  tools: string[];
};

type CertificationItem = {
  type: 'certification';
  title: string;
  issuer: string;
  period: string;
  startDate: string;
  location: string;
  certificateUrl: string;
  description: string[];
  tools: string[];
};

type TimelineItem = ExperienceItem | EducationItem | CertificationItem;

// Combined timeline items with chronological sorting
const timelineItems: TimelineItem[] = [
  {
    type: 'experience' as const,
    company: 'High Performance Computing',
    role: 'HPC User Support Specialist, Student Intern',
    period: 'Mar 2025 - May 2025',
    startDate: '2025-03',
    location: 'Remote',
    description: [
      'Support 400+ researchers with GPU/CPU performance tuning, containerization, and environment troubleshooting',
      'Developed an automated benchmark suite for node health using Slurm, Bash, and Python',
      'Provisioned 6 NVIDIA Grace Hopper nodes with InfiniBand, managing hardware setup and driver configurations'
    ],
    tools: ['Slurm', 'Bash', 'Python', 'GPU', 'InfiniBand', 'Containerization'],
  },
  {
    type: 'education' as const,
    degree: 'Master of Science in Data Science',
    school: 'New Jersey Institute of Technology',
    period: '2024 - 2025',
    startDate: '2024-08',
    location: 'Newark, NJ',
    gpa: '3.95/4.0',
    description: ['Pursuing advanced studies in machine learning, data engineering, and statistical modeling'],
    tools: ['Python', 'Machine Learning', 'Data Engineering', 'Statistics'],
  },
  {
    type: 'experience' as const,
    company: 'Dassault Systems',
    role: 'Data Analyst Intern',
    period: 'Jan 2023 - Jul 2023',
    startDate: '2023-01',
    location: 'Remote',
    description: [
      'Engineered Java-based ETL pipeline for Conversion Admin Service, processing enterprise-scale customer lifecycle data',
      'Designed interactive dashboard for license conversion tracking using internal visualization frameworks',
      'Automated data quality checks streams using SQL window functions and constraint validation'
    ],
    tools: ['Java', 'ETL', 'SQL', 'Data Visualization', 'Data Quality'],
  },
  {
    type: 'education' as const,
    degree: 'Bachelor of Technology in Electrical and Electronics Engineering',
    school: 'Mahindra Ecole Centrale',
    period: '2019 - 2023',
    startDate: '2019-08',
    location: 'Hyderabad, India',
    gpa: '3.6/4.0',
    description: ['Comprehensive engineering program with focus on electrical systems, electronics, and programming'],
    tools: ['C/C++', 'MATLAB', 'Circuit Design', 'Signal Processing'],
  },
  {
    type: 'certification' as const,
    title: 'Kaggle Introduction to Machine Learning',
    issuer: 'Kaggle',
    period: '2022',
    startDate: '2022-06',
    location: 'Online',
    certificateUrl: '/certificates/kaggle-ml.pdf',
    description: ['Completed comprehensive machine learning course covering supervised learning algorithms'],
    tools: ['Python', 'Scikit-learn', 'Pandas', 'Machine Learning'],
  },
].sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());


const Experience = () => {
  // Function to handle certificate clicks
  const handleCertificateClick = (cert: { title: string; issuer: string; date: string; certificateUrl: string }) => {
    window.open(cert.certificateUrl, '_blank');
  };

  // Function to get the appropriate icon for each timeline item type
  const getTimelineIcon = (type: string) => {
    switch (type) {
      case 'experience':
        return <FiBriefcase className="w-3 h-3" />;
      case 'education':
        return <IoSchoolOutline className="w-3 h-3" />;
      case 'certification':
        return <FiAward className="w-3 h-3" />;
      default:
        return <FiBriefcase className="w-3 h-3" />;
    }
  };

  // Function to get the appropriate color scheme for each type
  const getTypeColors = (type: string) => {
    switch (type) {
      case 'experience':
        return {
          icon: 'bg-accent-coral',
          accent: 'text-accent-coral',
          hover: 'group-hover:text-accent-coral',
          line: 'bg-accent-coral',
          highlight: 'border-accent-coral shadow-accent-coral/30',
          cardHighlight: 'hover:border-accent-coral/50',
          cardBg: 'bg-primary-light/95 hover:bg-primary-light hover:border-accent-coral',
          dotBg: 'bg-accent-coral',
          bulletBg: 'bg-accent-coral',
          tagHover: 'hover:bg-accent-coral'
        };
      case 'education':
        return {
          icon: 'bg-accent-sage',
          accent: 'text-accent-sage', 
          hover: 'group-hover:text-accent-sage',
          line: 'bg-accent-sage',
          highlight: 'border-accent-sage shadow-accent-sage/30',
          cardHighlight: 'hover:border-accent-sage/50',
          cardBg: 'bg-primary-light/95 hover:bg-primary-light hover:border-accent-sage',
          dotBg: 'bg-accent-sage',
          bulletBg: 'bg-accent-sage',
          tagHover: 'hover:bg-accent-sage'
        };
      case 'certification':
        return {
          icon: 'bg-accent-teal',
          accent: 'text-accent-teal',
          hover: 'group-hover:text-accent-teal',
          line: 'bg-accent-teal',
          highlight: 'border-accent-teal shadow-accent-teal/30',
          cardHighlight: 'hover:border-accent-teal/50',
          cardBg: 'bg-primary-light/95 hover:bg-primary-light hover:border-accent-teal',
          dotBg: 'bg-accent-teal',
          bulletBg: 'bg-accent-teal',
          tagHover: 'hover:bg-accent-teal'
        };
      default:
        return {
          icon: 'bg-accent-coral',
          accent: 'text-accent-coral',
          hover: 'group-hover:text-accent-coral',
          line: 'bg-accent-coral',
          highlight: 'border-accent-coral shadow-accent-coral/30',
          cardHighlight: 'hover:border-accent-coral/50',
          cardBg: 'bg-primary-light/95 hover:bg-primary-light hover:border-accent-coral',
          dotBg: 'bg-accent-coral',
          bulletBg: 'bg-accent-coral',
          tagHover: 'hover:bg-accent-coral'
        };
    }
  };

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
          Experience & Education
          <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-accent-coral animate-draw-line"></span>
        </motion.h2>

        <div className="relative max-w-7xl mx-auto">
          {/* Central timeline line - more prominent */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1.5 bg-gradient-to-b from-accent-coral via-accent-sage to-accent-teal shadow-lg hidden md:block"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent-coral via-accent-sage to-accent-teal hidden md:block"></div>
          
          {timelineItems.map((item, index) => {
            const colors = getTypeColors(item.type);
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative mb-12 md:mb-16"
              >
                {/* Desktop Layout */}
                <div className="hidden md:flex items-center">
                  {/* Left Card */}
                  <div className="w-1/2 pr-8">
                    {isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-right"
                      >
                        {/* Date and Type Badge */}
                        <div className="mb-4 flex justify-end">
                          <div className="text-right">
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${colors.icon} text-white text-sm font-semibold mb-2`}>
                              {getTimelineIcon(item.type)}
                              <span>{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</span>
                            </div>
                            <div className="flex items-center justify-end gap-2 text-gray-300">
                              <span className={`font-bold ${colors.accent} text-lg`}>{item.period}</span>
                              <FiCalendar className={`w-4 h-4 ${colors.accent}`} />
                            </div>
                          </div>
                        </div>

                        {/* Card Content */}
                        <motion.div 
                          className={`bg-primary-light/95 backdrop-blur-sm rounded-lg p-6 shadow-lg border-2 group hover:shadow-xl transition-all duration-300 ${
                            item.type === 'experience' ? 'border-white/10 hover:border-accent-coral hover:shadow-accent-coral/30' :
                            item.type === 'education' ? 'border-white/10 hover:border-accent-sage hover:shadow-accent-sage/30' :
                            'border-white/10 hover:border-accent-teal hover:shadow-accent-teal/30'
                          }`}
                          whileHover={{ scale: 1.02, y: -4 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Content based on type */}
                          {item.type === 'experience' && (() => {
                            const expItem = item as ExperienceItem;
                            return (
                              <>
                                <h3 className={`text-xl font-bold mb-2 group-hover:${colors.hover} transition-colors`}>
                                  {expItem.company}
                                </h3>
                                <h4 className={`${colors.accent} mb-4 font-medium`}>{expItem.role}</h4>
                              </>
                            );
                          })()}
                          
                          {item.type === 'education' && (() => {
                            const eduItem = item as EducationItem;
                            return (
                              <>
                                <h3 className={`text-xl font-bold mb-2 group-hover:${colors.hover} transition-colors leading-tight`}>
                                  {eduItem.degree}
                                </h3>
                                <h4 className={`${colors.accent} mb-3 font-medium`}>{eduItem.school}</h4>
                                <div className="mb-4">
                                  <span className="text-sm text-gray-300">GPA: <span className={`font-bold ${colors.accent}`}>{eduItem.gpa}</span></span>
                                </div>
                              </>
                            );
                          })()}
                          
                          {item.type === 'certification' && (() => {
                            const certItem = item as CertificationItem;
                            return (
                              <>
                                <div className="flex items-start justify-between mb-2">
                                  <h3 className={`text-xl font-bold group-hover:${colors.hover} transition-colors leading-tight flex-1`}>
                                    {certItem.title}
                                  </h3>
                                  <button
                                    onClick={() => handleCertificateClick({ 
                                      title: certItem.title, 
                                      issuer: certItem.issuer, 
                                      date: certItem.period, 
                                      certificateUrl: certItem.certificateUrl 
                                    })}
                                    className={`${colors.accent} hover:text-white transition-colors ml-3`}
                                  >
                                    <FiExternalLink className="w-5 h-5" />
                                  </button>
                                </div>
                                <h4 className={`${colors.accent} mb-4 font-medium`}>{certItem.issuer}</h4>
                              </>
                            );
                          })()}

                          {/* Location */}
                          <div className="flex items-center justify-end gap-2 mb-4">
                            <span className="text-gray-300 text-sm font-medium">{item.location}</span>
                            <FiMapPin className={`w-4 h-4 ${colors.accent}`} />
                          </div>

                          {/* Description */}
                          <div className="space-y-3 mb-6">
                            <p className="text-gray-300 text-sm leading-relaxed text-left">
                              {item.description?.join(' ')}
                            </p>
                          </div>

                          {/* Tools/Technologies */}
                          <div className="flex flex-wrap gap-2 justify-end">
                            {item.tools?.map((tool, i) => (
                              <span
                                key={i}
                                className={`px-3 py-1.5 bg-primary/60 rounded-full text-xs text-gray-300 hover:text-white border border-transparent hover:border-white/20 transition-all duration-300 font-medium ${
                                  item.type === 'experience' ? 'hover:bg-accent-coral' :
                                  item.type === 'education' ? 'hover:bg-accent-sage' :
                                  'hover:bg-accent-teal'
                                }`}
                              >
                                {tool}
                              </span>
                            ))}
                          </div>

                          {/* Certificate click hint */}
                          {item.type === 'certification' && (
                            <div className="mt-3 text-xs text-gray-500 flex items-center justify-end gap-1">
                              <span>View certificate</span>
                              <FiExternalLink className="w-3 h-3" />
                            </div>
                          )}
                        </motion.div>
                      </motion.div>
                    )}
                  </div>

                  {/* Center - Timeline dot */}
                  <div className="relative z-20 flex-shrink-0">
                    <motion.div 
                      className={`w-6 h-6 rounded-full ${colors.icon} shadow-xl border-4 border-primary flex items-center justify-center`}
                      whileHover={{ scale: 1.3 }}
                      transition={{ duration: 0.2 }}
                    >
                      {getTimelineIcon(item.type)}
                    </motion.div>
                    {/* Connecting line to card - very short */}
                    <div className={`absolute top-1/2 ${isLeft ? 'right-full' : 'left-full'} w-3 h-0.5 opacity-50 transform -translate-y-1/2 ${
                      item.type === 'experience' ? 'bg-accent-coral' :
                      item.type === 'education' ? 'bg-accent-sage' :
                      'bg-accent-teal'
                    }`}></div>
                  </div>

                  {/* Right Card */}
                  <div className="w-1/2 pl-8">
                    {!isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-left"
                      >
                        {/* Date and Type Badge */}
                        <div className="mb-4">
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${colors.icon} text-white text-sm font-semibold mb-2`}>
                            {getTimelineIcon(item.type)}
                            <span>{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <FiCalendar className={`w-4 h-4 ${colors.accent}`} />
                            <span className={`font-bold ${colors.accent} text-lg`}>{item.period}</span>
                          </div>
                        </div>

                        {/* Card Content */}
                        <motion.div 
                          className={`bg-primary-light/95 backdrop-blur-sm rounded-lg p-6 shadow-lg border-2 group hover:shadow-xl transition-all duration-300 ${
                            item.type === 'experience' ? 'border-white/10 hover:border-accent-coral hover:shadow-accent-coral/30' :
                            item.type === 'education' ? 'border-white/10 hover:border-accent-sage hover:shadow-accent-sage/30' :
                            'border-white/10 hover:border-accent-teal hover:shadow-accent-teal/30'
                          }`}
                          whileHover={{ scale: 1.02, y: -4 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Content based on type */}
                          {item.type === 'experience' && (() => {
                            const expItem = item as ExperienceItem;
                            return (
                              <>
                                <h3 className={`text-xl font-bold mb-2 group-hover:${colors.hover} transition-colors`}>
                                  {expItem.company}
                                </h3>
                                <h4 className={`${colors.accent} mb-4 font-medium`}>{expItem.role}</h4>
                              </>
                            );
                          })()}
                          
                          {item.type === 'education' && (() => {
                            const eduItem = item as EducationItem;
                            return (
                              <>
                                <h3 className={`text-xl font-bold mb-2 group-hover:${colors.hover} transition-colors leading-tight`}>
                                  {eduItem.degree}
                                </h3>
                                <h4 className={`${colors.accent} mb-3 font-medium`}>{eduItem.school}</h4>
                                <div className="mb-4">
                                  <span className="text-sm text-gray-300">GPA: <span className={`font-bold ${colors.accent}`}>{eduItem.gpa}</span></span>
                                </div>
                              </>
                            );
                          })()}
                          
                          {item.type === 'certification' && (() => {
                            const certItem = item as CertificationItem;
                            return (
                              <>
                                <div className="flex items-start justify-between mb-2">
                                  <h3 className={`text-xl font-bold group-hover:${colors.hover} transition-colors leading-tight flex-1`}>
                                    {certItem.title}
                                  </h3>
                                  <button
                                    onClick={() => handleCertificateClick({ 
                                      title: certItem.title, 
                                      issuer: certItem.issuer, 
                                      date: certItem.period, 
                                      certificateUrl: certItem.certificateUrl 
                                    })}
                                    className={`${colors.accent} hover:text-white transition-colors ml-3`}
                                  >
                                    <FiExternalLink className="w-5 h-5" />
                                  </button>
                                </div>
                                <h4 className={`${colors.accent} mb-4 font-medium`}>{certItem.issuer}</h4>
                              </>
                            );
                          })()}

                          {/* Location */}
                          <div className="flex items-center gap-2 mb-4">
                            <FiMapPin className={`w-4 h-4 ${colors.accent}`} />
                            <span className="text-gray-300 text-sm font-medium">{item.location}</span>
                          </div>

                          {/* Description */}
                          <div className="space-y-3 mb-6">
                            <p className="text-gray-300 text-sm leading-relaxed text-left">
                              {item.description?.join(' ')}
                            </p>
                          </div>

                          {/* Tools/Technologies */}
                          <div className="flex flex-wrap gap-2">
                            {item.tools?.map((tool, i) => (
                              <span
                                key={i}
                                className={`px-3 py-1.5 bg-primary/60 rounded-full text-xs text-gray-300 hover:text-white border border-transparent hover:border-white/20 transition-all duration-300 font-medium ${
                                  item.type === 'experience' ? 'hover:bg-accent-coral' :
                                  item.type === 'education' ? 'hover:bg-accent-sage' :
                                  'hover:bg-accent-teal'
                                }`}
                              >
                                {tool}
                              </span>
                            ))}
                          </div>

                          {/* Certificate click hint */}
                          {item.type === 'certification' && (
                            <div className="mt-3 text-xs text-gray-500 flex items-center gap-1">
                              <FiExternalLink className="w-3 h-3" />
                              <span>View certificate</span>
                            </div>
                          )}
                        </motion.div>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden">
                  <div className="flex items-start gap-6">
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 relative">
                      <motion.div 
                        className={`w-5 h-5 rounded-full ${colors.icon} shadow-lg border-3 border-primary flex items-center justify-center mt-2`}
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      >
                        {getTimelineIcon(item.type)}
                      </motion.div>
                      {/* Vertical line for mobile */}
                      {index < timelineItems.length - 1 && (
                        <div className="absolute left-1/2 top-8 w-0.5 h-16 bg-gradient-to-b from-accent-coral via-accent-sage to-accent-teal opacity-30 transform -translate-x-1/2"></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      {/* Date and Type Badge */}
                      <div className="mb-4">
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${colors.icon} text-white text-sm font-semibold mb-2`}>
                          {getTimelineIcon(item.type)}
                          <span>{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <FiCalendar className="w-4 h-4" />
                          <span className={`font-bold ${colors.accent} text-lg`}>{item.period}</span>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="bg-primary-light/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/10">
                        {/* Content based on type */}
                        {item.type === 'experience' && (() => {
                          const expItem = item as ExperienceItem;
                          return (
                            <>
                              <h3 className={`text-lg font-bold mb-2 group-hover:${colors.hover} transition-colors`}>
                                {expItem.company}
                              </h3>
                              <h4 className={`${colors.accent} mb-3 font-medium text-sm`}>{expItem.role}</h4>
                            </>
                          );
                        })()}
                        
                        {item.type === 'education' && (() => {
                          const eduItem = item as EducationItem;
                          return (
                            <>
                              <h3 className={`text-lg font-bold mb-2 group-hover:${colors.hover} transition-colors leading-tight`}>
                                {eduItem.degree}
                              </h3>
                              <h4 className={`${colors.accent} mb-2 font-medium text-sm`}>{eduItem.school}</h4>
                              <div className="mb-3">
                                <span className="text-xs text-gray-300">GPA: <span className={`font-bold ${colors.accent}`}>{eduItem.gpa}</span></span>
                              </div>
                            </>
                          );
                        })()}
                        
                        {item.type === 'certification' && (() => {
                          const certItem = item as CertificationItem;
                          return (
                            <>
                              <div className="flex items-start justify-between mb-2">
                                <h3 className={`text-lg font-bold group-hover:${colors.hover} transition-colors leading-tight flex-1`}>
                                  {certItem.title}
                                </h3>
                                <button
                                  onClick={() => handleCertificateClick({ 
                                    title: certItem.title, 
                                    issuer: certItem.issuer, 
                                    date: certItem.period, 
                                    certificateUrl: certItem.certificateUrl 
                                  })}
                                  className={`${colors.accent} hover:text-white transition-colors ml-2`}
                                >
                                  <FiExternalLink className="w-4 h-4" />
                                </button>
                              </div>
                              <h4 className={`${colors.accent} mb-3 font-medium text-sm`}>{certItem.issuer}</h4>
                            </>
                          );
                        })()}

                        {/* Location */}
                        <div className="flex items-center gap-2 mb-3">
                          <FiMapPin className="w-3 h-3 text-gray-400" />
                          <span className="text-gray-300 text-xs">{item.location}</span>
                        </div>

                        {/* Description - mobile condensed */}
                        <div className="mb-3">
                          <p className="text-gray-300 text-xs leading-relaxed text-left">
                            {item.description?.slice(0, 2).join(' ')}
                            {item.description && item.description.length > 2 && (
                              <span className="text-gray-400 italic"> ...and {item.description.length - 2} more achievements</span>
                            )}
                          </p>
                        </div>

                        {/* Tools/Technologies - mobile condensed */}
                        <div className="flex flex-wrap gap-1">
                          {item.tools?.slice(0, 5).map((tool, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 bg-primary/60 rounded text-xs text-gray-300"
                            >
                              {tool}
                            </span>
                          ))}
                          {item.tools && item.tools.length > 5 && (
                            <span className="px-2 py-0.5 bg-primary/40 rounded text-xs text-gray-400">
                              +{item.tools.length - 5}
                            </span>
                          )}
                        </div>

                        {/* Certificate click hint */}
                        {item.type === 'certification' && (
                          <div className="mt-2 text-xs text-gray-500 flex items-center gap-1">
                            <FiExternalLink className="w-3 h-3" />
                            <span>View certificate</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience; 