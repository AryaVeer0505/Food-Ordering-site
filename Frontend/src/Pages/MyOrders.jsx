import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../Context/StoreContext'
import axios from 'axios'
import { assets } from '../assets/frontend_assets/assets'
const MyOrders = () => {
    const [data,setData]=useState([])
    const {url,token}=useContext(StoreContext)

    const fetchOrders=async()=>{
        const response=await axios.post(url+'/api/order/userOrders',{},{headers:{token}})
        setData(response.data.data)
        console.log(response.data.data)
    }

    useEffect(()=>{
         if(token){
            fetchOrders()
         }
    },[token])
  return (
    <div className='my-[50px] mx-0'>
      <h2>My Orders</h2>
      <div className='flex flex-col gap-[20px] mt-7'>
          {data.map((order,index)=>{
           return(
             <div key={index} className='grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] items-center gap-[40px] text-md py-[10px] px-[20px] text-[#454545] border border-red-400'>
                <img src={assets.parcel_icon} alt="" className='w-[50px]'/>
                <p className=''>{order.items.map((item,index)=>{
                       if(index===order.items.length-1){
                        return item.name+" x "+item.quantity
                       }
                       else{
                        return item.name+" x "+item.quantity+" ,"
                       }
                })}</p>
                <p className=''>${order.amount}.00</p>
                <p className=''>Items: {order.items.length}</p>
                <p className=''><span className='text-red-500'>&#x25cf;</span><b className='font-medium text-[#454545]'>{order.status}</b></p>
                <button onClick={fetchOrders} className='border-0 py-[12px] px-0 rounded bg-[#ffe1e1] text-[#454545] cursor-pointer text-md'>Track Order</button>
            </div>
           )
          })}
      </div>
    </div>
  )
}

export default MyOrders
