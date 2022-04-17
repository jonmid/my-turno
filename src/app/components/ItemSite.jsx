import React from 'react'

import './../styles/itemSite.css'

const ItemSite = () => {
  return (
    <div className='item-site'>
      {/* <input type='radio' name='sede' value='item' className='item-site__radio' checked /> */}
      <input type='radio' name='sede' value='item' className='item-site__radio' />

      <section className='item-site__info'>
        <h3>Sede 1</h3>
        <p className='mt-1'>Calle 1 # 87 - 78, Lorem Ipsum</p>
        <p>Horario: Lorem Ipsum</p>
      </section>
    </div>
  )
}

export { ItemSite }
