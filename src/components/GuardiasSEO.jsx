import { Helmet } from 'react-helmet-async'

export const GuardiasSEO = () => {
  return (
    <Helmet>
      <title>Sistema para empresas de seguridad privada | Arcanix</title>

      <meta
        name='description'
        content='Software para seguridad privada, instalable sin mensualidades que centraliza la gestión de guardias, finanzas, almacén, vehículos y reportes. Incluye código fuente, personalización de colores y logotipo. Demo gratuita.'
      />
      <meta
        name='keywords'
        content='software seguridad privada, software para empresas de seguridad, sistema para guardias, panel administrativo guardias, control de guardias, administrar guardias de seguridad, erp para seguridad privada, sistema de vigilancia empresarial, software de recursos humanos para guardias, gestión de guardias y personal, control de almacén de equipo de seguridad, software de finanzas para empresas de guardias, control de vehículos y gasolina guardias, cotizaciones servicios de seguridad, ventas servicios de vigilancia, estado de cuenta clientes de seguridad, cartera vencida empresas de seguridad, préstamos y descuentos a guardias, reportes excel seguridad privada, sistema sin mensualidades guardias, código fuente incluido software guardias, personalización de colores y logotipo, demo software para guardias, arcanix software guardias, instalación en hosting propio, software para control de bancos seguridad, movimientos bancarios empresas de vigilancia, ordenes de servicio guardias, software mexicano seguridad privada'
      />

      <link rel='canonical' href='https://arcanix.com.mx/guardias' />

      {/* Open Graph */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://arcanix.com.mx/guardias' />
      <meta
        property='og:title'
        content='Sistema para empresas de seguridad privada | Arcanix'
      />
      <meta
        property='og:description'
        content='Software para seguridad privada, instalable sin mensualidades que centraliza guardias, finanzas, almacén, vehículos y reportes. Incluye código fuente y demo gratuita.'
      />
      <meta property='og:image' content='https://arcanix.com.mx/admin.png' />
      <meta property='og:site_name' content='Arcanix Guardias' />

      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@ArcanixMX' />
      <meta
        name='twitter:title'
        content='Sistema para empresas de seguridad privada | Arcanix'
      />
      <meta
        name='twitter:description'
        content='Instálalo en tu hosting, sin mensualidades. Control total de guardias y finanzas. Demo gratuita.'
      />
      <meta name='twitter:image' content='https://arcanix.com.mx/admin.png' />

      <script type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Arcanix · Software para seguridad privada',
          alternateName: 'Arcanix',
          url: 'https://arcanix.com.mx/'
        })}
      </script>

      <script type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Arcanix · Sistema para empresas de seguridad privada',
          operatingSystem: 'Web',
          applicationCategory: 'BusinessApplication',
          offers: { '@type': 'Offer', price: '10000', priceCurrency: 'MXN' },
          url: 'https://arcanix.com.mx/guardias',
          description:
            'Software para seguridad privada, instalable sin mensualidades que centraliza guardias, finanzas, almacén, vehículos y reportes. Incluye código fuente, personalización de colores y logotipo. Demo gratuita.',
          screenshot: 'https://arcanix.com.mx/admin.png'
        })}
      </script>
    </Helmet>
  )
}
