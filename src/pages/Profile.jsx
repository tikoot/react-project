import React, { useState } from "react";
import avatar from "../assets/img/avatar.png";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "tiko",
    lastname: "otarashvili",
    email: "tinatinotarashvili99@gmail.com",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="flex flex-col h-screen overflow-y-auto">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            src={avatar}
            alt="avatar"
            className="h-[120px] w-auto rounded-full"
          />
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                value={formData.name}
                readOnly
                className="disabled bg-transparent focus:outline-none border-b border-transparent capitalize"
                style={{ caretColor: "transparent" }}
              />
            </div>

            <div className="mt-2">
              <input
                id="lastname"
                name="lastname"
                value={formData.lastname}
                readOnly
                className="disabled bg-transparent focus:outline-none border-b border-transparent capitalize"
                style={{ caretColor: "transparent" }}
              />
            </div>

            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                readOnly
                className="disabled bg-transparent focus:outline-none border-b border-transparent w-full"
                style={{ caretColor: "transparent" }}
              />
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="New Password"
                required
                value={formData.password}
                onChange={handleChange}
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
                value={formData.confirmPassword}
                onChange={handleChange}
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
  );
};

export default Profile;
