const benefits = [
  {
    title: 'Precio único',
    subtitle: '$10,000 MXN',
    description: 'Sin mensualidades ni costos ocultos',
    icon: '💎'
  },
  {
    title: 'Código fuente',
    subtitle: '100% tuyo',
    description: 'Recibes todo el código del sistema',
    icon: '🔓'
  },
  {
    title: 'Personalización',
    subtitle: 'Incluida gratis',
    description: 'Colores, logotipo y campos personalizados',
    icon: '🎨'
  },
  {
    title: 'Sin límites',
    subtitle: 'Usuarios ilimitados',
    description: 'Agrega todos los usuarios que necesites',
    icon: '👥'
  },
  {
    title: 'Soporte incluido',
    subtitle: 'Capacitación gratis',
    description: 'Te enseñamos a usar todo el sistema',
    icon: '🎓'
  },
  {
    title: 'Modificaciones',
    subtitle: 'Agregar/Quitar módulos',
    description: 'Solicita cambios pequeños específicos',
    icon: '🚀'
  }
]

export const BeneficiosGuardias = () => {
  return (
    <section
      id='beneficios'
      className='py-14 bg-gradient-to-b from-gray-50 to-white relative'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-20'>
          <div className='inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6'>
            ¿Por qué elegir Arcanix?
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Beneficios que{' '}
            <span className='text-blue-600'>marcan la diferencia</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            No es solo un software, es la solución completa que tu empresa
            necesita para crecer
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className='group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200'
            >
              <div className='text-4xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                {benefit.icon}
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                {benefit.title}
              </h3>
              <p className='text-2xl font-bold text-blue-600 mb-3'>
                {benefit.subtitle}
              </p>
              <p className='text-gray-600'>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
