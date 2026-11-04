import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MultiversoApp from './MultiversoApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MultiversoApp/>
  </StrictMode>,
)
