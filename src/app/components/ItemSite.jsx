import React, { useRef, useContext } from 'react'

import './../styles/itemSite.css'
import { StoreContext } from './../store/Store'

const ItemSite = ({ onlyText = false, data }) => {
  const { saveSite, setSelectItemSite } = useContext(StoreContext)
  const inputEl = useRef(null)
  const style = onlyText ? 'item-site-onlytext' : 'item-site'

  const onButtonClickRadio = () => {
    setSelectItemSite(true)
    saveSite(inputEl.current.value)
  }

  return (
    <div className={style}>
      {/* <input type='radio' name='sede' value='item' className='item-site__radio' checked /> */}
      {!onlyText && <input ref={inputEl} type='radio' name='sede' value={data.id} className='item-site__radio' onClick={() => onButtonClickRadio()} />}

      <section className='item-site__info'>
        <h3>{data.name}</h3>
        <p className='mt-1'>{data.formatted_address}</p>
        <p>Horario: 8:00 am - 6:00 pm</p>
      </section>
    </div>
  )
}

export { ItemSite }
