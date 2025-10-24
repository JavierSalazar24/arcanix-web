export const Beneficios = ({
  beneficios,
  bgFrom,
  bgTo,
  color,
  title,
  description
}) => {
  return (
    <section
      id='beneficios'
      className={`py-17 bg-gradient-to-b from-${bgFrom}-50 to-${bgTo}-50`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-20'>
          <div
            className={`inline-flex items-center px-4 py-2 bg-${color}-100 rounded-full text-${color}-800 text-sm font-medium mb-6`}
          >
            ¿Por qué elegir Arcanix?
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Beneficios que <span className={`text-${color}-600`}>{title}</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            {description}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {beneficios.map((benefit, index) => (
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
              {benefit.subtitle && (
                <p
                  className={`text-2xl font-bold mb-3 text-${benefit.color}-600`}
                >
                  {benefit.subtitle}
                </p>
              )}
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
