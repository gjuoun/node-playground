"use client";
import { trpcReactQuery } from "../config/trpc/trpc.react-query";
import { use, useEffect } from "react";
import { trpcClient } from "../config/trpc/trpc.client";

// const getGreeting = async () => {
//   const res = await trpcClient.hello.query({ text: "jun" });
//   return res;
// };

export const ClientComponent = () => {
  

  // return <>This is {data?.greeting ?? "N/A"}</>;
  return <div>client component</div>;
};
