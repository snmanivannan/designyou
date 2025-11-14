export const metadata = {
  title: 'Software Solutions | DesignYou Solutions',
  description: 'Custom software development services including web applications, mobile apps, and enterprise solutions. Explore our portfolio of successful projects in Chennai and beyond.',
  keywords: 'software development Chennai, web application development, mobile app development, custom software solutions, e-commerce development',
  openGraph: {
    title: 'Software Solutions | DesignYou Solutions',
    description: 'Custom software development services including web applications, mobile apps, and enterprise solutions in Chennai.',
    url: 'https://www.designyou.in/software',
    siteName: 'DesignYou Solutions',
    images: [
      {
        url: 'https://www.designyou.in/og-software.jpg',
        width: 1200,
        height: 630,
        alt: 'DesignYou Software Solutions - Custom Development',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Solutions | DesignYou Solutions',
    description: 'Custom software development services including web applications, mobile apps, and enterprise solutions in Chennai.',
    images: ['https://www.designyou.in/og-software.jpg'],
  },
  alternates: {
    canonical: 'https://www.designyou.in/software',
  },
}

export default function SoftwareLayout({ children }) {
  return children
}
