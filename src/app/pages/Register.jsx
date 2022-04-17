import React from 'react'

import './../styles/register.css'
import { Header } from './../components/Header'
import { FormRegister } from './../components/FormRegister'
import ImgRegister from './../../assets/img/img-register.svg'

const Register = () => {
  return (
    <div className='register'>
      <div className='col-span-2'>
        <Header />
      </div>

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
