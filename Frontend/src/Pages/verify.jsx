import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import { StoreContext } from '../Context/StoreContext'
import axios from 'axios'

const Verify = () => {

    const [searchParams,setSearchParams]=useSearchParams()
    const success=searchParams.get("success")
    const orderId=searchParams.get("orderId")
    const navigate=useNavigate()
   
 const { url, setCartItems } = useContext(StoreContext); // include setCartItems

const verifyPayment = async () => {
  const response = await axios.post(url + "/api/order/verify", { success, orderId });
  if (response.data.success) {
    setCartItems({}); // clear frontend cart
    localStorage.setItem("cartItems", JSON.stringify({})); // also clear localStorage if you're syncing
    navigate("/myorders");
  } else {
    navigate("/");
  }
};

    useEffect(()=>{
    verifyPayment()
    },[])
  return (
    <div className='min-h-[60vh] grid'>
        <div className='spinner'>

        </div>
    </div>
  )
}

export default Verify
