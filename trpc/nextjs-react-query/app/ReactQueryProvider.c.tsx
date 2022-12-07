"use client";
import { PropsWithChildren } from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

const queryClient = new QueryClient();

export function ReactQueryProvider(props: PropsWithChildren) {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
}
