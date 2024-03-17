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
              <div className="footer_link">
                <a href="/" className="footer-txt">
                  Overview
                </a>
                <a href="/" className="footer-txt">
                  Privacy Policy
                </a>
                <a href="/" className="footer-txt">
                  Terms & Conditions{" "}
                </a>
              </div>
            </div>

            <div className="subscribe-wrapper">
              <p className="subscribe-txt">Subscribe to get updates</p>
              <div className="subscribe-buttons">
                <form className="subscribe-form">
                  <input
                    type="email"
                    name="EMAIL"
                    id="newsletter-form-email"
                    placeholder="Your email address ..."
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
