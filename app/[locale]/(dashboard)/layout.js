import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function dashboardLayout({ children }) {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main class="flex-1 overflow-auto p-4">{children}</main>
      <Footer />
    </div>
  );
}
