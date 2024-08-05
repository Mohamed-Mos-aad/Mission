import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import DataContextProvider from './store/index.js'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <DataContextProvider>
    <App />
  </DataContextProvider>
)
