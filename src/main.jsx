import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter , Route, Routes } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Hydro-NutriCalc/">
      <Routes>
        <Route path='*' element={<App />}>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
