import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./ClientLayout"
import UnifiedNavbar from "@/components/unified-navbar"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Malci Construction | Expert Contractors</title>
        <meta
          name="description"
          content="Premium paving and masonry services throughout Connecticut & New York with a focus on quality, durability, and customer satisfaction."
        />
      </head>
      <body className={inter.className}>
        <ClientLayout>
          <UnifiedNavbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  )
}
