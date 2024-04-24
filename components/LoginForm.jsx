"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ThemeSwitch from "./ThemeSwitch";
import LocalSwitcher from "./LocalSwitcher";
import { useTranslations } from "next-intl";

export default function LoginForm() {
  const t = useTranslations("Login");
  const router = useRouter();
  const FormAction = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("/login/api", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        router.push("/");
      } else {
        alert(data.error);
      }
    } catch (err) {
      alert("error");
    }
  };

  return (
    <div className="bg-white dark:bg-slate-400  h-screen flex justify-center items-center ">
      <div className=" flex flex-col items-center ">
        <div className=" flex  mb-2 items-center justify-center mx-auto">
          <LocalSwitcher />
        </div>
        <div className="flex mb-2">
          <ThemeSwitch />
        </div>

        <form class="space-y-6 w-[100%]" onSubmit={FormAction}>
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900 capitalize"
            >
              {t("name")}
            </label>
            <div class="mt-2">
              <input
                id="username"
                name="username"
                type="username"
                autocomplete="username"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-white dark:bg-slate-700 dark:border-none dark:ring-slate-700"
                spellCheck="off"
                autoComplete="off"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900 capitalize"
              >
                {t("password")}
              </label>
            </div>
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-slate-700 dark:border-none dark:ring-slate-700"
                autoComplete="off"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {t("button")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
