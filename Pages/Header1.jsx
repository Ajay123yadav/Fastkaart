/*eslint-disable*/
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import '../Style/Header1.css';
const Header1 = () => {
  return (
    <div className='Header1Section'>
       

       <div className='location'>
        <p className='text'><FaLocationDot />1418 Riverwood Drive, CA 9605</p>
       </div>

<div className="scroll-container">
    <div className="scroll-content">
        <p className='text'><b>Welcome to Fastkart!</b>Wrap new offers/gifts every single day on Weekends.<b>New Coupons code....</b></p>
       <br/>
        <p className='text'>Something you love is now on scale!<a href='#'>BUY NOW</a></p>
       </div>
</div>
       
 
       <div className="country">
        <select  className='country-select hovering' >
            <option value="" className='opt'>Country</option>
            <option value=""className='opt'>India</option>
            <option value=""className='opt'>Germany</option>
            <option value=""className='opt'>Turki</option></select>
            <select className='country-select'>
                <option value="" className='opt'>USD</option>
                <option value=""className='opt'>AUD</option>
                <option value=""className='opt'>EUR</option>
                <option value=""className='opt'>CNY</option>
            </select>

{/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu hovering">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div> */}
            </div>    


    </div>
  )
}

export default Header1