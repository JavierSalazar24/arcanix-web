import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { Beneficios } from './components/Beneficios'
import { Modulos } from './components/Modulos'
import { Demo } from './components/Demo'
import { Galeria } from './components/Galeria'
import { Precio } from './components/Precio'
import { CTAFinal } from './components/CTAFinal'
import { Footer } from './components/Footer'

function App() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='min-h-screen bg-white'>
      <Navbar scrollToSection={scrollToSection} />

      <HeroSection scrollToSection={scrollToSection} />

      <Beneficios />

      <Modulos />

      <Demo />

      <Galeria />

      <Precio />

      <CTAFinal scrollToSection={scrollToSection} />

      <Footer />
    </div>
  )
}

export default App
