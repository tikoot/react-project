import { Link } from "react-router-dom";
import Plant from "../assets/img/plant.png";
import Heart from "../assets/img/heart.png";
import Cart from "../assets/img/cart.png";
import User from "../assets/img/user.png";

const Header = () => {
  const link = "";
  const toggleMenu = () => {
    const menu = document.querySelector(".navbar");
    menu.classList.toggle("open");
  };

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <div className="header-logo">
            <img src={Plant} alt="Plant Logo" />
            <h1>PLANTS</h1>
          </div>
          <div className="hamburger-menu" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="navbar-links">
            <ul className="links-wrapper">
              <li className="nav-list">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-list">
                <a href={link} className="nav-link">
                  Houseplants
                </a>
              </li>
              <li className="nav-list">
                <a href={link} className="nav-link">
                  Pots
                </a>
              </li>
              <li className="nav-list">
                <a href={link} className="nav-link">
                  Care
                </a>
              </li>
              <li className="nav-list">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-links">
            <ul className="links-wrapper-btn">
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
