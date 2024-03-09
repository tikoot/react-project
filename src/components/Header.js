import React from "react";

import Plant from "../assets/img/plant.png";
import Heart from "../assets/img/heart.png";
import Cart from "../assets/img/cart.png";
import User from "../assets/img/user.png";

const Header = () => {
  const link = "";

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <div className="header-logo">
            <img src={Plant} alt="Plant Logo" />
            <h1>PLANTS</h1>
          </div>
          <div>
            <ul className="links-wrapper">
              <li>
                <a href={link} className="nav-link">
                  Houseplants
                </a>
              </li>
              <li>
                <a href={link} className="nav-link">
                  Pots
                </a>
              </li>
              <li>
                <a href={link} className="nav-link">
                  Care
                </a>
              </li>
              <li>
                <a href={link} className="nav-link">
                  Accessories
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-links">
            <ul className="links-wrapper">
              <li>
                <button className="nav-btn">
                  <img src={Heart} alt="heart" />
                </button>
              </li>
              <li>
                <button className="nav-btn">
                  <img src={Cart} alt="cart" />
                </button>
              </li>
              <li>
                <button className="nav-btn">
                  <img src={User} alt="user" />
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
