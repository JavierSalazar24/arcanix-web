import { Helmet } from 'react-helmet-async'

export const HomeSEO = () => {
  return (
    <Helmet defaultTitle='Arcanix' titleTemplate='%s | Arcanix'>
      <title>
        Arcanix: ERP sin mensualidades para Seguridad Privada y Deportes
      </title>

      <meta
        name='description'
        content='Software web sin mensualidades con código fuente. Soluciones para empresas de seguridad y clubes deportivos: panel administrativo, APP móvil, portal de usuarios/tutores, finanzas, inventario, reportes Excel/PDF e instalación en hosting propio. Demo gratis.'
      />

      <meta
        name='keywords'
        content='software seguridad privada, software para empresas de seguridad, sistema para guardias, panel administrativo guardias, control de guardias, administrar guardias de seguridad, erp para seguridad privada, sistema de vigilancia empresarial, software de recursos humanos para guardias, gestiónn de guardias y personal, control de almacén de equipo de seguridad, software de finanzas para empresas de guardias, control de vehículos y gasolina guardias, cotizaciones servicios de seguridad, ventas servicios de vigilancia, estado de cuenta clientes de seguridad, cartera vencida empresas de seguridad, préstamos y descuentos a guardias, reportes excel seguridad privada, sistema sin mensualidades guardias, código fuente incluido software guardias, personalización de colores y logotipo, demo software para guardias, arcanix software guardias, instalación en hosting propio, software para control de bancos seguridad, movimientos bancarios empresas de vigilancia, ordenes de servicio guardias, software mexicano seguridad privada, software clubes deportivos, sistema deportivo, gestión de jugadores, portal tutores, APP móvil deportiva, categorías por edad, temporadas, calendario de partidos, deudas y abonos, pagos jugadores, utilería y almacén, proveedores y compras, bancos y movimientos, reportes excel, sin mensualidades, código fuente incluido, aplicación movil, ERP sin mensualidades, reportes Excel PDF, inventario, bancos y finanzas, México, PWA'
      />

      <meta name='author' content='Arcanix' />
      <meta name='publisher' content='Arcanix' />
      <meta name='robots' content='index, follow' />
      <meta name='googlebot' content='index, follow' />
      <link rel='canonical' href='https://arcanix.com.mx/' />

      {/* Open Graph */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://arcanix.com.mx/' />
      <meta
        property='og:title'
        content='Arcanix: ERP sin mensualidades para Seguridad Privada y Deportes'
      />
      <meta
        property='og:description'
        content='Software web sin mensualidades con código fuente. Soluciones para empresas de seguridad y clubes deportivos: panel administrativo, APP móvil, portal de usuarios/tutores, finanzas, inventario, reportes Excel/PDF e instalación en hosting propio. Demo gratis.'
      />
      <meta property='og:image' content='https://arcanix.com.mx/logo.png' />
      <meta property='og:site_name' content='Arcanix' />

      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@ArcanixMX' />
      <meta
        name='twitter:title'
        content='Arcanix: ERP sin mensualidades para Seguridad Privada y Deportes'
      />
      <meta
        name='twitter:description'
        content='Software web sin mensualidades con código fuente. Soluciones para empresas de seguridad y clubes deportivos: panel administrativo, APP móvil, portal de usuarios/tutores, finanzas, inventario, reportes Excel/PDF e instalación en hosting propio. Demo gratis.'
      />
      <meta name='twitter:image' content='https://arcanix.com.mx/logo.png' />

      {/* JSON-LD: WebSite con navegación a productos */}
      <script type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Arcanix · Software para seguridad privada',
          alternateName: 'Arcanix',
          url: 'https://arcanix.com.mx/',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://arcanix.com.mx/buscar?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        })}
      </script>

      {/* JSON-LD: Lista de soluciones */}
      <script type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              url: 'https://arcanix.com.mx/guardias',
              name: 'Software para empresas de seguridad privada'
            },
            {
              '@type': 'ListItem',
              position: 2,
              url: 'https://arcanix.com.mx/deportes',
              name: 'Software para clubes deportivos'
            }
          ]
        })}
      </script>
    </Helmet>
  )
}
