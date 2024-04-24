"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function LogoutBtn() {
  const router = useRouter();

  const t = useTranslations("Header");
  const handleLogout = async () => {
    try {
      await fetch("/login/api", {
        method: "GET",
      });

      router.push("/en/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <button
        className="px-4 py-2 text-[#f4edf2] bg-[#b08ead] rounded-full border-none m-0 "
        onClick={handleLogout}
      >
        {t("logout")}
      </button>
    </div>
  );
}
