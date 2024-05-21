import DeleteUser from "../../../../components/DeleteUser";
import { getUsers } from "../../../api";
import UserCreateButton from "../../../../components/UserCreateButton";
import UserEditButton from "../../../../components/UserEditButton";
import { getTranslations } from "next-intl/server";

const AdminPage = async () => {
  const t = await getTranslations("Index");
  const users = await getUsers();
  return (
    <div className="h-full flex flex-col gap-10 max-w-full lg:max-w-[70%] mx-10 lg:mx-auto">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center justify-end items-end">
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex justify-end items-end">
            <UserCreateButton />
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white sm:pl-0"
                    >
                      {t("name")}
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      {t("email")}
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      {t("age")}
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {users.map((user: User) => (
                    <tr key={user.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 dark:text-white">
                        {user.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-white">
                        {user.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500  dark:text-white">
                        {user.age}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-white">
                        <UserEditButton user={user} />
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          <DeleteUser id={user.id} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col">
        {users.length ? (
          <div className="grid grid-cols-5 border-b border-t gap-5 py-2 px-2 bg-yellow-600 dark:bg-blue-500">
            <div>{t("name")}</div>
            <div>{t("email")}</div>
            <div>{t("age")}</div>
          </div>
        ) : (
          ""
        )}

        {users.map((user: User) => (
          <div
            key={user.id}
            className="grid grid-cols-5 border-b gap-5 py-2 px-2 hover:bg-[#E5E1CC] dark:hover:bg-blue-300/50 "
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.age}</p>
            <p className="text-right">
              <UserEditButton user={user} />
            </p>
            <p className="text-right">
              <DeleteUser id={user.id} />
            </p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default AdminPage;
