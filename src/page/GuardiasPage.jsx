import { BeneficiosGuardias } from '../components/BeneficiosGuardias'
import { CTAFinalGuardias } from '../components/CTAFinalGuardias'
import { DemoGuardias } from '../components/DemoGuardias'
import { Footer } from '../components/Footer'
import { GaleriaGuardias } from '../components/GaleriaGuardias'
import { GuardiasSEO } from '../components/GuardiasSEO'
import { HeroSectionGuardias } from '../components/HeroSectionGuardias'
import { ModulosGuardias } from '../components/ModulosGuardias'
import { Navbar } from '../components/Navbar'
import { PrecioGuardias } from '../components/PrecioGuardias'

const GuardiasPage = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    sectionId = null
  }

  return (
    <>
      {/* SEO Meta Tags */}
      <GuardiasSEO />

      <Navbar text='guardias' scrollToSection={scrollToSection} />
      <HeroSectionGuardias scrollToSection={scrollToSection} />
      <BeneficiosGuardias />
      <ModulosGuardias />
      <DemoGuardias />
      <GaleriaGuardias />
      <PrecioGuardias />
      <CTAFinalGuardias scrollToSection={scrollToSection} />
      <Footer text='guardias' />
    </>
  )
}
export default GuardiasPage
