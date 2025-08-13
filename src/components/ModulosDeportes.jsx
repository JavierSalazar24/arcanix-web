const modules = [
  {
    title: 'Gestión de Jugadores',
    icon: '⚽',
    description:
      'Registro completo de jugadores con utilería y asignación de equipo. Genera PDFs automáticos con detalles del equipo prestado, costos y espacios para firmas.',
    features: [
      'Registro de jugadores',
      'Utilería con PDF',
      'Asignación de equipo',
      'Control de equipamiento'
    ]
  },
  {
    title: 'Temporadas y Categorías',
    icon: '🏆',
    description:
      'Crea y gestiona temporadas con fechas de inicio/fin. Organiza categorías por rango de edad y género para una administración perfecta.',
    features: [
      'Temporadas activas/finalizadas',
      'Categorías por edad',
      'Separación por género',
      'Control de periodos'
    ]
  },
  {
    title: 'Sistema de Cobros',
    icon: '💰',
    description:
      'Tipos de cobros dinámicos y personalizables. Define periodicidad (mensual, quincenal, semanal...) y costos por categoría de forma flexible.',
    features: [
      'Cobros dinámicos',
      'Periodicidad flexible',
      'Costos por categoría',
      'Configuración personalizada'
    ]
  },
  {
    title: 'Partidos y Calendario',
    icon: '📅',
    description:
      'Registra partidos por categoría y visualízalos en un calendario intuitivo. Mantén a jugadores y tutores informados de todos los eventos.',
    features: [
      'Registro de partidos',
      'Calendario visual',
      'Organización por categoría',
      'Notificaciones automáticas'
    ]
  },
  {
    title: 'Gestión Financiera',
    icon: '💳',
    description:
      'Control total de pagos, deudas y abonos. Sistema de caja para rastrear quién cobró cada pago e historial completo de todas las transacciones.',
    features: [
      'Control de deudas',
      'Sistema de abonos',
      'Caja y cobradores',
      'Historial financiero'
    ]
  },
  {
    title: 'Inventario y Almacén',
    icon: '📦',
    description:
      'Gestiona proveedores, artículos y almacén con entradas/salidas. Control completo del equipamiento con estados de cuenta en PDF.',
    features: [
      'Gestión de proveedores',
      'Control de artículos',
      'Entradas y salidas',
      'Estados de cuenta PDF'
    ]
  },
  {
    title: 'Finanzas',
    icon: '💳',
    description:
      'Gestión de cuentas bancarias, registro de movimientos, estados de cuenta automatizados y control preciso de saldos.',
    features: [
      'Cuentas bancarias',
      'Control de saldos',
      'Estados de cuenta',
      'Reportes financieros'
    ]
  },
  {
    title: 'Reportes Avanzados',
    icon: '📊',
    description:
      'Genera reportes detallados en Excel: movimientos bancarios, compras, gastos, almacén, deudas, abonos y pagos para análisis completo.',
    features: [
      'Reportes en Excel',
      'Análisis financiero',
      'Control de inventario',
      'Historial completo'
    ]
  }
]

export const ModulosDeportes = () => {
  return (
    <section
      id='modulos'
      className='py-14 bg-gradient-to-r from-rose-950 via-red-950 to-rose-900'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            8 módulos <span className='text-rose-500'>especializados</span>
          </h2>
          <p className='text-xl text-rose-200'>
            Cada módulo está diseñado específicamente para clubes y academias
            deportivas
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {modules.map((module, index) => (
            <div
              key={index}
              className='bg-rose-600/20 backdrop-blur-sm p-8 rounded-2xl border border-rose-500/40'
            >
              <div className='text-4xl mb-4'>{module.icon}</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                {module.title}
              </h3>
              <p className='text-white mb-6 text-lg leading-relaxed'>
                {module.description}
              </p>
              <div className='space-y-2'>
                {module.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className='flex items-center space-x-3'
                  >
                    <div className='w-2 h-2 bg-rose-400 rounded-full'></div>
                    <span className='text-white/90 font-medium text-sm'>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
