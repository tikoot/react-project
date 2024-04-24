import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import ToggleMenu from "@/components/ToggleMenu";
import { logout } from "@/app/actions";
import LogoutBtn from "./LogoutBtn";
import ThemeSwitch from "./ThemeSwitch";
import LocalSwitcher from "./LocalSwitcher";

export default function Header() {
  const t = useTranslations("Header");
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
                  {t("home")}
                </Link>
              </li>
              <li>
                <a
                  href={link}
                  className="px-5 py-0 text-base font-medium text-gray-700 capitalize no-underline cursor-pointer"
                >
                  {t("houseplants")}
                </a>
              </li>
              <li>
                <a
                  href={link}
                  className="px-5 py-0 text-base font-medium text-gray-700 capitalize no-underline cursor-pointer"
                >
                  {t("pots")}
                </a>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="px-5 py-0 text-base font-medium text-gray-700 capitalize no-underline cursor-pointer"
                >
                  {t("blogs")}
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
              <li className="flex">
                <ThemeSwitch />
              </li>
              <li>
                <LocalSwitcher />
              </li>
              <li>
                <LogoutBtn />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
