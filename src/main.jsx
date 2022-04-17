import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import { StoreProvider } from './app/store/Store'
import { App } from './app/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StoreProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>
)
