import { Route, Routes } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import GuardiasPage from './page/GuardiasPage'
import DeportesPage from './page/DeportesPage'
import HomePage from './page/HomePage'

function App() {
  return (
    <div className='min-h-screen bg-white'>
      <HelmetProvider>
        <Routes>
          <Route index path='/' element={<HomePage />} />
          <Route path='/guardias' element={<GuardiasPage />} />
          <Route path='/deportes' element={<DeportesPage />} />
        </Routes>
      </HelmetProvider>
    </div>
  )
}

export default App
