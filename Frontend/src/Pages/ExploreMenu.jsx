import React from 'react'
import { menu_list } from '../assets/frontend_assets/assets'
const ExploreMenu = ({category,setCategory}) => {



  return (
    <div className='flex flex-col gap-5'>
      <h1 className='text-[#262626] font-medium text-4xl'>Explore Our Menu</h1>
      <p className='max-w-[60%] text-[#808080]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sit corporis odit labore inventore molestiae rem dolore at quis aliquam.</p>
      <div className='flex justify-between items-center gap-7.5 text-center my-5 mx-0 overflow-x-scroll explore-menu-list'>
        {
            menu_list.map((item,index)=>{
                return (<div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className=''>
                       <img src={item.menu_image} alt="" className={category===item.menu_name?"border-4 border-red-500 w-[8.5vw] min-w-[100px] cursor-pointer rounded-full transition duration-200":' p-1 rounded-full'}/>
                       <p className='mt-[10px] text-[#747474] text-xl cursor-pointer'>{item.menu_name}</p>
                </div>)
            })
        }
      </div>
      <hr className='my-[10px] mx-0 h-[2px] bg-[#e2e2e2] border-0'/>
    </div>
  )
}

export default ExploreMenu
