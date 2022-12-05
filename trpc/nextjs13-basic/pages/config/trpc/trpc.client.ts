import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "./trpc.server";

// Notice the <AppRouter> generic here.
export const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/trpc",
    }),
  ],
});
