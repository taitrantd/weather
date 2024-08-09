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
         <h3 className='textblack'> You can switch or cancel your plan at any time</h3>
      
       <h6 className=''>YEARLY BILLING     <i class="fa-duotone fa-solid fa-toggle-on "></i>     MONTHLY BILLING</h6>
      </div>

      <div class="pricing-cards">
    <div class="card free">
        <h2>FREE</h2>
        <h3>$ 0.00</h3>
        <ul>
            <li><i class="fa-solid fa-check"></i> Basic weather info for your location</li>
            <li><i class="fa-solid fa-check"></i> Share with one partner</li>
            <li><i class="fa-solid fa-check"></i> Daily and hourly forecasts</li>
            <li> <i class="fa-solid fa-check"></i> Beautiful and intuitive interface</li>
        </ul>
        <button>SUBSCRIBE</button>
    </div>
    <div class="card couple">
        <h2>COUPLE</h2>
        <h3>$ 2.49</h3>
        <ul>
            <li><i class="fa-solid fa-check"></i> Advanced weather info for any location</li>
            <li><i class="fa-solid fa-check"></i> Share with up to five partners</li>
            <li><i class="fa-solid fa-check"></i> Weekly and monthly forecasts</li>
            <li><i class="fa-solid fa-check"></i> Customizable themes and widgets</li>
            <li><i class="fa-solid fa-check"></i> Weather groups, stickers, emojis, and gifs</li>
            <li><i class="fa-solid fa-check"></i> Exclusive blog and podcast</li>
        </ul>
        <button>SUBSCRIBE</button>
    </div>
    <div class="card pro">
        <h2>PRO</h2>
        <h3>$ 4.99</h3>
        <ul>
            <li><i class="fa-solid fa-check"></i> Exclusive weather info from our cloud technology</li>
            <li><i class="fa-solid fa-check"></i> Share with unlimited partners</li>
            <li><i class="fa-solid fa-check"></i> Personalized forecasts based on your preferences and activities</li>
            <li><i class="fa-solid fa-check"></i> Weather trends, alerts, and recommendations</li>
            <li><i class="fa-solid fa-check"></i> Special features and rewards</li>
        </ul>
        <button>SUBSCRIBE</button>
    </div>
</div>


    </>
}

export default Shop