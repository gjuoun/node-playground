"use client";
import { trpcClient } from "../pages/config/trpc/trpc.client";
import { useEffect } from "react";

export const ClientComponent = () => {
  // const res = trpcClient.hello.useQuery({ text: "jun" });
  const { data, mutate } = trpcClient.login.useMutation({});

  useEffect(() => {
    mutate({});
  }, []);

  return <>This is {data?.email ?? "N/A"}</>;
  // return <>nothing</>;
};
