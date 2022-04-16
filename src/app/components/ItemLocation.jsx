import React from 'react'

import './../styles/itemLocation.css'

const ItemLocation = () => {
  return (
    <div className='item-location'>
      {/* <input type='radio' name='sede' value='item' className='item-location__radio' checked /> */}
      <input type='radio' name='sede' value='item' className='item-location__radio' />

      <section className='item-location__info'>
        <h3>Sede 1</h3>
        <p className='mt-1'>Calle 1 # 87 - 78, Lorem Ipsum</p>
        <p>Horario: Lorem Ipsum</p>
      </section>
    </div>
  )
}

export { ItemLocation }
