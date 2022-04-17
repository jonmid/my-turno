import React from 'react'

import './../styles/site.css'
import { Header } from './../components/Header'
import { ItemSite } from './../components/ItemSite'
import { Button } from './../components/Button'

const Site = () => {
  return (
    <div className='site'>
      <div className='col-span-2'>
        <Header />
      </div>

      <div className='site-list'>
        <h1 className='site-list--title'>
          Selecciona la <br /> oficina mas cercana
        </h1>

        <div className='site-list__search'>
          <input id='search' type='text' name='search' className='site-list__search--input' placeholder='Búsqueda' />

          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='absolute h-5 w-5 right-3 bottom-2 text-app-gray-11'>
            <path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd' />
          </svg>
        </div>

        <div className='site-list__items'>
          <ItemSite />
          <ItemSite />
          <ItemSite />
          <ItemSite />
          <ItemSite />
          <ItemSite />
          <ItemSite />
          <ItemSite />
          <ItemSite />
          <ItemSite />
          <ItemSite />
          <ItemSite />
        </div>

        <Button type='button' text='Seleccionar' classStyle='button-primary' />
      </div>

      <div className='site-map'>Poner mapa</div>
    </div>
  )
}

export { Site }
