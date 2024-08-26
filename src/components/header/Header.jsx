import React from "react";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
          <h1>{"{Finsweet"}</h1>

          </div>
          <div className="nav-text">
            <ul className="nav-menu">
            <li><Link to="/Home">Home</Link></li>
<li><Link to="/Blog">Blog</Link></li>
<li><Link to="/Aboutus">About Us</Link></li>
<li><Link to="/Contact">Contact Us</Link></li>
<li><Link to="/PrivacyPolicy">Privacy Policy</Link></li>
            </ul>
            <a href="#" className="subscribe-btn">Subscribe</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
