import { createUser } from "./api";
export async function createUserAction(formData: FormData) {
  "use server";
  const { name, email, age } = Object.fromEntries(formData);

  return createUser(name as string, email as string, age as string);
}
