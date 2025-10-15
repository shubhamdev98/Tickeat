import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './context/AuthContext'
import AppRouter from './router/AppRouter'
import { LocationProvider } from './context/LocationContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LocationProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </LocationProvider>
  </React.StrictMode>
)
