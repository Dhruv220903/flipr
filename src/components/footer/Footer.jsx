import React from "react";
import "../styles/styles.css"
import Header from "../header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <>
      <Header></Header>
      <footer className="footer">
      <div className="container">
    <div className="subscribe">
      <h1>
        Subscribe to our newsletter to get <br />
        latest updates and news
      </h1>
      <form action="#">
        <input type="email" placeholder="Enter Your Email" />
      </form>
    </div>
    <div className="footer-links">
      <div className="f-naad">
        <p>Finstreet 118 2561 Fintown</p>
        <p>
          <a href="mailto:Hello@finsweet.com">Hello@finsweet.com</a>
        </p>
        <p>
          <a href="tel:02079932905">020 7993 2905</a>
        </p>
      </div>

      <div className="f-icons">
          <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faLinkedin} />
      </div>
    </div>
  </div>
</footer>
    
      </>
  );
};

export default Footer;
