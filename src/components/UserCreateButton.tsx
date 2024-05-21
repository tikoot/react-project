"use client";
import { useState } from "react";
import UserCreateForm from "./UserCreateForm";
import { useTranslations } from "next-intl";

const UserCreateButton = () => {
  const [openModal, setOpenModal] = useState(false);
  const t = useTranslations("Index");
  return (
    <>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="block rounded-md bg-[#755272] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
      >
        {t("add-user")}
      </button>
      {openModal ? <UserCreateForm setOpenModal={setOpenModal} /> : ""}
    </>
  );
};

export default UserCreateButton;
