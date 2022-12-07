import { ReactQueryProvider } from "./ReactQueryProvider.c"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <ReactQueryProvider>

        {children}
        </ReactQueryProvider>
        </body>
    </html>
  )
}
