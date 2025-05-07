"use client"

import Head from "next/head"

interface MetaHeadProps {
  title: string
  description: string
  ogTitle?: string
  ogDescription?: string
  ogUrl?: string
  ogImage?: string
}

export default function MetaHead({
  title,
  description,
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage = "https://malciconstruction.com/og-image.jpg",
}: MetaHeadProps) {
  const fullTitle = title
    ? `${title} | Malci Construction`
    : "Malci Construction - Building Excellence, Foundation to Finish"

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl || "https://malciconstruction.com"} />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl || "https://malciconstruction.com"} />
      <meta property="twitter:title" content={ogTitle || fullTitle} />
      <meta property="twitter:description" content={ogDescription || description} />
      <meta property="twitter:image" content={ogImage} />
    </Head>
  )
}
