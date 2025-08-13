const benefits = [
  {
    title: 'Desarrollo Personalizado',
    description:
      'Cada software está diseñado específicamente para las necesidades de tu industria',
    icon: '🎯'
  },
  {
    title: 'Código Fuente Incluido',
    description:
      'Recibes el 100% del código fuente, el software es completamente tuyo',
    icon: '💻'
  },
  {
    title: 'Sin Mensualidades',
    description:
      'Pago único sin costos recurrentes. Inviertes una vez y lo usas para siempre',
    icon: '💎'
  },
  {
    title: 'Soporte Especializado',
    description:
      'Capacitación completa y soporte técnico especializado en tu industria',
    icon: '🎓'
  },
  {
    title: 'PWA Incluida',
    description: 'Aplicaciones web progresivas que funcionan como apps nativas',
    icon: '📱'
  },
  {
    title: 'Capacitación gratuita',
    description: 'Explicación completa y detallada del software para tu equipo',
    icon: '🚀'
  }
]

export const Beneficios = () => {
  return (
    <section
      id='beneficios'
      className='py-14 bg-gradient-to-b from-indigo-50 to-purple-50'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-20'>
          <div className='inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm font-medium mb-6'>
            ¿Por qué elegir Arcanix?
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Beneficios que{' '}
            <span className='text-purple-600'>nos distinguen</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            No solo desarrollamos software, creamos soluciones completas para el
            crecimiento de tu empresa
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className='group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100'
            >
              <div className='text-4xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                {benefit.icon}
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>
                {benefit.title}
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
