import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../Context/StoreContext'
import { useNavigate } from 'react-router'
import axios from 'axios'

const PlaceOrder = () => {
  const {getTotalCartAmount,token,food_list,cartItems,url}=useContext(StoreContext)
  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    pincode:"",
    country:"",
    phone:""
  })
  const onChangeHandler=(event)=>{
    const name=event.target.name
    const value=event.target.value
    setData(data=>({...data,[name]:value}))
  }

  const placeOrder=async(event)=>{
       event.preventDefault()
       let orderItems=[]
       food_list.map((item)=>{
         if(cartItems[item._id]>0){
          let itemInfo=item
          itemInfo["quantity"]=cartItems[item._id]
          orderItems.push(itemInfo)
         }
       })
       let orderData={
        address:data,
        items:orderItems,
        amount:getTotalCartAmount()+2
       }
       let response=await axios.post(url+"/api/order/place",orderData,{headers:{token}})
       if(response.data.success){
        const {session_url}=response.data
        window.location.replace(session_url)
       }
       else{
        alert("Error")
       }
       
  }
  const navigate=useNavigate()
  useEffect(()=>{
            if(!token){
               navigate('/cart')
               
            }
            else if(getTotalCartAmount()===0){
                  navigate('/cart')
            }
       },[token])
  return (
  <form onSubmit={placeOrder} className='flex items-start justify-between gap-[50px] mt-[100px]'>
     <div className='w-full max-w-[500px]'>
            <p className='text-3xl font-bold mb-[50px]'>Delivery Information</p>
            <div className='flex gap-[10px]'>
              <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name' className='mb-[15px] w-full p-[10px] border border-s-[#c5c5c5] rounbed outline-red-500'/>
              <input required name='lastName' onChange={onChangeHandler} value={data.lastName}  type="text" placeholder='Last Name' className='mb-[15px] w-full p-[10px] border border-s-[#c5c5c5] rounbed outline-red-500'/>
            </div>
            <input required name='email' onChange={onChangeHandler} value={data.email}  type="email" placeholder='Email Address' className='mb-[15px] w-full p-[10px] border border-s-[#c5c5c5] rounbed outline-red-500'/>
            <input required name='street' onChange={onChangeHandler} value={data.street}  type="text" placeholder='Street' className='mb-[15px] w-full p-[10px] border border-s-[#c5c5c5] rounbed outline-red-500'/>
            <div className='flex gap-[10px]'>
              <input required name='city' onChange={onChangeHandler} value={data.city}  type="text" placeholder='City' className='mb-[15px] w-full p-[10px] border border-s-[#c5c5c5] rounbed outline-red-500'/>
              <input required name='state' onChange={onChangeHandler} value={data.state}  type="text" placeholder='State' className='mb-[15px] w-full p-[10px] border border-s-[#c5c5c5] rounbed outline-red-500'/>
            </div>
            <div className='flex gap-[10px]'>
              <input required name='pincode' onChange={onChangeHandler} value={data.pincode}  type="text" placeholder='Pin Code' className='mb-[15px] w-full p-[10px] border border-s-[#c5c5c5] rounbed outline-red-500'/>
              <input required name='country' onChange={onChangeHandler} value={data.country}  type="text" placeholder='Country' className='mb-[15px] w-full p-[10px] border border-s-[#c5c5c5] rounbed outline-red-500'/>
            </div>
            <input required name='phone' onChange={onChangeHandler} value={data.phone}  type="text" placeholder='Phone' className='mb-[15px] w-full p-[10px] border border-s-[#c5c5c5] rounbed outline-red-500'/>
     </div>
     <div className='w-full max-w-[500px] mt-[50px]'>
     <div className='w-1/2 flex flex-col gap-[20px]'>
                    <h2 className='text-3xl font-bold'>Cart Totals</h2>
                    <div>
                      <div className='flex justify-between text-[#555]'>
                        <p>SubTotal</p>
                        <p>${getTotalCartAmount()}</p>
                      </div>
                      <hr className='my-[10px] mx-0'/>
                      <div className='flex justify-between text-[#555]'>
                        <p>Delivery Fee</p>
                        <p>${getTotalCartAmount()===0?0:2}</p>
                      </div>
                      <hr className='my-[10px] mx-0'/>
                      <div className='flex justify-between text-[#555]'>
                        <b>Total</b>
                        <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
                      </div>
                    </div>
                    <button type='submit' className='border-0 text-white bg-red-500 w-[200px] py-[12px] px-0 rounded'>Proceed to payment</button>
        </div>
     </div>
  </form>
  )
}

export default PlaceOrder
