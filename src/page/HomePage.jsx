import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { Soluciones } from '../components/Soluciones'
import { Beneficios } from '../components/Beneficios'
import { CTAFinal } from '../components/CTAFinal'
import { Footer } from '../components/Footer'
import { HomeSEO } from '../components/HomeSEO'
import { Clientes } from '../components/Clientes'
import { BENEFICIOS_HOME } from '../const/beneficios'
import { CTA_HOME } from '../const/cta'
import { HERO_POINTS_HOME } from '../const/hero'

const HomePage = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    sectionId = null
  }

  return (
    <div className='min-h-screen bg-white'>
      <HomeSEO />

      <Navbar text='home' scrollToSection={scrollToSection} />
      <HeroSection
        scrollToSection={scrollToSection}
        bgGradient='indigo'
        colorPrimary='purple'
        colorSecondary='indigo'
        colorThird='white'
        bgFromText='indigo'
        bgToText='purple'
        colorIcon='green'
        textBadge='Soluciones tecnológicas especializadas por industria'
        title='Software'
        titleSecondary='especializado'
        titleThird='para tu industria'
        desc='Desarrollamos sistemas únicos para empresas de seguridad y clubes deportivos.'
        highlightDescription='Código fuente incluido, sin mensualidades.'
        buttonText1='Ver nuestras soluciones'
        buttonText2='Contactar ahora'
        points={HERO_POINTS_HOME}
      />
      <Soluciones />
      <Beneficios
        beneficios={BENEFICIOS_HOME}
        bgFrom='indigo'
        bgTo='purple'
        color='purple'
        title='nos distinguen'
        description='No solo desarrollamos software, creamos soluciones completas para el crecimiento de tu empresa'
      />
      <Clientes />
      <CTAFinal
        scrollToSection={scrollToSection}
        title='digitalizar'
        desc='negocio'
        textButton='Ver todas las soluciones'
        bgFrom='indigo'
        bgTo='purple'
        colorDesc='indigo'
        points={CTA_HOME}
      />
      <Footer text='home' />
    </div>
  )
}

export default HomePage
