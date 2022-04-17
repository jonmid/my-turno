import React from 'react'

import './../styles/site.css'
import { Header } from './../components/Header'
import { ItemSite } from './../components/ItemSite'
import { Button } from './../components/Button'

const Site = () => {
  return (
    <div className='grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] overflow-auto'>
      {/* HEADER */}
      <div className='col-span-2'>
        <Header />
      </div>

      {/* LISTA */}
      <div className='flex flex-col max-w-[325px] pb-10 px-10 overflow-auto shadow-lg'>
        <h1 className='mt-10 mb-6 text-2xl font-black text-app-primary-color'>
          Selecciona la <br /> oficina mas cercana
        </h1>

        <div className='relative mb-10'>
          <input
            id='search'
            type='text'
            name='search'
            className='flex-1 w-full py-2 pl-6 pr-8 text-sm tracking-[0.65px] text-app-gray-11 placeholder-app-gray-11 bg-app-gray-10 rounded-[23px] border-transparent appearance-none focus:outline-none'
            placeholder='Búsqueda'
          />

          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='absolute h-5 w-5 right-3 bottom-2 text-app-gray-11'>
            <path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd' />
          </svg>
        </div>

        <div className='flex-1 flex flex-col mb-10 overflow-auto'>
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

      {/* MAPA */}
      <div className='flex-1 grid place-content-center'>Poner mapa</div>
    </div>
  )
}

export { Site }
