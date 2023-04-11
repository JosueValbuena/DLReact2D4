import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Carrito from '../pages/Carrito'
import NotFound from '../pages/NotFound'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home /> } />
      <Route path='/carrito' element={<Carrito /> } />
      <Route path='*' element={<NotFound /> } />
    </Routes>
  )
}

export default Routers