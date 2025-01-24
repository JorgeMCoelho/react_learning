import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { Componente1 } from './Component1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Componente1 />
  </StrictMode>,
)
