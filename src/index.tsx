import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './assets/styles/reset.css'
import './assets/styles/reboot.css'
import Home from './pages/Home/Home'
import reportWebVitals from './reportWebVitals'

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
