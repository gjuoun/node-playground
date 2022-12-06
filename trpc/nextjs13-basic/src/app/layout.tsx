import Link from "next/link";
import React from "react";
import { PropsWithChildren } from "react";
import { ClientProvider } from "../pages/config/trpc/trpc.react-query";

export default function RootLayout(props: PropsWithChildren) {
  return (
    <ClientProvider>
      <html lang="en">
        <head>
          <title>Next.js hello</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </head>
        <body>
          <main>{props.children}</main>
        </body>
      </html>
    </ClientProvider>
  );
}
