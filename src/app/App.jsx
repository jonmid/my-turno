import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Info } from './pages/Info'
import { LayoutPages } from './components/LayoutPages'
import { Site } from './pages/Site'
import { Register } from './pages/Register'
import { GenerateTurn } from './pages/GenerateTurn'

const App = () => {
  return (
    <div className='grid h-screen w-screen'>
      <Routes>
        <Route path='/' element={<Info />} />
        <Route path='/steps' element={<LayoutPages />}>
          <Route index element={<Site />} />
          <Route path='register' element={<Register />} />
          <Route path='generate' element={<GenerateTurn />} />
        </Route>
        <Route path='*' element={<h1>NotFound</h1>} />
      </Routes>
    </div>
  )
}

export { App }
