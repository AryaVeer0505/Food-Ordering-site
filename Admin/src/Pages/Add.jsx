import React, {  useState } from 'react'
import { assets } from '../assets/admin_assets/assets'
import axios from 'axios'
import {toast} from 'react-toastify'
const Add = ({url}) => {

  const [image,setImage]=useState(false)
  const [data,setData]=useState({
    name:"",
    description:"",
    price:"",
    category:"Salad"
  })
  const onChangeHandler=(event)=>{
      const name=event.target.name
      const value=event.target.value 
      setData(data=>({...data,[name]:value}))
  }

  const onSubmit=async(event)=>{
       event.preventDefault()
       const formData=new FormData();
       formData.append("name",data.name)
       formData.append("description",data.description)
       formData.append("price",Number(data.price))
       formData.append("category",data.category)
       formData.append("image",image)   

       const response =await axios.post(`${url}/api/food/add`,formData)
       if(response.data.success){
           setData({
            name:"",
            description:"",
            price:"",
            category:"Salad"
          })
          setImage(false)
          toast.success(response.data.message)
       }else{
         toast.error(response.data.message)
       }
  }

  return (
    <div className='w-[70%] ml-[25px] mt-[50px] text-[#6d6d6d] text-lg'>
       <form className='gap-[20px]' onSubmit={onSubmit}>
        <div className='flex flex-col gap-[10px]'>
            <p>Upload image</p>
            <label htmlFor="image">
              <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" className='w-[120px]'/>
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" hidden required id='image'/>
        </div>
        <div className='w-[380px] flex flex-col gap-[10px]'>
               <p>Product Name</p>
               <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='type here' className='p-[10px] border border-gray-400 rounded'/>
        </div>
        <div className='w-[380px] flex flex-col gap-[10px]'>
               <p>Product Description</p>
               <textarea onChange={onChangeHandler} value={data.description} name='description' rows="6" placeholder='write content here' required className='p-[10px] border border-gray-400 rounded'></textarea>
        </div>
        <div className='flex gap-[30px]'>
             <div className='flex flex-col gap-[10px]'>
                  <p>Product Category</p>
                  <select onChange={onChangeHandler} name="category" className='border border-gray-400 rounded p-[5px] max-w-[120px]'>
                    <option value="Salad">Salad</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Deserts">Deserts</option>
                    <option value="Sandwhich">Sandwhich</option>
                    <option value="Cake">Cake</option>
                    <option value="Pure veg">Pure veg</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Noodles">Noodles</option>
                  </select>
             </div>
             <div className='flex flex-col gap-[10px]'>
              <p>Product Price</p>
              <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='$20' className='border border-gray-400 rounded p-[5px] max-w-[120px]'/>
             </div>
        </div>
        <button type='submit' className='max-w-[120px] border-0 py-[10px] px-[15px] bg-black text-white rounded cursor-pointer'>Add</button>
       </form>
    </div>
  )
}

export default Add

