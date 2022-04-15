import React from 'react'

import NetuxSVG from './../../assets/icons/netux.svg?component'

const Brand = () => {
  return (
    <div className='max-w-[122px] text-app-black-color'>
      <NetuxSVG className='max-w-[122px]' />
      <p className='mt-3 text-[10px] text-right text-app-gray-3 tracking-[0.4px]'>
        2022 <span className='font-black'>Netux</span> &#174;
      </p>
    </div>
  )
}

export { Brand }
