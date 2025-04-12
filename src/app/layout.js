import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DesignYou Solutions | Interior Design & Office Solutions',
  description: 'Professional interior design services for offices, homes, and commercial spaces in Chennai.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}