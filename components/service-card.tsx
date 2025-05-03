import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  image: string
  link: string
  index?: number
  inView?: boolean
}

export default function ServiceCard({ title, description, image, link, index = 0, inView = true }: ServiceCardProps) {
  return (
    <div
      className={`service-card bg-white rounded-lg overflow-hidden shadow-sm border border-slate-100 transition-all hover:shadow-md hover:-translate-y-1 duration-500 ${
        inView ? "animate-fade-in-up" : "opacity-0 translate-y-8"
      }`}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="h-48 bg-slate-200">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={300}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        <Link href={link} className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
          <span>Learn More</span>
          <ChevronDown className="ml-1 rotate-[-90deg]" size={16} />
        </Link>
      </div>
    </div>
  )
}
