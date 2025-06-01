import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import PlaceOrder from './Pages/PlaceOrder'
import Footer from './Components/Footer'
import LoginPopup from './Components/LoginPopup'
import Verify from './Pages/verify'
import MyOrders from './Pages/MyOrders'
const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='w-[80%] m-auto'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<PlaceOrder/>}/>
          <Route path='/verify' element={<Verify/>}/>
          <Route path='/myOrders' element={<MyOrders/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
