import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  title: "KommaShop",
  description:
    "KommaShop is a modern e-commerce platform that offers a wide range of products.",
  metadataBase: new URL(getBaseURL()),

}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
