import React from 'react';
const Main = () => {
    return <>

<div className="features">
{/* <img src="../public/image/vector.png" alt="" /> */}
        <div className="feature">
            
          <h2><i class="fa-solid fa-compass" style={{ color: '#ffffff' }}></i>{' '}Personalized</h2>
        
           <p>
            A personalized weather report that shows the best time and place for
            couples to enjoy outdoor activities based on their preferences and
            location.
          </p>
        </div>
        <div className="feature">
          <h2><i class="fa-regular fa-image" style={{ color: '#ffffff' }}></i>{' '}Gallery</h2>
          <p>
            A cloud gallery that allows users to upload and share their photos
            and videos of the sky and the weather with other users and get
            feedback and tips.
          </p>
        </div>
        <div className="feature">
          <h2><i class="fa-solid fa-heart" style={{ color: '#ffffff' }}></i>{' '}Mood Tracker</h2>
          <p>
            A mood tracker that analyzes the user's mood based on the weather
            and suggests activities, music, or quotes to cheer them up or calm
            them down.
          </p>
        </div>
      </div>
      <div className="cta 1">
      <img src="../public/image/iphone12.png" alt="BannerImage" />
        <div className="cta-text">
          <h1>
            Plan Your Outdoor <br /> Activities with Ease
          </h1>
          <h2>
            Get notified before rain stops. <br /> Plan your outdoor activities
          </h2>
          <ul>
            <li>
            <div className="weather-share">
      <div className="icon-wrapper">
        <i className="fa-solid fa-check"></i>
      </div>
      <span className="weather-text">Share your weather stories and photos.</span>
    </div>
            </li>
            <li>
              <i className="fa-regular fa-circle-check"></i> Custom weather
              alerts and notifications.
            </li>
            <li>
              <i className="fa-regular fa-circle-check"></i> Smart weather integrations for your home.
            </li>
          </ul>
        </div>
      </div>

    </>
}

export default Main