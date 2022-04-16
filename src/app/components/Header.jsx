import React from 'react'

import './../styles/header.css'
import { Logo } from './Logo'
import { ToReturn } from './ToReturn'
import { Steps } from './Steps'
import { Brand } from './Brand'

const Header = props => {
  return (
    <div className='header'>
      <Logo />
      <div className='ml-20'>
        <ToReturn />
      </div>
      <div className='flex-1 flex justify-center'>
        <Steps />
      </div>
      <Brand />
    </div>
  )
}

export { Header }
