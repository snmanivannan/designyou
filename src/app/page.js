import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import SoftwareProjects from '@/components/sections/SoftwareProjects'
import Testimonials from '@/components/sections/Testimonials'
import CTASection from '@/components/shared/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <SoftwareProjects />
      <Testimonials />
      <CTASection />
    </>
  )
}