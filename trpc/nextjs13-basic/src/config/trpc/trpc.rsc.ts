import { appRouter } from "./trpc.server";
import { cookies, headers } from "next/headers";
import { getIronSession } from "iron-session";
import { sessionConfig } from "../ironSession/ironSession.config";

export async function getSessionRSC() {
  const session = await getIronSession(
    {
      headers: {
        cookie: headers().get("cookie"),
      },
    } as any,
    {} as any,
    sessionConfig
  );

  return session;
}

export const trpcRSC = appRouter.createCaller({
  type: "server-component",
  //* this is a HACK, because we can't import `next/cookies` in `/api`-routes
  getRscSession: getSessionRSC,
});
