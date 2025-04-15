'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Raj Sharma',
      position: 'CEO, TechVista',
      company: 'TechVista',
      quote: 'DesignYou transformed our office into a modern, functional space that perfectly represents our brand. Their attention to detail and ability to understand our needs was impressive. The team was professional throughout the project and delivered on time and within budget.',
      imageUrl: '/images/placeholder.jpg',
    },
    {
      id: 2,
      name: 'Priya Mehta',
      position: 'Owner',
      company: 'Spice Fusion Restaurant',
      quote: 'We needed a complete redesign of our restaurant, and DesignYou exceeded our expectations. The new space has significantly improved our customers dining experience and perfectly captures the essence of our cuisine. Their team was a pleasure to work with from concept to completion.',
      imageUrl: '/images/placeholder.jpg',
    },
    {
      id: 3,
      name: 'Arun Kumar',
      position: 'Managing Director',
      company: 'Global Retail Solutions',
      quote: 'After working with DesignYou on multiple store renovations, I can confidently say they are the best in the business. Their innovative designs have helped increase foot traffic and sales across all our locations. Their project management is flawless.',
      imageUrl: '/images/placeholder.jpg',
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-50" id="testimonials" >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Don't just take our word for it. Here's what our clients have to say about their experience working with DesignYou Solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 transform -translate-x-6 -translate-y-6 text-green-500 opacity-30">
            <FaQuoteLeft size={60} />
          </div>

          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ 
                opacity: index === activeIndex ? 1 : 0,
                x: index === activeIndex ? 0 : 100,
                zIndex: index === activeIndex ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-8 md:p-10 rounded-lg shadow-lg absolute inset-0"
              style={{ display: index === activeIndex ? 'block' : 'none' }}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 bg-blue-100">
                  {/* Replace with actual image when available */}
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-blue-300 text-sm">Photo</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="absolute bottom-4 right-4 flex space-x-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonial navigation dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
              } transition-colors duration-300`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}