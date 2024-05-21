import { useTranslations } from "next-intl";

const LoginError = () => {
  const t = useTranslations("Index");

  return (
    <div className="rounded-md bg-red-50  mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div className="flex items-center justify-center">
        <div className="">
          <div className="mt-2 text-sm text-red-700">
            <ul role="list" className="space-y-1">
              <li className="text-red-500 text-[20px] p-4">
                {t("loginError")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginError;
