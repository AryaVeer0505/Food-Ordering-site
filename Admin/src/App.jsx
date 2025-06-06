import React from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import { Routes,Route } from 'react-router-dom'
import Add from './Pages/Add'
import List from './Pages/List'
import Order from './Pages/Order'
import {ToastContainer} from 'react-toastify'
const App = () => {
  const url="https://food-ordering-site-backend-9mo8.onrender.com"
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className='flex'>
          <Sidebar/>
          <Routes>
            <Route path='/add' element={<Add url={url}/>}/>
            <Route path='/list' element={<List url={url}/>}/>
            <Route path='/order' element={<Order url={url}/>}/>
          </Routes>
      </div>
    </div>
  )
}

export default App
