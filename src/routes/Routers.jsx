import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Carrito from '../pages/Carrito'
import NotFound from '../pages/NotFound'
import Pizza from '../pages/Pizza'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home /> } />
      <Route path='/carrito' element={<Carrito /> } />
      <Route path='/pizza/:id' element={<Pizza />} />
      <Route path='*' element={<NotFound /> } />
    </Routes>
  )
}

export default Routers