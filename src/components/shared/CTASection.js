import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8 text-blue-100">
          Get in touch with our design experts today and bring your vision to life.
          We offer free initial consultations and competitive quotes.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/contact" 
            className="btn bg-white text-blue-600 hover:bg-gray-100 transition-colors"
          >
            Request a Quote
          </Link>
          <Link 
            href="/services" 
            className="btn border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-colors"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  )
}