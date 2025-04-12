'use client'

import { FaBuilding, FaHome, FaStore, FaClipboardCheck, FaPaintRoller, FaChair } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: <FaBuilding className="text-4xl text-blue-600" />,
      title: 'Office Design',
      description: 'Functional and aesthetic office designs that boost productivity and create a positive work environment.',
    },
    {
      icon: <FaHome className="text-4xl text-blue-600" />,
      title: 'Residential Interiors',
      description: 'Transform your living spaces with elegant designs that reflect your personality and meet your lifestyle needs.',
    },
    {
      icon: <FaStore className="text-4xl text-blue-600" />,
      title: 'Commercial Spaces',
      description: 'Engaging commercial interiors that enhance customer experience and strengthen your brand identity.',
    },
    {
      icon: <FaClipboardCheck className="text-4xl text-blue-600" />,
      title: 'Project Management',
      description: 'End-to-end project supervision ensuring timely completion within budget with the highest quality standards.',
    },
    {
      icon: <FaPaintRoller className="text-4xl text-blue-600" />,
      title: 'Renovation Services',
      description: 'Revitalize existing spaces with modern design elements while preserving the original character and charm.',
    },
    {
      icon: <FaChair className="text-4xl text-blue-600" />,
      title: 'Custom Furniture',
      description: 'Custom-designed furniture solutions that maximize space utilization and complement your interior design.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Comprehensive interior design services tailored to your specific needs and preferences.
            From concept to completion, we handle every aspect of your project.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <a 
            href="/services" 
            className="btn btn-primary inline-flex items-center"
          >
            View All Services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}