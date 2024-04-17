import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function DashboardLayout({ children }) {
  return (
    <div class="h-screen flex flex-col">
      <Header />
      <main class="flex-1 overflow-auto p-4">{children}</main>
      <Footer />
    </div>
  );
}
