"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Image from "next/image"

interface HeroLogoProps {
  className?: string
  size?: "default" | "large" | "xlarge"
  animated?: boolean
}

/**
 * A special large logo component for hero sections
 */
export function HeroLogo({ className, size = "default", animated = true }: HeroLogoProps) {
  // Size mapping for hero sections
  const sizeClasses = {
    default: "w-40 h-40",
    large: "w-60 h-60",
    xlarge: "w-80 h-80",
  }

  const logoContent = (
    <div className={cn("relative", sizeClasses[size], className)}>
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MAlci-R8pvBNKEuBHXC6sGWNGhU0Iee8eegr.svg"
        alt="Stonecraft Logo"
        className="w-full h-full object-contain drop-shadow-lg filter dark:brightness-110"
        width={100}
        height={100}
      />
    </div>
  )

  // If animation is enabled, wrap with motion
  if (animated) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {logoContent}
      </motion.div>
    )
  }

  return logoContent
}
