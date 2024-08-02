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

      <div className="container py-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">FREE</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$0.00</h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Basic weather info for your location</li>
                <li>Share with one partner</li>
                <li>Daily and hourly forecasts</li>
                <li>Beautiful and intuitive interface</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-primary">SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">COUPLE</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$2.49</h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Advanced weather info for any location</li>
                <li>Share with up to five partners</li>
                <li>Weekly and monthly forecasts</li>
                <li>Customizable themes and widgets</li>
                <li>Weather groups, stickers, emojis, and gifs</li>
                <li>Exclusive blog and podcast</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-primary">SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">PRO</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$4.99</h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Exclusive weather info from our cloud technology</li>
                <li>Share with unlimited partners</li>
                <li>Personalized forecasts based on your preferences and activities</li>
                <li>Weather trends, alerts, and recommendations</li>
                <li>Special features and rewards</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-primary">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
}

export default Shop