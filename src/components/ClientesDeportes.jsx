import logo_ducks from '../assets/clientes/ducks.png'
import logo_toros from '../assets/clientes/toros.png'
import logo_potros from '../assets/clientes/potros.png'

const clientes = [
  {
    name: 'DUCKS Football Oficial',
    description: 'CLUB DEPORTIVO DE FOOTBALL AMERICANO',
    img: logo_ducks,
    url: 'https://www.facebook.com/ducksapodacanorte'
  },
  {
    name: 'CLUB TOROS MFL Oficial',
    description: 'TOROS DE SAN NICOLAS',
    img: logo_toros,
    url: 'https://www.facebook.com/ClubTorosMflOficial'
  },
  {
    name: 'Potros de la Anáhuac',
    description: 'CLUB DEPORTIVO DE FOOTBALL AMERICANO',
    img: logo_potros,
    url: 'https://www.facebook.com/potrosanahuac'
  }
]

export const ClientesDeportes = () => {
  return (
    <section className='py-17 bg-white' id='clientes'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <div className='inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-800 text-sm font-medium mb-6'>
            Clientes que confían en nosotros
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Clientes que ya <span className='text-red-600'>transformaron</span>{' '}
            su operación
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Ellos ya confiaron en nuestras soluciones para digitalizar su
            gestión, optimizar sus procesos y mejorar su control operativo.{' '}
            <span className='text-red-600 font-semibold'>
              ¡Ahora es tu turno!
            </span>
          </p>
        </div>

        {/* Grid de logos con categorías */}
        <div className='mb-5 px-20'>
          <div className='grid justify-center gap-6 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]'>
            {clientes.map((company) => (
              <a
                key={company.url}
                href={company.url}
                target='_blank'
                rel='noopener noreferrer'
                className='group flex flex-col items-center justify-center p-8 bg-gradient-to-br hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer relative overflow-hidden from-red-50 to-orange-50 rounded-2xl border-2 border-red-200 hover:border-red-400'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700'></div>

                <div className='mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <img
                    src={company.img}
                    className='w-28 h-28 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-xl'
                    alt={`Logo de ${company.name}`}
                  />
                </div>

                <h3 className='text-lg font-bold text-gray-900 text-center mb-1'>
                  {company.name}
                </h3>

                <p className='text-sm text-gray-600 text-center mb-3'>
                  {company.description}
                </p>

                <div className='flex items-center px-3 py-1 bg-red-100 rounded-full'>
                  <span className='text-xs font-medium text-red-700'>
                    Deportes
                  </span>
                </div>

                <div className='absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <svg
                    className='w-5 h-5 text-red-600'
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
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Texto informativo */}
        <div className='text-center'>
          <p className='text-gray-400 italic'>
            Haz clic en cualquier club para conocer más sobre ellos
          </p>
        </div>
      </div>
    </section>
  )
}
