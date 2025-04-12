'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from './Navbar'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="relative z-10">
          <div className="flex items-center">
            <div className="mr-2 relative w-8 h-8">
              {/* Replace with your actual logo */}
              <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                <span className="text-white font-bold">DU</span>
              </div>
            </div>
            <span className={`font-bold text-xl ${scrolled ? 'text-blue-600' : 'text-white'}`}>
              DesignYou
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <Navbar textColor={scrolled ? 'text-gray-800' : 'text-white'} />
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden z-10 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className={`w-6 h-5 flex flex-col justify-between relative ${mobileMenuOpen ? 'transform' : ''}`}>
            <span 
              className={`w-full h-0.5 block transition-all duration-300 ${
                scrolled ? 'bg-gray-800' : 'bg-white'
              } ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            ></span>
            <span 
              className={`w-full h-0.5 block transition-all duration-300 ${
                scrolled ? 'bg-gray-800' : 'bg-white'
              } ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
            ></span>
            <span 
              className={`w-full h-0.5 block transition-all duration-300 ${
                scrolled ? 'bg-gray-800' : 'bg-white'
              } ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            ></span>
          </div>
        </button>

        {/* Mobile Menu */}
        <MobileMenu isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
      </div>
    </header>
  )
}