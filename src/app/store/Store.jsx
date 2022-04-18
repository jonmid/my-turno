import React, { createContext, useState } from 'react'

import Sites from './../utilities/places.json'

const StoreContext = createContext()

const StoreProvider = props => {
  const [openModal, setOpenModal] = useState(false)
  const [positionStep, setPositionStep] = useState(1)
  const [selectItemSite, setSelectItemSite] = useState(false)
  const [selectionSite, setSelectionSite] = useState([])
  const [dataRegisterUser, setDataRegisterUser] = useState([])

  const saveSite = id => {
    const selectSite = Sites.find(item => item.id === id)
    selectionSite.pop()
    selectionSite.push(selectSite)
  }

  const saveDataRegisterUser = user => {
    dataRegisterUser.pop()
    dataRegisterUser.push(user)
  }

  return (
    <StoreContext.Provider
      value={{
        openModal,
        setOpenModal,
        positionStep,
        setPositionStep,
        selectionSite,
        setSelectionSite,
        dataRegisterUser,
        setDataRegisterUser,
        saveSite,
        selectItemSite,
        setSelectItemSite,
        saveDataRegisterUser
      }}
    >
      {props.children}
    </StoreContext.Provider>
  )
}

export { StoreContext, StoreProvider }
