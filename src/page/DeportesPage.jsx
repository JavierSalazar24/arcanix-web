import { Beneficios } from '../components/Beneficios'
import { ClientesDeportes } from '../components/ClientesDeportes'
import { CTAFinal } from '../components/CTAFinal'
import { DemoDeportes } from '../components/DemoDeportes'
import { DeportesSEO } from '../components/DeportesSEO'
import { Footer } from '../components/Footer'
import { GaleriaDeportes } from '../components/GaleriaDeportes'
import { HeroSection } from '../components/HeroSection'
import { Modulos } from '../components/Modulos'
import { Navbar } from '../components/Navbar'
import { PortalTutores } from '../components/PortalTutores'
import { PrecioDeportes } from '../components/PrecioDeportes'
import { BENEFICIOS_DEPORTES } from '../const/beneficios'
import { CTA_DEPORTES } from '../const/cta'
import { HERO_POINTS_DEPORTES } from '../const/hero'
import { MODULOS_DEPORTES } from '../const/modulos'

const DeportesPage = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    sectionId = null
  }

  return (
    <>
      <DeportesSEO />

      <Navbar text='deportes' scrollToSection={scrollToSection} />
      <HeroSection
        scrollToSection={scrollToSection}
        bgGradient='slate'
        colorPrimary='rose'
        colorSecondary='rose'
        colorThird='rose-500'
        bgFromText='rose'
        bgToText='red'
        colorIcon='rose'
        textBadge='Sistema para clubes deportivos'
        title='El'
        titleSecondary='software definitivo'
        titleThird='para equipos deportivos'
        desc='Gestiona jugadores, finanzas, inventario y partidos en una sola plataforma.'
        highlightDescription='PWA incluida + Portal para tutores.'
        buttonText1='Probar demo gratis'
        buttonText2='Ver precio'
        points={HERO_POINTS_DEPORTES}
      />
      <Beneficios
        beneficios={BENEFICIOS_DEPORTES}
        bgFrom='gray'
        bgTo='white'
        color='red'
        title='impulsan tu club'
        description='No es solo un software, es la solución completa que tu club deportivo necesita para crecer'
      />

      <Modulos
        modulos={MODULOS_DEPORTES}
        bgFrom='rose-950'
        bgVia='red-950'
        bgTo='rose-900'
        colorText='rose-500'
        colorDesc='rose-200'
        bgCard='rose-600/20'
        borderCard='rose-500/40'
        pointText='rose'
        text='especializados'
        desc='Cada módulo está diseñado específicamente para clubes y academias deportivas'
      />

      <ClientesDeportes />
      <PortalTutores />
      <DemoDeportes />
      <GaleriaDeportes />
      <PrecioDeportes />
      <CTAFinal
        scrollToSection={scrollToSection}
        bgFrom='orange'
        bgTo='red'
        colorDesc='green'
        title='digitalizar'
        desc='club deportivo'
        textButton='O prueba las demos primero'
        points={CTA_DEPORTES}
      />
      <Footer text='deportes' />
    </>
  )
}
export default DeportesPage
