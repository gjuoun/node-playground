import fetch from "node-fetch";
import http from "http";
import https from "https";

const httpAgent = new http.Agent({ keepAlive: true });
const httpsAgent = new https.Agent({ keepAlive: true });

async function main() {
  const res = await fetch("http://localhost:3000", {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:92.0) Gecko/20100101 Firefox/92.0",
    },
    agent: (parsedUrl) => {
      return parsedUrl.protocol == "http:" ? httpAgent : httpsAgent;
    },
  });

  const body = await res.json();
  console.log(body);
}

main();
