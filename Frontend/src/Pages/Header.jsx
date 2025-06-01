import React from 'react'
const Header = () => {
  return (
    <div className='h-[33.6vw] my-[30px] mx-auto bg-[url(/header_img.png)] bg-contain relative'>
      <div className='absolute flex flex-col items-start gap-10 max-w-[50%] bottom-[20%] left-[6vw]'>
        <h2 className='text-white font-bold text-6xl'>Order your <br />favourite Food here</h2>
        <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel sunt quod dolor error recusandae ex fuga, aspernatur quibusdam quae possimus.</p>
        <button className='border-0 bg-white text-gray-700 py-1 px-2 rounded-lg hover:bg-gray-500 hover:text-white transition-all ease-in-out duration-300'>View Menu</button>
      </div>
    </div>
  )
}

export default Header
