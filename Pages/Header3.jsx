/*eslint-disable*/
import React from 'react'
import '../Style/Header3.css'
import { BsChevronDown } from "react-icons/bs";
import { FaBoltLightning } from "react-icons/fa6";
const Header3 = () => {
  return (
    <div className='Header3Section'>
        <div className="categories-btn">
            <button className='categories'>All Categories</button>
        </div>
        <div className="nav-links"> 
        <div class="dropdown">
  <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Home
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Kartshop</button></li>
    <li><button class="dropdown-item" type="button">Sweetshop</button></li>
    <li><button class="dropdown-item" type="button">organic</button></li>
    <li><button class="dropdown-item" type="button">Supershop</button></li>
    <li><button class="dropdown-item" type="button">Classic Shop</button></li>
  </ul>  
</div>
{/* shop */}


<div class="dropdown">
  <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Shop
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Shop Category Slider</button></li>
    <li><button class="dropdown-item" type="button">Shop Category Slidebar</button></li>
    <li><button class="dropdown-item" type="button">Shop Banner</button></li>
    <li><button class="dropdown-item" type="button">Shop Left sidebar</button></li>
    <li><button class="dropdown-item" type="button">Shop List</button></li>
  </ul>  
</div>

{/* product */}

<div class="dropdown">
  <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Product
  </button>
  <ul class="dropdown-menu ">
    <div className='d-flex'>
      <div className="product-pages">
       <b style={{marginLeft:"20px"}}>Product Pages</b>
    <li><button class="dropdown-item" type="button">Product Pages</button></li>
    <li><button class="dropdown-item" type="button">Product Thumbnail</button></li>
    <li><button class="dropdown-item" type="button">Product Images</button></li>
    <li><button class="dropdown-item" type="button">Product Slider</button></li>
    <li><button class="dropdown-item" type="button">Product Sticky</button></li>
    </div>
 
<div className="product-features">
    <b  style={{marginLeft:"20px"}}>Product Features</b>
    <li><button class="dropdown-item" type="button">Bundle(cross Sale)</button></li>
    <li><button class="dropdown-item" type="button">Hot Stock Progess</button></li>
    <li><button class="dropdown-item" type="button">SOLD OUT</button></li>
    <li><button class="dropdown-item" type="button">Sale Countdown</button></li>
</div>
  <div className="product-variant">
    <b  style={{marginLeft:"20px"}}>Product Variants   </b>
    <li><button class="dropdown-item" type="button">Variant Ractangle</button></li>
    <li><button class="dropdown-item" type="button">Variant Cricle</button></li>
    <li><button class="dropdown-item" type="button">Varient Image Swatch</button></li>
    <li><button class="dropdown-item" type="button">Varient color</button></li>
    <li><button class="dropdown-item" type="button">Varient Radio Button</button></li>
  </div>
  <div className="background">
    <img src="https://themes.pixelstrap.com/fastkart/assets/images/mega-menu.png" className='background-image' alt="" />
  </div>
      
    </div>
    
 </ul>
  
   
</div>


{/* megamenu */}
<div class="dropdown">
  <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Megamenu
  </button>
  <ul class="dropdown-menu">
<div className='mega d-flex'>
  <div className="daily">
        <b  style={{marginLeft:"20px"}}>Daily Vegetables</b> 
    <li><button class="dropdown-item" type="button">Beans& Brinjal</button></li>
    <li><button class="dropdown-item" type="button">Brocoli&Cauliflower</button></li>
    <li><button class="dropdown-item" type="button">Chilies,Garlic</button></li>
    <li><button class="dropdown-item" type="button">Vegetables,Salads</button></li>
    <li><button class="dropdown-item" type="button">Herbs,Sprouts</button></li>
    </div>
    <div className="baby">
    <b style={{marginLeft:"20px"}}>Baby Tender</b>
    <li><button class="dropdown-item" type="button">Beans& Brinjal</button></li>
    <li><button class="dropdown-item" type="button">Brocoli&Cauliflower</button></li>
    <li><button class="dropdown-item" type="button">Chilies,Garlic</button></li>
    <li><button class="dropdown-item" type="button">Vegetables,Salads</button></li>
    <li><button class="dropdown-item" type="button">Herbs,Sprouts</button></li>
    </div>
    <div className="exploic">
    <b style={{marginLeft:"20px"}}>Exotix Vegetables</b>
    <li><button class="dropdown-item" type="button">Asparagus,Artichokes</button></li>
    <li><button class="dropdown-item" type="button">Avocados,Peppers</button></li>
    <li><button class="dropdown-item" type="button">Broccoli&Zucchini</button></li>
    <li><button class="dropdown-item" type="button">Celery,Fennel,Leeks</button></li>
    <li><button class="dropdown-item" type="button">Chilies,Lime</button></li>
    </div>
</div>
    

  </ul>  
</div>

{/* blog */}

<div class="dropdown">
  <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
BLogs
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Blog Detail</button></li>
    <li><button class="dropdown-item" type="button">Blog Grid</button></li>
    <li><button class="dropdown-item" type="button">Blog List</button></li>
  </ul>  
</div>

{/* pages */}

<div class="dropdown">
  <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Pages
  </button>
  <ul class="dropdown-menu">
  <b style={{marginLeft:"20px"}}>Email Template </b>
      <li><button class="dropdown-item" type="button">Abandonment</button></li>
    <li><button class="dropdown-item" type="button">Offer Template</button></li>
    <li><button class="dropdown-item" type="button">Order success</button></li>
    <li><button class="dropdown-item" type="button">Reset Password</button></li>
    <li><button class="dropdown-item" type="button"> Welcome Tempalte</button></li>

  </ul>
  <ul class="dropdown-menu">
  <b>   Invoice Template</b>
      <li><button class="dropdown-item" type="button">Invoice 1</button></li>
    <li><button class="dropdown-item" type="button">Invoice 2</button></li>
    <li><button class="dropdown-item" type="button">Invoice 3</button></li>
    
  </ul>  
</div>

{/* seller */}

<div class="dropdown">
  <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Sellers
  </button>
  <ul class="dropdown-menu">
  <b  style={{marginLeft:"20px"}}>Daily Vegetables</b> 
    <li><button class="dropdown-item" type="button">Become A seller</button></li>
    <li><button class="dropdown-item" type="button">Seller Dashboard</button></li>
    <li><button class="dropdown-item" type="button">Seller Detail</button></li>
    <li><button class="dropdown-item" type="button">Vegetables,Salads</button></li>
    <li><button class="dropdown-item" type="button">Seller Grid</button></li>
  </ul>  
</div>

        </div>
        <div className="deal">

          <button className='deal-button'> <FaBoltLightning />Deal Today</button>
        </div>
    </div>
  )
}

export default Header3