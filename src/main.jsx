import React from 'react'
import ReactDOM from 'react-dom/client'
import Aplication from './Aplication'
import TaskContextProvider from './context/TaskContext'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContextProvider>
    <Aplication/>
    </TaskContextProvider>
  </React.StrictMode>,
)