import React from 'react';
import { Link } from 'react-router-dom';
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/info">Infor</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/tos">TOS</Link></li>
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
        <div className="subscribe-form" >
      <h5>Subscribe</h5>
      <div className="input-group">
        <input type="email" className="form-control" placeholder="Enter your email" />
        <div className="input-group-append">
          <button className="btn1" type="button" >
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
        <p className='chumo'>Join our newsletter to stay up to date on features and releases</p>
      </div>
    </div>
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