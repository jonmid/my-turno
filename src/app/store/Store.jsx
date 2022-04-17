import React, { createContext, useState } from 'react'

const StoreContext = createContext()

const StoreProvider = props => {
  const [openModal, setOpenModal] = useState(false)
  const [positionStep, setPositionStep] = useState(1)

  const selectionLocation = {}
  const dataRegisterUser = {}

  return <StoreContext.Provider value={{ openModal, setOpenModal, positionStep, setPositionStep, selectionLocation, dataRegisterUser }}>{props.children}</StoreContext.Provider>
}

export { StoreContext, StoreProvider }
