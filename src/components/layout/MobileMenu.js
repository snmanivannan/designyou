'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useEffect } from 'react'

export default function MobileMenu({ isOpen, setIsOpen }) {
  const pathname = usePathname()
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  // Close menu when clicking a link or when changing route
  useEffect(() => {
    setIsOpen(false)
  }, [pathname, setIsOpen])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <div 
      className={`fixed inset-0 bg-blue-600 bg-opacity-95 flex items-center justify-center transition-all duration-300 z-40 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <nav className="w-full max-w-md px-6">
        <ul className="flex flex-col space-y-6 items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.path
            
            return (
              <li key={item.name} className="w-full text-center">
                <Link 
                  href={item.path}
                  className={`text-white text-2xl font-medium block py-2 relative transition-all duration-300 ${
                    isActive ? 'font-bold' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/3 right-1/3 w-1/3 h-0.5 bg-green-500" />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="mt-12 text-center">
          <Link 
            href="/contact"
            className="btn bg-white text-blue-600 hover:bg-gray-100 inline-block"
            onClick={() => setIsOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      </nav>
    </div>
  )
}