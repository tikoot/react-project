import { cookies } from "next/headers";

export async function deleteAuthCookie() {
  cookies().delete("auth");
}
