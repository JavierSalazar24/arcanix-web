import { BeneficiosDeportes } from '../components/BeneficiosDeportes'
import { CTAFinalDeportes } from '../components/CTAFinalDeportes'
import { DemoDeportes } from '../components/DemoDeportes'
import { DeportesSEO } from '../components/DeportesSEO'
import { Footer } from '../components/Footer'
import { GaleriaDeportes } from '../components/GaleriaDeportes'
import { HeroSectionDeportes } from '../components/HeroSectionDeportes'
import { ModulosDeportes } from '../components/ModulosDeportes'
import { Navbar } from '../components/Navbar'
import { PortalTutores } from '../components/PortalTutores'
import { PrecioDeportes } from '../components/PrecioDeportes'

const DeportesPage = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    sectionId = null
  }

  return (
    <>
      {/* SEO Meta Tags */}
      <DeportesSEO />

      <Navbar text='deportes' scrollToSection={scrollToSection} />
      <HeroSectionDeportes scrollToSection={scrollToSection} />
      <BeneficiosDeportes />
      <ModulosDeportes />
      <PortalTutores />
      <DemoDeportes />
      <GaleriaDeportes />
      <PrecioDeportes />
      <CTAFinalDeportes scrollToSection={scrollToSection} />
      <Footer text='deportes' />
    </>
  )
}
export default DeportesPage
