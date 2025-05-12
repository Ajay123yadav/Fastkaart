import React from 'react'
import { IoHome } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import '../Style/Footer.css';
const Footer = () => {
  return (
    <div className='FooterSection'>

        <div className="footer1"> 
            <div className="Deliver">
                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/delivery.svg" alt="" />
                <h6 className='py-3'>Free Delivery For Order$50</h6>
            </div>
            <div className="fresh-product">
                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/product.svg"  alt="" />
                <h6 className='py-3'>Every Fresh Product</h6>
            </div>


           

            <div className="discount">
                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/discount.svg" alt="" />
                <h6 className='py-3'>Daily Mega Discounts</h6>
            </div>
            <div className="market">
                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/market.svg" alt="" />
                <h6 className='py-3'>Best Price On The Market</h6>
            </div>
        </div>



        <div className="footer2">
            <div className="address">
                <img src="https://themes.pixelstrap.com/fastkart/assets/images/logo/1.png" alt="" />
                <p>We are a friendly bar serving a<br/> variety of cocktails, wines and beers.<br/> Our bar is a perfect place for<br/> a couple.</p>
                <p><IoHome />1418 Riverwood Drive, CA 96052, US<br/>
                <IoMdMail /> support@fastkart.com</p>
            </div>

            <div className="cat">
                <h4>Categories</h4>
                <li>Vegetables & Fruit</li>
                <li>Beverages</li>
                <li>Meats & Seafood</li>
                <li>Frozen Foods</li>
                <li>Biscuits & Snacks</li>
                <li>Grocery & Staples</li>
            </div>

            <div className="usefull">
                <h4>Useful Links</h4>
                <li>Home</li>
                <li>Shop</li>
                <li>Abouts</li>
                <li>Blog</li>
                <li>Contact Us</li>
            </div>
            <div className="help">
                <h4>Help Center</h4>
                <li>Your Order</li>
                <li>Your Account</li>
                <li>Track Order</li>
                <li>Your Wishlist</li>
                <li>Search</li>
                <li>FAQ</li>
            </div>
            <div className="contact">
                <h4>Contact Us: </h4>
                <p>Hotline24/7  :
                +91 888 104 2340
                </p>
                <p>Email Address:
                fastkart@hotmail.com
                </p>
            </div>


            </div>
        <p style={{textAlign:'center'}}>&copy;All Right Reserved</p>
    </div>
  )
}

export default Footer