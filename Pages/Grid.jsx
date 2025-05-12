/*eslint-disable*/
import React from 'react'
import '../Style/Grid.css'
const Grid = () => {
  return (
    <div className='GridSection'>
        <div className="grid">
            <div className="grid-image1">
          <p>Exclusive Offer <span style={{color:'red'}}  >30% Off</span></p>  
          <h1>STAY HOME & DELIVERED <br/> YOUR<span style={{ color:'#0da487'}}>DAILY NEEDS</span>
          </h1>
          <p>Vegetables Contain many vitamins and minerals<br/> that are good for your health</p>
          <button className='shop'>Shop Now</button>
       </div>
       <div className="grid-image">
         <div className="grid-image2">
        <span style={{color:"red",fontSize:"20px"}}>45%Off</span>
        <h3 style={{color:"#0da487"}}>Nut Collection</h3>
        <p>We Deliver Organic<br/>
        Vegetables & Fruits .</p>
        <button className='shop1'>Shop Now</button>
       </div>
       <div className='grid-image3'>
<h3>HEALTHY FOOD</h3>
<span style={{color:"red",fontSize:"16px"}}>Organic Market</span>
<p>Start Your Daily Shopping <br/>with Some Organic Food.</p>
<button className='shop1'>Shop Now</button>
       </div>
       </div>
      
        </div>
        <div className="column">
          <div className="col1">
            <span style={{color:"red"}}>5% Off</span>
            <h4>Hot Deals On New Items</h4>
            <p>Daily Essentials eggs&Dairy</p>
            <button className='col-shop'> Shop Now</button>
          </div>
          <div className='col2'>
          <span style={{color:"red"}}>5% Off</span>
           <h4>Buy Now & Save More</h4>
           <p>Fresh Vegetables</p>
          <button className='col-shop'> Shop Now</button>
          </div>
          <div className="col3">
          <span style={{color:"red"}}>5% Off</span>
<h4>Organic Meat Prepared</h4>
<p>Delivered to Your Home</p>
           <button className='col-shop'> Shop Now</button> 
          </div>
          <div className="col4">
          <span style={{color:"red"}}>5% Off</span>
          <h4>Buy Now & Save More</h4>
          <p>Nuts&Snacks</p>
          <button className='col-shop'> Shop Now</button> 
          </div>
        </div>
    </div>
  )
}

export default Grid