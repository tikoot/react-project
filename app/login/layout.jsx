export default function LoginLayout({ children }) {
  return (
    <div class="h-screen flex flex-col">
      <main class="flex-1 overflow-auto p-4">{children}</main>
    </div>
  );
}
