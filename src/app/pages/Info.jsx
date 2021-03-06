import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import './../styles/info.css'
import { StoreContext } from './../store/Store'
import ImgInfo from './../../assets/img/img-info.svg'
import { Logo } from './../components/Logo'
import { Brand } from './../components/Brand'
import { Button } from './../components/Button'

const Info = () => {
  const { setPositionStep } = useContext(StoreContext)
  const navigate = useNavigate()

  const handleClickSteps = () => {
    setPositionStep(1)
    navigate(`/steps`)
  }

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

          <Button type='button' text='Solicitar turno' classStyle='button-primary' eventOnClick={handleClickSteps} />
        </div>
      </section>

      <section className='info-section__right'>
        <div className='info-section__right--img'>
          <img src={ImgInfo} alt='img-info' />
          <Brand />
        </div>
      </section>
    </div>
  )
}

export { Info }
