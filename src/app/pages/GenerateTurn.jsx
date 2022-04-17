import React from 'react'

import './../styles/generateTurn.css'
import { Header } from './../components/Header'
import { ItemSite } from './../components/ItemSite'
import { ReCaptcha } from './../components/ReCaptcha'
import { Button } from './../components/Button'
import ImgInfo from './../../assets/img/img-info.svg'

const GenerateTurn = () => {
  return (
    <div className='generate-turn'>
      <div className='col-span-2'>
        <Header />
      </div>

      <div className='generate-turn__info'>
        <h1>Verifica tu información.</h1>

        <section className='generate-turn__data'>
          <h2>
            Jhonatan Andres <br /> Mideros Narvaez
          </h2>
          <span>Cc. 1085254365</span>
        </section>

        <h3>Consulta externa</h3>

        <ItemSite onlyText={true} />

        <div className='mt-4 mb-12'>
          <ReCaptcha />
        </div>

        <Button type='button' text='Aceptar' classStyle='button-primary' />
      </div>

      <div className='generate-turn__img'>
        <img src={ImgInfo} alt='generate-turn' />
      </div>
    </div>
  )
}

export { GenerateTurn }
