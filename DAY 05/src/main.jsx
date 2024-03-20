import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'
import LandingPage from './pages/user/Landing.jsx'
import Stay1 from './pages/user/Stay1.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    
   <App/>
    

  </BrowserRouter>
)
