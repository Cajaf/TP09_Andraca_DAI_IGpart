
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Perfil from './paginas/perfil/index.tsx'
import Register from './paginas/Register/index.tsx'
import Login from './paginas/Login/index.tsx'
import CrearPublicacion from './paginas/CrearPubli/index.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<App />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/crearPubli" element={<CrearPublicacion />} />
    </Routes>
  </BrowserRouter>
)
