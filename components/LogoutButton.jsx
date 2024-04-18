"use client";
import Image from "next/image";

export default function LogoutButton({ handleLogout }) {
  return (
    <button
      className="bg-transparent border-none cursor-pointer mt-1"
      onClick={() => {
        e.preventDefault();
        handleLogout();
      }}
    >
      <Image src="/img/log-out.png" alt="Logout" width={24} height={24} />
    </button>
  );
}
