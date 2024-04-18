"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LogoutButton({ handleLogout }) {
  const router = useRouter();
  return (
    <button
      className="bg-transparent border-none cursor-pointer mt-1"
      onClick={(e) => {
        e.preventDefault();
        handleLogout();
        router.push("/login");
      }}
    >
      <Image src="/img/log-out.png" alt="Logout" width={24} height={24} />
    </button>
  );
}
