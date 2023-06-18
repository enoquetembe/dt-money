import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { Transactions } from './pages/Transactions'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Transactions />
  </React.StrictMode>,
)
