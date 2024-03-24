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
    <header className="bg-[#f4edf2] ">
      <div className="px-16 max-[900px]:px-6">
        <nav className="py-6 flex items-center justify-between navbar">
          <div className="flex items-center ">
            <img src={Plant} alt="Plant Logo" />
            <h1 className="font-bold text-2xl ml-1  text-[#4b3049]">PLANTS</h1>
          </div>
          <div
            className="hidden absolute max-[900px]:flex flex-col justify-between w-9 h-8 right-[75px] max-[900px]:right-6"
            onClick={toggleMenu}
          >
            <span className="h-[6px] w-full bg-[#4b3049] rounded-md"></span>
            <span className="h-[6px] w-full bg-[#4b3049] rounded-md"></span>
            <span className="h-[6px] w-full bg-[#4b3049] rounded-md"></span>
          </div>
          <div>
            <ul className="flex items-center justify-between max-[900px]:hidden">
              <li>
                <Link
                  to="/"
                  className="px-5 py-0 text-base font-medium text-gray-700 capitalize no-underline cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href={link}
                  className="px-5 py-0 text-base font-medium text-gray-700 capitalize no-underline cursor-pointer"
                >
                  Houseplants
                </a>
              </li>
              <li>
                <a
                  href={link}
                  className="px-5 py-0 text-base font-medium text-gray-700 capitalize no-underline cursor-pointer"
                >
                  Pots
                </a>
              </li>
              <li>
                <a
                  href={link}
                  className="px-5 py-0 text-base font-medium text-gray-700 capitalize no-underline cursor-pointer"
                >
                  Care
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="px-5 py-0 text-base font-medium text-gray-700 capitalize no-underline cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex items-center justify-between max-[900px]:hidden">
              <li>
                <button className="bg-transparent border-none cursor-pointer px-2">
                  <img src={Heart} alt="heart" className="w-6 h-6" />
                </button>
              </li>
              <li>
                <button className="bg-transparent border-none cursor-pointer px-2">
                  <img src={Cart} alt="cart" className="w-6 h-6" />
                </button>
              </li>
              <li>
                <button className="bg-transparent border-none cursor-pointer px-2">
                  <img src={User} alt="user" className="w-6 h-6" />
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
