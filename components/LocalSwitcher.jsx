"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { usePathname } from "next/navigation";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale();

  const getPathWithoutLocale = (pathname, locale) => {
    const prefixRegex = new RegExp(`^/${locale}`);
    return pathname.replace(prefixRegex, "");
  };

  const onSelectChange = (e) => {
    const nextLocale = e.target.value;
    const pathnameWithoutLocale = getPathWithoutLocale(pathname, localActive);
    startTransition(() => {
      router.replace(`/${nextLocale}${pathnameWithoutLocale}`);
    });
  };

  return (
    <label className=" mx-4 ">
      <select
        defaultValue={localActive}
        className="py-1 px-2 rounded bg-[#f4edf2]  outline-none  cursor-pointer"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en">EN</option>
        <option value="ka">KA</option>
      </select>
    </label>
  );
}
