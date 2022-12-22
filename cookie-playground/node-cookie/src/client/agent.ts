import http from "http";
import https from "https";

const httpAgent = new http.Agent({ keepAlive: true });
const httpsAgent = new https.Agent({ keepAlive: true });

export const getAgent = (parsedUrl: URL) => {
  return parsedUrl.protocol == "http:" ? httpAgent : httpsAgent;
};