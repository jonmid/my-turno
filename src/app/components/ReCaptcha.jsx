import React from 'react'

import './../styles/reCaptcha.css'
import Recaptcha from './../../assets/img/recaptcha.svg'

const ReCaptcha = () => {
  return (
    <div className='recaptcha'>
      <span className='recaptcha__title'>I am not a robot</span>
      <img src={Recaptcha} alt='recaptcha' className='recaptcha__img' />
    </div>
  )
}

export { ReCaptcha }
