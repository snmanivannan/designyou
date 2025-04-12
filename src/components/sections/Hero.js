'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Image placeholder - replace with your actual image */}
          <div className="absolute inset-0 bg-blue-900 bg-opacity-70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-blue-900/80" />
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundColor: '#1a5276' }}>
            {/* This would be your actual hero image */}
            {/* <Image 
              src="/images/hero-banner.jpg" 
              alt="Interior Design" 
              fill 
              className="object-cover"
              priority
            /> */}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your Space with <span className="text-green-400">Expert Design</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
              Professional interior design solutions for offices, commercial spaces, and homes. 
              Bringing your vision to life with precision and style.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn bg-green-500 hover:bg-green-600 text-white">
                Get a Free Quote
              </Link>
              <Link href="/projects" className="btn border-2 border-white text-white hover:bg-white hover:text-blue-900">
                View Our Projects
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-2xl">
              {/* This would be a featured project image or illustration */}
              <div className="absolute inset-0 bg-green-500 bg-opacity-20 flex items-center justify-center">
                <span className="text-white text-opacity-50 text-lg">Featured Project Image</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}