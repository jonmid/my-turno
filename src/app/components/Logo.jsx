import React from 'react'

import './../styles/logo.css'
import logo from './../../assets/img/logo_cruz_verde.png'

const Logo = () => {
  return (
    <div className='logo'>
      <img src={logo} alt='logo' className='logo__img' />
    </div>
  )
}

export { Logo }
