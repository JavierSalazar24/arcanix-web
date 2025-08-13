const caracteristicas = [
  {
    icon: '👤',
    title: 'Registro de Jugadores',
    description:
      'Los tutores pueden registrar a sus propios jugadores en el sistema'
  },
  {
    icon: '👥',
    title: 'Ver Jugadores',
    description:
      'Acceso completo a la información de todos sus jugadores registrados'
  },
  {
    icon: '💰',
    title: 'Control de Deudas',
    description: 'Visualización de deudas, abonos y pagos de cada jugador'
  },
  {
    icon: '📅',
    title: 'Calendario de Partidos',
    description: 'Calendario personalizado con los partidos de sus jugadores'
  }
]

export const PortalTutores = () => {
  return (
    <section className='py-14 bg-white' id='tutores'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <div className='inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-800 text-sm font-medium mb-6'>
            Funcionalidad exclusiva
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Portal web para <span className='text-red-600'>tutores</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Los tutores tienen su propia plataforma web para gestionar a sus
            jugadores de forma independiente
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {caracteristicas.map((feature, index) => (
            <div
              key={index}
              className='bg-gradient-to-br from-red-50 to-red-50 p-6 rounded-2xl border border-red-100 hover:shadow-lg transition-all duration-300'
            >
              <div className='text-3xl mb-4'>{feature.icon}</div>
              <h3 className='text-lg font-bold text-gray-900 mb-3'>
                {feature.title}
              </h3>
              <p className='text-gray-600'>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className='mt-12 text-center'>
          <div className='bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-200 rounded-xl p-6 max-w-2xl mx-auto'>
            <h3 className='text-xl font-bold text-red-800 mb-2'>
              📱 PWA - Aplicación Nativa
            </h3>
            <p className='text-red-700'>
              Tanto el software principal como el portal de tutores son PWA.
              Pueden descargarse como aplicaciones nativas en escritorio, iOS y
              Android sin necesidad de tiendas de aplicaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
