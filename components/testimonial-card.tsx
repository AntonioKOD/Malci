import Image from "next/image"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  content: string
  author: string
  source: string
  sourceIcon: string
  rating?: number
  index?: number
  inView?: boolean
}

export default function TestimonialCard({
  content,
  author,
  source,
  sourceIcon,
  rating = 5,
  index = 0,
  inView = true,
}: TestimonialCardProps) {
  return (
    <div
      className={`review-card bg-slate-50 rounded-lg p-6 shadow-sm border border-slate-100 transition-all duration-500 ${
        inView ? "animate-fade-in-up" : "opacity-0 translate-y-8"
      }`}
      style={{
        animationDelay: `${index * 150}ms`,
      }}
    >
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="text-amber-400 fill-amber-400" size={20} />
        ))}
      </div>
      <p className="text-slate-700 mb-4">{content}</p>
      <div className="flex items-center justify-between">
        <span className="font-medium text-slate-800">{author}</span>
        <div className="flex items-center">
          <Image src={sourceIcon || "/placeholder.svg"} alt={source} width={24} height={24} className="mr-1" />
          <span className="text-sm text-slate-600">{source}</span>
        </div>
      </div>
    </div>
  )
}
