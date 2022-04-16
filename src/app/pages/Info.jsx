import React from 'react'

import './../styles/info.css'
import ImgInfo from './../../assets/icons/img-info.svg'
import { Logo } from './../components/Logo'
import { Brand } from './../components/Brand'
import { Button } from './../components/Button'

const Info = () => {
  return (
    <div className='info'>
      <section className='info-section__left'>
        <Logo />
        <div className='info__detail'>
          <h1>
            <span>Solicita tu turno virtual</span>
            <br /> y realiza todos tus trámites sin filas.
          </h1>
          <p>Como solicitar tu turno</p>
          <ul className='info__detail-list'>
            <li>
              <div className='info__detail-list--circle'>
                <span>1</span>
              </div>
              <p className='info__detail-list--title'>Selecciona la oficina mas cercana.</p>
            </li>

            <li>
              <div className='info__detail-list--circle'>
                <span>2</span>
              </div>
              <p className='info__detail-list--title'>Ingresa tus datos.</p>
            </li>

            <li>
              <div className='info__detail-list--circle'>
                <span>3</span>
              </div>
              <p className='info__detail-list--title'>Selecciona el servicio.</p>
            </li>

            <li>
              <div className='info__detail-list--circle'>
                <span>4</span>
              </div>
              <p className='info__detail-list--title'>Verifica tu información.</p>
            </li>
          </ul>

          <Button type='button' text='Solicitar turno' classStyle='button-primary' />
        </div>
      </section>

      <section className='info-section__right'>
        <img src={ImgInfo} alt='img-info' className='mt-24' />
        <Brand />
      </section>
    </div>
  )
}

export { Info }
