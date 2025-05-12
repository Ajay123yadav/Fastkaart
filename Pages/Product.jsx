import React from 'react'
import '../Style/Product.css';
const Product = () => {
  return (
    <div className='ProductSection'>
        <div className="ver-image">

            <div className="ver1">
                <h6>Organic</h6>
                <h2> <span style={{color:'#0da487',fontWeight:'700'}}>Fresh</span>Vegetable </h2>
                <p>Super Offer to 50% Off</p>
                <button className='btn btn-danger'>Shop Now</button>
            </div>


            <div className="ver2">
                <h2>Trending Products</h2>
                <div className="product d-flex">
                    <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/23.png" className='product-image' alt="" />
                    <p><b>Meatigo Premium...</b><br/>450 G<br/> <span style={{color:'#0da487'}}>$70.00</span></p>
                </div>
                <div className="product d-flex">
                    <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/24.png" className='product-image' alt="" />
                    <p><b>Dates Medjoul...</b><br/>450 G<br/> <span style={{color:'#0da487'}}>$40.00</span></p>
                </div>
                <div className="product d-flex">
                    <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/25.png" className='product-image' alt="" />
                    <p><b>Good Life Walnut...</b><br/>200 G<br/> <span style={{color:'#0da487'}}>$52.00</span></p>
                </div>
                <div className="product d-flex">
                    <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/26.png" className='product-image' alt="" />
                    <p><b>Apple Red Premiu...</b><br/>1 KG<br/> <span style={{color:'#0da487'}}>$80.00</span></p>
                </div>
            </div>
        </div>


        <div className="middle-content">
            <div className="cashback">
                <h1> Get $3 Cashback! Min Order OF $30</h1>
                <p>Use Code :GROCERY1920</p>
            </div>

            <div className="product-drink  d-flex">
                <div className="orange">
                    <h1>Get Ready To</h1><br/>
                    <h2>TAKE ON THE DAY!</h2>
                    <p>In publishing and graphic design, Lorem ipsum<br/> is a placeholder text commonly used to demonstrate.</p>
                    <button className='btn btn-danger'>Shop Now</button>
                </div>
                <div className="summer">
                    <h1>20% Off</h1>
                    <h2>SUMMRY</h2>
                    <h3>Product</h3>
                </div>
            </div>


            <div className="BestSeller">
                <h2>Our Best Seller</h2>
                <p>A virtual assistant collects the products from your list</p>
                <div className="Sellers d-flex">
                    <div className="Seller1">

                         <div className="Seller d-flex">
                    <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/11.png"  className='Seller-image' alt="" />
                    <p><b>Tuffets Whole...</b><br/>500 G<br/> <span style={{color:'#0da487'}}>$10.00</span></p>
                         </div>

                         <div className="Seller d-flex">
                    <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/12.png"  className='Seller-image' alt="" />
                    <p><b>Potato</b><br/>500 G<br/> <span style={{color:'#0da487'}}>$10.00</span></p>
                         </div>

                         <div className="Seller d-flex">
                    <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/13.png"  className='Seller-image' alt="" />
                    <p><b>Green Chilli</b><br/>200 G<br/> <span style={{color:'#0da487'}}>$10.00</span></p>
                         </div>

                         <div className="Seller d-flex">
                    <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/14.png"  className='Seller-image' alt="" />
                    <p><b>Muffets Burger Bun </b><br/>150 G<br/> <span style={{color:'#0da487'}}>$10.00</span></p>
                         </div>
                    </div>

                    <div className="Seller2">
                    <div className="Seller d-flex">
                    <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/15.png"  className='Seller-image'   alt="" />
                    <p><b>Tufferts Britannia...</b><br/>500 G<br/> <span style={{color:'#0da487'}}>$10.00</span></p>
                         </div>

                         <div className="Seller d-flex">
                    <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/16.png"   className='Seller-image'  alt="" />
                    <p><b>Long Life Toned Milk</b><br/>1 L<br/> <span style={{color:'#0da487'}}>$10.00</span></p>
                         </div> 

                         <div className="Seller d-flex">
                    <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/17.png"  className='Seller-image'  alt="" />
                    <p><b>Organic Tamoto</b><br/>1 KG<br/> <span style={{color:'#0da487'}}>$10.00</span></p>
                         </div> 

                         <div className="Seller d-flex">
                    <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/18.png"  className='Seller-image'  alt="" />
                    <p><b>Organic Jam</b><br/>150 G<br/> <span style={{color:'#0da487'}}>$10.00</span></p>
                         </div>      
                    </div>

                    <div className="Seller3">
                    <div className="Seller d-flex">
                    <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/19.png"  className='Seller-image'  alt="" />
                    <p><b>Good  Life Refined...</b><br/>1 L<br/> <span style={{color:'#0da487'}}>$10.00</span></p>
                         </div>

                         <div className="Seller d-flex">
                    <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/20.png"  className='Seller-image'   alt="" />
                    <p><b>Good  Life Raw...</b><br/>500 G<br/> <span style={{color:'#0da487'}}>$10.00</span></p>
                         </div> 
                         <div className="Seller d-flex">
                    <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/21.png"  className='Seller-image'   alt="" />
                    <p><b> TufBest Farms Mo..</b><br/>1 KG<br/> <span style={{color:'#0da487'}}>$10.00</span></p>
                         </div> 


                         <div className="Seller d-flex">
                    <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/22.png"  className='Seller-image'   alt="" />
                    <p><b>Frooti Mango Drink</b><br/>160 ML<br/> <span style={{color:'#0da487'}}>$10.00</span></p>
                         </div>
                    </div>

                    
                </div>
            </div>
  <div className="bg-vegetable">
    <h6> S U M M E R</h6>
    <h1>VEGETABLE</h1>
    <p>Save up to 5% Off</p>
    <button className='btn btn-danger'>Shop Now</button>
  </div>


        </div>
    </div>
  )
}

export default Product