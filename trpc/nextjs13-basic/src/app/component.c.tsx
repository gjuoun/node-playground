"use client";
import { trpcReactQuery } from "../config/trpc/trpc.react-query";
import { use, useEffect } from "react";
import { trpcClient } from "../config/trpc/trpc.client";

// const getGreeting = async () => {
//   const res = await trpcClient.hello.query({ text: "jun" });
//   return res;
// };

export const ClientComponent = () => {
  // const { data, mutate } = trpcReactQuery.login.useMutation({});
  // const data = use(getGreeting());

  const { data } = trpcReactQuery.hello.useQuery({ text: "guoguo" });

  // useEffect(() => {
  // mutate({});
  // }, []);

  // return <>This is {data?.greeting ?? "N/A"}</>;
  return <>nothing1234</>;
};
