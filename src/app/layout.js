import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DesignYou Solutions | Interior Design & Office Solutions',
  description: 'Professional interior design services for offices, homes, and commercial spaces in Chennai. Expert designers specializing in modern, functional, and aesthetic interiors.',
  keywords: 'interior design Chennai, office interior design, home interior design, commercial interior design, Spencer Plaza designers',
  authors: [{ name: 'DesignYou Solutions' }],
  creator: 'DesignYou Solutions',
  publisher: 'DesignYou Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.designyou.in'),
  openGraph: {
    title: 'DesignYou Solutions | Interior Design & Office Solutions',
    description: 'Professional interior design services for offices, homes, and commercial spaces in Chennai. Expert designers specializing in modern, functional, and aesthetic interiors.',
    url: 'https://www.designyou.in',
    siteName: 'DesignYou Solutions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DesignYou Solutions - Interior Design Experts',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DesignYou Solutions | Interior Design & Office Solutions',
    description: 'Professional interior design services for offices, homes, and commercial spaces in Chennai.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

export default function RootLayout({ children }) {
  // JSON-LD Structured Data for Organization and LocalBusiness
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.designyou.in/#organization',
        name: 'DesignYou Solutions',
        url: 'https://www.designyou.in',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.designyou.in/logo.png',
          width: 250,
          height: 60,
        },
        sameAs: [
          'https://facebook.com/designyousolutions',
          'https://twitter.com/designyousolutions',
          'https://instagram.com/designyousolutions',
          'https://linkedin.com/company/designyousolutions',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-44-2857-9000',
          contactType: 'Customer Service',
          areaServed: 'IN',
          availableLanguage: ['English', 'Tamil'],
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.designyou.in/#localbusiness',
        name: 'DesignYou Solutions',
        image: 'https://www.designyou.in/og-image.jpg',
        '@id': 'https://www.designyou.in',
        url: 'https://www.designyou.in',
        telephone: '+91-44-2857-9000',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '#02-769, Phase 3 Spencer Plaza, Anna Salai',
          addressLocality: 'Chennai',
          postalCode: '600002',
          addressRegion: 'Tamil Nadu',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 13.0569,
          longitude: 80.2506,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '10:00',
            closes: '14:00',
          },
        ],
        sameAs: [
          'https://facebook.com/designyousolutions',
          'https://twitter.com/designyousolutions',
          'https://instagram.com/designyousolutions',
          'https://linkedin.com/company/designyousolutions',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.designyou.in/#website',
        url: 'https://www.designyou.in',
        name: 'DesignYou Solutions',
        description: 'Professional interior design services for offices, homes, and commercial spaces in Chennai.',
        publisher: {
          '@id': 'https://www.designyou.in/#organization',
        },
        inLanguage: 'en-IN',
      },
    ],
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}