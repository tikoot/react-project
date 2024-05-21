import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../../constants";
import LoginForm from "../../../components/LoginForm";
import LoginError from "../../../components/LoginError";
export const dynamic = "force-dynamic";
import DarkMode from "../../../components/DarkMode";
import LangSwitcher from "../../../components/LangSwitcher";

const LoginPage = async () => {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);

  let message: string | null = null;
  if (cookie?.value) {
    const cookieObject = JSON.parse(cookie.value);
    if (cookieObject?.message) {
      message = cookieObject?.message;
    }
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm flex gap-2">
        <LangSwitcher />
        <DarkMode />
      </div>

      <LoginForm />
      {message ? <LoginError /> : ""}
    </div>
  );
};

export default LoginPage;
