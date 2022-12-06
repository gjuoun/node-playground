import * as trpcNext from "@trpc/server/adapters/next";
import { getIronSession, IronSession } from "iron-session";
import { sessionConfig } from "../../api/ironSession/ironSession.config";
import { getSessionRSC } from "./trpc.rsc";

export type TrpcServerParams = {
  type: "server" | "server-component";
} & trpcNext.CreateNextContextOptions;

export type TrpcContext = {
  type: "server" | "server-component";
  session?: IronSession;
  getRscSession?: () => Promise<IronSession>; // available in `server-component`
};

export async function createContext(
  params: TrpcServerParams
): Promise<TrpcContext> {
  // This is the server context
  const { req, res, type } = params;
  const session = await getIronSession(req, res, sessionConfig);
  return { type, session };
}
