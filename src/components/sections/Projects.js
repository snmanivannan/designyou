'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ProjectCard from '@/components/shared/ProjectCard'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'office', name: 'Office' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'residential', name: 'Residential' },
  ]
  
  // Sample project data - in a real app, this would come from a database
  const projectsData = [
    {
      id: 1,
      title: 'Modern Office Complex',
      category: 'office',
      description: 'Contemporary office design with open-plan layout and collaborative spaces.',
      location: 'Chennai, India',
      imageUrl: '/images/placeholder.jpg',
    },
    {
      id: 2,
      title: 'Luxury Residence',
      category: 'residential',
      description: 'High-end residential interior design with custom furniture and fixtures.',
      location: 'Bangalore, India',
      imageUrl: '/images/placeholder.jpg',
    },
    {
      id: 3,
      title: 'Retail Store Makeover',
      category: 'commercial',
      description: 'Complete renovation of retail space for improved customer experience.',
      location: 'Hyderabad, India',
      imageUrl: '/images/placeholder.jpg',
    },
    {
      id: 4,
      title: 'Tech Startup Headquarters',
      category: 'office',
      description: 'Creative office space designed for a growing technology company.',
      location: 'Chennai, India',
      imageUrl: '/images/placeholder.jpg',
    },
    {
      id: 5,
      title: 'Restaurant Interior',
      category: 'commercial',
      description: 'Elegant dining experience with attention to acoustics and ambiance.',
      location: 'Mumbai, India',
      imageUrl: '/images/placeholder.jpg',
    },
    {
      id: 6,
      title: 'Contemporary Apartment',
      category: 'residential',
      description: 'Space-efficient design for urban living with smart home integration.',
      location: 'Delhi, India',
      imageUrl: '/images/placeholder.jpg',
    },
  ]
  
  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory)
  
  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Projects</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Explore our portfolio of completed projects across various categories.
            Each project represents our commitment to excellence and innovation in design.
          </p>
        </div>
        
        {/* Category filter */}
        <div className="flex flex-wrap justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 mx-2 mb-3 rounded-full transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/projects"
            className="btn btn-primary inline-flex items-center"
          >
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}