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
    <section
      className='py-17 bg-gradient-to-r from-rose-950 via-red-950 to-rose-900'
      id='tutores'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <div className='inline-flex items-center px-4 py-2 bg-rose-600/20 backdrop-blur-sm rounded-full text-rose-300 text-sm font-medium mb-6 border border-rose-500/40'>
            Funcionalidad exclusiva
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Portal web para <span className='text-rose-500'>tutores</span>
          </h2>
          <p className='text-xl text-rose-200 max-w-3xl mx-auto'>
            Los tutores tienen su propia plataforma web para gestionar a sus
            jugadores de forma independiente
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {caracteristicas.map((feature, index) => (
            <div
              key={index}
              className='bg-rose-600/20 backdrop-blur-sm p-8 rounded-2xl border border-rose-500/40 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2'
            >
              <div className='text-3xl mb-4'>{feature.icon}</div>
              <h3 className='text-lg font-bold text-white mb-3'>
                {feature.title}
              </h3>
              <p className='text-gray-100'>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className='mt-12 text-center'>
          <div className='bg-rose-600/20 backdrop-blur-sm p-8 rounded-2xl border border-rose-500/40 max-w-2xl mx-auto hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2'>
            <h3 className='text-xl font-bold text-white mb-2'>
              📱 PWA - Aplicación Nativa
            </h3>
            <p className='text-gray-200'>
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
