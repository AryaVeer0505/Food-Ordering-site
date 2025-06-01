import React from 'react'
import { assets } from '../assets/admin_assets/assets'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-[8px] px-[4%]'>
        <img src={assets.logo} className='w-[100px]' alt="" />
        <img src={assets.profile_image} className='w-[40px]' alt="" />
    </div>
  )
}

export default Navbar
