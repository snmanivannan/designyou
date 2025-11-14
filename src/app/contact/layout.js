export const metadata = {
  title: 'Contact Us | DesignYou Solutions',
  description: 'Get in touch with DesignYou Solutions for interior design inquiries, quotes, and project consultations. Visit our office at Spencer Plaza, Chennai or call us at +91 44 2857 9000.',
  keywords: 'contact DesignYou, interior design Chennai, office design consultation, Spencer Plaza, design quote',
  openGraph: {
    title: 'Contact Us | DesignYou Solutions',
    description: 'Get in touch with DesignYou Solutions for interior design inquiries, quotes, and project consultations in Chennai.',
    url: 'https://www.designyou.in/contact',
    siteName: 'DesignYou Solutions',
    images: [
      {
        url: 'https://www.designyou.in/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact DesignYou Solutions - Interior Design Experts',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | DesignYou Solutions',
    description: 'Get in touch with DesignYou Solutions for interior design inquiries, quotes, and project consultations in Chennai.',
    images: ['https://www.designyou.in/og-contact.jpg'],
  },
  alternates: {
    canonical: 'https://www.designyou.in/contact',
  },
}

export default function ContactLayout({ children }) {
  return children
}
