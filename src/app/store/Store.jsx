import React, { createContext, useState } from 'react'

const StoreContext = createContext()

const StoreProvider = props => {
  const [openModal, setOpenModal] = useState(false)

  const selectionLocation = {}
  const dataRegisterUser = {}

  return <StoreContext.Provider value={{ openModal, setOpenModal, selectionLocation, dataRegisterUser }}>{props.children}</StoreContext.Provider>
}

export { StoreContext, StoreProvider }
