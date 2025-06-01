import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({category}) => {
    const {food_list}=useContext(StoreContext)
  return (
    <div className='mt-[30px]'>
      <h2 className='text-3xl font-bold'>Top Dishes near you</h2>

      <div className='food-display-list mt-[30px] gap-[30px]'>
        {
            food_list.map((item,index)=>{
              {console.log(category,item.category)}
              if(category==='All' || category===item.category){
                return (
                  <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
              )
              }
            })
        }
      </div>
    </div>
  )
}

export default FoodDisplay
