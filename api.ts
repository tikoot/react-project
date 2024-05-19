export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

export const BASE_URL = "http://localhost:3000";

export async function getUsers() {
  const response = await fetch(BASE_URL + "/api/get-users");
  const { users } = await response.json();

  return users.rows;
}

export const createUser = async (name: string, email: string, age: string) => {
  await fetch(`${BASE_URL}/api/users/create-user`, {
    method: "POST",
    body: JSON.stringify({ name, email, age }),
  });
};
