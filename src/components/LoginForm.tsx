import { useLocale } from "next-intl";

const LoginForm = () => {
  const locale = useLocale();
  return (
    <>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="/api" method="POST" className="space-y-6">
          <div>
            <label className="block text-sm font-medium leading-6  text-gray-900 dark:text-[#fff]">
              {locale === "en" ? "Username" : "სახელი"}
            </label>
            <div className="mt-2">
              <input
                className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-[#fff]  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                maxLength={100}
                name="username"
                type="text"
                autoCapitalize="none"
                autoComplete="off"
                spellCheck="false"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-[#fff]">
              {locale === "en" ? "Password" : "პაროლი"}
            </label>
            <div className="mt-2">
              <input
                className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-[#fff] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                maxLength={100}
                name="password"
                type="password"
                autoCapitalize="none"
                autoComplete="off"
                spellCheck="false"
                required
              />
            </div>
          </div>

          <div className="w-full flex gap-3">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#755272] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {locale === "en" ? "Log In" : "შესვლა"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
