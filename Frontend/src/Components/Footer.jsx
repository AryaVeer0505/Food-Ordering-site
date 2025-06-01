import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='text-[#d9d9d9] bg-black flex flex-col items-center gap-[20px] py-[20px] px-[8vw] pt-[80px] mt-[100px]'>
       <div className='flex justify-between w-full gap-[80px]'>
           <div className='flex flex-col item-start gap-[20px] max-w-[30%]'>
             <img src={assets.logo} alt="" className='w-[150px]'/>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti molestias commodi exercitationem delectus minima similique cumque ipsa illum voluptates laborum.</p>
             <div className='flex '>
               <img className='w-[40px] mr-[15px] cursor-pointer' src={assets.facebook_icon} alt="" />
               <img className='w-[40px] mr-[15px] cursor-pointer' src={assets.twitter_icon} alt="" />
               <img className='w-[40px] mr-[15px] cursor-pointer' src={assets.linkedin_icon} alt="" />
           </div>
           </div>
           <div className='flex flex-col item-start gap-[20px]'>
              <h2 className='text-white text-3xl font-bold'>Company</h2>
              <ul className=''>
                <li>Home</li>
                <li>About-Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
              </ul>
           </div>
           <div className='flex flex-col item-start gap-[20px]'>
                <h2 className='text-white text-3xl font-bold'>Get in Touch</h2>
                <ul className=''>
                    <li>+917018800377</li>
                    <li>aryaveerkanwar11458@gmail.com</li>
                </ul>
           </div>
       </div>
       <hr className='w-full h-[2px] my-[20px] mx-0 bg-gray-500 border-0'/>
       <p className=''>Copyright 2025 || Aryaveer Kanwar || All rights Reserved</p>
    </div>
  )
}

export default Footer
