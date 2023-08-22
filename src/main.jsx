import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextTheme } from './components/ContextTheme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextTheme>
      <App />
    </ContextTheme>
  </React.StrictMode>,
)
