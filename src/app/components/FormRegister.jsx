import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import './../styles/formRegister.css'
import { StoreContext } from './../store/Store'
import { Button } from './Button'
import { ItemSite } from './ItemSite'

const FormRegister = () => {
  const { setPositionStep, selectionSite, saveDataRegisterUser } = useContext(StoreContext)
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()
  const onSubmit = data => {
    const validate = data.typeidentification !== '' && data.identification !== '' && data.firstname !== '' && data.lastname !== ''

    if (validate) {
      saveDataRegisterUser({
        identification: data.identification,
        firstname: data.firstname,
        secondname: data.secondname,
        lastname: data.lastname,
        secondsurname: data.secondsurname
      })
      setPositionStep(3)
      navigate(`/steps/generate`)
    } else {
      console.log('Error en la validacion del formulario')
    }
  }

  const handleClickGenerateTurn = () => {}

  useEffect(() => {
    if (selectionSite.length === 0) {
      navigate(`/steps`)
    }
  }, [])

  return (
    <form className='form-register' onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='type-identification' className='flex  items-center col-span-2'>
        <select {...register('typeidentification')} id='typeidentification' name='typeidentification'>
          <option value=''>Tipo de identificación</option>
          <option value='cedula'>Cédula de ciudadanía</option>
          <option value='pasaporte'>Pasaporte</option>
        </select>

        <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-app-gray-9' viewBox='0 0 20 20' fill='currentColor'>
          <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
        </svg>
      </label>

      <label htmlFor='identification' className='col-span-2'>
        <input {...register('identification')} id='identification' name='identification' type='text' placeholder='Número de documento' />
      </label>

      <label htmlFor='first-name'>
        <input {...register('firstname')} id='firstname' name='firstname' type='text' placeholder='Primer nombre' />
      </label>

      <label htmlFor='second-name'>
        <input {...register('secondname')} id='secondname' name='secondname' type='text' placeholder='Segundo nombre' />
      </label>

      <label htmlFor='last-name'>
        <input {...register('lastname')} id='lastname' name='lastname' type='text' placeholder='Primer apellido' />
      </label>

      <label htmlFor='second-surname'>
        <input {...register('secondsurname')} id='secondsurname' name='secondsurname' type='text' placeholder='Segundo apellido' />
      </label>

      {selectionSite.length > 0 && (
        <div className='col-span-2'>
          <ItemSite onlyText={true} data={selectionSite[0]} />
        </div>
      )}

      <div className='col-span-2 px-8'>
        <Button type='submit' text='Siguiente' classStyle='button-primary' eventOnClick={handleClickGenerateTurn} />
      </div>
    </form>
  )
}

export { FormRegister }
