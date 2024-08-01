import React from 'react';
import '../shop/shop.css';
const Shop = () => {
    return <>

<section class="banner">  
    <div className="banner-image">
          <img src="../public/image/Product.png" alt="BannerImage" />
        </div>
            <div class="banner-content">
                <h1>Atmos</h1>
               
         
                <p>A weather app that lets you explore the atmosphere and learn more about the weather phenomena</p>
               
                <a href="#" class="banner-button-2-3"> BUY NOW</a>
                <a href="#" class="banner-button-1-3">Add to Cart</a>
            </div>
        
  
        
        </section>  
        <div className="boxbg">
        <div class="container text-center">
        <div class="row align-items-start">
            <div class="col items">
                <img src="../public/image/Iphone1.png" alt="Image 1" />
            </div>
            <div class="col items">
                <img src="../public/image/Ipad.png" alt="Image 2" />
            </div>
            <div class="col items">
                <img src="../public/image/Iphone2.png" alt="Image 3" />
            </div>
            <div class="col items">
                <img src="../public/image/MacDesktop.png" alt="Image 4" />
            </div>
        </div>
    </div>
   <div className="showProduct"> <a href="#" class="banner-button-1-3-1">show all products</a></div>
   </div>

   <div className="features-1">
      
        <h2>We offer    <span class="textblack"> three plans</span> to suit your<br/> needs and budget</h2>
         <h4 className='textblack'> You can switch or cancel your plan at any time</h4>
      
       <h6 className=''>YEARLY BILLING     <i class="fa-duotone fa-solid fa-toggle-on "></i>     MONTHLY BILLING</h6>
      </div>


    </>
}

export default Shop