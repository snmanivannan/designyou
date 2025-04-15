'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGlobe, FaMobile, FaCode, FaChrome, FaLaptopCode, FaDatabase, FaCloudUploadAlt, FaRobot } from 'react-icons/fa'
import CTASection from '@/components/shared/CTASection'

export default function SoftwarePage() {
  const [activeTab, setActiveTab] = useState('all')
  
  const projects = [
    {
      id: 1,
      title: "Dining Paper Roll",
      description: "A comprehensive e-commerce platform for ordering paper products for restaurants and hospitality businesses.",
      type: "Website",
      category: "web",
      icon: <FaGlobe className="text-3xl text-green-500" />,
      url: "https://www.diningpaperroll.com/",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      features: [
        "Product catalog with search and filtering",
        "Secure user accounts and order history",
        "Payment gateway integration",
        "Admin dashboard for inventory management"
      ]
    },
    {
      id: 2,
      title: "Lotus Trading Company",
      description: "Corporate website and product catalog for a trading company with e-commerce functionality.",
      type: "Website",
      category: "web",
      icon: <FaGlobe className="text-3xl text-green-500" />,
      url: "https://lotustradingcompany.in/",
      technologies: ["Next.js", "Tailwind CSS", "Strapi CMS"],
      features: [
        "Responsive design for all devices",
        "Content management system for easy updates",
        "Product catalog with category navigation",
        "Contact forms with validation"
      ]
    },
    {
      id: 3,
      title: "TradingView History Tracker",
      description: "Chrome extension for traders to track and analyze their TradingView history and patterns.",
      type: "Chrome Extension",
      category: "extension",
      icon: <FaChrome className="text-3xl text-green-500" />,
      url: "https://chromewebstore.google.com/detail/tradingview-history-track/ibcpkeflilobhmhphlabfiefdcebmdal?hl=en",
      technologies: ["JavaScript", "Chrome API", "Data Visualization"],
      features: [
        "Automatic history tracking",
        "Data visualization of trading patterns",
        "Export functionality for further analysis",
        "Custom alerts and notifications"
      ]
    },
    {
      id: 4,
      title: "Lotus Trading Company App",
      description: "Mobile application for customers to browse products, place orders, and track deliveries.",
      type: "Mobile App",
      category: "mobile",
      icon: <FaMobile className="text-3xl text-green-500" />,
      url: "https://play.google.com/store/apps/details?id=com.happyhearts.lotustradingcompany&hl=en_IN",
      technologies: ["React Native", "Firebase", "Redux"],
      features: [
        "Cross-platform compatibility (iOS & Android)",
        "Real-time order tracking",
        "Push notifications for order updates",
        "Offline mode for catalog browsing"
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: <FaLaptopCode /> },
    { id: 'web', name: 'Websites', icon: <FaGlobe /> },
    { id: 'mobile', name: 'Mobile Apps', icon: <FaMobile /> },
    { id: 'extension', name: 'Extensions', icon: <FaChrome /> }
  ];
  
  const services = [
    {
      title: "Web Development",
      description: "Custom websites, web applications, and e-commerce solutions tailored to your business needs.",
      icon: <FaGlobe className="text-4xl text-blue-600" />
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      icon: <FaMobile className="text-4xl text-blue-600" />
    },
    {
      title: "Custom Software",
      description: "Bespoke software solutions designed to streamline your business processes and operations.",
      icon: <FaCode className="text-4xl text-blue-600" />
    },
    {
      title: "Cloud Solutions",
      description: "Cloud infrastructure setup, migration services, and managed cloud solutions.",
      icon: <FaCloudUploadAlt className="text-4xl text-blue-600" />
    },
    {
      title: "Database Management",
      description: "Database design, development, optimization, and maintenance services.",
      icon: <FaDatabase className="text-4xl text-blue-600" />
    },
    {
      title: "AI & Automation",
      description: "Artificial intelligence and automation solutions to enhance productivity and decision-making.",
      icon: <FaRobot className="text-4xl text-blue-600" />
    }
  ];
  
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <>
      {/* Page Header */}
      <div className="bg-blue-600 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Software Solutions</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Beyond interior design, we create custom software solutions to help businesses thrive in the digital world.
          </p>
        </div>
      </div>
      
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Software Services</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-gray-600">
              We offer a comprehensive range of software development services to help you build, scale, and maintain your digital presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Software Projects</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-gray-600">
              Take a look at some of our recent software projects across different platforms and industries.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center px-6 py-3 mx-2 mb-3 rounded-full transition-colors duration-300 ${
                  activeTab === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      {project.icon}
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-2">
                        {project.type}
                      </span>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    Visit Project
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 ml-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-gray-600">
              We follow a structured approach to software development, ensuring quality results and client satisfaction at every stage.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute top-0 left-16 bottom-0 w-1 bg-blue-100"></div>
              
              {/* Timeline items */}
              {[
                {
                  title: "Discovery & Planning",
                  description: "We start by understanding your requirements, business objectives, and target audience to create a detailed project plan."
                },
                {
                  title: "Design & Prototyping",
                  description: "Our designers create wireframes and interactive prototypes to visualize the user experience before development begins."
                },
                {
                  title: "Development",
                  description: "Our experienced developers write clean, maintainable code following best practices and industry standards."
                },
                {
                  title: "Testing & QA",
                  description: "Rigorous testing ensures your software is bug-free, secure, and performs optimally across all platforms."
                },
                {
                  title: "Deployment",
                  description: "We handle the deployment process, ensuring a smooth transition to production environments."
                },
                {
                  title: "Maintenance & Support",
                  description: "Our relationship continues after launch with ongoing support, updates, and improvements to your software."
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative flex items-start mb-12 last:mb-0"
                >
                  <div className="absolute left-[60px] -translate-x-1/2 mt-1">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                  <div className="ml-24">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </>
  )
}