import React from 'react'
import './../styles/button.css'

const Button = ({ type, text, classStyle, eventOnClick }) => {
  const onClick = id => {
    eventOnClick()
  }

  return (
    <button type={type} className={classStyle} onClick={() => onClick()}>
      {text}
    </button>
  )
}

export { Button }
