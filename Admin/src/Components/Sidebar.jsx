import React from 'react'
import { assets } from '../assets/admin_assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const linkClasses = ({ isActive }) =>
    isActive
      ? 'border-2 border-orange-500 bg-gray-100 flex items-center gap-[12px] py-[8px] px-[10px] rounded cursor-pointer border-r-0'
      : 'border border-gray-400 border-r-0 flex items-center gap-[12px] py-[8px] px-[10px] rounded cursor-pointer';

  return (
    <div className='w-[18%] min-h-[100vh] border border-gray-500 border-t-0'>
      <div className='pt-[20px] pl-[20%] flex flex-col gap-[30px]'>
        <NavLink to='/add' className={linkClasses}>
          <img src={assets.add_icon} alt="" />
          <p>Add Items</p>
        </NavLink>
        <NavLink to='/list' className={linkClasses}>
          <img src={assets.order_icon} alt="" />
          <p>List Items</p>
        </NavLink>
        <NavLink to='/order' className={linkClasses}>
          <img src={assets.order_icon} alt="" />
          <p>Orders Items</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
