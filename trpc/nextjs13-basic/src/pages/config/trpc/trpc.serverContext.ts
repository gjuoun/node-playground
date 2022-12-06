import * as trpcNext from "@trpc/server/adapters/next";
import { getIronSession, IronSession } from "iron-session";
import { sessionConfig } from "../../api/ironSession/ironSession.config";
// import { getSessionRSC } from "./trpc.rsc";

export type TrpcServerParams = {
  type: "server";
} & trpcNext.CreateNextContextOptions;

export type TrpcServerComponentParams = {
  type: "server-component";
  getSessionRsc: () => Promise<IronSession>;
};

export type TrpcContext = {
  type: "server" | "server-component";
  session?: IronSession;
  getSessionRsc?: () => Promise<IronSession>;
};

export async function createContext(
  params: TrpcServerParams | TrpcServerComponentParams
): Promise<TrpcContext> {
  if (params.type === "server-component") {
    return {
      type: params.type,
      session: await params.getSessionRsc(),
    };
  } else {
    // This is the server context
    const { req, res, type } = params;
    const session = await getIronSession(req, res, sessionConfig);
    return { type, session };
  }
}
