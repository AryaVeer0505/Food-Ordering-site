import React, { useState } from 'react'
import Header from './Header'
import ExploreMenu from './ExploreMenu'
import FoodDisplay from '../Components/FoodDisplay'
import AppDownload from './AppDownload'

const Home = () => {
  const [category,setCategory]=useState('All')

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
