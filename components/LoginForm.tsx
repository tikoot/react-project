"use client";
import React, { useState } from "react";
import { handleLogin } from "../scripts/login";

const LoginForm = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="bg-white dark:bg-slate-400  h-screen flex justify-center items-center ">
      <div className=" flex flex-col items-center ">
        <form
          className="space-y-6 w-[100%]"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(name, password).then(() => window.location.reload());
          }}
        >
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900 capitalize">
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="username"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-white dark:bg-slate-700 dark:border-none dark:ring-slate-700"
                autoComplete="off"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="">
            <label className="block text-sm font-medium leading-6 text-gray-900 capitalize">
              Password
            </label>
            <div className="mt-2">
              <input
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-slate-700 dark:border-none dark:ring-slate-700"
              />
            </div>
          </div>

          <div>
            <button
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
