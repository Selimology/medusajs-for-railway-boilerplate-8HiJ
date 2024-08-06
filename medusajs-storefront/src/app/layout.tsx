import { Metadata } from "next"
import "styles/styles.scss"
import { Lora } from "next/font/google"
import GlobalProvider from "../../GlobalProvider"
import React from "react"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

//font
const lora = Lora({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <GlobalProvider>
      <html lang="en" data-mode="light">
        <body className={lora.className}>
          <main className="relative">{props.children}</main>
        </body>
      </html>
    </GlobalProvider>
  )
}
