import Link from "next/link";
import React from "react";
import { PropsWithChildren } from "react";
import { ClientProvider } from "../config/trpc/trpc.react-query";
import { ReactQueryProvider } from "./ReactQueryProvider.c";
import { TrpcQueryProvider } from "./TrpcQueryProvider.c";

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <title>Next.js hello</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <ReactQueryProvider>{props.children}</ReactQueryProvider>
        {/* <ClientProvider>{props.children}</ClientProvider> */}
        {/* <TrpcQueryProvider>{props.children}</TrpcQueryProvider> */}
      </body>
    </html>
  );
}
