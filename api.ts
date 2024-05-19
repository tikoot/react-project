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

export const createUser = async (name: string, email: string, age: number) => {
  await fetch(`${BASE_URL}/api/create-user`, {
    method: "POST",
    body: JSON.stringify({ name, email, age }),
  });
};

export async function deleteUser(id: number) {
  return await fetch(`${BASE_URL}/api/delete-user/${id}`, {
    method: "DELETE",
  });
}

export async function editUser(id: number, userData: User) {
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/api/edit-users/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update user");
    }

    return response.json();
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
}
