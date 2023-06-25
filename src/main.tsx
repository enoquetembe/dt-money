import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { Transactions } from './pages/Transactions'
import { TransactionsProvider } from './contexts/TransactionsContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TransactionsProvider>
      <Transactions />
    </TransactionsProvider>
  </React.StrictMode>,
)
