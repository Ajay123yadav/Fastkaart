/*eslint-disable*/
import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import logo from '../Assest/Logo.png';
import'../Style/Header2.css';
const Header2 = () => {
  return (
    <div className='Header2Section'>
        <div className="logo">
            <img src={logo} alt="" className='logo-image' />
         
        </div>
        <div className="bar">
             <div className="your-location">
                
            <h5> <IoLocationOutline /> <button type="button" class=" Location-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
 Your-Location
</button>  <FaAngleDown /></h5>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header"> 
        <div> <button type="button" class="btn-close" style={{marginLeft:"435px"}}  data-bs-dismiss="modal" aria-label="Close"></button>
             <h1 class=" fs-5" id="exampleModalLabel">Choose your Delivery Location</h1>
        <p>Enter your address and we will specify the offer for your area.</p>
        </div>
       

      </div>
      <div class="modal-body">
      <input type="search" placeholder="Search Here" className='Location-input ' />
      </div>
      <div class="modal-footer">
        <p>Select a Location</p>
        <div className="modal-links">
            <li>Alamba</li>
        <li>Arizona</li>
        <li>Californa</li>
        <li>Colorado</li>
        <li>Georgia</li>
        <li>Kansas</li>
        <li>Minnesota</li>
        <li>New York</li>
        <li>Washington</li>
        </div>
        
      
      </div>
    </div>
  </div>
</div>

        </div>

        <div className="searchbar">
    
            <input type="search" placeholder="I'm Searching for...."  className='Search'/>
            <button className='search-button'><IoSearch /></button>
        </div>
        </div>
       
        <div className="icons">
            <span ><FiPhoneCall  className='icon'  /> | <FaRegHeart  className='icon'  /> | <FiShoppingCart  className='icon'  /> | <FaRegUser  className='icon'  />


            </span>
        </div>
      
    </div>
  )
}

export default Header2