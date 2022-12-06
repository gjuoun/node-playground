import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "./trpc.server";
import superjson from "superjson";

// Notice the <AppRouter> generic here.
export const trpcProxyClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/api/trpc",
    }),
  ],
  transformer: superjson,
});
