import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import './../styles/formRegister.css'
import { StoreContext } from './../store/Store'
import { Button } from './Button'
import { ItemSite } from './ItemSite'

const FormRegister = () => {
  const { setPositionStep } = useContext(StoreContext)
  const navigate = useNavigate()

  const handleClickGenerateTurn = () => {
    setPositionStep(3)
    navigate(`/steps/generate`)
  }

  return (
    <form className='form-register'>
      <label htmlFor='type-identification' className='flex  items-center col-span-2'>
        <select id='type-identification' name='type-identification'>
          <option value=''>Tipo de identificación</option>
          <option value='cedula'>Cédula de ciudadanía</option>
          <option value='pasaporte'>Pasaporte</option>
        </select>

        <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-app-gray-9' viewBox='0 0 20 20' fill='currentColor'>
          <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
        </svg>
      </label>

      <label htmlFor='identification' className='col-span-2'>
        <input id='identification' name='identification' type='text' placeholder='Número de documento' />
      </label>

      <label htmlFor='first-name'>
        <input id='first-name' name='first-name' type='text' placeholder='Primer nombre' />
      </label>

      <label htmlFor='second-name'>
        <input id='second-name' name='second-name' type='text' placeholder='Segundo nombre' />
      </label>

      <label htmlFor='last-name'>
        <input id='last-name' name='last-name' type='text' placeholder='Primer apellido' />
      </label>

      <label htmlFor='second-surname'>
        <input id='second-surname' name='second-surname' type='text' placeholder='Segundo apellido' />
      </label>

      <div className='col-span-2'>
        <ItemSite onlyText={true} />
      </div>

      <div className='col-span-2 px-8'>
        <Button type='button' text='Siguiente' classStyle='button-primary' eventOnClick={handleClickGenerateTurn} />
      </div>
    </form>
  )
}

export { FormRegister }
