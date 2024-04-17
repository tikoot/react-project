import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "@/constants";
import { redirect } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function DashboardLayout({ children }) {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);
  console.log("cookie", cookie);

  if (!cookie) {
    redirect("/login");
  }
  return (
    <div class="h-screen flex flex-col">
      <Header />
      <main class="flex-1 overflow-auto p-4">{children}</main>
      <Footer />
    </div>
  );
}
