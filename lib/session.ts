import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
interface SessionContent {
  id?: number;
}
export default async function getSession() {
  return getIronSession<SessionContent>(await cookies(), {
    cookieName: "delicious-karrot",
    password: process.env.COOKIE_PASSWORD!,
    // 느낌표는 null, undefined가 아니라고 알려주는 역할
  });
}
