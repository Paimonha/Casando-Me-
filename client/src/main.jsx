import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomeLogin from './Pages/HomeLogin/HomeLogin'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomeLogin />
  </StrictMode>,
)
