import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  category: string
  image: string
  link: string
  index?: number
  inView?: boolean
}

export default function ProjectCard({ title, category, image, link, index = 0, inView = true }: ProjectCardProps) {
  return (
    <Link
      href={link}
      className={`group block relative overflow-hidden rounded-lg shadow-md ${
        inView ? "animate-fade-in-up" : "opacity-0 translate-y-8"
      }`}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="relative h-64 md:h-80">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-80"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <p className="text-sm font-medium text-teal-300 mb-1">{category}</p>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
    </Link>
  )
}
