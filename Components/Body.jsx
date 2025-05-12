import React from 'react'
import Grid from '../Pages/Grid';
import Category from '../Pages/Category';
import Food from '../Pages/Food';
import Product from '../Pages/Product';
import Blogs from '../Pages/Blogs';


const Body = () => {
  const targetTime = new Date().getTime() + 14 * 60 * 60 * 1000;
  return (
    <div>
        <Grid />
        <Category targetTime={targetTime} />
      <Food />
      <Product />
      <Blogs />
       
    </div>
  )
}

export default Body