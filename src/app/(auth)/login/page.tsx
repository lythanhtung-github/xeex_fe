"use server";

import Cookies from "js-cookie";

export default async function LoginPage() {
  Cookies.set("access_token", "test");

  return <></>;
}
