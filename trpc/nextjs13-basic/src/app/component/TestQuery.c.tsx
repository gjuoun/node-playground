"use client";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { trpcClient } from "../../config/trpc/trpc.client";
import { trpcReactQuery } from "../../config/trpc/trpc.react-query";

export const TestQuery = () => {
  // const res = useQuery(["hello"], () => fetch("/api/hello"));
  const res = useQuery(["hello"], () => {
    return trpcClient.hello.query({ text: "ho" });
  });

  useEffect(() => {
    console.log("client", res);
  }, [res]);

  return <div>back: {res.data?.greeting}</div>;
};

// export const TestQuery = () => {
//   // const res = useQuery(["hello"], () => fetch("/api/hello"));
//   const res =  trpcReactQuery.hello.useQuery({ text: "hoho" });

//   useEffect(() => {
//     console.log("client", res);
//   }, [res]);

//   return <div>back: {res.data?.greeting}</div>;
// };