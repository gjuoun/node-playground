import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "./trpc.server";
import superjson from "superjson";

// Notice the <AppRouter> generic here.
export const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "/api/trpc",
    }),
  ],
  transformer: superjson,
});
