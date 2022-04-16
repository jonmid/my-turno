import React from 'react'

import './../styles/brand.css'
import NetuxSVG from './../../assets/icons/netux.svg?component'

const Brand = () => {
  return (
    <div className='brand'>
      <NetuxSVG className='brand__svg' />
      <p className='brand__info'>
        2022 <span className='brand__info--span'>Netux</span> &#174;
      </p>
    </div>
  )
}

export { Brand }
