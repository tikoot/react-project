// import { deleteAuthCookie } from "@/app/actions";
// import { redirect } from "next/navigation";
import Image from "next/image";

const LogoutButton = () => {
  // const handleLogout = async () => {
  //   try {
  //     await deleteAuthCookie();
  //     redirect("/");
  //   } catch (error) {
  //     console.error("Failed to sign out:", error);
  //   }
  // };

  return (
    <button className="bg-transparent border-none cursor-pointer mt-1">
      <Image src="/img/log-out.png" alt="Logout" width={24} height={24} />
    </button>
  );
};

export default LogoutButton;
