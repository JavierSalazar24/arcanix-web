import { Link, useNavigate } from 'react-router'
import logo from '../assets/letras.png'
import { useEffect, useState } from 'react'

const sectionsHome = ['soluciones', 'beneficios', 'contacto']

const sectionsGuardias = [
  'inicio',
  'beneficios',
  'modulos',
  'demo',
  'precio',
  'contacto'
]

const sectionsDeportes = [
  'inicio',
  'beneficios',
  'modulos',
  'tutores',
  'demo',
  'precio',
  'contacto'
]

export const Navbar = ({ scrollToSection, text }) => {
  const navigate = useNavigate()

  const [sections, setSections] = useState(sectionsHome)

  useEffect(() => {
    setSections(
      text === 'home'
        ? sectionsHome
        : text === 'guardias'
        ? sectionsGuardias
        : sectionsDeportes
    )
  }, [text])

  return (
    <nav className='fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-100'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-center md:justify-between items-center h-16'>
          <div className='flex-shrink-0'>
            <div className='flex items-center space-x-2'>
              <div className='w-40 bg-gradient-to-br rounded-lg flex items-center justify-center'>
                <Link to='/'>
                  <img
                    src={logo}
                    className='w-full h-full object-cover'
                    alt='Logo de Arcanix'
                    title='Logo de Arcanix'
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-6'>
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    if (section === 'inicio') {
                      navigate('/')
                    } else {
                      scrollToSection(section)
                    }
                  }}
                  className={`text-gray-700 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 capitalize cursor-pointer ${
                    text === 'home'
                      ? 'hover:text-indigo-600'
                      : text === 'guardias'
                      ? 'hover:text-blue-600'
                      : 'hover:text-red-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
