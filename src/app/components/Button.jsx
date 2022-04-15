import React from 'react'
import './../styles/button.css'

const Button = ({ type, text, classStyle }) => {
  return (
    <button type={type} className={classStyle}>
      {text}
    </button>
  )
}

export { Button }
