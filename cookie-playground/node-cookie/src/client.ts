import fetch from "node-fetch";
import { getAgent } from "./client/agent";
import { Cookie, CookieJar } from "tough-cookie";
import makeFetchCookie from "fetch-cookie";

const fetchCookie = makeFetchCookie(fetch);
type CookieFetch = typeof fetchCookie;

const userMap = new Map<string, CookieFetch>();

async function main() {
  let fetchFunc: CookieFetch;
  if (userMap.has("gjuoun")) {
     fetchFunc = userMap.get("gjuoun")!;
  } else {
    fetchFunc = makeFetchCookie(fetch);
    userMap.set("gjuoun", fetchFunc);
  }

  const res = await fetchFunc("http://localhost:3000");
  const json = await res.json();
  console.log(res.headers.get("set-cookie"));

  const res2 = await fetchFunc("http://localhost:3000/views");
  const json2 = await res2.json();
  console.log("2");
}

main();
