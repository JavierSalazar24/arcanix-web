export const HeroSection = ({ scrollToSection }) => {
  return (
    <section className='pt-16 min-h-screen flex items-center relative overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900'></div>
      <div className='absolute inset-0 opacity-20'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 pt-4 sm:px-6 lg:px-8 text-center'>
        <div className='animate-fade-in-up'>
          <div className='inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium mb-8 border border-blue-400/30'>
            <span className='w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse'></span>
            Sistema para empresas de seguridad
          </div>

          <h1 className='text-3xl md:text-7xl font-bold text-white mb-6 leading-tight'>
            El{' '}
            <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
              sistema definitivo
            </span>
            <br />
            para empresas de seguridad
          </h1>

          <p className='text-base md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed'>
            Centraliza guardias, finanzas, inventario y recursos humanos en una
            sola plataforma.
            <span className='text-blue-400 font-semibold'>
              {' '}
              Sin mensualidades, código fuente incluido.
            </span>
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-10'>
            <button
              onClick={() => scrollToSection('demo')}
              className='cursor-pointer group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-blue-500/25'
            >
              <span className='flex items-center text-sm md:text-base'>
                Probar demo gratis
                <svg
                  className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 7l5 5m0 0l-5 5m5-5H6'
                  />
                </svg>
              </span>
            </button>

            <button
              onClick={() => scrollToSection('precio')}
              className='cursor-pointer group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl text-sm md:text-lg transition-all duration-300 border border-white/20 hover:border-white/40'
            >
              Ver precio
            </button>
          </div>

          <div className='flex flex-wrap justify-center items-center gap-4 md:gap-8 text-gray-400 text-sm pb-4 xl:pb-0'>
            <div className='flex items-center'>
              <svg
                className='w-5 h-5 text-green-400 mr-2'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
              Instalación en 24 horas
            </div>
            <div className='flex items-center'>
              <svg
                className='w-5 h-5 text-green-400 mr-2'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
              Soporte incluido
            </div>
            <div className='flex items-center'>
              <svg
                className='w-5 h-5 text-green-400 mr-2'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
              Garantía de satisfacción
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className='absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse'></div>
      <div className='absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000'></div>
    </section>
  )
}
