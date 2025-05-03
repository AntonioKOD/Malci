"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  linkClassName?: string
  withLink?: boolean
  href?: string
}

export function Logo({ size = "md", className, linkClassName, withLink = true, href = "/" }: LogoProps) {
  // Size mapping
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-16 h-16",
    xl: "w-20 h-20",
  }

  const logoElement = (
    <div className={cn("relative overflow-hidden", sizeClasses[size], className)}>
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MAlci-R8pvBNKEuBHXC6sGWNGhU0Iee8eegr.svg"
          alt="Malci Logo"
          className="w-full h-full object-contain transition-transform hover:scale-105 drop-shadow-md filter dark:brightness-110"
            width={100}
            height={100}
        />
      </div>
    </div>
  )

  if (withLink) {
    return (
      <Link href={href} className={cn("block", linkClassName)}>
        {logoElement}
      </Link>
    )
  }

  return logoElement
}
