export const DemoDeportes = () => {
  return (
    <section
      id='demo'
      className='py-14 bg-gradient-to-br from-gray-900 to-gray-800'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <div className='mb-12'>
          <div className='inline-flex items-center px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full text-green-300 text-sm font-medium mb-6 border border-green-400/30'>
            <span className='w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse'></span>
            Demo en vivo disponible 24/7
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Prueba <span className='text-green-400'>todo el sistema</span> ahora
            mismo
          </h2>
          <p className='text-xl text-gray-300 mb-12 max-w-3xl mx-auto'>
            Explora tanto el software administrativo como el portal de tutores
            en tiempo real. No necesitas agendar nada.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
          <div className='bg-white/10 backdrop-blur-sm p-4 sm:p-8 rounded-2xl max-w-2xl w-full mx-auto mb-12 border border-white/20'>
            <h3 className='text-2xl font-bold text-white mb-4 sm:mb-6'>
              🏢 Software Administrativo
            </h3>
            <div className='space-y-4 text-left bg-gray-900/50 p-6 rounded-xl'>
              <div className='flex items-center justify-between flex-col sm:flex-row gap-2'>
                <span className='text-gray-300'>URL:</span>
                <a
                  href='https://deportes.arcanix.com.mx/'
                  target='_blank'
                  title='URL de la la demo de Arcanix'
                  rel='noopener noreferrer'
                  className='text-red-400 font-mono hover:underline text-sm sm:text-base break-all text-center'
                >
                  https://deportes.arcanix.com.mx/
                </a>
              </div>
              <div className='flex items-center justify-between flex-col sm:flex-row gap-2'>
                <span className='text-gray-300'>Correo:</span>
                <span className='text-red-400 font-mono text-sm sm:text-base'>
                  deportes@arcanix.com.mx
                </span>
              </div>
              <div className='flex items-center justify-between flex-col sm:flex-row'>
                <span className='text-gray-300'>Contraseña:</span>
                <span className='text-red-400 font-mono text-sm sm:text-base'>
                  arcanix
                </span>
              </div>
            </div>
          </div>

          <div className='bg-white/10 backdrop-blur-sm p-4 sm:p-8 rounded-2xl max-w-2xl w-full mx-auto mb-12 border border-white/20'>
            <h3 className='text-2xl font-bold text-white mb-4 sm:mb-6'>
              👨‍👩‍👧‍👦 Portal de Tutores
            </h3>
            <div className='space-y-4 text-left bg-gray-900/50 p-6 rounded-xl'>
              <div className='flex items-center justify-between flex-col sm:flex-row gap-2'>
                <span className='text-gray-300'>URL:</span>
                <a
                  href='https://tutores-deportes.arcanix.com.mx/'
                  target='_blank'
                  title='URL de la la demo de tutores'
                  rel='noopener noreferrer'
                  className='text-orange-400 font-mono hover:underline text-sm sm:text-base break-all text-center'
                >
                  https://tutores-deportes.arcanix.com.mx/
                </a>
              </div>
              <div className='flex items-center justify-between flex-col sm:flex-row gap-2'>
                <span className='text-gray-300'>Correo:</span>
                <span className='text-orange-400 font-mono text-sm sm:text-base'>
                  tutor1@mail.com
                </span>
              </div>
              <div className='flex items-center justify-between flex-col sm:flex-row'>
                <span className='text-gray-300'>Contraseña:</span>
                <span className='text-orange-400 font-mono text-sm sm:text-base'>
                  tutor1234
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <a
            href='https://deportes.arcanix.com.mx/'
            target='_blank'
            className='group inline-flex items-center bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-red-500/25'
          >
            <span className='mr-3'>🏢</span>
            Demo Administrativo
          </a>

          <a
            href='https://tutores-deportes.arcanix.com.mx/'
            target='_blank'
            className='group inline-flex items-center bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-orange-500/25'
          >
            <span className='mr-3'>👨‍👩‍👧‍👦</span>
            Demo Tutores
          </a>
        </div>
      </div>
    </section>
  )
}
