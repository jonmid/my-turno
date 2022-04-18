import React, { useContext } from 'react'

import './../styles/contentModalPdf.css'
import Logo from './../../assets/img/logo_cruz_verde.png'
import { StoreContext } from './../store/Store'
import { Button } from './Button'

const ContentModalPdf = () => {
  const { openModal, setOpenModal } = useContext(StoreContext)

  const handleClickPdf = () => {
    setOpenModal(!openModal)
  }

  return (
    <div className='content-modal'>
      <div className='flex justify-center'>
        <img src={Logo} alt='google' className='content-modal--img' />
      </div>

      <h1 className='content-modal--title'>
        ¡Has solicitado tu <br /> turno con éxito!
      </h1>

      <div className='content-modal--info'>
        <div>
          <p>Servicio:</p>
          <span>Consulta externa</span>
        </div>
        <div>
          <p>Día:</p>
          <span>18-04-2022</span>
        </div>
        <div>
          <p>Hora:</p>
          <span>02:00pm</span>
        </div>
      </div>

      <Button type='button' text='Solicitar nuevo turno' classStyle='button-secondary' eventOnClick={handleClickPdf} />
    </div>
  )
}

export { ContentModalPdf }
