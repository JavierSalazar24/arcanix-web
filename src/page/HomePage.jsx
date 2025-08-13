import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { Soluciones } from '../components/Soluciones'
import { Beneficios } from '../components/Beneficios'
import { CTAFinal } from '../components/CTAFinal'
import { Footer } from '../components/Footer'
import { HomeSEO } from '../components/HomeSEO'

const HomePage = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    sectionId = null
  }

  return (
    <div className='min-h-screen bg-white'>
      {/* SEO Meta Tags */}
      <HomeSEO />

      <Navbar text='home' scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <Soluciones />
      <Beneficios />
      <CTAFinal scrollToSection={scrollToSection} />
      <Footer text='home' />
    </div>
  )
}

export default HomePage
