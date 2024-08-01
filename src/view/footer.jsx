import React from 'react';
const Footer = () => {
    return <>

    
    
<div className="maymua"><img src="../public/image/Vectors.png" alt="" /></div>
      <div className="footer-container">
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#" className="social-icon"><i className="fa-brands fa-twitter" style={{ color: '#fafafa' }}></i></a>
            <a href="#" className="social-icon"><i className="fa-brands fa-facebook" style={{ color: '#ffffff' }}></i></a>
            <a href="#" className="social-icon"><i className="fa-brands fa-instagram" style={{ color: '#ffffff' }}></i></a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Pages</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Infor</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">TOS</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Platform</h3>
          <ul>
            <li><a href="#">Android</a></li>
            <li><a href="#">iOS</a></li>
            <li><a href="#">Windows</a></li>
            <li><a href="#">Mac OS</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Pages</h3>
          <ul>
            <li><a href="#">Support request</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Subscribe</h3>
          <form action="#" method="post">
    <div className="input-group mb-3">
     
     <div className="sendtele"> <input type="text"className="form-control" placeholder="Enter your email " aria-label="Recipient's username" aria-describedby="button-addon2"
      />
      <button className='buttontele'>
      <i class="fa-brands fa-telegram"></i>
      </button></div><p>Join our newsletter to stay up to date on features and releases</p>
    </div>

          </form>
        </div>
      </div>
      <div className="footer-bottom">
  <div className="logo">
    <a href="#">JUNIPER</a>
  </div>
  <nav className="nav">
    <ul className="nav-list">
      <li className="nav-item">
        <a href="#">
          <button className="cta-button">GET NOW</button>
        </a>
      </li>
    </ul>
  </nav>
</div>
   
    
    </>
}

export default Footer