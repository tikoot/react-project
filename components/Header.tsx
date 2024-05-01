"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { handleLogout } from "../scripts/logout";
import i18n from "../app/i18n";
import ToggleMenu from "./ToggleMenu";

const Header: React.FC = () => {
  const { t, i18n: translation } = useTranslation();

  const toggleLanguage = () => {
    const currentLanguage = translation.language;
    const nextLanguage = currentLanguage === "en" ? "ge" : "en";
    i18n.changeLanguage(nextLanguage);
  };

  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    const newTheme: string = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        setTheme(storedTheme);
      }
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

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
                  {t("home")}
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="px-5 py-0 text-base font-medium text-gray-700 capitalize no-underline cursor-pointer"
                >
                  {t("blog")}
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="px-5 py-0 text-base font-medium text-gray-700 capitalize no-underline cursor-pointer"
                >
                  {t("profile")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="px-5 py-0 text-base font-medium text-gray-700 capitalize no-underline cursor-pointer"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex items-center justify-between max-[900px]:hidden">
              <li className="flex mr-2">
                <button
                  className="px-4 py-2 text-[#f4edf2] bg-[#b08ead] rounded-full border-none m-0 "
                  onClick={toggleTheme}
                >
                  {theme === "light" ? "Dark" : "Light"} Mode
                </button>
              </li>
              <li className="mr-2">
                <button
                  onClick={toggleLanguage}
                  className="px-4 py-2 text-[#f4edf2] bg-[#b08ead] rounded-full border-none m-0 "
                >
                  {translation.language === "en" ? "KA" : "EN"}
                </button>
              </li>
              <li className="mr-2">
                <button
                  className="px-4 py-2 text-[#f4edf2] bg-[#b08ead] rounded-full border-none m-0 "
                  onClick={() => {
                    handleLogout().then(() => window.location.reload());
                  }}
                >
                  {t("logOut")}
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
