import { Helmet } from 'react-helmet-async'

export const DeportesSEO = () => {
  return (
    <Helmet>
      <title>Sistema para clubes deportivos | Arcanix</title>

      <meta
        name='description'
        content='Software deportivo con portal de tutores y APP móvil. Registra jugadores, gestiona temporadas, categorías y partidos. Control de deudas, abonos, pagos, bancos, almacén y reportes. Sin mensualidades, código fuente incluido.'
      />
      <meta
        name='keywords'
        content='software clubes deportivos, sistema deportivo, gestión de jugadores, portal tutores, APP móvil deportiva, categorías por edad, temporadas, calendario de partidos, deudas y abonos, pagos jugadores, utilería y almacén, proveedores y compras, bancos y movimientos, reportes excel, sin mensualidades, código fuente incluido, aplicación movil'
      />

      <link rel='canonical' href='https://arcanix.com.mx/deportes' />

      {/* Open Graph */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://arcanix.com.mx/deportes' />
      <meta
        property='og:title'
        content='Sistema para clubes deportivos | Arcanix'
      />
      <meta
        property='og:description'
        content='Gestión completa: jugadores, temporadas, categorías, partidos, pagos y almacén. Portal de tutores y APP móvil.'
      />
      <meta property='og:image' content='https://arcanix.com.mx/deportes.png' />
      <meta property='og:site_name' content='Arcanix Deportes' />

      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@ArcanixMX' />
      <meta
        name='twitter:title'
        content='Sistema para clubes deportivos | Arcanix'
      />
      <meta
        name='twitter:description'
        content='Portal de tutores + PWA. Control de deudas/abonos/pagos, temporadas, categorías, partidos, almacén y bancos.'
      />
      <meta
        name='twitter:image'
        content='https://arcanix.com.mx/deportes.png'
      />

      {/* JSON-LD: Software para Deportes */}
      <script type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Arcanix · Software para clubes deportivos',
          alternateName: 'Arcanix',
          url: 'https://arcanix.com.mx/'
        })}
      </script>

      <script type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Arcanix · Sistema para clubes deportivos',
          operatingSystem: 'Web',
          applicationCategory: 'BusinessApplication',
          offers: { '@type': 'Offer', price: '10000', priceCurrency: 'MXN' },
          url: 'https://arcanix.com.mx/deportes',
          description:
            'Software deportivo multiusuario con roles y permisos, portal de tutores y APP móvil. Jugadores, temporadas, categorías, partidos, pagos, bancos, almacén y reportes.',
          screenshot: 'https://arcanix.com.mx/deportes.png',
          featureList: [
            'Portal de tutores y APP móvil',
            'Registro de jugadores',
            'Temporadas y categorías',
            'Partidos y calendario',
            'Gestión de deudas, abonos y pagos',
            'Bancos y estados de cuenta',
            'Utilería, almacén y proveedores',
            'Reportes en Excel'
          ]
        })}
      </script>
    </Helmet>
  )
}
