import React from 'react'
import { useNavigate } from 'react-router-dom'

import './../styles/logo.css'
import logo from './../../assets/img/logo_cruz_verde.png'

const Logo = () => {
  const navigate = useNavigate()

  const handleClickLogo = () => {
    navigate(`/`)
  }

  return (
    <div className='logo' onClick={() => handleClickLogo()}>
      <img src={logo} alt='logo' className='logo__img' />
    </div>
  )
}

export { Logo }
