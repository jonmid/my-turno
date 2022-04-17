import React, { useEffect, useContext } from 'react'

import './../styles/register.css'
import { StoreContext } from './../store/Store'
import { FormRegister } from './../components/FormRegister'
import ImgRegister from './../../assets/img/img-register.svg'

const Register = () => {
  const { setPositionStep } = useContext(StoreContext)

  useEffect(() => {
    setPositionStep(2)
  }, [])

  return (
    <div className='register'>
      <div className='register-section__form'>
        <h1>Ingresa tus datos</h1>
        <FormRegister />
      </div>

      <div className='register-section__img'>
        <img src={ImgRegister} alt='register' />
      </div>
    </div>
  )
}

export { Register }
