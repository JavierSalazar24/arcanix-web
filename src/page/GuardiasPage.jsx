import { Beneficios } from '../components/Beneficios'
import { ClientesGuardias } from '../components/ClientesGuardias'
import { CTAFinal } from '../components/CTAFinal'
import { DemoGuardias } from '../components/DemoGuardias'
import { Footer } from '../components/Footer'
import { GaleriaGuardias } from '../components/GaleriaGuardias'
import { GuardiasSEO } from '../components/GuardiasSEO'
import { HeroSection } from '../components/HeroSection'
import { ModulosGuardias } from '../components/ModulosGuardias'
import { Navbar } from '../components/Navbar'
import { PrecioGuardias } from '../components/PrecioGuardias'
import { BENEFICIOS_GUARDIAS } from '../const/beneficios'
import { CTA_GUARDIAS } from '../const/cta'
import { HERO_POINTS_GUARDIAS } from '../const/hero'

const GuardiasPage = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    sectionId = null
  }

  return (
    <>
      <GuardiasSEO />

      <Navbar text='guardias' scrollToSection={scrollToSection} />
      <HeroSection
        scrollToSection={scrollToSection}
        bgGradient='slate'
        colorPrimary='blue'
        colorSecondary='blue'
        colorThird='white'
        bgFromText='blue'
        bgToText='purple'
        colorIcon='blue'
        textBadge='Sistema para empresas de seguridad'
        title='El'
        titleSecondary='sistema definitivo'
        titleThird='para empresas de seguridad'
        desc='Centraliza guardias, finanzas, inventario y recursos humanos en una sola plataforma.'
        highlightDescription='Sin mensualidades, código fuente incluido.'
        buttonText1='Probar demo gratis'
        buttonText2='Ver precio'
        points={HERO_POINTS_GUARDIAS}
      />
      <Beneficios
        beneficios={BENEFICIOS_GUARDIAS}
        bgFrom='gray'
        bgTo='white'
        color='blue'
        title='marcan la diferencia'
        description='No es solo un software, es la solución completa que tu empresa necesita para crecer'
      />
      <ModulosGuardias />
      <ClientesGuardias />
      <DemoGuardias />
      <GaleriaGuardias />
      <PrecioGuardias />
      <CTAFinal
        scrollToSection={scrollToSection}
        title='transformar'
        desc='empresa'
        textButton='O prueba la demo primero'
        bgFrom='green'
        bgTo='blue'
        colorDesc='green'
        points={CTA_GUARDIAS}
      />
      <Footer text='guardias' />
    </>
  )
}
export default GuardiasPage
