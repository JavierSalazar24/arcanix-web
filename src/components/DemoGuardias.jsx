export const DemoGuardias = () => {
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
            No necesitas agendar nada. Entra y explora todas las funcionalidades
            en tiempo real
          </p>
        </div>

        <div className='bg-white/10 backdrop-blur-sm p-4 sm:p-8 rounded-2xl max-w-2xl mx-auto mb-12 border border-white/20'>
          <h3 className='text-2xl font-bold text-white mb-4 sm:mb-6'>
            Credenciales de acceso:
          </h3>
          <div className='space-y-4 text-left bg-gray-900/50 p-6 rounded-xl'>
            <div className='flex items-center justify-between flex-col sm:flex-row'>
              <span className='text-gray-300'>URL:</span>
              <a
                href='https://admin.arcanix.com.mx'
                target='_blank'
                title='URL de la la demo de Arcanix'
                rel='noopener noreferrer'
                className='text-blue-400 font-mono hover:underline text-sm sm:text-base'
              >
                https://admin.arcanix.com.mx
              </a>
            </div>
            <div className='flex items-center justify-between flex-col sm:flex-row'>
              <span className='text-gray-300'>Correo:</span>
              <span className='text-blue-400 font-mono text-sm sm:text-base'>
                admin@arcanix.com.mx
              </span>
            </div>
            <div className='flex items-center justify-between flex-col sm:flex-row'>
              <span className='text-gray-300'>Contraseña:</span>
              <span className='text-blue-400 font-mono text-sm sm:text-base'>
                arcanix
              </span>
            </div>
          </div>
        </div>

        <a
          href='https://admin.arcanix.com.mx'
          target='_blank'
          title='Acceder a la demo de Arcanix'
          rel='noopener noreferrer'
          className='group inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-green-500/25'
        >
          <span className='mr-3'>🚀</span>
          Acceder a la demo
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
              d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
            />
          </svg>
        </a>
      </div>
    </section>
  )
}
