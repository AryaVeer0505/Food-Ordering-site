import React, { useContext, useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { StoreContext } from '../Context/StoreContext'
import axios from 'axios'
// import {toast} from 'react-toastify'

const LoginPopup = ({setShowLogin}) => {
   
  const {url,token,setToken}=useContext(StoreContext)

    const [currentState,setCurrentState]=useState('Login')
    const [data,setData]=useState({
      name:"",
      email:"",
      password:""
    })

    const onChangeHandler=(event)=>{
       const name=event.target.name
       const value=event.target.value
       setData(data=>({...data,[name]:value}))
    }

    const onLogin=async(event)=>{
         event.preventDefault()
         let newUrl=url
         if(currentState==="Login"){
                   newUrl+="/api/user/login"
         }
         else{
          newUrl+="/api/user/register"
         }

         const response=await axios.post(newUrl,data)
         if(response.data.success){
            setToken(response.data.token)
              localStorage.setItem("token",response.data.token)
              setShowLogin(false)
            }
            else{
              alert(response.data.message)
            }
         }
    
 
  return (
    <div className='absolute z-1 w-full h-full bg-[#00000090] grid'>
         <form onSubmit={onLogin} className='place-self-center w-[330px] text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded text-[14px] '>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl font-bold text-black'>{currentState}</h2>
                    <img src={assets.cross_icon} alt="" onClick={()=>setShowLogin(false)} className='cursor-pointer'/>
                </div>
                <div className='flex flex-col gap-[20px]'>
                    {currentState==='Login'?<></>:<input type="text" name='name' onChange={onChangeHandler} value={data.name} placeholder='Your Name' required className='outline-0 border border-[#c9c9c9] rounded p-[10px]'/>}
                    <input type="email" name='email' onChange={onChangeHandler} value={data.email}  placeholder='Your Email' required className='outline-0 border border-[#c9c9c9] rounded p-[10px]'/>
                    <input name='password' onChange={onChangeHandler} value={data.password}  type="password" placeholder='password' required className='outline-0 border border-[#c9c9c9] rounded p-[10px]'/>
                </div>
                <button type='submit' className='border-0 p-[10px] rounded text-white bg-red-500 text-lg cursor-pointer'>{currentState==="Sign Up"?"Create account":"Login"}</button>
                <div className='flex items-start gap-[8px] mt-[-15px] '>
                    <input type="checkbox" required className='mt-[5px]'/>
                    <p>By Continuing,i agree to the terms and privacy policy</p>

                </div>
                {currentState==='Login'?  <p>Create a new Account? <span onClick={()=>setCurrentState('Sign Up')} className='text-red-500 font-medium cursor-pointer'>Click Here</span></p>:<p>Already have an account? <span onClick={()=>setCurrentState('Login')} className='text-red-500 font-medium cursor-pointer'>Login here</span></p>}
              
                
         </form>
    </div>
  )
}

export default LoginPopup
