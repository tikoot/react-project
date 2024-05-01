"use client";
import Layout from "../../../components/Layout";
const Profile: React.FC = () => {
  return (
    <Layout>
      <section className="flex flex-col h-screen overflow-y-auto">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              src="/img/avatar.png"
              alt="avatar"
              className="h-[120px] w-auto rounded-full"
            />
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#">
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  value="tiko"
                  readonly
                  className="disabled bg-transparent focus:outline-none border-b border-transparent capitalize"
                  style={{ "caret-color": "transparent" }}
                />
              </div>

              <div className="mt-2">
                <input
                  id="lastname"
                  name="lastname"
                  value="otarashvili"
                  readonly
                  className="disabled bg-transparent focus:outline-none border-b border-transparent capitalize"
                  style={{ "caret-color": "transparent" }}
                />
              </div>

              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value="tinatinotarashvili99@gmail.com"
                  className="disabled bg-transparent focus:outline-none border-b border-transparent w-full"
                  style={{ "caret-color": "transparent" }}
                />
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="New Password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-2 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-2 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#B08EAD] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
