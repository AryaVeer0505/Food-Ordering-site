import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
const List = ({url}) => {

  const [list,setList]=useState([])
  const fetchList=async()=>{
    const response=await axios.get(`${url}/api/food/list`)

    if(response.data.success){
       setList(response.data.data)
    }
    else{
      toast.error("Error")
    }
  }

const removeFood=async(foodId)=>{
     const response=await axios.post(`${url}/api/food/remove`,{id:foodId})
     if(response.data.success){
      toast.success(response.data.message)
     }
     else{
      toast.error("Error")
     }
     await fetchList()
}

  useEffect(()=>{
    fetchList()
  },[])
  return (
    <div className='w-full p-[10px]'>
        <p className='text-3xl font-bold'>All Foods List</p>
        <div className='w-full'>
              <div className='grid grid-cols-5 items-center gap-[10px] py-[12px] px-[15px] border border-gray-400 bg-[#f9f9f9]'>
                  <b>Image</b>
                  <b>Name</b>
                  <b>Category</b>
                  <b>Price</b>
                  <b>Action</b>
              </div>
              {list.map((item,index)=>{
                  return (
                    <div key={index} className='grid grid-cols-5 items-center gap-[10px] py-[12px] px-[15px] border border-gray-400'>
                      <img src={`${url}/images/`+item.image} alt="" className='w-[50px] h-[50px] object-cover rounded '/>
                      <p>{item.name}</p>
                      <p>{item.category}</p>
                      <p>${item.price}</p>
                      <p onClick={()=>removeFood(item._id)} className='cursor-pointer'>x</p>
                    </div>
                  )
              })}
        </div>
    </div>
  )
}

export default List
