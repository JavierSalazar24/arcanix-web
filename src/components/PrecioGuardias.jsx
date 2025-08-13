export const PrecioGuardias = () => {
  return (
    <section
      id='precio'
      className='py-14 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden'
    >
      <div className='absolute inset-0 opacity-20'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <div className='mb-16'>
          <div className='inline-flex items-center px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full text-yellow-300 text-sm font-medium mb-6 border border-yellow-400/30'>
            <span className='mr-2'>⚡</span>
            Oferta por tiempo limitado
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Inversión{' '}
            <span className='text-yellow-400'>única y transparente</span>
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            Sin sorpresas, sin letras pequeñas. Todo incluido en un solo pago
          </p>
        </div>

        <div className='max-w-4xl mx-auto'>
          <div className='bg-white/10 backdrop-blur-sm py-12 px-4 sm:px-13 rounded-3xl border border-white/20 relative overflow-hidden'>
            <div className='absolute top-0 right-0 bg-gradient-to-l from-yellow-400 to-orange-400 text-black px-6 py-2 rounded-bl-2xl font-bold'>
              MEJOR PRECIO
            </div>

            <div className='text-center mb-8'>
              <div className='text-4xl sm:text-7xl font-bold text-white mb-4'>
                $10,000
                <span className='text-xl sm:text-3xl text-gray-300 ml-2'>
                  MXN
                </span>
              </div>
              <p className='text-lg sm:text-2xl text-yellow-400 font-bold mb-2'>
                Pago único • Sin mensualidades
              </p>
              <p className='text-gray-300 text-sm sm:text-base'>
                Incluye todo el sistema y el código fuente
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 md:ml-20'>
              {[
                'Sistema completo instalado',
                'Código fuente 100% tuyo',
                'Personalización incluida',
                'Capacitación completa',
                'Soporte técnico incluido',
                'Usuarios ilimitados',
                'Modificaciones a la medida',
                'Garantía de satisfacción'
              ].map((feature, index) => (
                <div
                  key={index}
                  className='flex items-center space-x-3 justify-center md:justify-start'
                >
                  <div className='w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0'>
                    <svg
                      className='w-4 h-4 text-white'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <span className='text-white font-medium text-xs sm:text-base'>
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className='bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30 rounded-xl p-4'>
              <p className='text-red-300 font-bold'>
                ⏰ Solo quedan 3 espacios disponibles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
