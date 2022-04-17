import React from 'react'
import { useNavigate } from 'react-router-dom'

import './../styles/toReturn.css'
import ArrowSVG from './../../assets/icons/arrow.svg?component'

const ToReturn = () => {
  const navigate = useNavigate()

  return (
    <div className='icon-arrow' onClick={() => navigate(-1)}>
      <ArrowSVG />
      <span>atras</span>
    </div>
  )
}

export { ToReturn }
