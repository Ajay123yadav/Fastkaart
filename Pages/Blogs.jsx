import React from 'react'
import '../Style/Blogs.css'
const Blogs = () => {
  return (
    <div className='BlogSection'>
        <div className="Section d-flex">
            <div className="customer">
                <h4>Customer Comment</h4><br/>
                <h6>We Care About Our Customer Experience</h6 ><br/>
                <p>In publishing and graphic design,<br/> Lorem ipsum is a placeholder text <br/>commonly used to demonstrate the<br/> visual form of a document <br/>
                    or a typeface without relying on<br/> meaningful content.</p>
                  <div className='d-flex py-5 my-3 '>
                    <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/review/1.jpg" className='customer-image' alt="" />
                    <h4>Tina Mcdonnale<br/>
                    <span style={{opacity:"0.5"}}> Sale Manager</span></h4>
                  </div>

            </div>


            <div className="blog">
                <h2>Featured Blog</h2>
                <p>A virtual assistant collects the products from your list</p><br/><br/>
                <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/blog/1.jpg" className='blog-image' alt="" />
                <p>20 March 2002</p>
                <h6 className='blog-name'>Fresh Vegetable Online</h6>
            </div>


            <div className='blog2'>
                <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/blog/2.jpg" className='blog-image' alt="" />
                <p>10 April 2022</p>
                <h6 className='blog-name'>Fresh Combo Friut</h6>
            </div>
        </div>


<div className="subcribe">
    <h3>Join our newsletter and get...</h3>
        <h6>  $20 discount for your first order </h6>
        <input type="email"  placeholder='Enter Your Email' className='input' required />
        <button className='btn btn-danger'>Subscribe</button>
</div>
      
    </div>
  )
}

export default Blogs