"use client";

import { ClientComponent } from "./component.c";
import { cookies, headers } from "next/headers";
import { getSessionRSC, trpcRSC } from "../config/trpc/trpc.rsc";
import { trpcReactQuery } from "../config/trpc/trpc.react-query";
import { useEffect } from "react";

const IndexPage = () => {
  const { data, mutate } = trpcReactQuery.login.useMutation({});

  useEffect(() => {
    console.log("client", data);
  }, [data]);

  return (
    <div>
      index
      <div>
        <ClientComponent />
      </div>
    </div>
  );
};

export default IndexPage;
