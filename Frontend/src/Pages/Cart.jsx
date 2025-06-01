import React, { useContext } from 'react';
import { StoreContext } from '../Context/StoreContext';
import { useNavigate } from 'react-router';

const Cart = () => {
  const {
    cartItems = {},
    food_list = [],
    removeFromCart,
    getTotalCartAmount,
    url,
    loading,
  } = useContext(StoreContext);

  const navigate = useNavigate();

  if (loading) return <div className="mt-32 text-center text-lg">Loading Cart...</div>;

  return (
    <div className='mt-[100px] px-4'>
      <div className=''>
        <div className='cart-items items-center text-gray-500 text-[12px] font-semibold grid grid-cols-6 gap-4'>
          <p>Image</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {Object.keys(cartItems).map((id) => {
          const item = food_list.find((f) => f._id === id);
          if (item && cartItems[id] > 0) {
            return (
              <div key={id}>
                <div className='cart-items items-center text-[12px] my-[10px] mx-0 text-black grid grid-cols-6 gap-4'>
                  <img src={`${url}/images/${item.image}`} alt="" className='w-[50px]' />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[id]}</p>
                  <p>${item.price * cartItems[id]}</p>
                  <p className='cursor-pointer text-sm text-red-500' onClick={() => removeFromCart(id)}>x</p>
                </div>
                <hr className='h-[1px] bg-[#e2e2e2] border-0' />
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className='mt-[80px] flex flex-col md:flex-row justify-between cart-bottom gap-8'>
        {/* Cart Totals */}
        <div className='md:w-1/2 flex flex-col gap-[20px]'>
          <h2 className='text-3xl font-bold'>Cart Totals</h2>
          <div>
            <div className='flex justify-between text-[#555]'>
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='my-[10px]' />
            <div className='flex justify-between text-[#555]'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className='my-[10px]' />
            <div className='flex justify-between text-[#555] font-bold'>
              <p>Total</p>
              <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button
            onClick={() => navigate('/order')}
            className='border-0 text-white bg-red-500 w-[200px] py-[12px] rounded hover:bg-red-600 transition-all'
            disabled={getTotalCartAmount() === 0}
          >
            Proceed to Checkout
          </button>
        </div>

        {/* Promo Code */}
        <div className='md:w-1/3 mt-4'>
          <p className='text-[#555]'>If you have a promo code, enter it here:</p>
          <div className='flex mt-[10px] justify-between items-center bg-[#eaeaea] rounded px-2 py-1'>
            <input
              type="text"
              placeholder='Promo code'
              className='bg-transparent border-0 outline-0 pl-[10px] flex-1'
            />
            <button className='w-[150px] py-[12px] px-[5px] bg-black border-0 text-white rounded ml-2'>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
