import React, { useContext, useState } from 'react'
import {assets} from '../assets/frontend_assets/assets.js'
import {Link, useNavigate} from 'react-router-dom'
import { StoreContext } from '../Context/StoreContext.jsx'
const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]=useState('home')
    const navigate=useNavigate()
    const {getTotalCartAmount,token,setToken}=useContext(StoreContext)
    const logout=()=>{
       localStorage.removeItem("token")
       setToken("")
       navigate('/')
    }
  return (
    <div className='flex justify-between items-center py-5 px-0 '>
      <Link to='/'><img src={assets.logo} alt="" className='w-[150px] '/></Link>
      <ul className='flex gap-9 text-[#49667e] text-[18px] '>
          <li onClick={()=>{setMenu('home'); navigate('/')}} className={menu==='home'?'pb-1/2 border-b-2 border-gray-600':'cursor-pointer'}>Home</li>
          <li onClick={()=>setMenu('menu')} className={menu==='menu'?'pb-1/2 border-b-2 border-gray-600':'cursor-pointer'}>Menu</li>
          <li onClick={()=>setMenu('mobile-app')} className={menu==='mobile-app'?'pb-1/2 border-b-2 border-gray-600':'cursor-pointer'}>Mobile App</li>
          <li onClick={()=>setMenu('contact-us')} className={menu==='contact-us'?'pb-1/2 border-b-2 border-gray-600':'cursor-pointer'}>Contact us</li>
      </ul>
      <div className='flex items-center gap-10'>
         <img src={assets.search_icon} alt="" />
         <div className='relative'>
               <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
               <div className={getTotalCartAmount()===0?"":'absolute min-w-[10px] min-h-[10px] bg-red-500 rounded-2xl top-[-8px] right-[-8px]'}>
                
         </div>
         </div>
         {!token?<button className='bg-transparent text-lg text-[#49667e] border-1 border-red-500 py-1 px-4 rounded-2xl cursor-pointer hover:bg-red-500 hover:text-white transition-all ease-in-out duration-300' onClick={()=>setShowLogin(true)}>Sign in</button>
         :<div className='relative navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className='absolute hidden right-0 z-1 navbar-profile-dropdown'>
                <li><img src={assets.bag_icon} alt="" /><Link to='/myorders'>Orders</Link></li>
                <hr />
                <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>}
         
      </div>
    </div>
  )
}

export default Navbar
