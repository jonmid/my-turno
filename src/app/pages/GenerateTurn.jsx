import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import './../styles/generateTurn.css'
import { StoreContext } from './../store/Store'
import { ItemSite } from './../components/ItemSite'
import { ReCaptcha } from './../components/ReCaptcha'
import { Button } from './../components/Button'
import { Modal } from './../components/Modal'
import { ContentModalPdf } from './../components/ContentModalPdf'
import ImgInfo from './../../assets/img/img-info.svg'

const GenerateTurn = () => {
  const { setPositionStep, selectionSite, dataRegisterUser, openModal, setOpenModal } = useContext(StoreContext)
  const navigate = useNavigate()

  const handleClickOk = () => {
    setOpenModal(!openModal)
  }

  useEffect(() => {
    if (selectionSite.length === 0 || dataRegisterUser.length === 0) {
      navigate(`/steps`)
    } else {
      setPositionStep(3)
    }
  }, [])

  return (
    <div className='generate-turn'>
      <div className='generate-turn__info'>
        <h1>Verifica tu información.</h1>

        {dataRegisterUser.length > 0 && (
          <section className='generate-turn__data'>
            <h2>
              {dataRegisterUser[0].firstname} {dataRegisterUser[0].secondname} <br /> {dataRegisterUser[0].lastname} {dataRegisterUser[0].secondsurname}
            </h2>
            <span>Cc. {dataRegisterUser[0].identification}</span>
          </section>
        )}

        <h3>Consulta externa</h3>

        {selectionSite.length > 0 && <ItemSite onlyText={true} data={selectionSite[0]} />}

        <div className='mt-4 mb-12'>
          <ReCaptcha />
        </div>

        <Button type='button' text='Aceptar' classStyle='button-primary' eventOnClick={handleClickOk} />
      </div>

      <div className='generate-turn__img'>
        <img src={ImgInfo} alt='generate-turn' />
      </div>

      {!!openModal && (
        <Modal>
          <ContentModalPdf />
        </Modal>
      )}
    </div>
  )
}

export { GenerateTurn }
