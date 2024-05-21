import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("Index");

  return (
    <form
      action="#"
      method="POST"
      className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-24 max-w-[700px] mx-auto "
    >
      <div className="mx-auto">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
              {t("firstName")}
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
              {t("lastName")}
            </label>
            <div className="mt-2.5" />
            <input
              type="text"
              name="last-name"
              id="last-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
            {t("email")}
          </label>
          <div className="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
            {t("phoneNumber")}
          </label>
          <div className="mt-2.5">
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
            {t("message")}
          </label>
          <div className="mt-2.5">
            <textarea
              name="message"
              id="message"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="mt-8  flex justify-center">
        <button
          type="submit"
          className="bg-[#b08ead] text-[#f4edf2]  border-none cursor-pointer  mt-2 rounded-md  px-3.5 py-2.5  text-center text-sm font-semibold shadow-sm "
        >
          Send message
        </button>
      </div>
    </form>
  );
};

export default Contact;
