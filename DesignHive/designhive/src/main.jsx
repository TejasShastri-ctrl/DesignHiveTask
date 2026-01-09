import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // <--- Crucial: This import must exist
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
