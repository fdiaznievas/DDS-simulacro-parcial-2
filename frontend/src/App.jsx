import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Ciudades from './components/ciudades'
import Ciudad from './components/Ciudad'
import Home from './components/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="navbar navbar-dark bg-dark px-5 justify-content-center">
        <Link to="/" className="navbar-brand">Inicio</Link>
        <Link to="/ciudades" className="btn btn-outline-light">Ciudades</Link>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/ciudades" element={<Ciudades/>} />
          <Route path="/ciudad/:id" element={<Ciudad/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
