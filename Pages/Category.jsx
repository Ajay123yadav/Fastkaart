/*eslint-disable*/
import React from 'react'
import '../Style/Category.css';
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
import{useState ,useEffect}from 'react'
import { FaRegClock } from "react-icons/fa";



import { LuEye } from "react-icons/lu";
import { IoIosGitCompare } from "react-icons/io";

const Category = ({ targetTime }) => {



  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance <= 0) return null;

    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    return { hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);
      if (!updated) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  if (!timeLeft) return <div>⏰ Time's up!</div>;
  return (
    <div className='CategorySection'>
      
<div className="Category ">
    {/* sticky-top bg-body-tertiary */}
    <h3>Category</h3>
    <div className="items">
    <h6><img src={vegetable} alt="" className='icon-image' /> Vegetables  & Friuts </h6>
    <h6><img src={beverages} alt="" className='icon-image' />  Beverages</h6>
    <h6><img src={meat} alt="" className='icon-image' /> Meats & Seafood</h6>
    <h6> <img src={breakf} alt="" className='icon-image' /> Breakfast</h6>
    <h6><img src={frozen} alt="" className='icon-image' /> frozen Food</h6>
    <h6><img src={drink} alt="" className='icon-image'  />Milk & Dairies</h6>
    <h6 > <img src={pet} alt="" className='icon-image' />Pet Food</h6>
    <h6> <img src={grocery} alt="" className='icon-image' />Grocery & Staples</h6>
    <h6> <img src={wine} alt="" className='icon-image' />Wines & Alcohol Drinks</h6>
    <h6> <img src={biscuit} alt="" className='icon-image' />Biscuits & Snacks</h6>
    <hr/>
    <h6>Value of the Day</h6>
    <h6>Top 50 Offers</h6>
    <h6>New Arrivals</h6></div>
</div>


{/* Top Save Today */}

<div className="topsaveSection">
    <div className='time ' style={{ fontSize: '2em', fontFamily: 'monospace' }}>
  <p ><FaRegClock />Expiresin:
      {String(timeLeft.hours).padStart(2, '0')}:
      {String(timeLeft.minutes).padStart(2, '0')}:
      {String(timeLeft.seconds).padStart(2, '0')}</p>
    </div>
  <h2>Top Save Today</h2>
  <p>Don't miss this opportunity at a special discount just for this week.</p>




  <div className="content">

    
    <div className="content-img">
      <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/1.png"className='py-3 image' alt="img1" />
  
       <br/>
      <b>Fantasy Crunchy Choco<br/> Chip Cookies</b>
      <h6>$26.69 <del>28.56</del><br/>
      <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /><CiStar style={{color:"gold"}}/>In Stock</h6>
      <button className='content-button'>Add <CiCirclePlus  style={{float:"right",marginTop:"5px",color:"#0da487",backgroundColor:"whitesmoke"}} /></button>
    </div>


    

    <div className="content-img">
      <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/3.png" className='py-1' alt="img1" /><br/>
      <b>Peanut Butter Bite Premium<br/>Butter Cookies 600g</b>
      <h6>$26.69 <del>28.56</del><br/>
      <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /><CiStar style={{color:"gold"}}/>In Stock</h6>
      <button className='content-button'>Add <CiCirclePlus  style={{float:"right",marginTop:"5px",color:"#0da487",backgroundColor:"whitesmoke",borderRadius:"50px"}} /></button>
    </div>




<div className="content-img">
      <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/5.png" className='py-2' alt="img1" /><br/>
      <b >Yumito Chilli Sprinkled<br/>Potato Chios 100g</b>
      <h6 className='py-1'>$26.69 <del>28.56</del><br/>
      <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /><CiStar style={{color:"gold"}}/>In Stock</h6>
      <button className='content-button'>Add <CiCirclePlus  style={{float:"right",marginTop:"5px",color:"#0da487",backgroundColor:"whitesmoke"}} /></button>
    </div>

   
    <div className="content-img">
      <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/7.png" className='py-3' alt="img1" /><br/>
      <b>Healthy Long Life<br/>Toned Milk 1L</b>
      <h6 >$26.69 <del>28.56</del><br/>
      <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /><CiStar style={{color:"gold"}}/>In Stock</h6>
      <button className='content-button'>Add <CiCirclePlus  style={{float:"right",marginTop:"5px",color:"#0da487",backgroundColor:"whitesmoke"}} /></button>
    </div>

<div className="content-img">
      <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/2.png" className='py-2' alt="img1" /><br/>
      <b>Cold Brew Coffee Instant<br/>Coffee 50g</b>
      <h6>$26.69 <del>28.56</del><br/>
      <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /><CiStar style={{color:"gold"}}/>In Stock</h6>
      <button className='content-button'>Add <CiCirclePlus  style={{float:"right",marginTop:"5px",color:"#0da487",backgroundColor:"whitesmoke"}} /></button>
    </div>

    
    <div className="content-img">
      <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/4.png" className='py-4' alt="img1" /><br/>
      <b>SnackAmor Combo Pack of<br/>Jowar Stick and Jowar Chips</b>
      <h6>$26.69 <del>28.56</del><br/>
      <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /><CiStar style={{color:"gold"}}/>In Stock</h6>
      <button className='content-button'>Add <CiCirclePlus  style={{float:"right",marginTop:"5px",color:"#0da487",backgroundColor:"whitesmoke"}} /></button>
    </div>

   

    <div className="content-img">
      <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/6.png" className='py-3' alt="img1" /><br/>
      <b>Neu Farm Unpolished Desi <br/>Dal 1kg</b>
      <h6>$26.69 <del>28.56</del><br/>
      <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /><CiStar style={{color:"gold"}}/>In Stock</h6>
      <button className='content-button'>Add <CiCirclePlus  style={{float:"right",marginTop:"5px",color:"#0da487",backgroundColor:"whitesmoke"}} /></button>
    </div>

    
    <div className="content-img">
      <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/8.png"  className='py-2' alt="img1" /><br/>
      <b>Dog Treat Natural Yak Milk<br/>Bars For Small Dogs 100g</b>
      <h6>$26.69 <del>28.56</del><br/>
      <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /><CiStar style={{color:"gold"}}/>In Stock</h6>
      <button className='content-button'>Add <CiCirclePlus  style={{float:"right",marginTop:"5px",color:"#0da487",backgroundColor:"whitesmoke"}} /></button>
    </div>
 
  </div> 
  
  
 



</div> 

{/* bowse by categories */}
{/* <div className="bowsebySection">
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


</div> */}..
  
 






    </div>
  )
}

export default Category