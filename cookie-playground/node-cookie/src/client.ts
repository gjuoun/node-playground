import fetch from "node-fetch";
import { getAgent } from "./client/agent";
import { Cookie, CookieJar } from "tough-cookie";

const cookieJar = new CookieJar();

async function main() {
  const res = await fetch("http://localhost:3000", {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:92.0) Gecko/20100101 Firefox/92.0",
    },
    agent: getAgent,
  });

  const cookie = Cookie.parse(res.headers.get("Set-Cookie")!);

  await cookieJar.setCookie(cookie!, `http://localhost:3000`)

  const cookiesInJar = await cookieJar.getCookies("http://localhost:3000")

  const body = await res.json();
  console.log(body);
}

main();
