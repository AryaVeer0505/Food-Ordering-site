import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { assets } from "../assets/admin_assets/assets.js";
const Order = ({ url }) => {
  const [orders, setOrders] = useState([]);
  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("Error");
    }
  };
  const statusHandler=async(event,orderId)=>{
       const response=await axios.post(url + "/api/order/status",{
        orderId,
        status:event.target.value 
       })
       if(response.data.success){
            await fetchAllOrders()
       }
  }
  useEffect(() => {
    fetchAllOrders();
  }, []);
  return (
    <div className="">
      <h3 className="m-5 text-2xl">Order Page</h3>
      <div className="">
        {orders.map((order, index) => (
          <div
            key={index}
            className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr] items-center gap-[30px] border border-red-400 p-[20px] my-[30px] mx-10 text-md text-[#505050]"
          >
            <img
              src={assets.parcel_icon}
              alt="Parcel Icon"
              className="w-10 h-10"
            />
            <div>
              <p className="font-medium ">
                {order.items
                  .map((item, idx) => `${item.name} x ${item.quantity}`)
                  .join(", ")}
              </p>
              <p className="font-medium mt-[30px] mb-[5px]">{order.address.firstName+" "+order.address.lastName}</p>
              <div className="mb-[10px]">
                 <p className="">{order.address.street+", "}</p>
              <p className="">{order.address.city+", "+order.address.state+", "+order.address.country+", "+order.address.pincode}</p>
              </div>
             <p className="">{order.address.phone}</p>
 
            </div>
            <p>Items:{order.items.length}</p>
            <p>${order.amount}</p>
            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className="bg-[#ffe8e4] border border-red-400 w-10vw p-[10px] outline-0">
              <option value="Food Processing">Food Processing</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
