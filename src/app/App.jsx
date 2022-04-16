import React from 'react'
import { Steps } from './components/Steps'

const App = () => {
  return (
    <>
      <h1 className='text-3xl font-bold underline'>My Turno</h1>
      <br />
      <Steps position={2} />
    </>
  )
}

export { App }
