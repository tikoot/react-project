import React from "react";

import Plant from "../assets/img/plant.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="inner-wrap">
          <div className="footer-content">
            <div className="footer-links">
              <div className="header-logo">
                <img src={Plant} alt="Plant Logo" />
                <h1>PLANTS</h1>
              </div>
              <p className="footer-txt">Privacy Policy</p>
              <p className="footer-txt">Terms & Conditions </p>
            </div>

            <div>
              <p className="subscribe-txt">
                Subscribe our newsletter to get <br /> updates about our
                services
              </p>
              <div>
                <form className="subscribe-form">
                  <input
                    type="email"
                    name="EMAIL"
                    id="newsletter-form-email"
                    placeholder="Your email address"
                  />

                  <button type="submit" className="subscribe-btn">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
