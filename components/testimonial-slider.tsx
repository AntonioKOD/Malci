"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface Testimonial {
  id: number
  content: string
  author: string
  source: string
  sourceIcon: string
  rating: number
}

interface TestimonialSliderProps {
  testimonials: Testimonial[]
  autoplaySpeed?: number
}

export default function TestimonialSlider({ testimonials, autoplaySpeed = 5000 }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goToNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }, [testimonials.length])

  const goToPrev = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  useEffect(() => {
    if (!isPaused && autoplaySpeed > 0) {
      const interval = setInterval(goToNext, autoplaySpeed)
      return () => clearInterval(interval)
    }
    return undefined
  }, [goToNext, isPaused, autoplaySpeed])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-full">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.5 }}
            className="w-full"
          >
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="flex items-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-blue-400 fill-blue-400" size={20} />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-200 mb-6">{testimonials[currentIndex].content}</p>
              <div className="flex items-center justify-between">
                <span className="font-medium text-slate-800 dark:text-white">{testimonials[currentIndex].author}</span>
                <div className="flex items-center">
                  <Image
                    src={testimonials[currentIndex].sourceIcon || "/placeholder.svg"}
                    alt={testimonials[currentIndex].source}
                    width={24}
                    height={24}
                    className="mr-1"
                  />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonials[currentIndex].source}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-slate-700 rounded-full p-2 shadow-md hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors z-10"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={20} className="text-slate-600 dark:text-slate-200" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-slate-700 rounded-full p-2 shadow-md hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors z-10"
        aria-label="Next testimonial"
      >
        <ChevronRight size={20} className="text-slate-600 dark:text-slate-200" />
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-blue-600 dark:bg-blue-500 w-4" : "bg-slate-300 dark:bg-slate-600"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
