/*eslint-disable*/
import React from 'react';
import '../Style/Food.css';
import drink from '../Assest/wines.svg'
import vegetable from '../Assest/vege.svg';
import beverages from '../Assest/bev.svg';
import meat from '../Assest/meat.svg';
import breakf from '../Assest/breakfast.svg';
import frozen from '../Assest/frozen.svg';
import pet from '../Assest/pet.svg';
import wine from '../Assest/milk.svg';
import biscuit from '../Assest/biscuit.svg';
import grocery from '../Assest/grocery.svg';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";


const Food = () => {
  return (
    <div className='FoodSection'>
   
       <div className="fresh">
        <p className='seafood'>Seafood</p>
        <h2>Freshes    Products</h2>
        <p className='every'>Every hour</p>
        <button className='btn btn-danger'>Shop Now</button>
       </div>

         

      {/* bowse by categories */}
      <div className="bowsebySection">
        <h2>Bowse By Categories</h2>
        <p>Top Categories of The Week</p>
      
      
      <div className="slide">
      <div className="slide-contents d-flex ">
        <div className="slide1 mx-2">
          <img src={vegetable} className='slide-image' alt="" />
          <h6>Vegetables & Fruits</h6>
        </div>
      
        <div className="slide1 mx-2 ">
          <img src={beverages} className='slide-image' alt="" />
          <h6>Beverages</h6>
        </div>
      
        <div className="slide1 mx-2">
          <img src={meat} className='slide-image' alt="" />
          <h6>Meats&Seafood</h6>
        </div>
      
        <div className="slide1 mx-2">
          <img src={breakf} className='slide-image' alt="" />
          <h6>Breakfast</h6>
        </div>
        <div className="slide1 mx-2">
          <img src={frozen} className='slide-image' alt="" />
          <h6>Frozen Food</h6>
        </div>
        <div className="slide1 mx-2">
          <img src={drink} className='slide-image' alt="" />
          <h6>Milk&Dairies</h6>
        </div>
        <div className="slide1 mx-2">
          <img src={pet} className='slide-image' alt="" />
          <h6>Pet Food</h6>
        </div>
      
      </div>
      
      </div>
      


      {/* 50% */}
      <div className="bowse-image d-flex">
        <div className="bowse-image1">
          <p>50% Off</p>
          <h4>Test Mushrooms</h4>
          <button className='btn btn-danger fw-10'>Shop Now</button>
        </div>
      
        <div className="bowse-image2">
          <p>50% Off</p>
          <h4>Fresh Meat</h4>
          <button className='btn btn-danger fw-10'>Shop Now</button>
        </div>
      </div>
      

      {/* food */}
      <div className="food">
        <h2>Food Cupboard</h2>
        <p>A Virtual assistant collects the products from the list</p>

        <div className="food-cart d-flex">
          <div className="cart1">
            <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/1.png"className='py-3' alt="img1" /><br/>
                 <b>Chocolate Powder</b>
                 <h6>$26.69 <del>28.56</del><br/>
                 <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /><CiStar style={{color:"gold"}}/>In Stock</h6>
                 <button className='content-button'>Add <CiCirclePlus  style={{float:"right",marginTop:"5px",color:"#0da487",backgroundColor:"whitesmoke"}} /></button>
          </div>

          <div className="cart1">
              <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/2.png" className='py-2' alt="img1" /><br/>
                  <b>Sandwich Cookies</b>
                  <h6>$26.69 <del>28.56</del><br/>
                  <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /><CiStar style={{color:"gold"}}/>In Stock</h6>
                  <button className='content-button'>Add <CiCirclePlus  style={{float:"right",marginTop:"5px",color:"#0da487",backgroundColor:"whitesmoke"}} /></button>
          </div>

          <div className="cart1">
            <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/3.png" className='py-1' alt="img1" /><br/>
                  <b>Butter Croissant</b>
                  <h6>$26.69 <del>28.56</del><br/>
                  <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /><CiStar style={{color:"gold"}}/>In Stock</h6>
                  <button className='content-button'>Add <CiCirclePlus  style={{float:"right",marginTop:"5px",color:"#0da487",backgroundColor:"whitesmoke"}} /></button>
                
          </div>

          <div className="cart1">
             <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/4.png" className='py-4' alt="img1" /><br/>
                  <b>Dark Chocolate</b>
                  <h6>$26.69 <del>28.56</del><br/>
                  <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /><CiStar style={{color:"gold"}}/>In Stock</h6>
                  <button className='content-button'>Add <CiCirclePlus  style={{float:"right",marginTop:"5px",color:"#0da487",backgroundColor:"whitesmoke"}} /></button>
          </div>
        </div>
      </div>





      </div>
    </div>
  )
}

export default Food
