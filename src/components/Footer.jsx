import logo from '../assets/logo_blanco.png'

export const Footer = ({ text }) => {
  return (
    <footer id='contacto' className='py-17 bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold mb-8'>Contacta con nosotros</h2>
          <p className='text-base sm:text-xl text-gray-300 mb-12'>
            Estamos aquí para ayudarte a{' '}
            {text === 'home'
              ? 'encontrar la solución perfecta para tu empresa'
              : text === 'guardias'
              ? 'transformar tu empresa de seguridad'
              : 'transformar tu club deportivo'}
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
            <a
              href='mailto:contacto@arcanix.com.mx'
              title='Enviar un correo a contacto@arcanix.com.mx'
              className='bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:scale-105 hover:shadow-lg transition-transform duration-300'
            >
              <div className='text-4xl mb-4'>📧</div>
              <h3 className='text-xl font-bold mb-2'>Email</h3>
              <p className='text-indigo-400 text-lg font-medium'>
                contacto@arcanix.com.mx
              </p>
              <p className='text-gray-400 mt-2'>
                Respuesta en menos de 2 horas
              </p>
            </a>

            <a
              href='https://wa.me/5216181839816'
              target='_blank'
              rel='noopener noreferrer'
              title='Enviar un mensaje por WhatsApp'
              className='bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:scale-105 hover:shadow-lg transition-transform duration-300'
            >
              <div className='text-4xl mb-4'>📱</div>
              <h3 className='text-xl font-bold mb-2'>WhatsApp</h3>
              <p className='text-green-400 text-lg font-medium'>618 183 9816</p>
              <p className='text-gray-400 mt-2'>
                Disponible de 9:00 AM a 7:00 PM
              </p>
            </a>
          </div>
        </div>

        <div className='border-t border-gray-800 pt-12 text-center'>
          <div className='flex items-center justify-center space-x-2 mb-4'>
            <div className='w-60 py-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center'>
              <img
                src={logo}
                className='w-full h-full object-contain'
                alt='Logo de Arcanix'
                title='Logo de Arcanix'
              />
            </div>
          </div>
          <p className='text-gray-400 mb-6'>
            El sistema definitivo para{' '}
            {text === 'home'
              ? 'soluciones tecnológicas especializadas por industria'
              : text === 'guardias'
              ? 'empresas de seguridad'
              : 'clubes deportivos'}
          </p>
          <p className='text-gray-500'>
            © 2025 Arcanix. Todos los derechos reservados. | Hecho con ❤️ para{' '}
            {text === 'home'
              ? 'tu industria'
              : text === 'guardias'
              ? 'tu seguridad'
              : 'el deporte'}
          </p>
        </div>
      </div>
    </footer>
  )
}
