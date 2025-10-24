const modules = [
  {
    title: 'Recursos Humanos',
    icon: '👥',
    description:
      'Gestión completa de personal: incapacidades, tiempo extra, faltas, descuentos, vacaciones, préstamos, abonos, pagos y estados de cuenta detallados.',
    features: [
      'Control de asistencia',
      'Nómina automatizada',
      'Gestión de vacaciones',
      'Préstamos y abonos'
    ]
  },
  {
    title: 'Guardias y Operaciones',
    icon: '🛡️',
    description:
      'Registro de guardias, asignación de equipo y vehículos, lista negra de personal, historial completo de ventas y órdenes eliminadas.',
    features: [
      'Registro de guardias',
      'Asignación de equipo',
      'Lista negra',
      'Historial completo',
      'Estados de cuenta del guardia en PDF'
    ]
  },
  {
    title: 'Clientes y Proveedores',
    icon: '🤝',
    description:
      'Base de datos completa con información de contacto, sucursales y generación automática de estados de cuenta en formato PDF.',
    features: [
      'Gestión de clientes',
      'Gestión de sucursales',
      'Información de proveedores',
      'Estados de cuenta en PDF'
    ]
  },
  {
    title: 'Servicios y Ventas',
    icon: '💼',
    description:
      'Catálogo de tipos de servicio, sistema de cotizaciones, registro de ventas y gestión completa de órdenes de servicio.',
    features: [
      'Catálogo de servicios',
      'Cotizaciones automáticas',
      'Control de ventas',
      'Órdenes de servicio'
    ]
  },
  {
    title: 'Inventario y Almacén',
    icon: '📦',
    description:
      'Control de artículos, registro de entradas y salidas, seguimiento por número de serie e historial completo de movimientos.',
    features: [
      'Control de stock',
      'Entradas y salidas',
      'Seguimiento por serie',
      'Reportes de inventario'
    ]
  },
  {
    title: 'Finanzas',
    icon: '💰',
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
    title: 'Reportes y Limpiezas',
    icon: '📊',
    description:
      'Generación de reportes en Excel, sistema de limpieza programada de datos y logs detallados de actividad del sistema.',
    features: [
      'Reportes Excel',
      'Limpieza automática',
      'Logs del sistema',
      'Análisis de datos'
    ]
  }
]

export const ModulosGuardias = () => {
  return (
    <section
      id='modulos'
      className='py-17 bg-gradient-to-r from-purple-600 to-blue-600'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            7 módulos <span className='text-yellow-300'>todo en uno</span>
          </h2>
          <p className='text-xl text-purple-100'>
            Cada módulo está diseñado específicamente para empresas de seguridad
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {modules.slice(0, 6).map((module, index) => (
            <div
              key={index}
              className='bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2'
            >
              <div className='text-4xl mb-4'>{module.icon}</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                {module.title}
              </h3>
              <p className='text-white mb-6 text-base leading-relaxed'>
                {module.description}
              </p>
              <div className='space-y-2'>
                {module.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className='flex items-center space-x-3'
                  >
                    <div className='w-2 h-2 bg-yellow-400 rounded-full'></div>
                    <span className='text-white/90 font-medium text-sm'>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Módulo especial para el séptimo */}
          <div className='bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 md:col-span-2 lg:col-span-3 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2'>
            <div className='text-4xl mb-4'>{modules[6].icon}</div>
            <h3 className='text-xl font-bold text-white mb-4'>
              {modules[6].title}
            </h3>
            <p className='text-white mb-6 text-base leading-relaxed'>
              {modules[6].description}
            </p>
            <div className='space-y-2'>
              {modules[6].features.map((feature, featureIndex) => (
                <div key={featureIndex} className='flex items-center space-x-3'>
                  <div className='w-2 h-2 bg-yellow-400 rounded-full'></div>
                  <span className='text-white/90 font-medium text-sm'>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
