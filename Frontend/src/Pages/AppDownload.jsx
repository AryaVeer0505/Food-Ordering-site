import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const AppDownload = () => {
  return (
    <div className='my-auto mx-auto mt-[100px] text-4xl text-center font-black'>
      <p>For Better Experience Download <br />Tomato App</p>
      <div className='flex justify-center gap-[30px] mt-[40px]'>
        <img src={assets.play_store} alt="" className='w-[180px] max-w-[180px] cursor-pointer transition duration-150 hover:w-[98%]'/>
        <img src={assets.app_store} alt="" className='w-[180px] max-w-[180px] cursor-pointer transition duration-150 hover:w-[98%]'/>
      </div>
    </div>
  )
}

export default AppDownload
