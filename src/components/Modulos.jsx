export const Modulos = ({
  modulos,
  bgFrom,
  bgVia,
  bgTo,
  colorText,
  colorDesc,
  text,
  desc,
  bgCard,
  borderCard,
  pointText
}) => {
  return (
    <section
      id='modulos'
      className={`py-17 bg-gradient-to-r from-${bgFrom} via-${bgVia} to-${bgTo}`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            {modulos.length} módulos{' '}
            <span className={`text-${colorText}`}>{text}</span>
          </h2>
          <p className={`text-xl text-${colorDesc}`}>{desc}</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {modulos.map((module, index) => (
            <div
              key={index}
              className={`bg-${bgCard} backdrop-blur-sm p-8 rounded-2xl border border-${borderCard} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
            >
              <div className='text-4xl mb-4'>{module.icon}</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                {module.title}
              </h3>
              <p className='text-white mb-6 text-base leading-relaxed'>
                {module.description}
              </p>
              <div className='space-y-2'>
                {module.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className='flex items-center space-x-3'
                  >
                    <div
                      className={`w-2 h-2 bg-${pointText}-400 rounded-full`}
                    ></div>
                    <span className='text-white/90 font-medium text-sm'>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Módulo especial para el séptimo */}
          {/* <div className='bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 md:col-span-2 lg:col-span-3 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2'>
            <div className='text-4xl mb-4'>{modulos[6].icon}</div>
            <h3 className='text-xl font-bold text-white mb-4'>
              {modulos[6].title}
            </h3>
            <p className='text-white mb-6 text-base leading-relaxed'>
              {modulos[6].description}
            </p>
            <div className='space-y-2'>
              {modulos[6].features.map((feature, featureIndex) => (
                <div key={featureIndex} className='flex items-center space-x-3'>
                  <div className='w-2 h-2 bg-yellow-400 rounded-full'></div>
                  <span className='text-white/90 font-medium text-sm'>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
