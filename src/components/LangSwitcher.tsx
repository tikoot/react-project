"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const LangSwitcher = () => {
  const router = useRouter();
  const locale = useLocale();
  const path = usePathname();

  const handleClick = (lang: string) => {
    const nextLocale = lang;
    router.replace(`/${nextLocale}/${path}`);
  };
  return (
    <div className="cursor-pointer">
      <button
        onClick={() => handleClick("en")}
        className={`pr-2 text-[18px] hover:text-[#755272] transition-all transform duration-300 ease-linear ${
          locale === "en" ? " text-gray-700  dark:text-[#f4edf2]" : ""
        }`}
      >
        EN
      </button>
      |
      <button
        onClick={() => handleClick("ka")}
        className={`pl-2 text-[18px] hover:text-[#755272] transition-all transform duration-300 ease-linear ${
          locale === "ka" ? "text-gray-700 dark:text-[#f4edf2]" : ""
        }`}
      >
        KA
      </button>
    </div>
  );
};

export default LangSwitcher;
