import React, { useContext } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { StoreContext } from '../Context/StoreContext'

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext)

  const quantity = cartItems?.[id] || 0

  return (
    <div className='w-full m-auto rounded-2xl shadow-xl hover:w-[97%] transition-all ease-in-out duration-300'>
      <div className='relative'>
        <img src={url + "/images/" + image} className='w-full rounded-xl' alt="" />
        {quantity === 0 ? (
          <img
            src={assets.add_icon_white}
            className='absolute w-[35px] bottom-[15px] right-[15px] rounded-[50%] cursor-pointer'
            onClick={() => addToCart(id)}
            alt=""
          />
        ) : (
          <div className='absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white'>
            <img
              src={assets.remove_icon_red}
              className='w-[30px] cursor-pointer'
              onClick={() => removeFromCart(id)}
              alt=""
            />
            <p>{quantity}</p>
            <img
              src={assets.add_icon_green}
              className='w-[30px] cursor-pointer'
              onClick={() => addToCart(id)}
              alt=""
            />
          </div>
        )}
      </div>
      <div className='p-[20px]'>
        <div className='flex justify-between items-center mb-[10px]'>
          <p className='text-[20px] font-bold'>{name}</p>
          <img src={assets.rating_starts} alt="" className='w-[70px]' />
        </div>
        <p className='text-[#676767] text-[12px]'>{description}</p>
        <p className='text-red-500 text-[22px] font-bold my-[10px] mx-0'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
