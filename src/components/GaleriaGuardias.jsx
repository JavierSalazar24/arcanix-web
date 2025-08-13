import admin from '../assets/admin.png'
import video_demo from '../assets/video_demo.mp4'

export const GaleriaGuardias = () => {
  return (
    <section className='py-14 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Interfaz <span className='text-blue-600'>moderna y fácil</span>
          </h2>
          <p className='text-xl text-gray-600'>
            Diseñado para que cualquier persona pueda usarlo desde el primer día
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='group bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2'>
            <div className='w-full mb-4 h-[300px]'>
              <img
                src={admin}
                alt='Panel de control principal de guardias Arcanix'
                title='Panel de control principal de guardias Arcanix'
                className='w-full h-full rounded-xl mb-4 group-hover:scale-105 transition-transform duration-500'
              />
            </div>
            <h3 className='text-base sm:text-xl font-bold text-gray-900 mb-2'>
              Dashboard Principal
            </h3>
            <p className='text-gray-600 text-sm sm:text-base'>
              Vista general de toda tu operación en tiempo real
            </p>
          </div>

          <div className='group bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2'>
            <div className='relative w-full mb-4 h-[300px]'>
              <video
                src={video_demo}
                loop
                controls
                className='w-full h-full object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-500'
              />
            </div>
            <h3 className='text-base sm:text-xl font-bold text-gray-900 mb-2'>
              Video del sistema
            </h3>
            <p className='text-gray-600 text-sm sm:text-base'>
              Una demostración visual de las funcionalidades del sistema
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
