import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import ConcesionarioApp from './ConcesionarioApp';
import { GlobalStyles } from '../Globalstyles';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <GlobalStyles />
       <BrowserRouter>
       <ConcesionarioApp />
       </BrowserRouter>
   
  </React.StrictMode>,
)
