export const BASE_URL = "http://localhost:3000";

export interface User {
  id: number;
  name: string;
  email: string;
}

export const getUsers = async () => {
  const res = await fetch(`${BASE_URL}/api/users/get-users`, {
    cache: "no-store",
  });
  const { users } = await res.json();

  return users.rows;
};

export const createUser = async (name: string, email: string) => {
  await fetch(`${BASE_URL}/api/users/create-user`, {
    method: "POST",
    body: JSON.stringify({ name, email }),
    cache: "no-store",
  });
};

export const deleteUser = async (userId: number) => {
  await fetch(`${BASE_URL}/api/users/delete-user/${userId}`, {
    method: "DELETE",
    cache: "no-store",
  });
};
