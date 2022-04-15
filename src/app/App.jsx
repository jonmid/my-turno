import React from 'react'
import { Button } from './components/Button'

const App = () => {
  return (
    <>
      <h1 className='text-3xl font-bold underline'>My Turno</h1>
      <Button type='button' text='Solicitar turno' classStyle='button-primary' />
      <Button type='button' text='Solicitar nuevo turno' classStyle='button-secondary' />
    </>
  )
}

export { App }
