import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouteList } from './routes/RouteList'
import './assets/css/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouteList />
  </React.StrictMode>,
)
