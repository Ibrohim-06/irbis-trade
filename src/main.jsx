import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import { AppProvider } from './context/context.jsx'

const container = document.getElementById('root')

hydrateRoot(
  container,
  <HashRouter>
    <AppProvider>
      <App />
    </AppProvider>
  </HashRouter>
)