'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navbar({ textColor = 'text-gray-800' }) {
  const pathname = usePathname()
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/#services' },
    { name: 'Interior Projects', path: '/#projects' },
    { name: 'Software', path: '/software' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav>
      <ul className="flex space-x-8">
        {navItems.map((item) => {
          const isActive = pathname === item.path
          
          return (
            <li key={item.name}>
              <Link 
                href={item.path}
                className={`${textColor} font-medium relative transition-all duration-300 hover:text-blue-500 ${
                  isActive ? 'font-semibold' : ''
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-500" />
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}