export const CTAFinal = ({
  scrollToSection,
  title,
  desc,
  textButton,
  bgFrom,
  bgTo,
  colorDesc,
  points
}) => {
  return (
    <section
      className={`py-14 bg-gradient-to-r from-${bgFrom}-600 to-${bgTo}-600`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
          ¿Listo para <span className='text-yellow-300'>{title}</span> tu
          empresa?
        </h2>
        <p className={`text-xl text-${colorDesc}-100 mb-12 max-w-3xl mx-auto`}>
          Agenda una videollamada sin costo y te mostramos cómo Arcanix puede
          revolucionar tu {desc}
        </p>

        <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
          <button
            onClick={() => scrollToSection('contacto')}
            className='cursor-pointer group bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'
          >
            <span className='flex items-center text-sm sm:text-base'>
              📞 Agendar videollamada gratis
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
            onClick={() => scrollToSection('soluciones')}
            className='cursor-pointer group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 border border-white/30 hover:border-white/50 text-base sm:text-lg'
          >
            {textButton}
          </button>
        </div>

        <div
          className={`mt-12 flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-${colorDesc}-100`}
        >
          {points.map((point, index) => (
            <div className='flex items-center' key={index}>
              <span className='text-2xl mr-2'>{point.icon}</span>
              {point.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
