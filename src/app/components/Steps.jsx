import React from 'react'

import './../styles/steps.css'

const Steps = () => {
  return (
    <div className='steps'>
      <div className='steps__circle--active'>
        <span>1</span>
      </div>

      <hr className='steps__line--active' />

      <div className='steps__circle--active'>
        <span>2</span>
      </div>

      <hr className='steps__line--inactive' />

      <div className='steps__circle--inactive'>
        <span>3</span>
      </div>

      <hr className='steps__line--inactive' />

      <div className='steps__circle--inactive'>
        <span>4</span>
      </div>
    </div>
  )
}

export { Steps }
