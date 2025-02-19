import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.js'

createRoot(document.getElementById('root')!).render( // ! means trust me it will be there
  <StrictMode>

    <App />

  </StrictMode>,
)
