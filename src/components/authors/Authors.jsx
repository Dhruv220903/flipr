import React from 'react';
import "../styles/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Authors = () => {
  return (
    <div>
      <h1 style={{ fontFamily: 'Sen', textAlign: 'center' }}>List of Authors</h1>

      <div className="authors">
        <ul>
          <li>
            <img src="./assets/Client-First - IMAGES/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313.svg" alt="Floyd Miles" />
            <h3>Floyd Miles</h3>
            <h5>Content Writer @Company</h5>
            <div className="icons">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </li>
          <li>
            <img src="./assets/Client-First - IMAGES/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.svg" alt="Dianne Russell" />
            <h3>Dianne Russell</h3>
            <h5>Content Writer @Company</h5>
            <div className="icons">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </li>
          <li>
            <img src="./assets/Client-First - IMAGES/fashion-woman-cute-shoes-5704849.svg" alt="Jenny Wilson" />
            <h3>Jenny Wilson</h3>
            <h5>Content Writer @Company</h5>
            <div className="icons">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </li>
          <li>
            <img src="./assets/Client-First - IMAGES/content-baker-with-delicious-puff-in-cafeteria-6205509.svg" alt="Leslie Alexander" />
            <h3>Leslie Alexander</h3>
            <h5>Content Writer @Company</h5>
            <div className="icons">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Authors;
