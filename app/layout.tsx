import type React from "react"
import { Inter } from 'next/font/google'
import "./globals.css"
import ClientLayout from "./ClientLayout"
import UnifiedNavbar from "@/components/unified-navbar"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Malci Construction | Expert Contractors",
  description: "Premium paving and masonry services throughout Connecticut & New York with a focus on quality, durability, and customer satisfaction.",
  keywords: "construction, paving, masonry, Connecticut, New York",
  authors: [{ name: "Malci Construction" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Malci Construction | Expert Contractors",
    description: "Premium paving and masonry services throughout Connecticut & New York with a focus on quality, durability, and customer satisfaction.",
    url: "https://malciconstruction.com",
    siteName: "Malci Construction",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Malci Construction | Expert Contractors",
    description: "Premium paving and masonry services throughout Connecticut & New York with a focus on quality, durability, and customer satisfaction.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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