import React from 'react';
import '../home/PreviewForm.css';

const PreviewForm = () => {
  return (
    <>
   <div className="testimonials">
        
  <div className='dieuhuong'><i className="fa-solid fa-chevron-left"></i></div> 
  <div className="testimonial">  
          <p>
            Juniper is a great app for checking the weather. It's easy to use
            and has a beautiful interface. I love how it shows me the cloud
            patterns and predicts the weather for the next few days. It's like
            having a personal meteorologist in my pocket.
          </p>
          <div className="testimonial-author">
            <img src="../public/image/Ellipse1.png" alt="Priyanka" />
            <div>
              <strong>Priyanka</strong>
              <span>Happy Customer</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            I was skeptical about Juniper at first, but I'm glad I gave it a
            try. It's a whole new way of looking at the sky. It uses cloud
            technology to give me accurate and reliable forecasts, and it also
            has some fun features like cloud art and trivia. It's a must-have
            app for anyone who loves nature.
          </p>
          <div className="testimonial-author">
            <img src="../public/image/Ellipse2.png" alt="Jack" />
            <div>
              <strong>Jack</strong>
              <span>Happy Customer</span>
            </div>
          </div>
        </div>

     
        <div className='dieuhuong'><i className="fa-solid fa-chevron-right"></i></div> 
      </div>

      <div className="features-1">
        <h2>The Weather App That Brings <br /> You Wonder</h2>
        <p className='p-2'>We care about your happiness and well-being, no matter the weather</p>
        <div className="faq1">
          <ul>
            <li>
              <a href="#">How can I customize the Juniper app to suit my needs?<button className='chevron'><i className="fa-solid fa-chevron-right" ></i></button></a>
            </li>
            <li>
              <a href="#">How can I share my weather updates with my partner?<button className='chevron'><i className="fa-solid fa-chevron-right" ></i></button></a>
            </li>
            <li>
              <a href="#">How long is the free trial for the Juniper app?<button className='chevron'><i className="fa-solid fa-chevron-right" ></i></button></a>
            </li>
            <li>
              <a href="#">What happens after the free trial ends?<button className='chevron'><i className="fa-solid fa-chevron-right" ></i></button></a>
            </li>
          </ul>
        </div>
      </div>

      <div className="features-1">
        <p className='p-1'>Experience the weather like never before</p>
        <h2>The Only Weather App You Need to Stay <br /> Connected with Nature and Each Other</h2>
       
      
        <a href="#" className="banner-button-1-2">DOWNLOAD NOW</a>
      </div>
    </>
  );
};

export default PreviewForm;
