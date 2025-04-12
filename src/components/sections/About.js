'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
              {/* Placeholder for the about image */}
              <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
                <span className="text-blue-300 text-lg">Company Image</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-green-500 rounded-lg">
              <div className="w-full h-full flex items-center justify-center text-white text-center p-4">
                <div>
                  <p className="text-3xl font-bold">10+</p>
                  <p className="text-sm">Years of Experience</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">About DesignYou Solutions</h2>
            <div className="w-20 h-1 bg-green-500 mb-6"></div>
            <p className="text-gray-600 mb-6">
              DesignYou Solutions is a premier interior design company specializing in creating functional, 
              aesthetically pleasing spaces for offices, commercial establishments, and residences. 
              With over a decade of experience, we have established ourselves as a trusted name in 
              the industry known for quality craftsmanship and innovative designs.
            </p>
            <p className="text-gray-600 mb-8">
              Our team of experienced designers, architects, and craftsmen work collaboratively to 
              transform your vision into reality. We focus on understanding your specific needs and 
              preferences to deliver customized solutions that exceed expectations.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Experienced Team</h4>
                  <p className="text-gray-600 text-sm">Skilled professionals with diverse expertise</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Quality Materials</h4>
                  <p className="text-gray-600 text-sm">Premium products for lasting durability</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Timely Delivery</h4>
                  <p className="text-gray-600 text-sm">Projects completed on schedule</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Customer Satisfaction</h4>
                  <p className="text-gray-600 text-sm">Client-focused approach</p>
                </div>
              </div>
            </div>
            
            <a 
              href="/about" 
              className="btn btn-primary inline-flex items-center"
            >
              Learn More About Us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}