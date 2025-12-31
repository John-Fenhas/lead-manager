import { createRoot } from 'react-dom/client'
import '../index.css'

import { StrictMode } from 'react'
import App from './App.jsx'
import { AuthProvider } from '../context/AuthProvider.jsx'





createRoot(document.getElementById('root')).render(
 
  <StrictMode>
    <AuthProvider>
      <App /> 
    </AuthProvider>
  </StrictMode>


)
