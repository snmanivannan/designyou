'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGlobe, FaMobile, FaPuzzlePiece, FaChrome } from 'react-icons/fa'

export default function SoftwareProjects() {
  const projects = [
    {
      id: 1,
      title: "Dining Paper Roll",
      description: "A comprehensive e-commerce platform for ordering paper products for restaurants and hospitality businesses.",
      type: "Website",
      icon: <FaGlobe className="text-3xl text-green-500" />,
      url: "https://www.diningpaperroll.com/",
      technologies: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      id: 2,
      title: "Lotus Trading Company",
      description: "Corporate website and product catalog for a trading company with e-commerce functionality.",
      type: "Website",
      icon: <FaGlobe className="text-3xl text-green-500" />,
      url: "https://lotustradingcompany.in/",
      technologies: ["Next.js", "Tailwind CSS", "Strapi CMS"]
    },
    {
      id: 3,
      title: "TradingView History Tracker",
      description: "Chrome extension for traders to track and analyze their TradingView history and patterns.",
      type: "Chrome Extension",
      icon: <FaChrome className="text-3xl text-green-500" />,
      url: "https://chromewebstore.google.com/detail/tradingview-history-track/ibcpkeflilobhmhphlabfiefdcebmdal?hl=en",
      technologies: ["JavaScript", "Chrome API", "Data Visualization"]
    },
    {
      id: 4,
      title: "Lotus Trading Company App",
      description: "Mobile application for customers to browse products, place orders, and track deliveries.",
      type: "Mobile App",
      icon: <FaMobile className="text-3xl text-green-500" />,
      url: "https://play.google.com/store/apps/details?id=com.happyhearts.lotustradingcompany&hl=en_IN",
      technologies: ["React Native", "Firebase", "Redux"]
    }
  ];

  return (
    <section className="py-20 bg-white" id="software-projects">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Software Solutions</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Beyond interior design, we create custom software solutions for businesses. 
            From websites to mobile apps, we deliver technology that drives growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    {project.icon}
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-2">
                      {project.type}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Visit Project
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-2" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/contact" 
            className="btn btn-primary inline-flex items-center"
          >
            Discuss Your Software Project
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}