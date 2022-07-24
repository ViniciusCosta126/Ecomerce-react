import React from 'react'
import {BrowserRouter,Routes,Route, Outlet} from 'react-router-dom'
import Categoria from '../pages/Categoria'
import Checkout from '../pages/Checkout'
import Produto from '../pages/Produto'
import Home from '../pages/Home'
import NavBarG from '../components/navbar'

const Rotas = () => {
  return (
    <>
    <BrowserRouter>
    <NavBarG/>
    <Outlet/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/produto/:id' element={<Produto/>}/>
        <Route path='/categoria/:nome' element={<Categoria/>}/>
    </Routes>
  
    </BrowserRouter>
  
    </>

  )
}

export default Rotas