import { createNextApiHandler } from "@trpc/server/adapters/next";
import { getSessionRSC } from "../../config/trpc/trpc.rsc";
import { appRouter } from "../../config/trpc/trpc.server";
import { createContext } from "../../config/trpc/trpc.server.context";

export default createNextApiHandler({
  router: appRouter,
  createContext: (params) => {
    return createContext({
      type: "server",
      req: params.req,
      res: params.res,
    });
  },
});
