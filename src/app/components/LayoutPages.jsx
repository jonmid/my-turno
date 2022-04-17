import React from 'react'
import { Outlet } from 'react-router-dom'

import './../styles/layoutPages.css'
import { Header } from './Header'

const LayoutPages = () => {
  return (
    <div className='layout-pages'>
      <Header />

      <Outlet />
    </div>
  )
}

export { LayoutPages }
