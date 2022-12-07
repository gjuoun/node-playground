"use client";

import { loggerLink, httpBatchLink } from "@trpc/client";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpcReactQuery } from "../config/trpc/trpc.react-query";
import superjson from "superjson";

export function TrpcQueryProvider(props: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClientInstance] = useState(() =>
    trpcReactQuery.createClient({
      links: [
        loggerLink({
          enabled: () => true,
        }),
        httpBatchLink({
          url: `/api/trpc`,
        }),
      ],
      transformer: superjson,
    })
  );
  return (
    <trpcReactQuery.Provider
      client={trpcClientInstance}
      queryClient={queryClient}
    >
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </trpcReactQuery.Provider>
  );
}
