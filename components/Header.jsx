"use client";
import Link from "next/link";
import Image from "next/image";
import ToggleMenu from "./ToggleMenu";

export default function Header({ handleLogout }) {
  const link = "";

  return (
    <header className="bg-[#f4edf2] ">
      <div className="px-16 max-[900px]:px-6">
        <nav className="py-6 flex items-center justify-between navbar">
          <div className="flex items-center ">
            <Image
              src="/img/plant.png"
              alt="Plant Logo"
              width={30}
              height={30}
            />
            <h1 className="font-bold text-2xl ml-1  text-[#4b3049]">PLANTS</h1>
          </div>
          <ToggleMenu />

          <div>
            <ul className="flex items-center justify-between max-[900px]:hidden">
              <li>
                <Link
                  href="/"
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
                <Link
                  href="/blogs"
                  className="px-5 py-0 text-base font-medium text-gray-700 capitalize no-underline cursor-pointer"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="px-5 py-0 text-base font-medium text-gray-700 capitalize no-underline cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex items-center justify-between max-[900px]:hidden">
              <li className="pr-2">
                <Link
                  href="/"
                  className="bg-transparent border-none cursor-pointer px-2"
                >
                  <Image
                    src="/img/cart.png"
                    alt="Plant Logo"
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
              <li className="pr-2">
                <Link
                  href="/profile"
                  className="bg-transparent border-none cursor-pointer px-2"
                  linkto
                >
                  <Image
                    src="/img/user.png"
                    alt="Plant Logo"
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
              <li>
                <button
                  className="bg-transparent border-none cursor-pointer mt-1"
                  onClick={(e) => {
                    e.preventDefault;
                    handleLogout();
                  }}
                >
                  <Image
                    src="/img/log-out.png"
                    alt="Logout"
                    width={24}
                    height={24}
                  />
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
