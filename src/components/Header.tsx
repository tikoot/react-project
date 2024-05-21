import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import LogOut from "./LogOut";
import DarkMode from "./DarkMode";
import LangSwitcher from "./LangSwitcher";
import { useLocale } from "next-intl";
import Cart from "./Cart";
import { getCart } from "../app/api";
import BurgerMenu from "./BurgerMenu";

const Header = async () => {
  const locale = useLocale();
  const cartElements = await getCart();
  const totalQuantity = cartElements[0]?.products.reduce(
    (acc: number, item: ProductObject) => acc + item.quantity,
    0
  );
  return (
    <header className="w-full h-[70px] lg:h-[85px] bg-[#f4edf2] dark:bg-[#000] sticky top-0 z-10">
      <div className="w-full h-full flex mx-auto justify-between items-center px-10 lg:px-0 lg:max-w-[1400px]">
        <Link className="w-[80px] h-[80px]" href={`/${locale}`}>
          <Image
            src="/assets/plant.png"
            alt="Plant Logo"
            width={30}
            height={30}
          />
        </Link>
        <div className="hidden lg:block">
          <Navigation layout="flex-row" />
        </div>
        <div className="flex gap-6 lg:gap-4 items-center">
          <Cart selectedNumber={totalQuantity} />
          <BurgerMenu />
          <div className="hidden lg:flex gap-4 items-center">
            <LangSwitcher />
            <DarkMode />
            <LogOut />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
