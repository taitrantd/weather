import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">JUNIPER</Link>
      </div>
      <nav className="nav">
        <ul className="nav-list1">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/info">Info</Link>
          </li>
          <li className="nav-item">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="nav-item">
            <Link to="/tos">TOS</Link>
          </li>
          <li className="nav-item search-icon">
            <Link to="/search"><i className="fas fa-search"></i></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
