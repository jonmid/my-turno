import React, { useContext } from 'react'

import './../styles/steps.css'
import { StoreContext } from './../store/Store'

const Steps = () => {
  const { positionStep, setPositionStep } = useContext(StoreContext)

  return (
    <div className='steps'>
      <div className={`${positionStep >= 1 ? 'steps__circle--active' : 'steps__circle--inactive'}`}>
        <span>1</span>
      </div>

      <hr className={`${positionStep > 1 ? 'steps__line--active' : 'steps__line--inactive'}`} />

      <div className={`${positionStep >= 2 ? 'steps__circle--active' : 'steps__circle--inactive'}`}>
        <span>2</span>
      </div>

      <hr className={`${positionStep > 2 ? 'steps__line--active' : 'steps__line--inactive'}`} />

      <div className={`${positionStep >= 3 ? 'steps__circle--active' : 'steps__circle--inactive'}`}>
        <span>3</span>
      </div>
    </div>
  )
}

export { Steps }
