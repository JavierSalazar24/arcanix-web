import { useState } from 'react'
import { Link } from 'react-router'

const solutions = [
  {
    id: 'security',
    title: 'Software para guardias',
    subtitle: 'Empresas de seguridad',
    description:
      'Sistema integral para gestión de guardias, finanzas, inventario y recursos humanos',
    icon: '🛡️',
    color: 'blue',
    price: '$10,000 MXN',
    features: [
      'Gestión de guardias y operaciones',
      'Control financiero completo',
      'Inventario y almacén',
      'Recursos humanos',
      'Reportes avanzados',
      'Sin mensualidades'
    ],
    gradient: 'from-blue-600 to-purple-600',
    bgGradient: 'from-blue-50 to-purple-50',
    link: '/guardias',
    demo: 'https://guardias.arcanix.com.mx/'
  },
  {
    id: 'sports',
    title: 'Software deportivo',
    subtitle: 'Clubes deportivos',
    description:
      'Software especializado para academias deportivas con portal de tutores y APP incluida',
    icon: '⚽',
    color: 'red',
    price: '$10,000 MXN',
    features: [
      'Gestión de jugadores',
      'Portal web para tutores',
      'APP descargable',
      'Control de pagos deportivos',
      'Calendario de partidos',
      'Reportes especializados'
    ],

    gradient: 'from-red-600 to-orange-600',
    bgGradient: 'from-red-50 to-orange-50',
    link: '/deportes',
    demo: 'https://deportes.arcanix.com.mx/'
  }
]

export const Soluciones = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <section id='softwares' className='py-17 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-20'>
          <div className='inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-800 text-sm font-medium mb-6'>
            Nuestras soluciones especializadas
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Software diseñado para{' '}
            <span className='text-indigo-600'>tu industria</span>
          </h2>
          <p className='text-base sm:text-xl text-gray-600 max-w-3xl mx-auto'>
            Cada solución está desarrollada específicamente para las necesidades
            únicas de tu sector
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className={`group relative bg-gradient-to-br ${solution.bgGradient} p-5 sm:p-8 rounded-3xl border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
              onMouseEnter={() => setHoveredCard(solution.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Header */}
              <div className='flex items-center justify-between mb-6 flex-col sm:flex-row'>
                <div className='flex items-center space-x-4 flex-col sm:flex-row text-center sm:text-left gap-3 sm:gap-0'>
                  <div
                    className={`text-5xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    {solution.icon}
                  </div>
                  <div>
                    <h3 className='text-2xl font-bold text-gray-900 mb-2 sm:mb-0'>
                      {solution.title}
                    </h3>
                    <p className='text-gray-600 font-medium mb-2 sm:mb-0'>
                      {solution.subtitle}
                    </p>
                  </div>
                </div>
                <div
                  className={`px-4 py-2 bg-gradient-to-r ${solution.gradient} text-white rounded-full font-bold text-sm`}
                >
                  {solution.price}
                </div>
              </div>

              {/* Description */}
              <p className='text-gray-700 mb-6 sm:text-lg text-center sm:text-left leading-relaxed'>
                {solution.description}
              </p>

              {/* Features */}
              <div className='space-y-3 mb-8'>
                {solution.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className='flex items-center space-x-3 text-sm sm:text-base'
                  >
                    <div
                      className={`w-2 h-2 bg-gradient-to-r ${solution.gradient} rounded-full`}
                    ></div>
                    <span className='text-gray-700 font-medium'>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className='flex flex-col sm:flex-row gap-3'>
                <Link
                  to={solution.link}
                  className={`flex-1 bg-gradient-to-r ${solution.gradient} hover:opacity-90 text-white font-bold py-3 px-6 rounded-xl text-center transition-all duration-300 transform hover:scale-105`}
                >
                  Ver más
                </Link>

                <a
                  href={solution.demo}
                  target='_blank'
                  className='flex-1 bg-white text-center hover:bg-gray-50 text-gray-900 font-bold py-3 px-6 rounded-xl border border-gray-200 transition-all duration-300'
                >
                  Ver panel admin
                </a>
              </div>

              {/* Hover Effect */}
              {hoveredCard === solution.id && (
                <div className='absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl pointer-events-none'></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
