"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiAward, FiBook, FiExternalLink } from 'react-icons/fi';
import Link from 'next/link';

const education = [
  {
    degree: 'Master of Science in Data Science',
    school: 'New Jersey Institute of Technology',
    period: '2023 - Present',
    location: 'Newark, NJ',
    thesis: 'Machine Learning Applications in Healthcare',
    gpa: '3.8/4.0',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'Previous University',
    period: '2019 - 2023',
    location: 'Location',
    thesis: 'Data Structures and Algorithms',
    gpa: '3.7/4.0',
  },
];

const certifications = [
  {
    title: 'Machine Learning Specialization',
    issuer: 'Coursera',
    date: '2023',
    certificateUrl: '/certificates/machine-learning-cert.pdf'
  },
  {
    title: 'Deep Learning Specialization',
    issuer: 'Coursera',
    date: '2023',
    certificateUrl: '/certificates/deep-learning-cert.pdf'
  },
  {
    title: 'Data Science Professional Certificate',
    issuer: 'IBM',
    date: '2022',
    certificateUrl: '/certificates/data-science-cert.pdf'
  },
];

const Education = () => {
  // This function handles certificate clicks with a placeholder alert since we don't have real PDFs yet
  const handleCertificateClick = (cert: typeof certifications[0]) => {
    // In a real implementation, this would open the PDF
    // For now, just show an alert
    alert(`Opening certificate: ${cert.title}\nThis is a placeholder for the PDF file that would open at ${cert.certificateUrl}`);
  };

  return (
    <section id="education" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 relative text-primary"
        >
          Education & Certifications
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-accent-clay animate-draw-line"></span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8 flex items-center">
              <FiBook className="mr-3 text-accent-sage" />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <FiCalendar className="text-accent-sage" />
                    <span className="font-bold text-accent-clay">{edu.period}</span>
                    <FiMapPin className="text-accent-sage ml-4" />
                    <span className="text-gray-600">{edu.location}</span>
                  </div>
                  <h4 className="text-xl font-bold text-primary group-hover:text-accent-clay transition-colors duration-300 mb-2">
                    {edu.degree}
                  </h4>
                  <h5 className="text-lg text-accent-sage mb-2">{edu.school}</h5>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-start gap-2">
                      <span className="font-semibold min-w-[4rem]">Thesis:</span>
                      <span>{edu.thesis}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-semibold min-w-[4rem]">GPA:</span>
                      <span className="text-accent-clay font-semibold">{edu.gpa}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-8 flex items-center">
              <FiAward className="mr-3 text-accent-sage" />
              Certifications
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  onClick={() => handleCertificateClick(cert)}
                >
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-bold text-primary group-hover:text-accent-clay transition-colors duration-300 mb-2">
                      {cert.title}
                    </h4>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCertificateClick(cert);
                      }}
                      className="text-accent-clay hover:text-accent-sage transition-colors"
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-accent-sage">{cert.issuer}</span>
                    <span className="text-gray-600 bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {cert.date}
                    </span>
                  </div>
                  <div className="mt-4 text-sm text-gray-500 flex items-center gap-1">
                    <FiExternalLink className="w-3 h-3" /> Click to view certificate
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 