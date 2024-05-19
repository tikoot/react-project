"use server";
import { createUser, deleteUser, getUsers, editUser, User } from "./api";
export async function createUserAction(formData: FormData) {
  //   const { name, email, age } = Object.fromEntries(formData);

  //   return createUser(name as string, email as string, Number(age));
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const age = formData.get("age") as string;

    await createUser(name, email, Number(age));

    const users = await getUsers();

    return { success: true, users };
  } catch (error) {
    console.error("Error creating user:", error);
    return { success: false, error };
  }
}

export async function deleteUserAction(id: number) {
  await deleteUser(id);
}

export async function editUsersAction(id: number, userData: User) {
  try {
    //console.log(id, userData);
    await editUser(id, userData);
  } catch (error) {
    console.error("Error editing user:", error);
    throw error;
  }
}
