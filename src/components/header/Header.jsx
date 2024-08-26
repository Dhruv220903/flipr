import React from "react";

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
              <li><a href="/Home">Home</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
            <a href="#" className="subscribe-btn">Subscribe</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
